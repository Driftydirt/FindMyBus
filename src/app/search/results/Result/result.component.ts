import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() public directions: string[];
  @Input() public title: string;
  public selectedRouteTitle: string;
  constructor() {
   }

  ngOnInit() {
  }

  public selectRoute(title: string) {
    this.selectedRouteTitle = title;
  }

  public selectionChecker(title: string) {
    if(title === this.selectedRouteTitle) {
      return true;
    } else {
      return false;
    }
  }

}
