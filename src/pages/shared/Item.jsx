import img from '../../assets/home/06.png'

const Item = ({ i }) => {
    const { name, recipe, price } = i
    return (
        <div className="flex space-x-4 bg-red-50 p-6 rounded-lg">
            <div>
                <img style={{ borderRadius: "0 200px 200px 200px" }} className='w-[100px]' src={img} alt="" />
                <h1>img</h1>
            </div>
            <div>
                <h1 className='text-xl '>{name}-----------</h1>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-600 text-xl'>${price}</p>
        </div>
    );
};

export default Item;