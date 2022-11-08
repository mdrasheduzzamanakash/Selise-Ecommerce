import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    return this.http.post<any>(
      'https://pacific-shore-31807.herokuapp.com/api/add-Product',
      data
    );
  }

  getProduct() {
    return this.http.get<any>('https://pacific-shore-31807.herokuapp.com/api/');
  }

  putProduct(data: any, id: number) {
    return this.http.put<any>(
      'https://pacific-shore-31807.herokuapp.com/api/update-Product/' + id,
      data
    );
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(
      'https://pacific-shore-31807.herokuapp.com/api/delete-Product/' + id
    );
  }
}
