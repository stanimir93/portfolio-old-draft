import './app.css';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
