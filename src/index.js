import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilos/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App propiedadesFiltroHuespedes={10} />
    </React.StrictMode>
);

export default root;
