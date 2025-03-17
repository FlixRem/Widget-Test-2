import { usePlugin, renderWidget, useTracker } from "@remnote/plugin-sdk";

export const AnkiDashboardWidget = () => {
  const plugin = usePlugin();
  console.log("📌 Plugin gestartet!");  // Debugging: Sehen, ob das Widget geladen wird

  let newCards = useTracker(() => plugin.queue.getNumberOfNewCards(), []) || 0;
  let reviews = useTracker(() => plugin.queue.getNumberOfDueCards(), []) || 0;
  let totalCards = newCards + reviews;

  console.log("📊 Neue Karten:", newCards);
  console.log("🔄 Wiederholungen:", reviews);
  console.log("📌 Gesamt:", totalCards);

  return (
    <div className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive">
      <h1 className="text-xl font-bold">Anki-Style Dashboard</h1>
      <div className="flex space-x-4">
        <div className="p-4 border rounded-lg text-center w-24">
          <h2 className="text-lg font-bold">Neue</h2>
          <p className="text-2xl">{newCards}</p>
        </div>
        <div className="p-4 border rounded-lg text-center w-24">
          <h2 className="text-lg font-bold">Wiederholungen</h2>
          <p className="text-2xl">{reviews}</p>
        </div>
        <div className="p-4 border rounded-lg text-center w-24">
          <h2 className="text-lg font-bold">Gesamt</h2>
          <p className="text-2xl">{totalCards}</p>
        </div>
      </div>
    </div>
  );
};

renderWidget(AnkiDashboardWidget);
