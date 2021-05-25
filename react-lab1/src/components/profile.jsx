import React, { Component } from 'react';
// import logo from '../logo.svg';
import profile from '../profile.svg';


class Profile extends Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
    }
    state = { 
        date: "",

    }
    render() { 
        return (
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white pt-2">
                {/* Image, then name, then @username, then city&country, then date joined being today,*/}
                <img src={profile} alt="profilepic" className="w-1/3 h-1/3 m-auto"/>
                <h2 className="font-medium text-2xl">Mary Jane</h2>
                <h5 className="font-light">@maryjane</h5>
                <h5>Kingston, Jamaica</h5>
                <h5>Joined {this.state.date}</h5>

            </div>
        );//after ntnt nuh do it hm
    }
}
 
export default Profile;