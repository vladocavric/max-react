// import { useState } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import QuoteList from './components/quotes/QuoteList';
import HilightedQuote from './components/quotes/HighlightedQuote';
import MainNavigation from './components/layout/MainNavigation';
import QuoteForm from './components/quotes/QuoteForm';
import Layout from './components/layout/Layout';

function App() {
    // const [quotes, setQuotes] = useState([])
    // const quotes = [];
    return (
        <div>
            <MainNavigation />
            <Layout>
                <Switch>
                    <Route
                        path="/"
                        exact>
                        <Redirect to="/quotes" />
                    </Route>
                    <Route
                        path="/quotes"
                        exact>
                        <QuoteList />
                    </Route>
                    <Route
                        path="/quotes/new"
                        exact>
                        <QuoteForm />
                    </Route>
                    <Route
                        path="/quotes/:id"
                        exact>
                        <HilightedQuote />
                    </Route>
                    <Route
                        path="/404"
                        exact>
                        <h1>this is 404 page</h1>
                    </Route>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
