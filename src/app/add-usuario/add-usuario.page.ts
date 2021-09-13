import { Post } from './../../services/post';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  id: string = ""
  nome: string = ""
  usuario: string = ""
  senha: string = ""
  nivel: string = ""

  constructor(private router: Router, private provider: Post, public toastController: ToastController) { }

  ngOnInit() {
  }

  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com sucesso!',
      duration: 1000
    });
    toast.present();
  }

  usuarios() {
    this.router.navigate(['/usuarios'])
  }

  cadastrar() {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'add',
        nome: this.nome,
        usuario: this.usuario,
        senha: this.senha,
        nivel: this.nivel,
      };

      this.provider.dadosApi(dados, 'api.php').subscribe(data => {
        this.router.navigate(['/usuarios']);
        this.mensagemSalvar();
      })
    });
  }


  editar() {

  }

}
