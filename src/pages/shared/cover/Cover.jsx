import { Parallax } from "react-parallax";
import PopularMeanu from "../../home/popularMeanu/PopularMeanu";
import Button from "../../../component/button/Button";


const Cover = ({ img, title }) => {
    return (
        <>
            <Parallax
                bgImage={img}
                blur={{ min: -15, max: 15 }}
                renderLayer={percentage => (
                    <div
                        style={{
                            position: 'absolute',
                            // background: `rgba(255, 125, 0, ${percentage * 1})`,
                            left: '50%',
                            top: '50%',
                            width: percentage * 500,
                            height: percentage * 500,
                        }}
                    />
                )}
            >
                <div className="hero h-[700px]"
                // style={{ backgroundImage: `url(${img})` }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <Button text={'start Now'}></Button>
                        </div>
                    </div>
                </div>
            </Parallax>
        </>
    );
};

export default Cover;