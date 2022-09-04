import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerLogoUrl = "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
