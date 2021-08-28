import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hide, show } from '../features/alertSlice';

const Alert = () => {
    const alertVisible = useSelector(state => state.alert.visible);
    const dispatch = useDispatch();
    console.log(alertVisible);

    return (
        <div style={{
            textAlign: 'center'
        }}>
            {alertVisible.toString()}
            <br />
            <button onClick={() => dispatch(show())}>Show</button>
            <button onClick={() => dispatch(hide())}>Hide</button>
        </div>
    );
};

export default Alert;