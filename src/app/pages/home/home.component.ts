import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myForm: FormGroup;
  monthlypayment: number;

  constructor(private fb: FormBuilder) {
    window['myangular'] = this;
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      amount: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(5),
        Validators.maxLength(8)
      ]],
      rate: ''
    });
  }

  calculateMonthlyPayment(amount:number, rate:number, years: number = 25) {

    const monthlyRate = ( rate / 12 ) * 0.01;

    const numMonthlyPayments = years * 12;

    const raise = 1 - Math.pow( 1 + monthlyRate, ( numMonthlyPayments * -1 ) );

    const monthlyFraction = monthlyRate / raise;

    const monthlyPayment = (amount * monthlyFraction).toFixed(2);
    
    return monthlyPayment;

  }

}
