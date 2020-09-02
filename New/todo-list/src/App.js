import React from 'react';
import Uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
      <div>
          <div className="container">
            <TodoInput/>
              <TodoList/>
          </div>
      </div>
  );
}

export default App;
