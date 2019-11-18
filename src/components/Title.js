import style from './Title.css';
import React from 'react';

class Title extends React.Component {
   
    render() {
        const {listLength} = this.props;
        return (
            <div className={style.Title}>
                <div>Todo's list <span className="badge badge-warning">{listLength}</span></div>                
            </div>
        );
    }
}

export default Title;