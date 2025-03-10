import { Injectable } from '@angular/core';
declare var alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  // message(message: string,messageType: MessageType, position: Position, delay: number,dismissOthers:boolean = true){
    message(message: string,options : Partial<AlertifyOptions>){
  alertify.set('notifier', 'position', options.position);
    alertify.set('notifier','delay', options.delay);
    const msg = alertify[options.messageType](message); 
    if(options.dismissOthers)
      msg.dismissOthers();
    
  }
  
  dismiss(){
    alertify.dismissAll();
  }
}
export class AlertifyOptions{
  messageType: MessageType = MessageType.Message;
  position: Position = Position.BottomLeft;
  delay: number = 3;
  dismissOthers:boolean = false;
}

export enum MessageType{
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}

export enum Position{
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left",
  TopCenter = "top-center",
  BottomCenter = "bottom-center"
}
