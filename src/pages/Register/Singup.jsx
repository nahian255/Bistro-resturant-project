import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/others/authentication2.png'
import { BistroContext } from '../../provider/AuthProvider';

const Singup = () => {

    const { creatUser } = useContext(BistroContext)
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    const handelSubmit = () => {
        creatUser(email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
            });

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-1/2 lg:text-left">
                        <img src={img} alt="" />
                    </div>

                    <div className="card flex-shrink-0  w-1/2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
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
                            <div className="form-control mt-6">
                                <button onClick={handelSubmit} className="btn btn-primary">Sign Up</button>
                            </div>
                            <p>alredy login? go to the <Link to='/login' className="text-blue-500">Login page</Link></p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Singup;