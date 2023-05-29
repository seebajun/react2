import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Login from './Components/login/Login.jsx';
import Alert from './Components/alert/Alert.jsx';

function App() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <div className="App">
      <Login setError={setError} setSuccess={setSuccess} />
      {error && <Alert error={error} />}
      {success && <Alert success={success} />}
    </div>
  );
}

export default App;
