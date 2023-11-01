import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { root } from '../Models/root';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiEndpoint = `https://servicodados.ibge.gov.br/api/v3/noticias/?busca=ciencia&qtd=5`;

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<root[]>(`${this.apiEndpoint}`);
  }
  getNewsById(id: number) {}
}
