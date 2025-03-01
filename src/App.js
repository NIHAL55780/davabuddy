import React, { useState } from "react";
import Welcome from "./welcome";
import Login from "./Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? <Login /> : <Welcome onGoogleSignIn={() => setShowLogin(true)} />}
    </div>
  );
}

export default App;
