var ToDoListItem = React.createClass({displayName: "ToDoListItem",
	getInitialState: function(){
		return {
			done: false
		};
	},
	onDoneChange: function(e){
		this.setState({done: !e.target.checked});
	},
	render: function(){
		return React.createElement("li", null, 
			React.createElement("input", {type: "checkbox", id: this.props.id, className: "cb-done", defaultChecked: this.state.done, onChange: this.onDoneChange}), 
			React.createElement("label", {htmlFor: this.props.id}, this.props.title)
		); 
	}
}) 
var ToDoList = React.createClass({displayName: "ToDoList",
	render: function(){
		return React.createElement("div", {id: "main"}, 
      		React.createElement("h1", {className: "h1"}, React.createElement("span", {className: "glyphicon glyphicon-th-list"}), " Todolist"), 
      		React.createElement("div", {className: "form_wrapper input-group"}, 
        		React.createElement("input", {type: "text", name: "123", placeholder: "What to do?", autofocus: true, required: true, size: "27", className: "form-control"}), 
          		React.createElement("span", {className: "input-group-btn"}, 
            		React.createElement("button", {className: "btn btn-primary"}, React.createElement("span", {className: "glyphicon glyphicon-ok"}))
          		)
      		), 
       		React.createElement("ul", {className: "list"}, 
       			React.createElement(ToDoListItem, {id: 0, title: 'Milk'}), 
       			React.createElement(ToDoListItem, {id: 1, title: 'Cow'})
       		)
    		);
	}
});

React.render(React.createElement(ToDoList, null), document.body);