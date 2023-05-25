import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import NavBar from '../pages/shared/NavBar';

const Main = () => {
    const location = useLocation()
    const noNavFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            {noNavFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;