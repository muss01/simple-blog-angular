import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private subject = new Subject<any>();  
  constructor() { }  
  
  sendPostQuery(query: string) {  
    this.subject.next({ text: query });  
  }  
  
  getPostQuery(): Observable<any> {  
    return this.subject.asObservable();  
  }
}
