import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MovimentacaoComponent } from './inicio-movimentacao/inicio-movimentacao.component'; 

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
  { path: 'movimentacoes', component: MovimentacaoComponent },
  { path: 'movimentacoes/:id', component: MovimentacaoComponent },
  { path: '', redirectTo: '/movimentacoes', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
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
    ConfirmationService,
    MovimentacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
