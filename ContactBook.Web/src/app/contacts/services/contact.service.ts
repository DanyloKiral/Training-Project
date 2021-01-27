import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { IContact }  from '../models/contact';
import { IContactDetail } from '../models/contact-detail';
import { Url } from "../../shared/models/url";

@Injectable()
export class ContactService {
  constructor(private http: HttpClient) {}

  public getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(Url.contactUrl).pipe
    (
      catchError(this.handleError)
    );
  }

  public getContact(id: number): Observable<IContactDetail> {
    let contactUrl = Url.contactUrl + `/${id}`;

    return this.http.get<IContactDetail>(contactUrl).pipe
    (
      catchError(this.handleError)
    );
  }

  public updateContact(contact: IContactDetail): Observable<IContactDetail> {

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = Url.contactUrl;

    return this.http.put<IContactDetail>(url, contact, {headers: headers}).pipe(
      tap(() => console.log(`Updated contact: ${contact}`)),
      map(() => contact),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if(err.error instanceof ErrorEvent)
    {
      errorMessage = `An error occurred: ${err.error.message}`;
    }
    else
    {
      errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
