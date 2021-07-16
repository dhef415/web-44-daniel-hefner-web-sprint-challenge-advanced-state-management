import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurfs = (id)=>{
    return((dispatch)=>{
        dispatch(fetchStart())
        axios.get(`http://localhost:3333/smurfs/:id`)
            .then((res)=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
    })
}

export const fetchStart = () => {
    return({type:FETCH_START});
}

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const addSmurf = (smurfs) => {
    return({type:ADD_SMURF, payload:smurfs});
}

//3. Add a standard action that allows us to set the value of the error message slice of state.
export const setErrorMessage = (error) => {
    return({type:ERROR, payload:error});
}