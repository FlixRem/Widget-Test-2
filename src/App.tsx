import React from "react";
import FloatingAnkiWidget from "./widgets/floating_anki_widget"; // Floating Widget importieren

function App() {
  console.log("📌 Plugin gestartet!"); // Debugging: Zeigt an, dass das Plugin läuft

  return (
    <div>
      <h1>RemNote Anki Dashboard</h1>
      <FloatingAnkiWidget /> {/* Hier wird das Widget jetzt wirklich gerendert */}
    </div>
  );
}

export default App;
