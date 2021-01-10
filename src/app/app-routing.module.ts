import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Site1Component} from '../app/site1/site1.component';
import {Site2Component} from '../app/site2/site2.component';
import {Site4Component} from '../app/site4/site4.component';
import {Site3Component} from '../app/site3/site3.component';
import {Site5Component} from '../app/site5/site5.component';

const routes: Routes = [
{path: 'site1', component: Site1Component },
{path: 'site2', component: Site2Component },
{path: 'site4', component: Site4Component },
{path: 'site3', component: Site3Component },
{path: 'site5', component: Site5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
