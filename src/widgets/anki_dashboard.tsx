import { usePlugin, renderWidget, useTracker } from "@remnote/plugin-sdk";

export const AnkiDashboardWidget = () => {
  const plugin = usePlugin();

  // Wir simulieren die Kartenstatistiken als Plugin-Settings
  let newCards = useTracker(() => plugin.settings.getSetting<number>("anki-new-cards")) || 0;
  let reviews = useTracker(() => plugin.settings.getSetting<number>("anki-reviews")) || 0;
  let totalCards = useTracker(() => plugin.settings.getSetting<number>("anki-total-cards")) || 0;

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

// Widget registrieren
renderWidget(AnkiDashboardWidget);
