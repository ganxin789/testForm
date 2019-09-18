import React,{useContext} from 'react'
import {Corlor} from './creatContext'
function Bt(){
    const{fun,color}=useContext(Corlor)
return(
    <div>
        <button onClick={()=>fun('navy')}>{color}</button>
        <button onClick={()=>fun('firebrick')}>{color}</button>
    </div>
)
}
export default Bt