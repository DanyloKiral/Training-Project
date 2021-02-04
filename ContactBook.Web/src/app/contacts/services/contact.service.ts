import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IContact }  from '../models/contact';
import { IContactDetail } from '../models/contact-detail';
import { Url } from "../../shared/models/url";

@Injectable()
export class ContactService {
  private contactListChangedSubject = new BehaviorSubject<any>(null);
  private contactSelectedSubject = new Subject<number | null>();

  public contactListChangedAction$ = this.contactListChangedSubject.asObservable();
  public contactSelectedAction$ = this.contactSelectedSubject.asObservable();

  constructor(private http: HttpClient) {}

  public getContacts(): Observable<IContact[]> {
    return this.http
      .get<IContact[]>(Url.contactUrl)
      .pipe(catchError(this.handleError));
  }

  public getContact(id: number): Observable<IContactDetail> {
    let contactUrl = Url.contactUrl + `/${id}`;

    return this.http
      .get<IContactDetail>(contactUrl)
      .pipe(catchError(this.handleError));
  }

  public updateContact(contact: IContactDetail): Observable<any> {
    const url = Url.contactUrl;

    return this.http.put(url, contact).pipe(catchError(this.handleError));
  }

  public createContact(contact: IContactDetail): Observable<number> {
    const url = Url.contactUrl;

    return this.http
      .post<number>(url, contact)
      .pipe(catchError(this.handleError));
  }

  public deleteContact(id: number): Observable<any> {
    const url = `${Url.contactUrl}/${id}`;

    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  public contactListChanged() {
    this.contactListChangedSubject.next(null);
  }

  public contactSelected(id: number | null) {
    this.contactSelectedSubject.next(id);
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
