import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/Model/Produto';
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

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/inicio']);
    }
    this.listarTodosProdutos()
  }

  adicionarProduto(){
    this.produtoService.adicionarProduto(this.produto).subscribe((resp => {
      this.produto = resp
      this.listarTodosProdutos()
      this.produto = new Produto()
      alert("Produto adicionado!")
    }))
  }

  listarTodosProdutos(){
    this.produtoService.listarTodosProdutos().subscribe((resp => {
      this.listaProduto = resp
    }))
  }

}
