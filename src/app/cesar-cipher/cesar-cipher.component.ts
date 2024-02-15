import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cesar-cipher',
  templateUrl: './cesar-cipher.component.html',
  styleUrls: ['./cesar-cipher.component.css']
})
export class CesarCipherComponent {
  inputText: string = '';
  encrypt: boolean = true;
  module: string = 'shift1';
  outputText: string = '';
  asciiValues: number[] = [];
  asciiCharacters: string[] = [];

  constructor() {
    // Llenar el arreglo con los valores ASCII del 32 al 126 (caracteres imprimibles comunes)
    for (let i = 0; i <= 255; i++) {
      this.asciiValues.push(i);
      this.asciiCharacters.push(String.fromCharCode(i));
    }
  }

  encryptDecrypt() {
    let shift = 0;
    switch (this.module) {
      case 'shift1':
        shift = 1;
        break;
      case 'shift2':
        shift = 2;
        break;
      case 'shift3':
        shift = 3;
        break;
    }
    if (this.encrypt) {
      this.outputText = this.encryptText(this.inputText, shift);
    } else {
      this.outputText = this.decryptText(this.inputText, shift);
    }
  }

  encryptText(text: string, shift: number): string {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        charCode = ((charCode - 65 + shift) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        charCode = ((charCode - 97 + shift) % 26) + 97;
      }
      encryptedText += String.fromCharCode(charCode);
    }
    return encryptedText;
  }

  decryptText(text: string, shift: number): string {
    return this.encryptText(text, -shift);
  }

  onDragOver(event: DragEvent) {
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'copy';
      event.preventDefault();
    }
  }
  
  onDrop(event: DragEvent) {
    if (event.dataTransfer) {
      event.preventDefault();
      const files = event.dataTransfer.files;
      if (files && files.length > 0) {
        this.readFile(files[0]);
      }
    }
  }
  

  readFile(file: File) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const text = event.target.result;
      this.inputText = text;
      this.encryptDecrypt();
    };
    reader.onerror = () => {
      console.error('Error al leer el archivo');
    };
    reader.readAsText(file);
  }
}