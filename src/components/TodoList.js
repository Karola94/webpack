import React from 'react';

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                id: 1,
                    text: 'clean room'
                }, {
                id: 2,
                    text: 'wash the dishes'
                }, {
                id: 3,
                    text: 'feed my cat'
            }]
        };
    }  

    render() {
        let toDoList = this.state.data.map(val => {
            return (<li key={val.id}>
                    {val.text}
                    <span >Usuń</span>
                </li>);
        });
        return (
            <ul>
                {toDoList}
            </ul>
        );
    }
}

export default TodoList;