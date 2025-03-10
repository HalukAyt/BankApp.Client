import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../../services/admin/alertify.service';  
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent extends BaseComponent implements OnInit {
  constructor(private alertify:AlertifyService,spinner:NgxSpinnerService){
    super(spinner);
  }
  
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleRippleMultiple);  
}
m(){
  this.alertify.message("Merhaba",{
    messageType: MessageType.Success,
    delay: 5,
    position: Position.BottomLeft

  })
}
d(){
  this.alertify.dismiss()
}
}