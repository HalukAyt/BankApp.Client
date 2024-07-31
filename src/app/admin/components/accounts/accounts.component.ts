import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent extends BaseComponent implements OnInit {
constructor(spinner: NgxSpinnerService){
  super(spinner);
}
  ngOnInit(): void {
     this.showSpinner(SpinnerType.SquareLoader);   
  }
  
      
   
}
