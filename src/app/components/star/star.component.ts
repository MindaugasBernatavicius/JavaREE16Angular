import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating = 0;
  starWidth = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    // console.log(this.rating);
    this.starWidth = this.rating * 75 / 5;
  }
}
