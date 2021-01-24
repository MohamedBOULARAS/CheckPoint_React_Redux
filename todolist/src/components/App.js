import react from 'react'; 
import AddTodo from '../containers/AddTodo';
import visibleTodoList from '../containers/VisibleTodoList';

const App = () => (
    <div>
        <AddTodo />
        <visibleTodoList />
    </div>
);

export default App;