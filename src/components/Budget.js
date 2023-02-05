import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);

    const updateBudgetInput = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);    
        if (event.target.value > 20000) {
            alert('The budget cannot exceed 20000');
            event.target.value = 20000;
        }
        if (event.target.value < totalExpenses) {
            alert('Budget cannot be lower than total spent');
            event.target.value = totalExpenses;
        }
        dispatch({type: 'SET_BUDGET', payload: event.target.value});
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input type="number" defaultValue={budget} onChange={(event) => updateBudgetInput(event)} step="10"></input></span>
        </div>
    );
};



export default Budget;
