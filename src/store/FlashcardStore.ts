import { makeAutoObservable } from "mobx";

export interface Flashcard {
  id: number;
  front: string;
  back: string;
  flipped: boolean;
}

class FlashcardStore {
  flashcards: Flashcard[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addFlashcard(front: string, back: string) {
    this.flashcards.push({
      id: Date.now(),
      front,
      back,
      flipped: false
    });
    this.saveToLocalStorage();
  }

  deleteFlashcard(id: number) {
    this.flashcards = this.flashcards.filter(card => card.id !== id);
    this.saveToLocalStorage();
  }

  flipCard(id: number) {
    const card = this.flashcards.find(c => c.id === id);
    if (card) {
      card.flipped = !card.flipped;
    }
  }

  saveToLocalStorage() {
    localStorage.setItem("flashcards", JSON.stringify(this.flashcards));
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem("flashcards");
    if (data) {
      this.flashcards = JSON.parse(data);
    }
  }
}

export const flashcardStore = new FlashcardStore();
