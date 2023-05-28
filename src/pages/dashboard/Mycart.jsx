import { useEffect, useState } from "react";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import useCart from "../../hooks/useCart";

const Mycart = () => {

    const [cart] = useCart()
    const [control, setControl] = useState(true)
    console.log(cart);
    const total = cart?.reduce((sum, item) => item.price + sum, 0)


    const handelDelete = id => {
        fetch(`http://localhost:5000/carts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('item deleted')
                    setControl(!control)
                }
            })
    }


    return (
        <div className="p-20">
            <div className="">
                <SectionTitle subHeading={'My cart'} heading={'wanna add more'}></SectionTitle>
            </div>
            <h2>my order {cart?.length}</h2>
            <h4>total price ={total}</h4>
            <section className="">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart &&
                                cart.map((item) => (
                                    <tr key={item._id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">Desktop </span>
                                        </td>
                                        <td>{item.price}</td>
                                        <th>
                                            <button onClick={() => handelDelete(item._id)} className="btn bg-red-500 btn-xs">delete</button>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>


                    </table>
                </div>
            </section>
        </div>
    );
};

export default Mycart;