import React, { Component } from 'react';

class Data extends Component {
    state = { 
        posts : 7,
        follows : 100,
        followers : 250
     }
    render() { 
        return ( 
            <div>
                <p className="text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, sit aliquid! Animi nobis amet doloremque dolorem dolore quo, reiciendis voluptas ipsa perspiciatis id. Modi, necessitatibus?</p>
                <br />
                <div>
                    <table className="table-auto m-auto mb-4">
                        <tr className="font-semibold">
                            <td>{this.state.posts}</td>
                            <td>{this.state.follows}</td>
                            <td>{this.state.followers}</td>
                        </tr>
                        <tr className="text-gray-400">
                            <td className="px-3">Posts</td>
                            <td className="px-3">Following</td>
                            <td className="px-3">Followers</td>
                        </tr>
                    </table>
                </div>
                <button onClick={() => this.sayHey()} className="bg-green-500 text-white rounded px-3 py-2 mb-3">Follow</button>
            </div>
         );
    }

    sayHey(){
        console.log("Hey World!")
    }
}
 
export default Data;