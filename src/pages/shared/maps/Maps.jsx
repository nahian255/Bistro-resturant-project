import Item from "../Item";

const Maps = ({ arry }) => {
    return (
        <div className="grid md:grid-cols-2 gap-8 my-12">
            {
                arry?.map(i => <Item
                    key={i._id}
                    i={i}
                ></Item>)
            }
        </div>
    );
};

export default Maps;