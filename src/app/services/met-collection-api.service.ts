import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError, tap } from 'rxjs';
import { IArtObject } from '../interfaces/art-object';
import { IObjectList } from '../interfaces/object-list';
import { IDepartments } from '../interfaces/department';

@Injectable({
  providedIn: 'root'
})
export class MetCollectionApiService {
  private _metSite="https://collectionapi.metmuseum.org/public/collection/v1/"
  private _departmentOnlySearch="objects?departmentIds="
  private _individualObject="objects/"
  private _allObjects="objects"
  private _retrieveDepartments="departments"
  private _inDepthSearchGeneral="search?"
  private _inDepthSearchDept="departmentId="
  private _queryWithDept="&q="
  private _queryWithoutDept="q="

  constructor(private _http:HttpClient) { }

  getIndividualObject(objectId:number):Observable<IArtObject> {
    return this._http.get<IArtObject>(this._metSite + this._individualObject + objectId.toString())
    .pipe(
      tap(data => console.log('Debug object search:' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

  getDepartmentDefinition(departmentId:number):Observable<IObjectList> {
    return this._http.get<IObjectList>(this._metSite + this._departmentOnlySearch + departmentId)
    .pipe(
      tap(data => console.log('Debug department search:' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

  getDepartments():Observable<IDepartments> {
    return this._http.get<IDepartments>(this._metSite + this._retrieveDepartments)
    .pipe(
      tap(data => console.log('Debug departments:' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

  getSearchResults(departmentId:string,searchQ:string):Observable<IObjectList> {
    if(parseInt(departmentId) === 0 && searchQ.length !== 0) {
      return this._http.get<IObjectList>(this._metSite + this._inDepthSearchGeneral + this._queryWithoutDept + searchQ)
      .pipe(
        tap(data => console.log('Debug search results: ' + JSON.stringify(data))
      ),
      catchError(this.handleError)
      );
    } else if(parseInt(departmentId) !== 0 && searchQ.length !== 0) {
      return this._http.get<IObjectList>(this._metSite + this._inDepthSearchGeneral + this._inDepthSearchDept + departmentId + this._queryWithDept + searchQ)
      .pipe(
        tap(data => console.log('Debug search results2: ' + JSON.stringify(data))
      ),
      catchError(this.handleError)
      );
    } else if(parseInt(departmentId) !== 0 && searchQ.length === 0) {
      return this._http.get<IObjectList>(this._metSite + this._departmentOnlySearch + departmentId)
      .pipe(
        tap(data => console.log('Debug search results3: ' + JSON.stringify(data))
      ),
      catchError(this.handleError)
      );
    } else {
      return this._http.get<IObjectList>(this._metSite + this._allObjects)
      .pipe(
        tap(data => console.log('Debug search results4: ' + JSON.stringify(data))
      ),
      catchError(this.handleError)
      );
    }
  }

  private handleError(err:HttpErrorResponse) {
    console.log('Error fetching Met Collection:' + err.message);
    return throwError(() => new Error("Error fetching Met Collection:" + err.message))
  }
}
