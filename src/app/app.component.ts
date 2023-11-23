import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(target: EventTarget){
    const value = (<HTMLInputElement>target).value;
    const parsedValue = parseInt(value);
    console.log(parsedValue);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }

  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }


  onButtonClick(){
    const Numbers = '1234567890';
    const Letters = 'abcdefghijklmnopqrstuvxwyz';
    const Symbols = '!@#$%^&*()'
  }

}
