import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberGeneratorComponent } from './number-generator.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app-shared/shared.module';

const routes: Routes = [
  { path: '', component: NumberGeneratorComponent }
]

@NgModule({
  declarations: [
    NumberGeneratorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class NumberGeneratorModule { }
