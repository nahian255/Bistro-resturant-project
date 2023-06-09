import { useContext } from "react";
import { Link } from "react-router-dom";
import { BistroContext } from "../../provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../hooks/useCart";

const NavBar = () => {
    const [cart, setLoading] = useCart()
    // console.log(cart);



    const { user, singOut } = useContext(BistroContext)
    const handelSingOut = () => {
        singOut()
            .then(() => {
                // Sign-out successful.
            }).catch(() => {
                // An error happened.
            });
    }
    // const li =
    //     <>
    //         <li><a>Item 1</a></li>
    //         <li tabIndex={0}>
    //             <a className="justify-between">
    //                 Parent
    //                 <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
    //             </a>
    //             <ul className="p-2">
    //                 <li><a>Submenu 1</a></li>
    //                 <li><a>Submenu 2</a></li>
    //             </ul>
    //         </li>
    //         <li><a>Item 3</a></li>
    //     </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-10 bg-black text-white max-w-screen-xl bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-white bg-base-100 rounded-box w-52">

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/menu'>Our menu</Link></li>
                        <li><Link to='/order/salad'>Order food</Link></li>
                        <li>
                            <Link to='/dashboard'><button className="btn">
                                {/* {setLoading(false)} */}
                                <FaShoppingCart />
                                <div className="badge bg-rose-500">+{cart?.length || 0}</div>
                            </button></Link>
                        </li>
                        {user ?
                            <li><Link to='/login'><button onClick={handelSingOut}>Sing Out</button></Link></li>
                            :
                            <li><Link to='/login'>Login</Link></li>
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;