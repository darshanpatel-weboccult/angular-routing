import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  @Input() expand = '';
  @Output() expandChange = new EventEmitter<string>();

  constructor(private router:Router){
  }

  doNavigate(...path:string[]){
    this.router.navigate(path);  
    this.changeExpand('')  
  }

  changeExpand(value:string){
    this.expandChange.emit(value);
  }

}
