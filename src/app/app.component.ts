import { Component } from '@angular/core';
import { NavBarOptions, NavBarBrand } from './components/navBar/navBar.component';

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
  }
}
