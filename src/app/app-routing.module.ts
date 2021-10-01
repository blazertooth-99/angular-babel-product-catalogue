import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutProductComponent } from './components/about-product/about-product.component';
import { AboutBooksComponent } from './components/about-books/about-books.component';

const routes: Routes = [
  { path: 'AboutProduct', component: AboutProductComponent},
  { path: 'AboutBooks', component: AboutBooksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };

export const RoutedComponents = [
  AboutProductComponent,
  AboutBooksComponent
]
