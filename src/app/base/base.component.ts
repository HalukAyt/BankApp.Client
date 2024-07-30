import { NgxSpinnerService } from 'ngx-spinner';
import { NgModule } from '@angular/core';

export class BaseComponent {
constructor(private spinner: NgxSpinnerService){ }

showSpinner(spinnerNameType: SpinnerType){
  this.spinner.show(spinnerNameType);
  
  setTimeout(() => this.hideSpinner(spinnerNameType), 1000);
 }
 hideSpinner(spinnerNameType: SpinnerType){
  this.spinner.hide(spinnerNameType);
 }
}

export enum SpinnerType{
  SquareLoader = "s1",
  BallScaleRippleMultiple = "s2"
}