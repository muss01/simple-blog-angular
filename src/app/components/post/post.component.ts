import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: any;
  private slug: string;
  constructor(private postservice: PostService, private activatedRoute: ActivatedRoute, private titleService: Title) { }

  ngOnInit(): void {
    this.slug = this.activatedRoute.snapshot.params.slug;
    this.setTitle(this.slug);
    this.getPost(this.slug);
  }

  getPost(slug: string){
    this.postservice.getOne(slug).subscribe((post: any) => {
      this.post = post.data;
    })
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
