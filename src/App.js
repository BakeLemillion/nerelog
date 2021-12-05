import React, { useState, useEffect } from 'react'
import MainPage from './pages/mainPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
            </Switch>
        </Router>

    )
}

export default App