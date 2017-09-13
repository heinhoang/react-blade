import React from 'react';
import ReactDOM from 'react-dom';

import 'react-quill/dist/quill.snow.css';
import 'react-select/dist/react-select.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const localeData = {
    en: {
        "username or email": "username or email",
        "password": "password",
    },
    fr: {
        "Tooltip.fees": "Cliquez ici pour comprendre comment nous calculons les frais.",
        "SubHeader.unreadCount": 'Tu as {unreadCount} Nouveau {notifications}',
        "msg.welcome": 'Bonjour {name}, tu as {unreadCount, number} {unreadCount, plural, one {la message} other {le messages}}',
        "username or email": "nom d'utilisateur ou email",
        "password": "mot de passe",
    },
};

ReactDOM.render(<App localeData={localeData} locale="fr" />, document.getElementById('root'));
registerServiceWorker();
