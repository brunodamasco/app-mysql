import { ToastController } from '@ionic/angular';
import { Component, OnInit, Provider } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Post } from 'src/services/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = "";
  senha: string = "";

  constructor(private storage: NativeStorage, private router: Router, private provider: Post, public toast: ToastController) { }

  ngOnInit() {
  }

  async login() {
    if (this.usuario == "") {
      const toast = await this.toast.create({
        message: 'Preencha o campo Usuário',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }

    if (this.senha == "") {
      const toast = await this.toast.create({
        message: 'Preencha o campo Senha',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }

    let dados = {
      requisicao: 'login',
      usuario: this.usuario,
      senha: this.senha

    };

    this.provider.dadosApi(dados, 'api.php').subscribe(async data => {
      var alert = data['msg'];
      if (data['success']) {
        this.storage.setItem('session_storage', data['result']);
        this.router.navigate(['/folder']);
        const toast = await this.toast.create({
          message: 'Logado com Sucesso!',
          duration: 1000,
          color: 'success'
        });
        toast.present();
        this.usuario = "";
        this.senha = "";
        console.log(data);
      } else {
        const toast = await this.toast.create({
          message: alert,
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    });

  }


}
