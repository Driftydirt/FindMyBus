import { Component, OnInit } from '@angular/core';
import { ResultsComponent } from './results/results.component';
import { LocationsService } from './locations.service';
import { SearchResults } from './search-result.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public fromLocation: string;
  public toLocation: string;
  public results$: Observable<SearchResults>;
  private searched: boolean;
  constructor(private locationsService: LocationsService) { }

  ngOnInit() {
  }

  search() {
    this.results$ = this.locationsService.search(this.fromLocation, this.toLocation);
  }
}
