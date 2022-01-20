import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Model/Usuario';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  cadastrar(){
    this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) => {
      alert("Usuario cadastrado!")
    })
  }

}
