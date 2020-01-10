import { Component, OnInit, Output, Input } from '@angular/core';

export class NavBarOptions {
  brand?: NavBarBrand;
  links?: any[];
}

export class NavBarBrand {
  name: string;
  routerLink?: string[];
}
@Component({
  selector: 'nav-bar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() options: NavBarOptions;

  constructor() { }

  ngOnInit() {
  }

}
