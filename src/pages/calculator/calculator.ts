import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorPage {

  inputedVal = '';
  operatorList= ['+','-','*','/'];

  constructor(public navCtrl: NavController) {

  }

  digit(val) {
    this.inputedVal +=val;
  }

  inputClear(){
    this.inputedVal ='';
  }

  calOperator(operator){
    if(this.check() == true){
      return;
    }
    this.inputedVal +=operator;
  }

  calResult() {
    if(this.check() == true){
      return;
    }
    this.inputedVal = eval(this.inputedVal) + "";
  }

  check(){
    var splitArray = this.inputedVal.split("");
    var lastValue = splitArray[this.inputedVal.length-1];

    for (let s of this.operatorList) {
      if( lastValue == s)
        return true;
    }
  }
}
