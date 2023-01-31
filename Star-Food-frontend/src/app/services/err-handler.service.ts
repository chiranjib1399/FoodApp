import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";

@Injectable()
export class ErrorHandlerService {
  handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
