import React from 'react'
import { useDispatch} from 'react-redux';
import increment from '../action'
import decrement from '../action/decrement';

const MyButton = ()=>{
    let dispatch = useDispatch();
    return (
        <>
          <br />
          <button onClick={()=>dispatch(increment(1))}>Increase counter</button>
          <br />
          <button onClick={()=>dispatch(decrement(1))}>Decrease counter</button>
        </>
    );
}

export default MyButton;
