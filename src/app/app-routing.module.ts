import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuretreeComponent } from './components/suretree/suretree.component';

const routes: Routes = [
  {
    path: 'suretree',
    component: SuretreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
