import User from "./User";
import UserClass from "./UserClass";
import React from 'react'
class About extends React.Component{
        constructor(props)
        {
         super(props);
        // console.log("Parent Constructor called...");
        }

        componentDidMount()
        {
               // console.log("Parent ComponentDidMount called...");
        }
        render()
        {
                //console.log("Parent Render called...");
                return(
                        <div>
                        <h1>About Page</h1>
                      
                        <h2>This is about pages</h2>
                        <UserClass name={"First"} location={"Bhopal"}  />
                       
                       
                </div>
                );
        }
}


export default About;