import { Component, OnInit, ViewChild } from '@angular/core';
import { UidialogComponent } from './uidialog/uidialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angulardialog';
  isOpenPopup!: boolean;
  @ViewChild(UidialogComponent) dialogObj!: UidialogComponent;

  ngOnInit(): void {
    this.dialogObj =  new UidialogComponent();
    this.isOpenPopup = false;
  }

  openPopup() {        
    this.dialogObj.open();
  }

  popupClose(value: any): void {
    console.log('AppComponent:' + value);       
  }
}
