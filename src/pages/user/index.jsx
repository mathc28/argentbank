import React from 'react';

import Greetings from '../../components/greetings';
import Accounts from '../../components/accounts';

import './style.css';


const User = () => {
  return (
    <div className='backgroundcolor'>
      <Greetings />   
      <Accounts />
    </div>
  );
};

export default User;