import { Injectable } from '@angular/core';
import { environment } from "@environments/environment";
import { BaseService } from "@main/core/services/base.service";
import * as Model from "./number-generator.model";

@Injectable({
  providedIn: 'root'
})
export class NumberGeneratorService {

  randomIntegerUrl = `${environment.api_url}/randominteger`;

  constructor(
    private baseService: BaseService
  ) { }

  generateRandomNumber() {
    return this.baseService.get<Model.GeneratedNumber>(`${this.randomIntegerUrl}/generate/`);
  }

  getRandomNumbersList() {
    return this.baseService.get<Model.NumberList>(`${this.randomIntegerUrl}/?limit=20`);
  }
}
