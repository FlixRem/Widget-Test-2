import { usePlugin, renderWidget, useTracker } from "@remnote/plugin-sdk";

export const FloatingAnkiWidget = () => {
  const plugin = usePlugin();
  console.log("📌 Plugin gestartet!");  // Debugging: Sehen, ob das Widget geladen wird

  let newCards = useTracker(() => plugin.queue.getNumberOfNewCards(), []) || 0;
  let reviews = useTracker(() => plugin.queue.getNumberOfDueCards(), []) || 0;
  let totalCards = newCards + reviews;

  console.log("📊 Neue Karten:", newCards);
  console.log("🔄 Wiederholungen:", reviews);
  console.log("📌 Gesamt:", totalCards);

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

renderWidget(FloatingAnkiWidget);
