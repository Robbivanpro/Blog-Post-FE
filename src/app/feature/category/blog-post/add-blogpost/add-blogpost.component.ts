import { Component } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../models/blog-post.models';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent {
  model:AddBlogPost;
  

  constructor(private http:HttpClient,private blogPostService: BlogPostService, private router: Router){
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content:'',
      featuredImageUrl:'',
      author:'',
      isVisible:true,
      publishedDate:new Date()

    }
  }

  onFormSubmit():void{

    this.blogPostService.createBlogPost(this.model)
    .subscribe({
      next: (response) =>{
        return this.http.post<BlogPost>("https://localhost:44374/api/blogposts", this.model);

      }
    })
  }
}
