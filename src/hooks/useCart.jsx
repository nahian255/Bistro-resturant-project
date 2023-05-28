import { useContext, useEffect, useState, } from "react";
import { BistroContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {

    const { user } = useContext(BistroContext)

    const [carts, setcarts] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/carts')
            .then(res => res.json())
            .then(data => {
                setcarts(data)
                setLoading(false)
            })
    }, [])
    return [carts, setLoading]

    // const { refetch, data: cart = [] } = useQuery({
    //     queryKey: ['carts', user?.email],
    //     queeyFn: async () => {
    //         const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
    //         return res.json()
    //     }
    // })
    // return [cart, refetch]
};

export default useCart;