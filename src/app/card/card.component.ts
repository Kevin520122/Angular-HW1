import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { card } from '../interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() Card!: card;
  @Output() emitCardId = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  colorEffect(){
    this.emitCardId.emit(this.Card.id);
    
  }

}
