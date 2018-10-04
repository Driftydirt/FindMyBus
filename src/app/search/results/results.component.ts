import { Component, OnInit, Input } from '@angular/core';
import { SearchComponent } from '../search.component';
import { LocationsService } from '../locations.service';
import { ResultComponent } from './Result/result.component';
import { SearchResult, SearchResults } from '../search-result.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() public searchResults: SearchResults;

  ngOnInit() {
  }

}
