import React from 'react';
import profile from './profile/profile.json';
import Profile from './profile/Profile';
import statisticalData from './statistical/statisticalData.json';
import Statistics from './statistical/Statistics';
import friends from './friendslist/friends.json';
import FriendsList from './friendslist/Friendslist';
import transactions from './transactionhistory/transactions.json';
import TransactionHistory from './transactionhistory/TransactionHistory';

const App = () => (
  <>
    <Profile users={profile} />
    <Statistics items={statisticalData} />
    <FriendsList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
