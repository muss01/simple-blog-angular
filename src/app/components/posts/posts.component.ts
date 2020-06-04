import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { SearchService } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() rowsOfPosts: number;
  @Input() pagination: boolean = true;
  posts: any[];
  totalRecords: number;
  page: number = 1;

  subscription: Subscription; 
  query: string;
  
  constructor(private postservice: PostService, private search: SearchService) {
    this.subscription = this.search.getPostQuery().subscribe(query => {  
       
      this.query = query.text;  
      if (this.query) {         
        this.searchPost(this.query);         
      }  
    });  
   }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postservice.getAll(this.rowsOfPosts).subscribe((posts: any) => {
      this.posts = posts.data;
      this.totalRecords = posts.data.length;
    })
  }

  searchPost(query: string){
    this.postservice.searchPost(query).subscribe((posts: any) => {
      this.posts = posts.data;
    })
  }
}
