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

// {
//     amounts: [0]
// }

// {
//     amounts: [1]
// }


// {
//     type: INCREMENT,
//     id: 0
// }


import {
    createStore
} from 'redux';


// Create your action types as constants so that you get error messages for typos.
// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';

// write action creator functions.
// They format your action objects
// Again, to avoid typos.

function actionIncrement(id) {
    return {
        type: 'INCREMENT',
        id
    }
}

function actionDecrement(id) {
    return {
        type: 'DECREMENT',
        id
    }
}

// "The teller" - reducer function
// reducers are always named for the state they manage
// They always receive the currect state and the action they're processing
const defaultState = { amounts: [0, 0, 0, 0, 0] }

function counter(state=defaultState, action) {
    console.log('somebody called counter()')
    const newState = {...state};

    if (action.type === 'INCREMENT') {
        newState.amounts[action.id] = state.amounts[action.id] + 1;
    } else if (action.type === 'DECREMENT') {
        newState.amounts[action.id] = state.amounts[action.id] - 1;
    } else {
        // no neeed to do anything
        // we already made a copy of thate to return
    }
    // They *must* return the new version of state.
    return newState;
}

// You give it a reducer, it gives you back a "store".
// The store is an object that manages your store using reducer
const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// "Push notifications" - subscribe to changes in the store
store.subscribe(() => {
    console.log(`The state is now:`);
    // console.table(store.getState());
    console.table(store.getState());
});

// Let's give the store some actions to process
store.dispatch(actionIncrement(0));
store.dispatch(actionIncrement(0));
store.dispatch(actionIncrement(7));
store.dispatch(actionIncrement(10));
store.dispatch(actionDecrement(4));



// store.dispatch({
//     type: 'INCREMENT',
//     id: 0
// })

// store.dispatch({
//     type: '⛷',
//     id: 0
// });

// store.dispatch({
//     type: 'INCREMENT',
//     id: 0
// });

// store.dispatch({
//     type: 'DECREMENT',
//     id: 0
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
