import React from "react";
import QRCode from "qrcode.react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>
            Example of TOTP{" "}
            <span role="img" aria-label="fire">
              🔥
            </span>
          </code>
        </p>
        <div>
          <QRCode
            className="App-logo"
            renderAs="svg"
            size={512}
            level="H"
            includeMargin={true}
            value="test"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
