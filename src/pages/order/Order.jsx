import { Helmet } from "react-helmet";
import Cover from "../shared/cover/Cover";
import img from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMeanu from "../../hooks/useMeanu";
import OrderTabs from "./OrderTabs";
import { useState } from "react";
// import { useParams } from "react-router-dom";

const Order = () => {
    // const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    // const { category } = useParams()

    const [tabIndex, setTabIndex] = useState();

    const [meanu] = useMeanu();
    const desserts = meanu?.filter(item => item.category === 'dessert');
    const soup = meanu?.filter(item => item.category === 'soup');
    const salad = meanu?.filter(item => item.category === 'salad');
    const pizza = meanu?.filter(item => item.category === 'pizza');
    const drinks = meanu?.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>{'Bisto res // Order'}</title>
            </Helmet>
            <Cover img={img} title={'Order Now'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs items={salad}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={pizza}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={soup}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={desserts}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={drinks}></OrderTabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;