
const Button = ({ text }) => {
    return (
        <div className="mx-auto text-center w-1/2 mb-8">
            <button className="border-1 border-indigo-200 border-b-indigo-500 btn btn-ghost">{text}</button>
        </div>
    );
};

export default Button;