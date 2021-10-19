import { useEffect, useState } from "react";

const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    console.log(doctors);
    useEffect(() => {
        fetch("/doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return [
        doctors
    ];
}
export default useDoctors;