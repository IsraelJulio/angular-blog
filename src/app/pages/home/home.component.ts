import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { lastValueFrom, Observable } from 'rxjs';
import { noticia } from 'src/app/Models/noticia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  reports: noticia[] = [];
  constructor(private newsService: NewsService) {}

  async ngOnInit(): Promise<void> {
    let reports = await lastValueFrom(this.newsService.getNews());
    console.log(reports);
    this.reports = reports.items;
  }
}
