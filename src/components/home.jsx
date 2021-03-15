import {Component} from 'react';
import usersData from '.././usersdata.json';
import Login from './login';
import Users from './users';

export default class Home extends Component {
    constructor(){
        super();

        this.state = {
            usersList : usersData
        }
    }

    addToList= (ninja)=>{
        let newList = this.state.usersList;
        newList.push(ninja);
        this.setState({
            usersList: newList
        });
    }
    render(){
        //console.log(this.state.usersList);
        return (<div><Login added = {this.addToList}/> <Users sentList = {this.state.usersList}/></div> );
    }
}