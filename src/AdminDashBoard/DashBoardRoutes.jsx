import { Routes,Route } from "react-router-dom";
import Dashboard from "./Dashboard";

const Approutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={Dashboard}> </Route>
        </Routes>
     );
}
 
export default Approutes;