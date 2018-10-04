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
  public constructor(
    private readonly http: HttpClient,
  ) {}

  public search(fromLocation: string, toLocation: string): Observable<SearchResults> {
    const mockResults: SearchResults = {
      fromLocation,
      toLocation,
      results: [
        { directions: [] },
        { directions: [] },
        { directions: [] },
        { directions: [] },
        { directions: [] },
      ],
    };

    // Placeholder for real server implementation!
    return timer(400)
      .pipe(
        take(1),
        mapTo(mockResults),
      );

    // Real implementation looks something like this:
    // return this.http.get('https://myserver/myurl', { params: { fromLocation, toLocation }})
    //     .map((response) => response.json());
  }
}
