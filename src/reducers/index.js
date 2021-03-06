import {FETCH_START, FETCH_SUCCESS, FETCH_FAILED, ADD_SMURF, ERROR } from './../actions';
//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message
export const initialState = {
    smurfs:[],
    loading:false,
    error:''
}

//2. Add in the arguments needed to complete a standard reducer function.
const reducer = (state = initialState, action) => {
    switch(action.type){
//3. Add in a reducer case to accomidate the start of a smurf fetch.
        case(FETCH_START):
            return({
                ...state,
                loading:true,
                error:''
            });
//4. Add in a reducer case to accomidate the successful smurf api fetch.
        case(FETCH_SUCCESS):
            return({
                ...state,
                smurfs:action.payload,
                loading:false,
                error:''
            });
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
        case(FETCH_FAILED):
            return({
                ...state,
                smurfs:action.payload,
                loading:false,
                error:'Gargamel Destroyed All The Smurfs!!!'
            });
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
        case(ADD_SMURF):
            return({
                ...state,
                smurfs:action.payload,
                loading:false,
                error:''


            });
//7. Add in a reducer case that adds in a value to the error message.
        case(ERROR):
            return({
                ...state,
                error:'Gargamel Destroyed All The Smurfs!!!'
            });

        default:
            return state;
    }
}

export default reducer;




