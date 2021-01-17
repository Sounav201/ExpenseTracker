import React , {useReducer , createContext } from 'react'
import contextReducer from './contextReducer'

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ( {children}) => {
    
    const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":150,"category":"Bills","type":"Expense","date":"2021-01-28","id":"f7f28f7b-0e4c-4894-9aef-099dbfb1e9d3"},{"amount":250,"category":"Apparel","type":"Expense","date":"2021-01-29","id":"c8ed4ea8-c0f1-420f-8373-fd61d891b13b"},{"amount":100,"category":"Travel","type":"Expense","date":"2021-01-17","id":"727cffed-4a98-4c55-9ffc-61f4a90d7266"},{"amount":750,"category":"Business","type":"Income","date":"2021-01-18","id":"0acd3218-d289-4df4-b31f-5dd86e388351"},{"amount":1500,"category":"Salary","type":"Income","date":"2021-01-17","id":"d24d6b4f-ac1f-406e-bc97-89979a8075e6"}]	

    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

    //Action Creators
    const deleteTransaction = (id) => {
        dispatch({type: 'DELETE_TRANSACTION' , payload:id});
    }
    const addTransaction = (transaction) => {
        dispatch({type:'ADD_TRANSACTION' , payload:transaction});
    }

    //console.log(transactions);

    return (
        <ExpenseTrackerContext.Provider value = {{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
