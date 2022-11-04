import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'generate',
    loadChildren: () => import('./number-generator/number-generator.module').then(m => m.NumberGeneratorModule)
  },
  {
    path: '', redirectTo: 'generate', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
