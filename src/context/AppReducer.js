/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch(action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter( transaction => transaction.id !== action.payload )
            }

        default:
            return state;
    }
}

// AppReducer --> Managing all the functionalities that changes the state