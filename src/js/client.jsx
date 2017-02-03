import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store/store';
import Layout from './components/Layout';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <Provider store={store}>
            <Layout />
        </Provider>
    </MuiThemeProvider>
);

render(<App />, document.getElementById('app'));