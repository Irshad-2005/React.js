import {useRouteError} from "react-router-dom"
const Error = ()=>{
        const Error = useRouteError();
        console.log(Error);
        return (
        <div>
                <h1>Opps!!!</h1>
                <h2>Something went wrong!!</h2>
                <h2>{Error.status} {Error.statusText}</h2>
                
        </div>
);
}

export default Error;