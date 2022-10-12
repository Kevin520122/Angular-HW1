import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { card } from '../interfaces/card.interface';
import { CardlistService } from '../services/cardlist.service';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit {

  cardList: card[] = []; 
  color?: string = ''
  @Output() emitColor = new EventEmitter();
  constructor(private readonly cardlistService: CardlistService) { }

  ngOnInit(): void {
    this.cardlistService.getCards().subscribe((cards) => {
      this.cardList = cards;
      console.log(this.cardList)

    })
  }
  colorEffect(id: string){
    //let head = document.getElementById('header');
    let target = this.cardList.find((card) => card.id === id);
    //header?.style.color = target?.buttonColor;
    this.cardList.forEach((card) => {
      if(card.id !== id){
        card.shadow = "";
        card.border = ""
      }else{
        card.shadow = `5px 5px 5px ${target?.buttonColor}`;
        card.border = `2px solid ${target?.buttonColor}`;
        this.color = target?.buttonColor
      }
    })
    
  }
}
