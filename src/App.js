import React, { Component } from 'react'
import uniqid from 'uniqid'
import Overview from './components/Overview'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        task: { 
          text: '',
          id: uniqid()
        },
        tasks: [],
    }
  }
  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      }
    })
  }
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid() 
      },
    })
  }
  render() {
    const { task, tasks } = this.state

    return (
      <div>
        <h1>
          Task App
        </h1>
        <p>
            Type in a task, then click the button to add it to the list.
        </p>
        <form onSubmit={this.onSubmitTask}>

            <input 
              onChange={this.handleChange}
              value={task.text}
              type='text' 
              id="taskInput"
            />
            <button type='submit'>
              Add Task
            </button>
        </form>
        <p>
          Tasks:
        </p>
          <Overview tasks={tasks} />
      </ div>
    )
  }
}

export default App
