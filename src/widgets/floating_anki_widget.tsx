import { usePlugin, renderWidget, useTracker } from "@remnote/plugin-sdk";

export const FloatingAnkiWidget = () => {
  const plugin = usePlugin();

  // Holen der aktuellen Kartenstatistiken aus der Lernqueue
  let newCards = useTracker(() => plugin.queue.getNumberOfNewCards(), []) || 0;
  let reviews = useTracker(() => plugin.queue.getNumberOfDueCards(), []) || 0;
  let totalCards = newCards + reviews;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        padding: "10px",
        borderRadius: "10px",
        zIndex: 9999,
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      📊 <strong>Neue:</strong> {newCards} | 🔄 <strong>Wiederholungen:</strong> {reviews} | 📌 <strong>Gesamt:</strong> {totalCards}
    </div>
  );
};

// Widget in RemNote registrieren
renderWidget(FloatingAnkiWidget);
