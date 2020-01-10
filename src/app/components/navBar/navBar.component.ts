import { Component, OnInit, Output, Input } from '@angular/core';

export class NavBarOptions {
  brand?: NavBarBrand;
  links?: NavBarLink[];
  search: boolean = false;
}

export class NavBarBrand {
  name: string;
  routerLink?: string[];
}

export class NavBarLink {
  text: string;
  routerLink: string[];
  active?: boolean;
  disabled?: boolean;
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
