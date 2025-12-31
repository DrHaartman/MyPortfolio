import Header from './Header.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <main className="max-w-7xl mx-auto px-4 py-6">
                <Outlet />
            </main>
        </>
    );
}

export default Layout;