import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from "@angular/router";


import { ContatoService } from '../service/contato.service';
import { MovimentacaoService } from '../service/movimentacao.service';

import { Message } from 'primeng/components/common/api';
import { ConfirmationService } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-inicio-movimentacao',
  templateUrl: './inicio-movimentacao.component.html',
  styleUrls: ['./inicio-movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {

  titulo = 'Movimentações';
  tituloPagina = 'ControleMe - PS';
  mensagens: Message[] = [];
  erro = '';
  movimentacoes = [];
  renda = 0;
  saldoAtual = 0;


  constructor(
    private movimentacaoService: MovimentacaoService,
    private contatoService: ContatoService,
    private roteador: Router,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.mensagens = [];
    this.movimentacaoService.recuperarTodos()
      .then(
      (movimentacoes) => {
        this.movimentacoes = movimentacoes;
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar carregar as movimentacoes' });
      });
  }

  adicionarMovimentacao(formulario: FormControl) {
    this.mensagens = [];
    console.log(formulario.value.valor)

    this.movimentacaoService.salvar(formulario.value)
      .then(
      () => {
        this.saldoAtual = this.saldoAtual + formulario.value.valor;
        console.log(this.saldoAtual)
        formulario.reset();
        this.carregar();
        this.mensagens.push({ severity: 'success', summary: 'Sucesso', detail: 'Movimentacao inserida' });
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar cadastrar a movimentacao' });
      }
      );
  }

  calcularSaldo() {
    this.saldoAtual = this.renda + this.saldoAtual;
  }

  remover(movimentacao) {
    this.confirmationService.confirm({
      message: 'Deseja realmente realizar o estorno desta movimentação?',
      header: 'Confirmação',
      icon: 'fa fa-trash',
      accept: () => {
        this.movimentacaoService.remover(movimentacao._id)
          .then(() => {
            if (this.saldoAtual != 0) {
              this.saldoAtual = this.saldoAtual - (movimentacao.valor);
            } else {
              console.log("SALDO INDISPONIVEL PARA ESTORNO")
            }
            this.carregar();
          },
          (erro) => {
            this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar remover a movimentacao' });
          });
      },
      reject: () => { }
    });
  }
}