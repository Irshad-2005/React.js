import React from "react"
class UserClass extends React.Component
{
        constructor(props)
        {
                super(props);
                this.state = {
                               info:
                               {
                                  name:"dummy name",
                                  location:"location"
                               }
                             }
            
                //console.log(this.props.name+"Child Constructor called...");
        }

        async  componentDidMount()
        {
               // api calls
               const data = await fetch("https://api.github.com/users/irshad-sheikh-11");
               const json = await data.json();
               this.setState({
                 info:json
               })
               console.log(json);
        }
          
         render()
       {
         // console.log(this.props.name+"Child Render called...")
             const {name,location,avatar_url
             } = this.state.info;
            
              return (
                   <div className="user-card">
                        
                       <img src={avatar_url} alt="image" />
                        <h3>Name : {name}</h3>
                        <h4>Location :{location}</h4>
                        
                </div>
        );
    }
}
export default UserClass;