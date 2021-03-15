import 'bootstrap'
const Error= ()=>{
    return (
    <div>
    <h1 class= "success">Not Found <br/> click to return to home</h1>
    <button class= "success" onClick = {
        ()=>{
            console.log('redirect');
        }
    }>Return to Sewers</button>
    </div>)
};
export default Error;