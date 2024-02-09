import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CategoryListComponent } from './feature/category/category-list/category-list.component';
import { AddCategoryComponent } from './feature/category/category-list/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditCategoryComponent } from './feature/category/category-list/edit-category/edit-category.component';
import { BlogpostListComponent } from './feature/category/blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './feature/category/blog-post/add-blogpost/add-blogpost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    BlogpostListComponent,
    AddBlogpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
