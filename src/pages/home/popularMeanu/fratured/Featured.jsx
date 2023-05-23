import SectionTitle from "../../../../component/sectionTitle/SectionTitle";
import featuredImg from '../../../../assets/home/featured.jpg';
import Button from "../../../../component/button/Button";


const Featured = () => {
    return (
        <div className="my-16  bg-fixed bg-opacity-10 pt-8 my-20" style={{
            backgroundImage: `url(${featuredImg})`
        }} >
            <SectionTitle
                subHeading={'check it out'}
                heading={"from out meanu"}
            ></SectionTitle>
            <div className="md:flex justify-center pb-16  bg-slate-500 bg-opacity-10 mt-14 mb-8 mx-auto px-36">
                <img className="w-1/3" src={featuredImg} alt="" />
                <div className="ml-8  text-white">
                    <p>Componet Name</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repellat libero dolor, dignissimos accusantium tenetur impedit perferendis quo facere, consequatur distinctio pariatur ab, voluptatibus architecto repudiandae velit fuga. Dicta, nisi?</p>
                    <div className="">
                        <Button
                            text={"Read More"}>
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Featured;