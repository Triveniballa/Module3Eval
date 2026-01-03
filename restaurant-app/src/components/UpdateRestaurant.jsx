import {useParams, useNavigate} from "react-router-dom";
import { useContext,useState } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
export default function UpdateRestaurant(){
    const{id} =useParams();
    const navigate =useNavigate();
    const {restaurants,saveData}=useContext(RestaurantContext);
    const item =restaurants.find(r=>r.id ==id);
    const [name,setName] = useState(item.name);
    const update =() => {
        const updated =restaurants.map(r => r.id ==id?{...r,name}:r);
        saveData(updated);
        alert("Updated Successfully");
        navigate("/admin/dashboard");
    };
    return(
        <>
        <input value = {name}onChange ={e=> setName(e.target.value)}/>
        <button onClick={update}>Update</button>
        </>
    );

}