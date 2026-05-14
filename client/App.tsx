import "./global.css";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Lakhotia Industrial Complex</h1>
      <p>Website is live and deployment is successful.</p>
      <p>Full version is being finalized.</p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
