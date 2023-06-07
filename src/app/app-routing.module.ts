import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: 'create',
    component: FormComponent
  },
  {
    path: 'edit/:id',
    component: FormComponent
  },
  {
    path: '**',
    redirectTo: 'create'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
