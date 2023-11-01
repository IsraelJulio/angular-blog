import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { noticia } from 'src/app/Models/noticia';
import { NewsService } from 'src/app/services/news.service';
import { root } from 'src/app/Models/root';
import { lastValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  news: noticia | null = null;
  private id: string | null = '0';
  allNews: root[] = [];
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
    let reports = await lastValueFrom(this.newsService.getNews());
    this.allNews = reports;
    console.log(this.allNews);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];

    this.contentTitle = 'this.allNews[0].items[0].titulo;';
    this.contentDescription = 'this.allNews[0].items[0].titulo';
    this.photoCover = 'this.allNews[0].items[0].titulo';
  }
}
