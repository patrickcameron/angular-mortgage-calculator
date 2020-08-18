import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  rateForm: FormGroup;
  monthlyPayment: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.rateForm = this.fb.group({
      amount: ['500000', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(5),
        Validators.maxLength(8)
      ] ],
      rate: ['5.00', [
        Validators.required,
        Validators.pattern('^[0-9\.]*$')
      ] ],
      years: ['25', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ] ]
    });

    console.log(this.rateForm);
  }

  onSubmit() {
    this.monthlyPayment = this.calculateMonthlyPayment( this.rateForm.value.amount, this.rateForm.value.rate );
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
