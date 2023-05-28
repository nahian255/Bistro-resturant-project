import { Link, Outlet } from "react-router-dom";

const Dashbord = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-orange-200 text-base-content">

                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/dashboard/mycart'>MY cart</Link></li>
                    <li><Link to='/'>Home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;