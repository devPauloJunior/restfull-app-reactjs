import { useEffect, useState } from "react";
import { getappointments } from '../Service/ApiService'

export const useAppointments = () => {
    const [ appointments, setAppointments ] = useState([]);

    useEffect(() => {
		getappointments()
		.then(res => { 
					console.log("Reponse da API", res)
					setAppointments(res)
		})
	}, []);

    return { 
        appointments,
		setAppointments,
    };

}