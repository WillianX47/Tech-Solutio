import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../Model/Produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient, private router: Router) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getByFornecedor(fornecedor: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(
      `http://localhost:8080/produto/fornecedor/${fornecedor}`,
      this.token
    );
  }

  listarTodosProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(
      'http://localhost:8080/produto/all',
      this.token
    );
  }

  adicionarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(
      'http://localhost:8080/produto/add',
      produto,
      this.token
    );
  }

  deleteProduto(id: number){
    return this.http.delete(
      `http://localhost:8080/produto/delete/${id}`, this.token
    )
  }
}
