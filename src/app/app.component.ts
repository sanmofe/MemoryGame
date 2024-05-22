import { Component } from '@angular/core';
import { Card } from './Card';
import cards from './cards.json';

export interface Tile {
  card: Card;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tiles: Tile[] = [];

  titulo: String = "Memory Game";

  texto: String = "Haz click en las cartas para encontrar las parejas, aquí saldrá información sobre la pareja que revelaste.";

  cardVolteada: Card | undefined; 

  ngOnInit() {
    let tomados: boolean[][] = [];
    for (let i = 0; i < 4; i++) {
      tomados.push([]);
      for (let j = 0; j < 4; j++) {
        tomados[i].push(false);
      }
    }

    cards.cards.forEach(element => {
      this.cardsTyped.push(element);
    });

    this.cardsTyped.forEach(element => {
      this.cardsTyped.push(Object.assign({}, element));
    });

    // Randomize the cardsTyped array
    for (let i = this.cardsTyped.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cardsTyped[i], this.cardsTyped[j]] = [this.cardsTyped[j], this.cardsTyped[i]];
    }

      console.log(this.cardsTyped);
  }

  title = 'MemoryGame';
  cardsTyped: Card[] = [];

  revealCard(card: Card) {

    if(card.revealed){
      return;
    }

    card.revealed = true;
    if(this.cardVolteada == undefined){
      this.cardVolteada = card;
      return;
    }
    if(this.cardVolteada.id == card.id){
      this.cardVolteada = undefined;
      this.texto = card.text;
      this.titulo = card.title;
      return;
    }

    

    setTimeout(() => {
      this.cardVolteada!.revealed = false;
      card.revealed = false;
      this.cardVolteada = undefined;
    }, 350);
    
  }
  

}
