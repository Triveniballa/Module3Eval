import { useContext,useState } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
export default function RestaurantForm(){
    const {restaurants, saveData} = useContext(RestaurantContext);
    const [form,setForm]=useState({
        "restaurantID": 26,
        "restaurantName": "1135 AD",
        "address": "Jaipur, Amber Fort, Rajasthan",
        "type": "Rajasthani",
        "parkingLot": true,
        "image": "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    });
    const submit =()=> {
        const updated=[...restaurants,{ ...form,id:Date.now()}];
            saveData(updated);
            alert("Restaurant added successfully");

    };
    return(
        <>
        <input placeholder="Name" onChange= {e =>setForm({...form,name: e.target.value})}/>
         <input placeholder="Address" onChange= {e =>setForm({...form,address: e.target.value})}/>
         <select onChange={e => setForm({...form,type:e.target.value})}/>
            <option>North Indian</option>
            <option>South Indian</option>
            <option>Thai</option>
            <option>Jain</option>
            <option>MUghlai</option>
            <option>Rajasthani</option>
            <option>Gujarati</option>
    
            <select onChange ={e =>setForm({...form,parking:e.target.value})}>
            <option>Yes</option>
            <option>No</option>
            </select>
            <button onClick ={submit}> Add Restaurant</button>
            </>
    );
}

