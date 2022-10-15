import {Route, Routes, Navigate, Link} from 'react-router-dom';
import Comments from './components/comments/Comments';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

function App() {
    return (<Layout>
        <Routes>
            <Route
                path='/'
                element={<Navigate to='quotes' />} />
            <Route path='quotes'>
                <Route
                    index
                    element={<AllQuotes />} />
                <Route
                    path=':quoteId'
                     >
                    <Route index element={<>
                        <QuoteDetail />
                        <div className='centered'>
                            <Link
                                className='btn--flat'
                                to='comments'>
                                Load Comments
                            </Link>
                        </div>
                    </>}/>
                    <Route path='comments' element={<><QuoteDetail /><Comments /></>} />
                </Route>
                <Route
                    path='new'
                    element={<NewQuote />} />
                <Route
                    path='*'
                    element={<NotFound />} />
            </Route>

        </Routes>
    </Layout>);
}

export default App;
