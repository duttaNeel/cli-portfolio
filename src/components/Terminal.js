// src/components/Terminal.js
import React, { useState, useEffect } from "react";
import Terminal from "react-terminal-ui";
import figlet from "figlet";
import commands from "./CommandsData";

export default function MyTerminal() {
  const [terminalLineData, setTerminalLineData] = useState([]);

  useEffect(() => {
    // Render ASCII banner like in screenshot
// Show 'type help to get started' as the very first line
    setTerminalLineData([
      { text: <span style={{ color: "#00ff00" }}><b>Type <span style={{color:'#fff'}}>help</span> to get started 🚀</b></span> },
    ]);
    figlet.text("ARKAPARNA DUTTA", { font: "Slant" }, (err, data) => {
      if (!err) {
        setTerminalLineData(prev => ([
          ...prev,
          { text: <pre style={{ color: "#00ff00", margin: 0 }}>{data}</pre> },
          { text: "Welcome to Arkaparna Dutta's CLI Portfolio!" },
        ]));
      }
    });
  }, []);

  // Add a line to the terminal, handling HTML string rendering
  const addLine = (content) => {
    if (typeof content === "string" && (content.startsWith("<") || content.includes("<a") || content.includes("<pre"))) {
      setTerminalLineData((prev) => [
        ...prev,
        { text: <span dangerouslySetInnerHTML={{ __html: content }} /> },
      ]);
    } else {
      setTerminalLineData((prev) => [...prev, { text: content }]);
    }
  };

  const handleInput = (input) => {
    if (!input.trim()) return;
    addLine(`$ ${input}`); // Show the typed command
    const [cmd, ...args] = input.trim().split(/\s+/);
    const command = cmd.toLowerCase();
    if (commands[command]) {
      const result = commands[command](args);
      if (command === "clear") {
        setTerminalLineData([]);
      } else if (result !== undefined && result !== null) {
        addLine(result);
      }
    } else {
      addLine(`Command not found: ${command}. Type 'help' to see available commands.`);
    }
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#000", position: 'relative' }}>
      <Terminal
        name="Arkaparna's CLI"
        colorMode="light"
        onInput={handleInput}
        height="100%"
      >
        {terminalLineData.map((line, index) => (
          <div key={index} style={{ color: "#fff", fontFamily: "monospace" }}>
            {line.text}
          </div>
        ))}
      </Terminal>
    </div>
  );
}
