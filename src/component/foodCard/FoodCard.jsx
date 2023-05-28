import { useContext } from "react";
import { BistroContext } from "../../provider/AuthProvider";

const FoodCard = ({ item }) => {
    const { user } = useContext(BistroContext)
    const { name, image, price, recipe, _id } = item;

    const handelAddtoCard = item => {
        const oderItem = { menuId: _id, name, image, price, email: user.email }
        if (user) {
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(oderItem)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        } else {
            alert('login first')
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure><img src={image} alt="food img" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handelAddtoCard(item)}
                        className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;