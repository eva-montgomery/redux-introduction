// console.log('it is working')

// // "The bank" - state
// // Describe the ideal version of state

// {
//     amount: 100 
// }

// // if we added 1 to the amount, what would state look like?

// {
//     amount: 101
// }


// // "A transaction slip" - action

// {
//     type: 'INCREMENT'
// }

// {
//     type: 'DECREMENT'
// }

// {
//     type: '🏄'
// }


import {
    createStore
} from 'redux';


// Create your action types as constants so that you get error messages for typos.
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// write action creator functions.
// They format your action objects
// Again, to avoid typos.

function actionIncrement(howMuch=1) {
    return {
        type: INCREMENT,
        amount: howMuch
    }
}

function actionDecrement(howMuch=1) {
    return {
        type: DECREMENT,
        amount: howMuch
    }
}

// "The teller" - reducer function
// reducers are always named for the state they manage
// They always receive the currect state and the action they're processing
const defaultState = { amount: 100 }

function counter(state=defaultState, action) {
    console.log('somebody called counter()')
    const newState = {...state};

    switch(action.type) {
        case INCREMENT:
            newState.amount = state.amount + action.amount;
            break;
        case DECREMENT:
            newState.amount = state.amount - action.amount;
            break;
        default:
            break;
    }


    // if (action.type === 'INCREMENT') {
    //     newState.amount = state.amount + action.amount;
    // } else if (action.type === 'DECREMENT') {
    //  newState.amount = state.amount - action.amount;
    // } else {
    //     // no neeed to do anything
    //     // we already made a copy of thate to return
    // }
    // They *must* return the new version of state.
    return newState;
}

// You give it a reducer, it gives you back a "store".
// The store is an object that manages your store using reducer
const store = createStore(counter);
// "Push notifications" - subscribe to changes in the store
store.subscribe(() => {
    console.log(`The state is now:`);
    // console.table(store.getState());
    console.table(store.getState());
});

// Let's give the store some actions to process
store.dispatch(actionIncrement());
store.dispatch(actionDecrement());


store.dispatch(actionIncrement(5));
store.dispatch(actionDecrement(99));
 


// store.dispatch({
//     type: 'INCREMENT',
//     amount: 'garbage'
// })

// store.dispatch({
//     type: '⛷'
// });

// store.dispatch({
//     type: 'INCREMENT'
// });

// store.dispatch({
//     type: 'DECREMENT'
// });




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
