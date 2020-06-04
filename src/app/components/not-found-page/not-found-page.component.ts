import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Page not found");
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
