import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewCategoryRequest } from '../../features/categories/interfaces/newCategoryRequest.interface';
import { Observable, catchError, throwError } from 'rxjs';
import { CategoryResponse } from '../../features/categories/interfaces/categoryResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'https://localhost:7082/api/Categories/';

  public getCategories(): Observable<CategoryResponse[]> {
    return this.http
      .get<CategoryResponse[]>(`${this.baseUrl}GetCategories`)
      .pipe(
        catchError((error) => {
          const errorMessage = error.error?.message || 'Unknown error occurred';
          return throwError(() => new Error(errorMessage));
        })
      );
  }

  public newCategory(category: NewCategoryRequest): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}`, category).pipe(
      catchError((error) => {
        const errorMessage = error.error?.message || 'Unknown error occurred';
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
