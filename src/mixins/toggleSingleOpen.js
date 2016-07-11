export default {
    getInitialState() {
        //this.props
        return {
            openItemId: null,
            isOpen: false
        }
    },
    toggleOpen(itemId) {
        this.setState({
            openItemId: itemId,
            isOpen: itemId != this.state.openItemId || !this.state.isOpen
        })
    }
}