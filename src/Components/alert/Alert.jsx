import React from 'react';
import './alert.css'
import BootstrapAlert from 'react-bootstrap/Alert';

const Alert = ({ error, success }) => {
  return (
    <>
      {error && (
        <BootstrapAlert key="danger" variant="danger">
          Los datos son incorrectos!
        </BootstrapAlert>
      )}
       {success && (
        <BootstrapAlert key="success" variant="success">
       Los datos son correctos!
        </BootstrapAlert>
      )}
    </>
  );
};

export default Alert;