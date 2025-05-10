import { useState } from "react";
import { flashcardStore } from "../store/FlashcardStore";

export function AddFlashcard() {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!front.trim() || !back.trim()) return;
    flashcardStore.addFlashcard(front.trim(), back.trim());
    setFront("");
    setBack("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        placeholder="Front"
        value={front}
        onChange={(e) => setFront(e.target.value)}
      />
      <input
        type="text"
        placeholder="Back"
        value={back}
        onChange={(e) => setBack(e.target.value)}
      />
      <button type="submit">Add Card</button>
    </form>
  );
}
