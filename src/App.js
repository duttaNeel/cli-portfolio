import React, { useState, useEffect } from "react";
import Terminal from "./components/Terminal";
import figlet from "figlet";

export default function App() {
  const [ascii, setAscii] = useState("");

  useEffect(() => {
    figlet.text("ARKAPARNA DUTTA", (err, data) => {
      if (err) {
        console.error("Figlet error:", err);
        return;
      }
      setAscii(data);
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#222", color: "#eee", padding: "20px", fontFamily: "monospace" }}>
      <pre>{ascii}</pre>
      <Terminal />
    </div>
  );
}
