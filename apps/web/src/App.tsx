import { Suspense } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Typography } from "@repo/ui";

function App() {
  return (
    <Suspense fallback={<Typography variant="h1">Loading...</Typography>}>
      <main className={`min-h-screen min-w-[100vh]`}>
        <Outlet />
      </main>
    </Suspense>
  );
}

export default App;
