import { Component, OnInit } from '@angular/core';
import { ResultsComponent } from './results/results.component';
import { LocationsService } from './locations.service';
import { SearchResults } from './search-result.model';
import { Observable } from 'rxjs';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public fromLocation: string;
  public toLocation: string;
  public results$: Observable<SearchResults>;
  public invalid: boolean;
  public searched: boolean;
  constructor(private locationsService: LocationsService) { }

  ngOnInit() {
  }

  search() {
    if ((this.fromLocation === undefined || this.toLocation === undefined) || (this.fromLocation === '' || this.toLocation === '')) {
      this.invalid = true;
    } else {
      this.searched = true;
      this.invalid = false;
      this.results$ = this.locationsService.search(this.fromLocation, this.toLocation);
    }
  }
}
