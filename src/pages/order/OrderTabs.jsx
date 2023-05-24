import FoodCard from "../../component/foodCard/FoodCard";


const OrderTabs = ({ items }) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-8 my-12">
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