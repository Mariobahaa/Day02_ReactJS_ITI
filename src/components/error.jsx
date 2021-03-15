import 'bootstrap'
import { useHistory } from "react-router-dom";

const Error= ()=>{

    let history = useHistory();

    return (
    <div >
    <h1 className= "success">Not Found <br/> click to return to home</h1>
    <button className= "btn-success btn col-4  mt-5" onClick = {
        ()=>{
           
            let path = '/home'; 
            history.push(path);
        }
    }>Return to Sewers</button>
    </div>)
};
export default Error;