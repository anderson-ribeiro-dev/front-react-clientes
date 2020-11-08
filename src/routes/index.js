import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Cliente from '../cliente/'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/clientes" component={Cliente} />
            </Switch>
        </BrowserRouter>
    )

}
