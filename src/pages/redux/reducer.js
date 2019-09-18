
const data ={
    name:'zls',
    age:'18',
    hobby:['flower','money','car']
};
const reducerDo=(state=data,action)=>{
    switch (action.type) {
        case 'change':
            let newState=JSON.parse(JSON.stringify(state))//深度拷贝
            newState.name=action.value
            return newState   
            case 'bt':
                let newbt=JSON.parse(JSON.stringify(state))//深度拷贝
                newbt.hobby.push(state.name)
                newbt.name=''
                return newbt  
                case 'delete':
                    let newdel=JSON.parse(JSON.stringify(state))//深度拷贝
                    console.log(newdel) 
                    newdel.hobby.splice(action.index,1)  
                                    
                    return newdel  
        default:
            return state; 
    }
    
}
export default reducerDo;