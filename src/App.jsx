import {Routes,Route} from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import CustomerDashboard from "./components/CustomerDashboard";
import UpdateRestaurant from "./components/UpdateRestaurant";
function App(){
  return (
    <Routes>
      <Route path ="/" element ={<Login/>}/>
      <Route path ="/admin/dashboard"element={<AdminDashboard/>}/>
      <Route path ="/customer/dashboard"element={<CustomerDashboard/>}/>
      <Route path ="/admin/restaurants/update/:id"element ={<UpdateRestaurant/>}/>
    </Routes>
  );
}
export default App;