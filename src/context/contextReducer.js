/* eslint-disable no-unused-vars */


const transactions =[
    {id :1},
    {id:2}
]

const contextReducer = (state, action) => {

    let transactions;

    switch (action.type) {

        case 'DELETE_TRANSACTION':

            transactions = state.filter((transaction)=>transaction.id !== action.payload);
            return transactions;

        case 'ADD_TRANSACTION':

            transactions = [action.payload, ...state];
            return transactions;
    
        default:
            return state;
    }

}

export default contextReducer;