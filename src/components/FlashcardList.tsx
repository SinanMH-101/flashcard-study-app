import { observer } from "mobx-react-lite";
import { flashcardStore } from "../store/FlashcardStore";

export const FlashcardList = observer(() => {
  return (
    <div className="card-list">
      {flashcardStore.flashcards.map((card) => (
        <div
          key={card.id}
          className={`flashcard ${card.flipped ? "flipped" : ""}`}
          onClick={() => flashcardStore.flipCard(card.id)}
        >
          <div className="card-content">{card.front}</div>
          <div className="card-content">{card.back}</div>
          <button
            className="delete"
            onClick={(e) => {
              e.stopPropagation();
              flashcardStore.deleteFlashcard(card.id);
            }}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
});
