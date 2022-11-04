import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ChartModule} from 'primeng/chart';

const exportedModules = [
  ButtonModule,
  TableModule,
  DialogModule,
  ChartModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...exportedModules
  ],
  exports: [
    ...exportedModules
  ]
})
export class SharedModule { }
