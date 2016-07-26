var TasksContainer = React.createClass({
    getInitialState: function(){
      return {
        name: 'David',
        tasks: ['Work out', 'Grocery shopping', 'Wash car'],
      }
    },
    addTask: function(task){
      this.state.tasks.push(task);
      this.setState({
        tasks: this.state.tasks
      });
    },
    render: function(){
      return (
        <div>
          <h3>To-Do list for {this.state.name} </h3>
          <AddTask addNew={this.addTask} />
          <ShowList titles={this.state.tasks} />
        </div>
      )
    }
});

var AddTask = React.createClass({
  getInitialState: function(){
    return {
      newTask: ''
    }
  },
  propTypes: {
    addNew: React.PropTypes.func.isRequired
  },
  updateNewTask: function(e){
    this.setState({
      newTask: e.target.value
    });
  },
  handleAddNew: function(){
    this.props.addNew(this.state.newTask);
    this.setState({
      newTask: ''
    });
  },
  render: function(){
    return (
        <div>
          <input type="text" value={this.state.newTask} onChange={this.updateNewTask} />
          <button onClick={this.handleAddNew}> Add Task </button>
        </div>
    );
  }
});

var ShowList = React.createClass({
  getDefaultProps: function(){
    return {
      titles: []
    }
  },
  render: function(){
    var listItems = this.props.titles.map(function(task){
      return <li> {task} </li>;
    });
    return (
        <div>
          <h3> Tasks </h3>
          <ol>
            {listItems}
          </ol>
        </div>
    )
  }
});

 
ReactDOM.render(
  <TasksContainer />,
  document.getElementById('app')
);