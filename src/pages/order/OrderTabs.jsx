import FoodCard from "../../component/foodCard/FoodCard";


const OrderTabs = ({ items }) => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-12 my-12  items-center">
                {
                    items?.map(item => <FoodCard
                        key={item?._id}
                        item={item}
                    ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderTabs;