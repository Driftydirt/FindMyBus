import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchResult } from '../../search-result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input()
  public result: SearchResult;
  @Input()
  public selectedRoute = false;

  @Output()
  public selected = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  public selectRoute(title: string) {
    this.selected.next();
  }
}
