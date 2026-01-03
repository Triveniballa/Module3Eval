import RestaurantForm from "./RestaurantForm";
import RestaurantCards from "./RestaurantCards";
import SearchFilter from "./SearchFilter";
export default function AdminDashboard(){
    return(
        <>
        <h2>Admin Dashboard</h2>
        <RestaurantForm/>
        <SearchFilter/>
        <RestaurantCards admin/>
        </>
    );
}