import React, { useState, useEffect } from "react";
import axios from "axios";
import yaml from "js-yaml";
import JsonTable from "./JsonTable";

const AgentResponse = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [config, setConfig] = useState(null);

  // Load API config from `config.yaml`
  useEffect(() => {
    fetch("/config.yaml")
      .then((res) => res.text())
      .then((yamlText) => {
        const parsedConfig = yaml.load(yamlText);
        setConfig(parsedConfig.api);
      })
      .catch(() => setError("Failed to load config"));
  }, []);

  // Fetch AI agent response **only after config is loaded**
  useEffect(() => {
    if (config) {
      axios
        .get(`${config.base_url}/leopard-crossing-ui`)
        .then((res) => setResponse(res.data))
        .catch(() => setError("Error fetching AI agent response"));
    }
  }, [config]); // ✅ Runs only when `config` is updated

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>AI Agent Response</h2>
      {response ? <JsonTable data={response} /> : <p>Loading response...</p>}
    </div>
  );
};

export default AgentResponse;
