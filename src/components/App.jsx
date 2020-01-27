import React from 'react';
import items from '../db/publications.json';
import Reader from './reader/Reader';

const App = () => <Reader items={items} />;

export default App;
