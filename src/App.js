import React from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

function App() {
  return (
    <div>
      <h2> Welcome to my Webside </h2>
       <AddUser/>
       <UsersList users={[]}/>
    </div>
  );
}

export default App;
// cd .m tab button then enter      