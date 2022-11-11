import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css'
const AddUser = (props)=>{
    const [enteredUsername , setUsername] = useState('');
    const [enteredUserage , setUserage] = useState('');
   const addsubmitHandler = (event) =>{
          event.preventDefault();
          console.log(enteredUsername , enteredUserage);
   }
   const usernameChangeHandler = (event) =>{
    setUsername(event.target.value);
   }
   const userageChangeHandler = (event) =>{
    setUserage(event.target.value);
   }
    return (
        <Card className={classes.input}>
        <form onSubmit={addsubmitHandler}>
             <label htmlFor='username'>Username</label>
            <input type='text' id="usename" onChange={usernameChangeHandler} ></input>
            <label htmlFor='age'>Age(Year)</label>
            <input type='number' id="age" onChange={userageChangeHandler}></input>
            <Button type='submit'> Add User </Button>
        </form>
        </Card>
    )
}
export default AddUser ;