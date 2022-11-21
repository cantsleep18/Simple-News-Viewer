import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import axios from '../node_modules/axios/index';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />;
    </>
  );
}

export default App;
