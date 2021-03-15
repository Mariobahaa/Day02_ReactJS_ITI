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
            <div>
                <input type="text" placeholder= "Name" onChange = {this.changeName} value = {this.state.name}></input>
                <input type="text" placeholder= "Age" onChange = {this.changeAge}  value = {this.state.age}></input>
                <button onClick = {this.add}>Join Ninja Turtles</button>
            </div>
       )
    }
}