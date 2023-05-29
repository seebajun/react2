import React, { useState } from 'react';
import './login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = ({ setError, setSuccess }) => {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [botonDesabitado, setBotonDesabilitado] = useState(true);

  const validarDatos = (event) => {
    event.preventDefault();
    if (usuario !== 'a@a.cl' || clave !== 'admin') {
      setError(true);
      setSuccess(false);
    } else {
      setError(false);
      setSuccess(true);
    }
  };

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
    setBotonDesabilitado(e.target.value === '' || clave === '');
  };

  const handleClaveChange = (e) => {
    setClave(e.target.value);
    setBotonDesabilitado(usuario === '' || e.target.value === '');
  };

  return (
    <div className="card">
      <Form onSubmit={validarDatos}>
        <Form.Control
          className="inputcss"
          placeholder="E-mail"
          onChange={handleUsuarioChange}
          value={usuario}
        />

        <Form.Control
          className="inputcss"
          placeholder="Password"
          type="password"
          onChange={handleClaveChange}
          value={clave}
        />

        <Button variant="secondary" type="submit" disabled={botonDesabitado}>
          Ingresar
        </Button>
      </Form>
    </div>
  );
};

export default Login;