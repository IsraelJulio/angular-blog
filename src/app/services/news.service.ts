import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { root } from '../Models/root';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiEndpoint = `https://servicodados.ibge.gov.br/api/v3/noticias/`;

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<root>(`${this.apiEndpoint}?busca=games&qtd=4`);
  }
}
