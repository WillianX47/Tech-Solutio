import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/Model/Produto';
import { Usuario } from 'src/app/Model/Usuario';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.css']
})
export class ExplorarComponent implements OnInit {
  listaProduto: Produto[] = []
  produto: Produto = new Produto()
  usuario: Usuario = new Usuario()
  fornecedor: string = ''
  id: number = environment.id

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/inicio']);
    }
    this.listarTodosProdutos()
  }

  getByFornecedor(){
    if(this.fornecedor == ''){
      this.listarTodosProdutos()
    } else {
      this.produtoService.getByFornecedor(this.fornecedor).subscribe((resp: Produto[]) => {
        this.listaProduto = resp
        console.log(this.listaProduto)
      })
    }
  }

  listarTodosProdutos(){
    this.produtoService.listarTodosProdutos().subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
  }

  adicionarProduto(){
    console.log(environment.id)
    this.usuario.id = environment.id
    this.produto.usuario = this.usuario
    this.produtoService.adicionarProduto(this.produto).subscribe((resp => {
      this.produto = resp
      this.listarTodosProdutos()
      this.produto = new Produto()
      alert("Produto adicionado!")
    }))
  }

}
