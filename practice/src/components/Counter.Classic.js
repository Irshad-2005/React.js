import React from "react"
class Counter  extends React.Component
{
        constructor(props)
        {
                super(props);
                this.state={
                      count:0,
                }

        }
        componentDidMount()
        {
                console.log("Component Did Mount");
        }
        componentDidUpdate()
        {
                console.log("Component Did Update")
        }
        render()
        {
                return (
                        <div>
                                <h2>Count : {this.state.count}</h2>
                                <button onClick={()=>this.setState({count:this.state.count + 1})}>Increament</button>
                        </div>
                );
        }

}
export default Counter;