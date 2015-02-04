var ToDoListItem = React.createClass({displayName: "ToDoListItem",
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
			React.createElement("li", null, 
				React.createElement("input", {type: "checkbox", id: this.props.id, className: "cb-done", checked: this.state.done, onChange: this.onDoneChange}), 
				React.createElement("label", {htmlFor: this.props.id}, this.props.title)
			)); 
	}
}) 
var ToDoList = React.createClass({displayName: "ToDoList",
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
		return (React.createElement(ToDoListItem, {id: 0, title: item.title, done: item.done}));
	},
	render: function(){
		return(
			React.createElement("div", {id: "main"}, 
				React.createElement("h1", {className: "h1"}, React.createElement("span", {className: "glyphicon glyphicon-th-list"}), " Todolist"), 
				React.createElement("div", {className: "form_wrapper input-group"}, 
					React.createElement("input", {type: "text", placeholder: "What to do?", autofocus: true, className: "form-control", value: this.state.input, onChange: this.onInput}), 
					React.createElement("span", {className: "input-group-btn"}, 
						React.createElement("button", {className: "btn btn-primary", onClick: this.onAddClick}, React.createElement("span", {className: "glyphicon glyphicon-ok"}))
					)
				), 
				React.createElement("ul", {className: "list"}, 
					this.state.items.map(this.renderItem)
				)
			));
	}
});

React.render(React.createElement(ToDoList, null), document.body);