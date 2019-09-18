import React, { useState, useEffect, createContext, useContext, useReducer } from 'react'
import { Button } from 'element-react/next';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function CC() {
    let [count, getcount] = useState(0)
    const [count2, paifa] = useReducer((state, action) => {
        switch (action) {
            case "add":
              return  state + 1;                
            case "min":
              return  state - 1;                
            default: 
            return state                
        }
    }, 0)
    useEffect(() => {
        console.log(`${count}`)
        return () => {
            console.log('~~~~~~~~~~~~~~~~')
        }
    }, [])
    return (

        <div>
            <p>{count}</p>
            <hr></hr>
            <p>{count2}</p>
            <button onClick={() => { paifa("add") }}>click</button>
            <button onClick={() => { paifa("min") }}>click</button>
            <button onClick={() => {
                setInterval(() => {
                    getcount(count++);
                }, 1000)
            }}>click</button>
            <Button type="success">hahahanpm</Button>

            <Router>
                <Link to="/home">home</Link>
                <hr></hr>
                <Link to="/list">LIST</Link>
                <Route path="/home" component={Home}></Route>
                <Route path="/list" component={List}></Route>

            </Router>
        </div>
    )
}
function Home() {
    useEffect(() => {
        console.log("home coming")
        return () => { console.log('home leave') }
    }, [Home])
    return <p>this is home</p>

}
function List() {
    useEffect(() => {
        console.log("list coming")
        return () => { console.log('list leave') }
    }, []

    )
    return <p>this is list</p>
}

export default CC;