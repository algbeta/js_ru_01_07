import React, { Component } from 'react';
import CommentList from './CommentList';

class Article extends Component {
    state = {
        isOpen: false
    }

/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
*/

    render() {
        const article = this.props.article;
        const commentList = <CommentList comments= { article.comments} isHeaderVisible = {this.props.isOpen}></CommentList>;
//        const { article } = this.props
//    const { article: { title, text } } = props
        const { isOpen } = this.state
        const body = isOpen ? <section>{ article.text } {commentList}</section> : null

        return (
            <div>
                <h1 onClick = {this.toggleOpen}>{ article.title }</h1>
                {body}
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}



/*
function Article(props) {
    const article = props.article
//    const { article: { title, text } } = props

    return (
        <div>
            <h1>{ article.title }</h1>
            <section>{ article.text }</section>
        </div>
    )
}
*/

export default Article