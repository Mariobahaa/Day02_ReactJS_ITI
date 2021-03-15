import { Component } from "react";

export default class Login extends Component{
    constructor(){
        super();
            this.state = {
                name :'',
                age : 20,
            }
    }
    add= ()=>{
        this.props.added({name:this.state.name, age: this.state.age});
    }

    changeName = (e)=>{
        this.setState({
            name: e.target.value
        });
    }

    changeAge = (e)=>{
        this.setState({
            age: e.target.value
        });
    }
    render(){
        return (
            <div className="container text-center ">
                <div className="row"> 
                <input type="text" className = "offset-5 col-2 rounded-pill mt-5"
                placeholder= "Name" onChange = {this.changeName} value = {this.state.name}></input>
                </div>
                <div className="row"> 
                <input type="text" className = "offset-5 col-2 rounded-pill mt-5"
                placeholder= "Age" onChange = {this.changeAge}  value = {this.state.age}></input>
                </div>
                <div className="row"> 
                <button className = "btn btn-success offset-5 col-2 rounded-pill mt-5 mb-5"
                onClick = {this.add}>Join Ninja Turtles</button>
                </div>
            </div>
       )
    }
}