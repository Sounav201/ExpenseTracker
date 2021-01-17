//Reducer => a function that takes in the old state, and an action  => new state

const contextReducer = (state,action)=> {
    let transactions;
    switch (action.type) {
        case 'DELETE_TRANSACTION':
             transactions = state.filter((temp) => temp.id !== action.payload );
             //console.log("DELETE SELECTED")  
             localStorage.setItem('transactions' ,JSON.stringify(transactions))
            return  transactions

        case 'ADD_TRANSACTION' :
             transactions = [action.payload,...state]
//             console.log(transactions)
             localStorage.setItem('transactions' ,JSON.stringify(transactions))

             return transactions
    
        default:
            //console.log("DEFAULT SELECTED")
          return state;
          
    }
    
}


export default contextReducer