import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { NumberGeneratorService } from './state/number-generator.service';
import * as Model from './state/number-generator.model';

@Component({
  selector: 'app-number-generator',
  templateUrl: './number-generator.component.html',
  styleUrls: ['./number-generator.component.scss']
})
export class NumberGeneratorComponent implements OnInit, OnDestroy {
  generator$: Subscription;
  tableSource$: Subscription;
  dataSource: Model.NumberList;
  cols: any[];

  constructor(
    private numberGeneratorService: NumberGeneratorService
  ) { }

  ngOnInit(): void {
    this.getList();

    this.cols = [
      { field: 'value', header: 'Number', type: 'number' },
      { field: 'created', header: 'Created Date', type: 'date' },
      { field: 'updated', header: 'Updated Date', type: 'date' },
      { field: 'generator_user', header: 'Generated By', type: 'string' }
    ];
  }

  getList() {
    this.tableSource$ = this.numberGeneratorService.getRandomNumbersList()
    .pipe(
      tap(res => this.dataSource = res)
    ).subscribe();

  }

  generateNumber() {
    this.generator$ = this.numberGeneratorService.generateRandomNumber()
      .pipe(
        tap(res => {
          if(res) this.getList();
        })
      ).subscribe();
  }

  ngOnDestroy(): void {
    if (this.generator$) {
      this.generator$.unsubscribe();
    }

    if (this.tableSource$) {
      this.tableSource$.unsubscribe();
    }
  }


}