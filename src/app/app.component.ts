import { Component } from '@angular/core';
import { Card } from './Card';
import cards from './cards.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  ngOnInit() {
    cards.cards.forEach(element => {
      this.cardsTyped.push(element);
    });
  }

  title = 'MemoryGame';
  cardsTyped: Card[] = [];

  revealCard(card: Card) {
    card.revealed = true;
  }

}
