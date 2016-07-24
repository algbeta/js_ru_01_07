import React, { Component }  from 'react';
import Comment from './Comment';

class CommentList extends Component{
    state = {
        isOpen:false
    }


    render() {
        const {comments} = this.props;
        const { isOpen } = this.state;
        let listItems, title;
        
        if(comments) {
            listItems =  isOpen ? comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>) : null;
            title = isOpen ? 'Collapse Comment list' : 'Expand comment list';
        }else{
            title = null;
            listItems = null;
        }

        return(
        <div>
            <h3 onClick = {this.toggleOpen}>{title}</h3>
            <ul>
                {listItems}
            </ul>
        </div>)
    };

    toggleOpen = (ev) =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default toggleOpen(CommentList)
