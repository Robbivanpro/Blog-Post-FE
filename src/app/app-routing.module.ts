import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './feature/category/category-list/category-list.component';
import { AddCategoryComponent } from './feature/category/category-list/add-category/add-category.component';
import { EditCategoryComponent } from './feature/category/category-list/edit-category/edit-category.component';
import { BlogpostListComponent } from './feature/category/blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './feature/category/blog-post/add-blogpost/add-blogpost.component';

const routes: Routes = [
  {
    path: 'admin/categories',
    component: CategoryListComponent,
  },
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent
  },
  {
    path:'admin/categories/:id',
    component:EditCategoryComponent
  },
  {
    path: 'admin/blogposts',
    component:BlogpostListComponent
  },
  {
    path:'admin/blogpost/add',
    component:AddBlogpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
