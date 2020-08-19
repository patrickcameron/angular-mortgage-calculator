import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create the input fields', () => {
    const fields = fixture.debugElement.nativeElement;
    
    const amountInput = fields.querySelector('input[id="rf-amount"]');
    const rateInput = fields.querySelector('input[id="rf-rate"]');
    const yearsInput = fields.querySelector('input[id="rf-years"]');
    const submit = fields.querySelector('input[id="rf-submit"]');

    expect(amountInput).toBeTruthy();
    expect(rateInput).toBeTruthy();
    expect(yearsInput).toBeTruthy();
    expect(submit).toBeTruthy();
  });
});
