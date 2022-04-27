import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Step 1 - Declare all your states
const initialState = {
    transactions: [
           { id: 1, text: 'Flower', amount: -20 },
           { id: 2, text: 'Salary', amount: 300 },
           { id: 3, text: 'Book', amount: -10 },
           { id: 4, text: 'Camera', amount: 150 }
    ]
}

// Step 2 - Create a context for the app
export const GlobalContext = createContext(initialState)

// Step 3 - Create a Provider Component (HOC) - <GlobalProvider> childern </GlobalProvider>
export const GlobalProvider = ( {children} ) => { 
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Step 4 - Define your actions
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return(
        <GlobalContext.Provider value={ {
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}