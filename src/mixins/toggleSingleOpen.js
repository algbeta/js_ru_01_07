export default {
    getInitialState() {
        //this.props
        return {
            openItemId: null
        }
    },
    toggleSingleOpen(id) {
        return function(ev) {
            if (ev) ev.preventDefault();
            this.setState({
                openItemId: id
            })
        }
    }
}