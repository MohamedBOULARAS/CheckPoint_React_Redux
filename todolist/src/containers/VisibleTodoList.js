import { connect } from 'react-redux';
import  { VisibilityFilters } from '../actions';
import TodoList from '../components/TodoList.js';

const getvisibleTodos = (todos, filter) => {
  switch (filter) {
      case VisibilityFilters.SHOW_ALL:
          return todos;
      case VisibilityFilters.SHOW_COMPLETED:
          return todos.filter(task => task.completed);
      case VisibilityFilters.SHOW_ACTIVE:
          return todos.filter(task => !task.completed);
      default:
          throw new Error('unknowm filter: '+ filter);

    }
}

const mapStateToProps = state => ({
    todos: getvisibleTodos(state.todos, state.visibility)
});

/*
const mapDispatchToProps = dispatch => (
    toggeleTodo id => dispatch(toggelTodo(id))
);
*/


export default connect(
    mapStateToProps
)(TodoList);