import { useEffect, useState } from "react";


const useMeanu = () => {
    const [meanu, setMeanu] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/meanu')
            .then(res => res.json())
            .then(data => {
                setMeanu(data)
                setLoading(false)
            })
    }, [])
    return [meanu, loading]
};

export default useMeanu