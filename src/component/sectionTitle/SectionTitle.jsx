
const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="mx-auto text-center mt-8 w-4/12">
            <p className="text-yellow-300 mb-4">----{subHeading}----</p>
            <h1 className="text-4xl border-solid border-y-4 uppercase border-sky-500 py-2">{heading}</h1>
        </div>
    );
};

export default SectionTitle;