import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  numberRowsOfPosts: number = 3;
  title: string = "CoolBlog";

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.setTitle("CoolBlog");
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

}
