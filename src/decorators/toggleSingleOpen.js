import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {
    state = {
        openItemId: null,
        isOpen: false
    }

    toggleSingleOpen = id => ev => {
        if (ev) ev.preventDefault();
        //Это усложняет использование. Достаточно просто сделать openItemId === null что б закрыть
        this.setState({
            openItemId: id,
            isOpen: id != this.state.openItemId ||  !this.state.isOpen
        })
    }

    render() {
        return <Component {...this.props} openItemId = {this.state.openItemId} isOpen = {this.state.isOpen} toggleSingleOpen = {this.toggleSingleOpen}/>
    }
}

