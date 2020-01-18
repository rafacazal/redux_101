import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleNewTodo, sendTodosToServer } from '../../actions/todoActions';
import { cleanCurrentTodo, setCurrentTodo } from '../../actions/currentTodoActions';

class Todo extends Component {
  handleChange = ({ target }) => {
    this.props.setCurrentTodo(target.value);
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { currentTodo, handleNewTodo, cleanCurrentTodo, sendTodosToServer, todoList } = this.props;

    handleNewTodo(currentTodo);
    cleanCurrentTodo();

    await sendTodosToServer(todoList);
  };

  listTodo = () => {
    const { todoList } = this.props;

    if (todoList.length === 0) return null;

    return todoList.map((item, index) => <li key={index}>{item}</li>);
  };

  render() {
    console.log(this.props);

    return (
      <div style={{ margin: '20px' }}>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.props.currentTodo} />

          <button type="submit">ADD TODO</button>

          <div>
            <ul>{this.listTodo()}</ul>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ todoList, currentTodo }) => ({ todoList, currentTodo });

export default connect(mapStateToProps, {
  handleNewTodo,
  cleanCurrentTodo,
  setCurrentTodo,
  sendTodosToServer
})(Todo);
