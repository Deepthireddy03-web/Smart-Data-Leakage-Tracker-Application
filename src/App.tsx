import React, { useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginForm from "./components/Login/LoginForm";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import Dashboard from "./pages/Dashboard";
import Files from "./pages/Files";
import Logs from "./pages/Logs";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";
import LogsTable from "./components/Logs/LogsTable";

const tabTitles = {
  dashboard: "Dashboard",
  files: "File Monitoring",
  logs: "Data Logs",
  alerts: "Security Alerts",
  settings: "Settings",
};

function MainApp() {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState("dashboard");

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "files":
        return <Files />;
      case "logs":
        return <LogsTable />;
      case "alerts":
        return <Alerts />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={tabTitles[activeTab as keyof typeof tabTitles]} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

export default App;
