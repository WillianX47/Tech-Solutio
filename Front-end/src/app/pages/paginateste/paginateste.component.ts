import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/Model/Produto';
import { Usuario } from 'src/app/Model/Usuario';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-paginateste',
  templateUrl: './paginateste.component.html',
  styleUrls: ['./paginateste.component.css']
})
export class PaginatesteComponent implements OnInit {
  listaProduto: Produto[] = []
  produto: Produto = new Produto()
  usuario: Usuario = new Usuario()
  fornecedor: string = ''
  id: number = environment.id

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit() {
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
    this.usuario.id = environment.id
    this.produto.imagem = ''
    this.produto.usuario = this.usuario
    console.log(this.produto)
    this.produtoService.adicionarProduto(this.produto).subscribe((resp => {
      this.produto = resp
      this.listarTodosProdutos()
      this.produto = new Produto()
      alert("Produto adicionado!")
    }))
  }

}
