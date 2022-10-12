import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { card } from '../interfaces/card.interface';
import { cards } from '../mock-cards';

@Injectable({
  providedIn: 'root'
})
export class CardlistService {

  constructor() { }
  getCards(): Observable<card[]>{
    return of(cards)
  }
}
