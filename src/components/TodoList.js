import style from './TodoList.css'
import React from 'react';

class TodoList extends React.Component {
    constructor(props){
        super(props);        
    } 

    render() {
        let toDoList = this.props.data.map(val => {
            return (<li key={val.id} className={style.TodoList}>
                    {val.text}
                    <span className={style.usun} onClick={() => {this.props.delete(val.id)}}>Usuń</span>
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