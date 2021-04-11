import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CounterComponent} from './counter/counter.component';
import {EmptyComponent} from './empty/empty.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'counter', component: CounterComponent},
  {path: 'empty', component: EmptyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
