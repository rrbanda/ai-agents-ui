import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Page, PageSection, Title } from "@patternfly/react-core";
import AIResponse from "./components/AIResponse";  // ✅ Match the actual file name



function HomePage() {
  return (
    <Page>
      <PageSection>
        <Title headingLevel="h1" size="lg">
          AI Agents UI - Home
        </Title>
        <p>Welcome to the AI Agents UI. Click below to fetch agent responses.</p>
        <AgentResponse />
      </PageSection>
    </Page>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
