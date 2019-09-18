import React, { Component } from 'react';
import { Button, List, Input } from 'antd'
import Store from './store'


class PageA extends Component {
    constructor(props) {
        super(props);
        this.state = Store.getState()
        Store.subscribe(this.fresh) 
    }
    fresh=()=>{
        this.setState(Store.getState())
    }
    change = (e) => {
        let midValue = {
            type: 'change',
            value: e.target.value
        }
        Store.dispatch(midValue)
    }
    bt=()=>{
        let btn={
            type:'bt',            
        }
        Store.dispatch(btn)
    }
    delete=(index)=>{
        let dele={
            type:'delete',
            index:index
        }
        
        Store.dispatch(dele)
    }
    render() {
        return (
            
            <div style={{ width: '500px', margin: '10px' }}>
                <Input value={this.state.name} style={{ width: '100px', margin: '10px 10px' }}
                    onChange={this.change}
                    placeholder={this.state.name}
                >
                </Input>
                <Button onClick={this.bt}>press me</Button>
                <List bordered dataSource={this.state.hobby} renderItem={(item,index) => <List.Item  onClick={this.delete.bind(this,index)}>{item}</List.Item>} style={{ width: '100px', margin: '10px 10px' }}></List>
            </div>
            

        );
    }
}

export default PageA;