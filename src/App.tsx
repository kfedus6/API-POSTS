import React from 'react';
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';
import { useTypedSelector } from './hooks/useTypedSelector';
import './styles/app.css';

const App = () => {

   const { error } = useTypedSelector(state => state.post);

   return (
      <div className="app">
         <PostForm />
         {error ? <h1 className='post__error'>{error}</h1> : <PostsList />}
      </div>
   );
}

export default App;
