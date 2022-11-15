import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props)=>{
    const [enteredUsername , setEnteredUsername] = useState('');
    const [enteredUserage , setEnteredUserage] = useState('');
    const addsubmitHandler = (event) =>{
          event.preventDefault();
          if(enteredUsername.trim().length === 0 || enteredUserage.trim().length ===0 ){
            return ;
          }

          if(+enteredUserage<1){
            return ;
          }
       console.log(enteredUsername ,enteredUserage)
          props.onAddUser(enteredUsername ,enteredUserage);
          setEnteredUsername("");
          setEnteredUserage("");
   }
   const usernameChangeHandler = (event) =>{
    setEnteredUsername(event.target.value);
   };
   const userageChangeHandler = (event) =>{
    setEnteredUserage(event.target.value);
   };
    return (
        <div>
            <ErrorModal title="error occure" message="somethink wentwrong"/>
        <Card className={classes.input}>
        <form onSubmit={addsubmitHandler}>
             <label htmlFor='username'>Username</label>
             <input type='text' id="usename" value={enteredUsername} onChange={usernameChangeHandler} ></input>
             <label htmlFor='age'>Age(Year)</label>
             <input type='number' id="age" value={enteredUserage} onChange={userageChangeHandler}></input>
             <Button type='submit'> Add User </Button>
        </form>
        </Card>
        </div>
    )
}
export default AddUser ;