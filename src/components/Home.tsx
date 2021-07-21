import React from 'react';
import { useSelector } from 'react-redux';

import { IGlobalState } from '../store/modules/types';

const Home: React.FC = () => {

    const state= useSelector((state: IGlobalState) => state.users);
  return (
      <div>
          <ul>
             {state.map(( user, index ) => (
                 <li key={index}> {user.name} | {user.age} | {user.email}</li>
             ))}
          </ul>
          
      </div>
  );
}

export default Home;