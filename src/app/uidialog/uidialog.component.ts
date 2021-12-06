import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-uidialog',
  templateUrl: './uidialog.component.html',
  styleUrls: ['./uidialog.component.css']
})
export class UidialogComponent implements OnInit {
  @Input() isOpen!: boolean;
  @Output() public closeAction = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.isOpen = false;
  }  

  public close(status: any) {   
    this.closeAction.emit(status);    
    this.isOpen = false;
  }

  public open() {    
    this.isOpen = true;
  }
}
