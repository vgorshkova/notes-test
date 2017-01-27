import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from './components/Layout';
import store from './store/store';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <Provider store={store}>
            <Layout title={"The simplest app"} />
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<App/>, document.getElementById('app'));