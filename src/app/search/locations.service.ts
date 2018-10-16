import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultComponent } from './results/result/result.component';
import { Observable, timer } from 'rxjs';
import { take, mapTo } from 'rxjs/operators';
import { SearchResults } from './search-result.model';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  public constructor(private readonly http: HttpClient) {}

  public search(
    fromLocation: string,
    toLocation: string
  ): Observable<SearchResults> {
    // const mockResults: SearchResults = {
    //   fromLocation,
    //   toLocation,
    //   results: [
    //     { title: 'Bus 1', directions: ['Step 1', 'Step 2'] },
    //     { title: 'Bus 2', directions: ['Step 1', 'Step 2'] },
    //     { title: 'Bus 3', directions: ['Step 1', 'Step 2'] }
    //   ]
    // };

    // Placeholder for real server implementation!
    // return timer(400)
    //   .pipe(
    //     take(1),
    //     mapTo(mockResults),
    //   );

    // Real implementation looks something like this:
    return this.http.get<SearchResults>(
      'http://localhost:3000/search-results',
      {
        params: { fromLocation, toLocation }
      }
    );
  }
}
