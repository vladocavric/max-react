import {Route, Routes, Navigate} from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate
                            to="welcome"
                            replace />} />

                    <Route path="welcome/" element={<Welcome />} >
                        {/*<Route*/}
                        {/*    index*/}
                        {/*    element={<Welcome />} />*/}
                        <Route
                            path="new-user"
                            element={<><p>Welcome, new user!</p></>} />
                    </Route>
                    <Route path="products">
                        <Route
                            index
                            element={<Products />} />
                        <Route
                            path=":productId"
                            element={<ProductDetail />} />
                    </Route>
                    <Route path='*' element={<h1>404page</h1>} />
                </Routes>
            </main>
        </div>
    );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
