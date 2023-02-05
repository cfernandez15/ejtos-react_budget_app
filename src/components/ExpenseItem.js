import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency} {props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} style={{backgroundColor: '#32de84', border: 'none', borderRadius: '70%', color: 'white', fontSize: '20px', fontWeight: 'bolder', height: '40px', width:'40px'}}>+</button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)} style={{backgroundColor: '#FF033E', border: 'none', borderRadius: '70%', color: 'white', fontSize: '20px', fontWeight: 'bolder', height: '40px', width:'40px'}}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
