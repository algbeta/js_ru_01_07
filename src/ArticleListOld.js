import React, { Component }  from 'react'
import Article from './ArticleOld'
import toggleSingleOpen from './mixins/toggleSingleOpen'

const ArticleList = React.createClass({
    mixins: [toggleSingleOpen],
    render() {
        const {articles} = this.props;

        const listItems = articles.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id == this.state.openItemId}
                     toggleSingleOpen={this.toggleSingleOpen(article.id)}
            />
        </li>)
        return (
            <div>
                <h1>Article list</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
})

export default ArticleList