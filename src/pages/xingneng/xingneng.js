import React, { useState, useMemo, useRef ,useEffect,useCallback} from 'react'
import {Input,Button, Icon, List} from 'antd'

import 'antd/dist/antd.css'
function Comein() {
    
    const [zls, zlsdo] = useState(['silver', 'brown', 'firebrick'])
    const [jyp, jypdo] = useState('lovejyp')
    const inputRef = useRef()
    const getRef = () => {
        inputRef.current.value = 'getRef'
        console.log(inputRef)
    }
    useEffect(()=>{
        inputRef.current.value=jyp;
        console.log(inputRef)
    })
    return (

        <div>
            {zls.map((item, index) => {
                return <button id={item + index}>{item}</button>
            })}
            <button onClick={() => zlsdo('zls come' + new Date().getTime())}>{zls[2]}</button>
            <Button onClick={() => jypdo('jyp come' + new Date().getTime())}>{jyp}</Button>
            
          
            <button onClick={getRef}>click me</button>
            <Son name={zls[2]} ></Son>
            <UseSize></UseSize>
            <hr></hr>
            <Input ref={inputRef} type='text'  style={{width:'100px'}} />
            <Icon type='home' theme='twoTone' twoToneColor='pink'></Icon>
            <List dataSource={zls} bordered={true} renderItem={item=>(<List.Item >{item}</List.Item>)} style={{width:'100px'}}></List>
        </div>
    )
}
function Son({ name }) {
    function sonzls(name) {
        console.log('zls')
        return name + '```````````'
    }
    const three = useMemo(() => sonzls(name), [name]);
    return (
        <div>
            <div>{three}</div>
        </div>
    )
}

function UseSize(){
    const [size,setSize]=useState({
        height:document.documentElement.clientHeight,
        width:document.documentElement.clientWidth
    })
    const resize=useCallback(() => {
        setSize({
            height:document.documentElement.clientHeight,
            width:document.documentElement.clientWidth
        })           
        },[])
    useEffect(()=>{
        window.addEventListener('resize',resize)
        return ()=>{window.removeEventListener('resize',resize)}
    },[])
    return <div>{size.width}x{size.height}</div>
}
export default Comein