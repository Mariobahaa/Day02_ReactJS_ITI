import 'bootstrap'
const Error= ()=>{
    return (
    <div >
    <h1 className= "success">Not Found <br/> click to return to home</h1>
    <button className= "btn-success btn col-4  mt-5" onClick = {
        ()=>{
            console.log('redirect');
        }
    }>Return to Sewers</button>
    </div>)
};
export default Error;