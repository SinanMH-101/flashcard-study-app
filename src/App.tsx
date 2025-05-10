import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { flashcardStore } from "./store/FlashcardStore";
import { FlashcardList } from "./components/FlashcardList";
import { AddFlashcard } from "./components/AddFlashcard";

const App = observer(() => {
  useEffect(() => {
    flashcardStore.loadFromLocalStorage();
  }, []);

  return (
    <div className="app">
      <h1>Flashcard Study App</h1>
      <AddFlashcard />
      <FlashcardList />
    </div>
  );
});

export default App;
