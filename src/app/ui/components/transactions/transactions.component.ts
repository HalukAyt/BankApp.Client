import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { CustomToastrService } from '../../../services/ui/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent extends BaseComponent implements OnInit{
  constructor(private toastrService: CustomToastrService, spinner: NgxSpinnerService){
    super(spinner);
  }
  
  ngOnInit(): void {
       this.showSpinner(SpinnerType.BallScaleRippleMultiple);   
    }
  }