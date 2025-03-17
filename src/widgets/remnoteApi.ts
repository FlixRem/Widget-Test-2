import { usePlugin } from "@remnote/plugin-sdk";

export async function fetchAndStoreAnkiStats() {
  const plugin = usePlugin();

  try {
    const response = await fetch("https://api.remnote.io/v1/cards/queue", {
      method: "GET",
      headers: {
        "Authorization": "Bearer DEIN_REMNOTE_API_KEY",
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Fehler beim Abrufen der Kartenstatistik");
    }

    const data = await response.json();

    // Speichern der Werte in den Plugin-Settings
    await plugin.settings.setSetting("anki-new-cards", data.new_count || 0);
    await plugin.settings.setSetting("anki-reviews", data.review_count || 0);
    await plugin.settings.setSetting("anki-total-cards", data.total_count || 0);
  } catch (error) {
    console.error("API Fehler:", error);
  }
}
