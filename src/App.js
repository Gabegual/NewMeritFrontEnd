import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/footer';
import Login from './components/Login'
import AccountHoldersList from './components/AccountHolders'
import SavingsAccount from './components/savingsaccount/savingsaccount'
import CheckingAccount from './components/checkingaccount/checkingaccount'
import savingsaccountpost from './components/savingsaccount/savingsaccountget';
import SavingsAccountget from './components/savingsaccount/savingsaccountget';



function App() {
    return (

        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/accountholders">
                        <AccountHoldersList />
                    </Route>
                    <Route exact path="/savingaccount">
                        <SavingsAccount />
                    </Route>
                    <Route exact path="/checkingaccount">
                        <CheckingAccount />
                    </Route>
                    <Route exact path="/savingsaccountget">
                        <SavingsAccountget />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>

    );
}

export default App
