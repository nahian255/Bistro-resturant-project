import { Helmet } from "react-helmet";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import PopularMeanu from "../popularMeanu/PopularMeanu";
import Featured from "../popularMeanu/fratured/Featured";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>{'home'}</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMeanu></PopularMeanu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;