import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  AddCategoryRequest } from '../models/add-category-request,model';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment';
import { UpdateCategoryRequest } from '../models/edit-category.component';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model: AddCategoryRequest):Observable<void>{
    return this.http.post<void>("https://localhost:44374/api/categories",model)
  }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>("https://localhost:44374/api/Categories").pipe(
      catchError(error => {
        console.error('Error fetching categories:', error);
        return throwError(() => error);
      })
    );
  }

  getCategoryByID(id: string): Observable<Category> {
    return this.http.get<Category>(`https://localhost:44374/api/categories/${id}`);
}

updateCategoryRequest(id:string, updateCategoryRequest:UpdateCategoryRequest):Observable<Category>{
  return this.http.put<Category>(`https://localhost:44374/api/categories/${id}`, updateCategoryRequest);
}

deleteCategory(id:string):Observable<Category>{
  return this.http.delete<Category>(`https://localhost:44374/api/categories/${id}`);
}

}
