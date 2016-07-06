import React  from 'react';

function Comment(props)  {
    const { comment } = props;
    return (
        <div>
            <span>{comment.user}</span>
            <p>{comment.text}</p>
        </div>
    );
}

export default Comment;