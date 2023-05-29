import { useState } from "react";
import img from "../../assets/others/authentication2.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from "react";
import { useContext } from "react";
import { BistroContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../component/socialLogin/SocialLogin";



const Login = () => {

    const { loginUser } = useContext(BistroContext)

    const [disable, setDisable] = useState(true)
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const [valid, setValid] = useState()
    const navigate = useNavigate();


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    // login button..
    const handelSubmit = () => {
        loginUser(email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
            });
    };


    // reload captcha button...
    const handelCaptcha = () => {
        if (validateCaptcha(valid)) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0  w-1/2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    onChange={(e) => setPass(e.target.value)}
                                    type="password" placeholder="password" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input
                                    onChange={(e) => setValid(e.target.value)}
                                    type="text" placeholder="write this" className="input input-bordered"
                                />
                                <button onClick={handelCaptcha} className="btn btn-ghost mt-2">valided</button>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disable} onClick={handelSubmit} className="btn btn-primary">Login</button>
                            </div>
                            <p>new here? go to the <Link to="/signup" className="text-blue-500">register page</Link></p>
                        </div>
                        <SocialLogin></SocialLogin>
                    </div>
                    <div className="text-center w-1/2 lg:text-left">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;