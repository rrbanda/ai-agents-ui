import yaml from "js-yaml";

let config = {};

async function loadConfig() {
    try {
        const response = await fetch("/config.yaml");
        const text = await response.text();
        config = yaml.load(text);
    } catch (error) {
        console.error("❌ Failed to load config.yaml", error);
    }
}

export async function getConfig() {
    if (Object.keys(config).length === 0) {
        await loadConfig();
    }
    return config;
}
