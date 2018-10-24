import { Component, OnInit } from '@angular/core';
import { ResultsComponent } from './results/results.component';
import { LocationsService } from './locations.service';
import { SearchResults } from './search-result.model';
import { Observable } from 'rxjs';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public fromLocation: string;
  public fromLocationInactive: string;
  public toLocation: string;
  public toLocationInactive: string;
  public results$: Observable<SearchResults>;
  public invalid: boolean;
  public searched: boolean;
  constructor(private locationsService: LocationsService) {}

  ngOnInit() {}

  search() {
    if (
      this.fromLocationInactive === undefined ||
      this.toLocationInactive === undefined ||
      (this.fromLocationInactive === '' || this.toLocationInactive === '')
    ) {
      this.invalid = true;
    } else {
      this.fromLocation = this.fromLocationInactive;
      this.toLocation = this.toLocationInactive;
      this.searched = true;
      this.invalid = false;
      this.results$ = this.locationsService.search(
        this.fromLocation,
        this.toLocation
      );
    }
  }
}
