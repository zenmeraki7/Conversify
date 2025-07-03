import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Start expanded

  return (
    <div style={{ display: "flex" }}>
      <Sidebar 
        open={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />
      
      <main style={{
        flexGrow: 1,
        // Remove marginLeft since Sidebar is positioned fixed
        transition: 'all 0.3s',
        background: '#111827',
        minHeight: '100vh',
        padding: '20px',
      }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;