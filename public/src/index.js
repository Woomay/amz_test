import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './public/index.css';
import 'notie/dist/notie.css'
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import RouteMap from './routes/index'
import registerServiceWorker from './registerServiceWorker';

// master分支上面尽享更改并提交
ReactDOM.render(
    <Provider>
        <RouteMap />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();

//我现在在master上作出修改并提交
还有pipifen分支这里也进行修改
