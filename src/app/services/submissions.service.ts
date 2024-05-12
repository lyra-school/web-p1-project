import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError, tap } from 'rxjs';
import { ISubmission } from '../interfaces/submission';

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {
  private _express="http://localhost:5050/submissions";
  constructor(private _http:HttpClient) { }

  getSubmissions():Observable<any> {
    return this._http.get<ISubmission>(this._express)
    .pipe(
      tap(data => console.log('Debug submissions: ' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

  enterSubmission(submission:ISubmission):Observable<any> {
    return this._http.post<ISubmission>(this._express, submission)
    .pipe(
     tap(data => console.log('Debug entering a submission: ' + JSON.stringify(data))
     ),
     catchError(this.handleError)
     );
    }

  private handleError(err:HttpErrorResponse) {
    console.log('MongoDB Submission Store: ' + err.message);
    return err.message;
  }
}
