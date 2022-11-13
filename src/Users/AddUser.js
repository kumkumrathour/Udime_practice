import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css'
const AddUser = (props)=>{
    const [enteredUsername , setEnteredUsername] = useState('');
    const [enteredUserage , setEnteredUserage] = useState('');
   const addsubmitHandler = (event) =>{
          event.preventDefault();
          if(enteredUsername.trim().length === 0 || +enteredUserage<18 ){
            return ;
          }

          props.onAddUser(enteredUsername ,enteredUserage);
          setEnteredUsername("");
          setEnteredUserage("");
   }
   const usernameChangeHandler = (event) =>{
    setEnteredUsername(event.target.value);
   }
   const userageChangeHandler = (event) =>{
    setEnteredUserage(event.target.value);
   }
    return (
        <Card className={classes.input}>
        <form onSubmit={addsubmitHandler}>
             <label htmlFor='username'>Username</label>
            <input type='text' id="usename" value={enteredUsername} onChange={usernameChangeHandler} ></input>
            <label htmlFor='age'>Age(Year)</label>
            <input type='number' id="age" value={enteredUserage} onChange={userageChangeHandler}></input>
            <Button type='submit'> Add User </Button>
        </form>
        </Card>
    )
}
export default AddUser ;