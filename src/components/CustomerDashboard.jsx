import RestaurantCards from "./RestaurantCards";
import SearchFilter from "./SearchFilter";
export default function CustomerDashboard (){
    return(
        <>
        <h2> Customer Dashboard</h2>
        <SearchFilter />
        <RestaurantCards/>
        </>
    );
}