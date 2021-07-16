import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

 const SmurfList = (props)=> {
    const isLoading = false;
    // const testSmurf = {}
    const { smurfs } = props;

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(
    <div className="listContainer">
        {/* {smurfs.map(smurf =>{
            return(<Smurf smurf={smurf}/>)
        })} */}
        <Smurf smurf={smurfs}/>
        
    </div>);
}
const mapStateToProps = state =>{
    return({
        smurfs:state.smurf
    })
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.