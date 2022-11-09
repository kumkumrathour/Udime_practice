import React from 'react';

const AddUser = (props)=>{
   const addsubmitHandler = (event) =>{
          event.preventDefault();
   }
    return (
        <card>
        <form onSubmit={addsubmitHandler}>
             <label htmlFor='username'>Username</label>
            <input type='text' id="usename" ></input>
            <label htmlFor='age'>Age(Year)</label>
            <input type='number' id="age" ></input>
            <button> Add User </button>
        </form>
        </card>
    )
}
export default AddUser ;