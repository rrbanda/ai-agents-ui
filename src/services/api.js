
import { getConfig } from "../config";

export async function fetchAgentResponse() {
    const config = await getConfig();
    const API_URL = config.api.url || "http://localhost:8000/leopard-crossing-ui";

    try {
        const response = await fetch(API_URL);
        return response.json();
    } catch (error) {
        console.error("❌ API request failed:", error);
        return { error: "API request failed" };
    }
}
