import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Auth from "./Auth";
import QueryListDoctor from "./QueryListDoctor";
import QueryListPatient from "./QueryListPatient";

const Redirect = () => {
    const { nivelUser } = useContext(UserContext);

    return (
        <div>    
            {nivelUser === 0 && <Auth />}
            {nivelUser === 1 && <QueryListDoctor />}
            {nivelUser === 2 && <QueryListPatient />}
        </div>
    )
}

export default Redirect