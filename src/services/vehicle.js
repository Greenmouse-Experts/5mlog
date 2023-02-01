import axios from "axios";
import authHeader from "./auth-header";

const token = JSON.parse(localStorage.getItem('lynchpin'));

const newVehicle = async (payload) => {
    const config = {
        headers: { 
            'Authorization': 'Bearer ' + token 
        },
    }
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL }/admin/add/vehicle`, payload, config)
    return response;
};
const updateVehicle = (id) => {
    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL }/admin/update/vehicle/${id}`,
        headers: { 
            'Authorization': 'Bearer ' + token 
        }
    }
    return axios(config);
};
const getVehicle = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get/vehicle`,  { headers: authHeader() });
};
const deleteVehicle = (id) => {
    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL }/admin/delete/vehicle/${id}`,
        headers: { 
            'Authorization': 'Bearer ' + token 
        }
    }
    return axios(config);
};


const vehicle = {
   newVehicle,
   getVehicle,
   updateVehicle,
   deleteVehicle
};

export default vehicle;