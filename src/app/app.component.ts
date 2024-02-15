import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'encryptor';
  codigoAscii:number = 0;
  mensaje:string = '';
  desplazamiento:number = 0;
  msjCifrado:string = '';

  constructor() {}

  cifrarCesar() {
    this.msjCifrado = '';
    for (let i = 0; i < this.mensaje.length; i++) {
        this.codigoAscii = this.mensaje.charCodeAt(i);
        let nuevoCodigoAscii = (this.codigoAscii + this.desplazamiento) % 256;
        this.msjCifrado += String.fromCharCode(nuevoCodigoAscii);
    }
}

 descifrarCesar() {
    this.mensaje = '';
    for (let i = 0; i < this.msjCifrado.length; i++) {
        let codigoAscii = this.msjCifrado.charCodeAt(i);
        let nuevoCodigoAscii = (codigoAscii - this.desplazamiento + 256) % 256;
        this.mensaje += String.fromCharCode(nuevoCodigoAscii);
    }
  }

  limpiar(){
    this.mensaje = '';
    this.desplazamiento = 0;
    this.msjCifrado = '';
    this.codigoAscii = 0;
  }
}


