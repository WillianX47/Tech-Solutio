import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nome: string = environment.nome

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    environment.id = 0;
    environment.nome = '';
    environment.senha = '';
    environment.token = '';
    environment.usuario = '';
    this.router.navigate(['/inicio']);
  }

}
