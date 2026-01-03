import { useNavigate} from "react-router-dom";
export default function Login(){
    const navigate=useNavigate();
    return(
        <div>
            <h2>
                Login
            </h2>
            <button onClick= {() => navigate("/admin/dashboard")}>Admin</button>
            <button onClick={() => navigate("/customer/dashboard")}>Customer</button>
        </div>
    );
}