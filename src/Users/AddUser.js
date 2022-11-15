import React, {useState , useRef} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
const AddUser = (props)=>{
    const nameInputRef = useRef();
    const ageInputRef = useRef();


    const [enteredUsername , setEnteredUsername] = useState('');
    const [enteredUserage , setEnteredUserage] = useState('');
    const [error , setError] = useState();

    const addsubmitHandler = (event) =>{
          event.preventDefault();
          // console.log(nameInputRef.current.value ,ageInputRef);
          const enteredName = nameInputRef.current.value;
          const  enteredUserAge = ageInputRef.current.value;
          if(enteredName.trim().length === 0 || enteredUserAge.trim().length ===0 ){
            setError({
              title:'valid error',
              message :'please enter the valid name '
            })
            return ;
          }

          if(+enteredUserAge<1){
            setError({
              title:'valid age ',
              message:'please entered a valid age'            })
            return ;
          }
       console.log(enteredUsername ,enteredUserage)
          props.onAddUser(enteredName ,enteredUserAge);
          setEnteredUsername("");
          setEnteredUserage("");
   }
   const usernameChangeHandler = (event) =>{
    setEnteredUsername(event.target.value);
   };
   const userageChangeHandler = (event) =>{
    setEnteredUserage(event.target.value);
   };
   const errorHandler = () =>{
    setError(null);
   }
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addsubmitHandler}>
             <label htmlFor='username'>Username</label>
             <input type='text' 
             id="usename" 
             value={enteredUsername} 
             onChange={usernameChangeHandler} 
             ref={nameInputRef}
             ></input>
             <label htmlFor='age'>Age(Year)</label>
             <input type='number'
              id="age" value={enteredUserage} 
              onChange={userageChangeHandler}
              ref={ageInputRef}
              ></input>
             <Button type='submit'> Add User </Button>
        </form>
        </Card>
        </Wrapper>
    )
}
export default AddUser ;