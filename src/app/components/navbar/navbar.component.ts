import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu: Menu[] = [];
  isNavActive: boolean = false;

  constructor(private _getData: MenuService ) { }

  ngOnInit(): void {
    this.menuCharge();
  }

  toggleNav(): void {
    this.isNavActive = !this.isNavActive;
  }

  closeNav(): void {
    this.isNavActive = false
  }

  active(i:number) {
    this.menu.forEach((item, index)=>{
      index===i
        ?item.active=true
        :item.active=false      
    })
  }

  menuCharge(){
    this._getData.getMenu().subscribe(data => {
      this.menu = data
    })
  }

}
