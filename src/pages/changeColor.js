import React, { Component,useContext } from 'react'
import {Corlor} from './creatContext'
function Show(){
    const {color}=useContext(Corlor)
    return(
        <div>
            <div style={{color:color}}>!!! {color}</div>
        </div>
    )
}
export default Show