import { Component } from 'react/cjs/react.production.min';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        task: { text: ''},
        tasks: []
    }
  }
  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      }
    })
  }
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' },
    })
  }
  render() {
    const { task, tasks } = this.state;
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
            <input 
              type='submit'
              value="Add Task"
            />
        </form>
        <p>
          Tasks:
        </p>
        <ul>

        </ul>
      </ div>
    )
  }
}

export default App;
