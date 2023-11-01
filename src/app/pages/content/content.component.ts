import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  private id: number | null = 0;
  allNews: root[] = [];
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  report: noticia | undefined;
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe(
      (value) => (this.id = parseInt(value.get('id') ?? '', 10))
    );
    let reports = await lastValueFrom(this.newsService.getNews());
    this.report = reports.items.find((x) => x.id == this.id);
    this.setValuesToComponent(this.report);
  }

  setValuesToComponent(item: noticia | undefined) {
    this.contentTitle = item?.titulo ?? '';
    this.contentDescription = item?.introducao ?? '';
    this.photoCover = item?.titulo ?? '';
  }
}
