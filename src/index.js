import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from "./redux/store"
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

import green from '@material-ui/core/colors/green';

import App from './App'

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: green[500],
        },
    },
});

const app = (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
)

ReactDOM.render(app, document.querySelector('#root'))