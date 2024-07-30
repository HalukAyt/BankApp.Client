import { Component , OnInit } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition, ToastrTimeout } from '../../../services/ui/custom-toastr.service';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent extends BaseComponent implements OnInit {
constructor(private toastrService: CustomToastrService, spinner: NgxSpinnerService){
  super(spinner);
}

ngOnInit(): void {
     this.showSpinner(SpinnerType.BallScaleRippleMultiple);   
  }
  

s(){
  this.toastrService.message("merhaba","Haluk", {
    messageType: ToastrMessageType.Success,
    position: ToastrPosition.TopCenter,
    timeout: ToastrTimeout.SHORT
  });

}

}
