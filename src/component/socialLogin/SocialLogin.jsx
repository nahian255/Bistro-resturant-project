import { useContext } from "react";
import { BistroContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleLogin } = useContext(BistroContext)
    const navigate = useNavigate()

    const handelgoogleLogin = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user);
                const user = result.user
                const userData = { name: user.displayName, email: user.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                navigate('/')
            }).catch((error) => {
                console.log(error);
                // ...

            });
    }

    return (
        <div>
            <button
                onClick={handelgoogleLogin}
                className="btn btn-square btn-outline mx-auto text-center">
                <h1>G</h1>
            </button>
        </div>
    );
};

export default SocialLogin;