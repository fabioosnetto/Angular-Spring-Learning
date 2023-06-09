import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirst2Component } from "./my-first2/my-first2.component";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
