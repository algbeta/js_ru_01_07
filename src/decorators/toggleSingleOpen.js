import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {
    state = {
        openItemId: null
    }

    toggleSingleOpen = id => ev => {
        if (ev) ev.preventDefault()
        this.setState({
            openItemId: id
        })
    }

    render() {
        return <Component {...this.props} openItemId = {this.state.openItemId} toggleSingleOpen = {this.toggleSingleOpen}/>
    }
}

