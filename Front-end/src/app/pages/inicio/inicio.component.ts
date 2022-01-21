import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/Model/UserLogin';
import { Usuario } from 'src/app/Model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();
  usuario: Usuario = new Usuario();

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  cadastrar() {
    this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = new Usuario();
      alert('Usuario cadastrado!');
    }, (erro) => {
        alert("Usuário já cadastrado no sistema, faça login!")
      }
    );
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe(
      (resp: UserLogin) => {
        console.log(resp);
        environment.token = resp.token;
        environment.usuario = resp.usuario;
        environment.nome = resp.nome;
        this.router.navigate(['/explorar']);
        alert('Logado!');
      },
      (erro) => {
        if (erro.status == 400) {
          alert('Usuario ou senha invalidos');
        }
      }
    );
  }
}
