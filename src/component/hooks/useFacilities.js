import { useEffect, useState } from "react"

const useFecilities = () => {
    const [fecilities, setFecilities] = useState([]);

    useEffect(() => {
        fetch("./fecility.json")
            .then(res => res.json())
            .then(data => setFecilities(data))
    }, [])


    return [
        fecilities
    ];
}
export default useFecilities;