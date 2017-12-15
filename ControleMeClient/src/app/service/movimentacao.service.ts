import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Movimentacao } from '../movimentacao/movimentacao';

import { Observable } from "rxjs";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovimentacaoService {

  urlServicos = 'http://localhost:3000/movimentacoes';

  constructor(private http: HttpClient) { }

  recuperarTodos(): Promise<Movimentacao[]> {
    return this.http.get(this.urlServicos)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  recuperarTodosValores(): Promise<Movimentacao[]> {
    return this.http.get(this.urlServicos)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  recuperar(_id: any): Promise<Movimentacao> {
    return this.http.get(this.urlServicos + '/' + _id)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  salvar(movimentacao: Movimentacao): Promise<Movimentacao> {
    return this.http.post(this.urlServicos, movimentacao)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  remover(_id: any): Promise<void> {
    return this.http.delete(this.urlServicos + '/' + _id)
      .toPromise()
      .then(() => null)
      .catch(this.lidaComErro);
  }

  private lidaComErro(erro: any): Promise<any> {
    console.error('Ocorreu um erro', erro);
    return Promise.reject(erro.message || erro);
  }

}
