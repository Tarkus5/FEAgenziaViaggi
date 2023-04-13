import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessoComponent } from './successo/successo.component';

const routes: Routes = [
   { path: 'success', component: SuccessoComponent},
   { path: '**', redirectTo: 'app-component' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
