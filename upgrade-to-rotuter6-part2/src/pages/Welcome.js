import {Link, Outlet, useNavigate} from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    // navigate(-1) // to go back one page
    // navigate(-2) //to go back 2 pages
    // navigate(1) // to go forward 1page
    // navigate('/', {replace: true}) //will redirect instead of push
    // navigate('/', {preventScrollReset: true})
    // navigate('/', {replace: false, preventScrollReset: false, relative: '/', state: false})
    return (
        <section>
            <h1>The Welcome Page</h1>
            <Link to='new-user'>New User</Link>
            <Outlet />
            {/*<Routes>*/}
            {/*    <Route path="new-user"*/}
            {/*           element={<p>Welcome, new user!</p>} />*/}
            {/*</Routes>*/}
            {/*todo this nested route*/}
            {/*<Routes>*/}

            {/*    <Route path="/welcome/new-user">*/}
            {/*        <p>Welcome, new user!</p>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}
        </section>
    );
};

export default Welcome;
