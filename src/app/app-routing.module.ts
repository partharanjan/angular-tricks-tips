import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlToPdfComponent } from './html-to-pdf/html-to-pdf.component';

const routes: Routes = [
  {
    path:'html-to-pdf',
    component:HtmlToPdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
