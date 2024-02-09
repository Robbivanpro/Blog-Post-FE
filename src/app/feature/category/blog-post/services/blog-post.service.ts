import { Injectable } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.models';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  

  constructor(private http:HttpClient) { }

  createBlogPost(model: AddBlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>("https://localhost:44374/api/blogposts", model)
      .pipe(
        catchError(error => {
          // Gestisci l'errore come preferisci
          return throwError(() => new Error('Qualcosa è andato storto'));
        })
      );
  }

  getAllBlogPosts():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>("https://localhost:44374/api/blogposts");
  }
}
