import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: PostsComponent },
  { path: 'blog/:slug', component: PostComponent },
  { path: 'blog/search/:query', component: PostsComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
