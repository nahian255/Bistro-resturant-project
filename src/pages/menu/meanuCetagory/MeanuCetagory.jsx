import { Link } from "react-router-dom";
import Button from "../../../component/button/Button";
import Cover from "../../shared/cover/Cover";
import Maps from "../../shared/maps/Maps";

const MeanuCetagory = ({ items, img, title }) => {
    // console.log(items);
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <Maps arry={items}></Maps>
            <Link to={`/order/${title}`}> <Button text={"order now"}></Button>
            </Link>
        </div>
    );
};

export default MeanuCetagory;