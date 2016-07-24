import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import { connect } from 'react-redux'

class CommentList extends Component {



    componentWillMount() {
        console.log('---', this.props)
    }
    componentDidMount() {
        console.log('---', 'mounted', this.refs.toggler)
    }

    componentWillReceiveProps(nextProps) {
        console.log('---', this.props.isOpen, nextProps.isOpen)
    }

    componentWillUnmount() {
        console.log('---', 'unmounting')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen != this.props.isOpen
    }

    render() {
        debugger;
        const { commentObjects, isOpen, toggleOpen, createCommentHandler } = this.props
        const formBody = isOpen ? (<form><input type="text" placeholder="author" ref="author"/><input type="text" ref="text" placeholder="text"/><input type="button" onClick={createCommentHandler} value="submit comment"/></form>) : null

        if (!commentObjects || !commentObjects.length) return (<div><h3>no comments yet</h3>{formBody}</div>)

        const commentItems = commentObjects.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)
        const body = isOpen ? <ul>{commentItems}</ul> : null
        const linkText = isOpen ? 'close comments' : 'show comments'
        return (
            <div>
                <a href="#" onClick = {toggleOpen} ref="toggler">{linkText}</a>
                {body}
                {formBody}
            </div>
        )
    }
}

export default connect((state, { comments }) => {
    return {
        commentObjects: comments.map(id => state.comments.get(id))
    }
})(toggleOpen(CommentList))