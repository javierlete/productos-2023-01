import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './listado/listado-datasource';

const URL = 'http://localhost:3000/productos/';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(URL);
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(URL + id);
  }
}
