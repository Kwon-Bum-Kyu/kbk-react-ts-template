import { Suspense } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Typography } from "@/components/common/index.ts";

function App() {
  return (
    <Suspense fallback={<Typography variant="h1">Loading...</Typography>}>
      <main className="container">
        <Outlet />
      </main>
    </Suspense>
  );
}

export default App;
