import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa el módulo FormsModule
import { AppComponent } from './app.component';
import { CesarCipherComponent } from './cesar-cipher/cesar-cipher.component';

@NgModule({
  declarations: [
    AppComponent,
    CesarCipherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Agrega FormsModule en la sección de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }