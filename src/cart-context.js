import React, {createContext,useContext,useReducer} from "react";


const cartContext= React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item) => {},
    remeoveItem: (id)=>{},
    clearItem:() => {}
});

// export const StateProvider= ({reducer,initialState,children})=>{
//     <StateContext.Provider value={useReducer(reducer,initialState)}>
//         {children}
//     </StateContext.Provider>
// }


// export const useStateValue= ()=>useContext(StateContext);

export default cartContext;                            
