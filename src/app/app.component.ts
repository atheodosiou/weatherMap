import { Component } from '@angular/core';
import { NavBarOptions, NavBarBrand, NavBarLink } from './components/navBar/navBar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navBarOptions: NavBarOptions;
  constructor() {
    this.navBarOptions = new NavBarOptions();
    this.navBarOptions.brand = new NavBarBrand();
    this.navBarOptions.brand.name = 'Weather Map';
    this.navBarOptions.brand.routerLink = ['/map'];
    this.navBarOptions.search = true;
    this.navBarOptions.links = new Array<NavBarLink>();
    this.navBarOptions.links = [
      { text: 'Link 1', routerLink: ['/link1'] },
      { text: 'Link 2', routerLink: ['/link2'] },
      { text: 'Link 2', routerLink: ['/link3'], disabled: true },
    ]
  }
}
