var ToDoListItem = React.createClass({
	getInitialState: function(){
		return {
			done: false
		};
	},
	onDoneChange: function(e){
		this.setState({done: !e.target.checked});
	},
	render: function(){
		return <li>
			<input type="checkbox" id={this.props.id} className="cb-done" checked={this.state.done} onChange={this.onDoneChange}/>
			<label htmlFor={this.props.id}>{this.props.title}</label>
		</li>; 
	}
}) 
var ToDoList = React.createClass({
	render: function(){
		return <div id="main"> 
      		<h1 className="h1"><span className="glyphicon glyphicon-th-list" /> Todolist</h1>
      		<div className="form_wrapper input-group">
        		<input type="text" name="123" placeholder="What to do?" autofocus required size="27" className="form-control" />
          		<span className="input-group-btn">
            		<button className="btn btn-primary"><span className="glyphicon glyphicon-ok" /></button>
          		</span>
      		</div>    
       		<ul className="list">
       			<ToDoListItem  id={0} title={'Milk'} />
       			<ToDoListItem  id={1} title={'Cow'} />
       		</ul> 
    		</div>;
	}
});

React.render(<ToDoList />, document.body);