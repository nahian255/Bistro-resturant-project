import Cover from "../../shared/cover/Cover";
import Maps from "../../shared/maps/Maps";

const MeanuCetagory = ({ items, img, title }) => {
    console.log(items);
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <Maps arry={items}></Maps>
        </div>
    );
};

export default MeanuCetagory;