import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private titleService: Title, private search: SearchService, public router: Router) { 
  }

  ngOnInit(): void {
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  onSearchPost(query: string){
    this.search.sendPostQuery(query);
  }

}
