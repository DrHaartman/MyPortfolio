import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <main className="max-w-7xl mx-auto px-4 py-6">
                <Outlet />
            </main>
            <div className="max-w-7xl mx-auto px-4 py-6">
                <Footer />
            </div>
        </>
    );
}

export default Layout;