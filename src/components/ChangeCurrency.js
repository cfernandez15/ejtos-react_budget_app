import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = (props) => {
    const {dispatch} = useContext(AppContext);
    
    const changeCurrency2 = (event) => {
        dispatch({type: 'CHG_CURRENCY', payload: event.target.value,});
    }

    return (
        <div className='alert alert-success'>
            <span>Currency: 
            <select className="form-select text-dark" style={{backgroundColor: '#4FFFB0'}} aria-label="Default select example" onChange={(event) => changeCurrency2(event)}>
                <option value="£" className='hoverWhite'>£ Pound</option>
                <option value="$" className='hoverWhite'>$ Dollar</option>
                <option value="€" className='hoverWhite'>€ Euro</option>
                <option value="₹" className='hoverWhite'>₹ Ruppee</option>
            </select>
            </span>
        </div>
    );
};

export default ChangeCurrency;