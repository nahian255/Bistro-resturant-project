import SectionTitle from "../../../component/sectionTitle/SectionTitle";
import Button from "../../../component/button/Button";
import useMeanu from "../../../hooks/useMeanu";
import Maps from "../../shared/maps/Maps";

const PopularMeanu = () => {

    const [meanu] = useMeanu()
    const soup = meanu?.filter(item => item.category == "soup")

    // const [meanu, setMeanu] = useState()
    // // console.log(meanu);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             const filterCategory = data.filter(item => item.category == "soup")
    //             // console.log(filterCategory);
    //             setMeanu(filterCategory)
    //         })
    // }, [])

    return (
        <section>
            <SectionTitle
                subHeading={"check it out"}
                heading={'from our'}
            ></SectionTitle>
            <Maps
                arry={soup}
            ></Maps>

            {/* <div className="grid md:grid-cols-2 gap-8 my-12">
                {
                    soup?.map(i => <Item
                        key={i._id}
                        i={i}
                    ></Item>)
                }
            </div> */}
            <Button
                text='view all meanu'></Button>
        </section>
    );
};

export default PopularMeanu;