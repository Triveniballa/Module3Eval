import { createContext,useState } from "react";
export const RestaurantContext = createContext();
export const RestaurantProvider = ({children}) => {
    const [restaurants, setRestaurants] =useState( JSON.parse(localStorage.getItem("restaurants")) || []);
    const saveData =(data)=> {
        setRestaurants(data);
        localStorage.setItem("restaurants",JSON.stringify(data));
    };
    return(
        <RestaurantContext.Provider value={{ restaurants, saveData}}>
            {children}
        </RestaurantContext.Provider>
    );
};