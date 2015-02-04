var ToDoListItem = React.createClass({
	getInitialState: function(){
		return {
			done: this.props.done
		};
	},
	onDoneChange: function(e){
		this.setState({done: !this.state.done});
	},
	render: function(){
		return (
			<li>
				<input type="checkbox" id={this.props.id} className="cb-done" checked={this.state.done} onChange={this.onDoneChange} />
				<label htmlFor={this.props.id}>{this.props.title}</label>
			</li>); 
	}
}) 
var ToDoList = React.createClass({
	getInitialState: function(){
		return {
			input: '',
			items: []
		};
	},
	onInput: function(e){
		this.setState({input: e.target.value})
	},
	onAddClick: function(e){
		var item = {};
		item.done=false;
		item.title=this.state.input;
		var items = this.state.items;
		items.push(item);
		this.setState({items: items, input:''});
	},
	renderItem: function(item){
		return (<ToDoListItem id={0} title={item.title} done={item.done}/>);
	},
	render: function(){
		return(
			<div id="main"> 
				<h1 className="h1"><span className="glyphicon glyphicon-th-list" /> Todolist</h1>
				<div className="form_wrapper input-group">
					<input type="text" placeholder="What to do?" autofocus className="form-control" value={this.state.input} onChange={this.onInput} />
					<span className="input-group-btn">
						<button className="btn btn-primary" onClick={this.onAddClick}><span className="glyphicon glyphicon-ok" /></button>
					</span>
				</div> 
				<ul className="list">
					{this.state.items.map(this.renderItem)}
				</ul> 
			</div>);
	}
});

React.render(<ToDoList />, document.body);