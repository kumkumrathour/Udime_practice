import React ,{useState} from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

function App() {
  const [useList ,setUsersList] =useState([]);

    const addUserHandler = (uName , uAge)=>{
      setUsersList((prevUsersList) =>{
            return [...prevUsersList ,{name:uName, age:uAge}];
      })
    }

  return (
    <div>
      <h2> Welcome to my Webside </h2>
       <AddUser onAddUser= {addUserHandler}/>
       <UsersList users={[useList]}/>
    </div>
  );
}

export default App;
// cd .m tab button then enter      