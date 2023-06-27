import { useEffect, useState } from "react";
import { getdoctors } from '../Service/ApiService'

export const useDoctors = () => {
    const [ doctors, setDoctors ] = useState([]);

    useEffect(() => {
		getdoctors()
		.then(res => { 
					// console.log("Reponse da API", res)
					setDoctors(res)
		})
	}, []);

    return { 
        doctors
    };

}