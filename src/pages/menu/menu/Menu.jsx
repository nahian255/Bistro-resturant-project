import { Helmet } from "react-helmet";
import Cover from "../../shared/cover/Cover";
import img from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import SectionTitle from "../../../component/sectionTitle/SectionTitle";
import useMeanu from "../../../hooks/useMeanu";
import MeanuCetagory from "../meanuCetagory/MeanuCetagory";

const Menu = () => {

    const [meanu] = useMeanu()
    // console.log(meanu);
    const offered = meanu?.filter(item => item.category == "offered")
    const dessert = meanu?.filter(item => item.category == "dessert")
    const soup = meanu?.filter(item => item.category == "soup")
    const salad = meanu?.filter(item => item.category == "salad")
    const pizza = meanu?.filter(item => item.category == "pizza")
    // console.log(offered);
    return (
        <div>
            <Helmet>
                <title>{'Bisto res // Meanu'}</title>
            </Helmet>
            <Cover img={img} title={'Our meanu'}></Cover>
            <SectionTitle subHeading={"don't miss"} heading={"today's offer"}></SectionTitle>
            <MeanuCetagory items={offered}></MeanuCetagory>
            <MeanuCetagory items={dessert} img={dessertImg} title={'Dessert'}></MeanuCetagory>
            <MeanuCetagory items={pizza} img={pizzaImg} title={'pizza'}></MeanuCetagory>
            <MeanuCetagory items={salad} img={saladImg} title={'salad'}></MeanuCetagory>
            <MeanuCetagory items={soup} img={soupImg} title={'soup'}></MeanuCetagory>

        </div>
    );
};

export default Menu;