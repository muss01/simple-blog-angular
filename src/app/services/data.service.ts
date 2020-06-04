import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotFoundError } from '../shared/errors/notFoundError';
import { BadInput } from '../shared/errors/badInput';
import { AppError } from '../shared/errors/appError';

export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll(limit?: number){
    return this.http.get(this.url+limit).pipe(
      catchError(this.handlError)
    );
  }

  getOne(slug: string){
    return this.http.get(this.url+'show/'+slug).pipe(
      catchError(this.handlError)
    );
  }

  searchPost(slug: string){
    return this.http.get(this.url+'search/'+slug).pipe(
      catchError(this.handlError)
    );
  }

  private handlError(error: Response){
    if(error.status === 404){
      return throwError(new NotFoundError);
    }
    if(error.status === 400){
      return throwError(new BadInput);
    }
    return throwError(new AppError);
  }
}
