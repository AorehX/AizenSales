import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { About } from './pages/about/about';




const routes: Routes = [
  {
    path: '',
    component: About,
    data: { title: 'About Us - Aizen Real Estate' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})


export class AboutRoutingModule { }
