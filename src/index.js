import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './public/index.css';
import 'notie/dist/notie.css'
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import RouteMap from './routes/index'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider>
        <RouteMap />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
