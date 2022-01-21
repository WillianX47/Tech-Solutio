import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.css']
})
export class ExplorarComponent implements OnInit {
  listaProduto: Produto[] = []

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(){
    this.listarTodosProdutos()
  }

  listarTodosProdutos(){
    this.produtoService.listarTodosProdutos().subscribe((resp => {
      this.listaProduto = resp
      console.log(this.listaProduto)
    }))
  }

}
