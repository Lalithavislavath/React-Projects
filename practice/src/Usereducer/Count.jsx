import { useReducer } from "react"
function Counteducer(state,action) {
    switch(action.type){
        case 'increment':
            return{count:state.count+1}
        case 'decrement':
              return{count:state.count-1}
        default:
            return state
    }
    
}
  const Count=()=>{
    const[state,dispatch]=useReducer(Counteducer,{count:0})
    return(
        <div>
            <p>{state.count}</p>
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
        </div>
    )
  }
  export default Count