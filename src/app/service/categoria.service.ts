import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private urlendpoint: string = 'http://localhost:8082/api/v1/categoria';
  private httpHeader: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) { }

  mostrarCategorias(): Observable<Categoria[]> {
    return this.http
      .get(this.urlendpoint)
      .pipe(map(response => response as Categoria[]));
  } 

  mostrarCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.urlendpoint}/${id}`);
  }

  crearCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.urlendpoint, categoria, { headers: this.httpHeader });
  }

  eliminarCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlendpoint}/${id}`, { headers: this.httpHeader });
  }

  actualizarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.urlendpoint}/${categoria.idCategoria}`, categoria, { headers: this.httpHeader });
  }
}