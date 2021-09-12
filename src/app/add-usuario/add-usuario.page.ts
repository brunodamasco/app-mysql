import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {


  nome: string = "";
  usuario: string = "";
  senha: string = "";
  nivel: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  usuarios() {
    this.router.navigate(['/usuarios']);
  }

}
