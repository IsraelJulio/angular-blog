import { Component, Input, OnInit } from '@angular/core';
import { noticia } from 'src/app/Models/noticia';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input()
  report: noticia | null = null;

  constructor() {}

  ngOnInit(): void {}
}
