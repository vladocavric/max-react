import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.scss';

function ExpenseItem(props) {
    const {date, amount} = props
    const [title, setTitle] = useState(props.title)
    const clickHandler = () => {
        setTitle('Updated!!!')
    }
    console.log(title)
    return (
        <Card className='expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem