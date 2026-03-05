import React from 'react'
import Child from './Child'

const Parent = ({message}) => {
  return (
    <div>
        <button onClick={()=>message("Message from parent")}>send message</button>
        <Child name="Sushu" age={21} isActive={true} food={["Biryani","Curd","Lemon"]} 
        contact ={{ mobile:999999999,email:"sushmitha.c@gmail.com"}}/>
        
        <Child name="likky" age={21} isActive={true} food={["Biryani","pizza","Lemon"]} 
        contact ={{ mobile:989898989,email:"likky.c@gmail.com"}}/>
       
        

    </div>
  )
}

export default Parent