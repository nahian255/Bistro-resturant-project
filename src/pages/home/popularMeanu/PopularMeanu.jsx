import { useEffect, useState } from "react";
import SectionTitle from "../../../component/sectionTitle/SectionTitle";
import Item from "../../shared/Item";
import Button from "../../../component/button/Button";

const PopularMeanu = () => {

    const [meanu, setMeanu] = useState()
    // console.log(meanu);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const filterCategory = data.filter(item => item.category == "soup")
                // console.log(filterCategory);
                setMeanu(filterCategory)
            })
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={"check it out"}
                heading={'from our'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 my-12">
                {
                    meanu?.map(i => <Item
                        key={i._id}
                        i={i}
                    ></Item>)
                }
            </div>
            <Button
                text='view all meanu'></Button>
        </section>
    );
};

export default PopularMeanu;