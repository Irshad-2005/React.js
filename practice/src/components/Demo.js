import {nanoid} from "nanoid"
const Demo = ()=>
  {
    const id = nanoid()
      return (
        <>
            <p>this is demo pages </p>
            <h1>{id}</h1>
        </>
      )
  }

  export default Demo;