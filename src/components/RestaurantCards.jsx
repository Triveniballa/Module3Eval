import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import {useNavigate} from "react-router-dom";
export default function RestaurantCards({ admin}){
    const {restaurants, saveData} =useContext(RestaurantContext);
    const navigate =useNavigate();
    const remove = id => {
        if (confirm("Are you sure?")){
            const updated=restaurants.filter(r=>r.id !==id);
            saveData (updated);
            alert("Deleted Successfully");
        }
    };
    return restaurants.map(r=> (
        <div key ={r.id}>
            <img src={r.image} width="150"/>
            <h3>{r.name}</h3>
            <p>{r.address}</p>
            <p>{r.type} | Parking: {r.parking}</p>
            {admin && (
                <>
                <button onClick ={() => navigate(`/admin/restaurants/update/${r.id}`)}>Update</button>
                <button onClick ={() => remove(r.id)}>Delete</button></>
            )}
        </div>
    ));
}