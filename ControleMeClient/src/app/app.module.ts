import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ContatoCadastroComponent } from './contato-cadastro/contato-cadastro.component';
import { ContatoEdicaoComponent } from './contato-edicao/contato-edicao.component';
import { MovimentacaoComponent } from './inicio-movimentacao/inicio-movimentacao.component'; 

import { ContatoService } from './service/contato.service';
import { MovimentacaoService } from './service/movimentacao.service';

import { AccordionModule } from 'primeng/primeng';
import {SpinnerModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';

import {
  ButtonModule,
  InputTextModule,
  InputMaskModule,
  DataTableModule,
  MessagesModule,
  ConfirmDialogModule,
  ConfirmationService
} from 'primeng/primeng';
import { NavbarComponent } from './navbar/navbar.component';


const rotas: Routes = [
  { path: 'contato', component: ContatoCadastroComponent },
  { path: 'contato/:id', component: ContatoEdicaoComponent },
  { path: 'movimentacoes', component: MovimentacaoComponent },
  { path: 'movimentacoes/:id', component: MovimentacaoComponent },
  { path: '', redirectTo: '/movimentacoes', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ContatoCadastroComponent,
    ContatoEdicaoComponent,
    NavbarComponent,
    MovimentacaoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    DataTableModule,
    MessagesModule,
    HttpClientModule,
    ConfirmDialogModule,
    AccordionModule,
    SpinnerModule,
    GrowlModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    ContatoService,
    ConfirmationService,
    MovimentacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
