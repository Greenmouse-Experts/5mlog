import axios from "axios";
import authHeader from "./auth-header";


const getTransact = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get/vehicle`,  { headers: authHeader() });
};

const transact = {
    getTransact,
 };
 
 export default transact;