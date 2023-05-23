import Banner from "../banner/Banner";
import Category from "../category/Category";
import PopularMeanu from "../popularMeanu/PopularMeanu";
import Featured from "../popularMeanu/fratured/Featured";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMeanu></PopularMeanu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;