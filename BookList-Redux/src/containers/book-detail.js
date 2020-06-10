import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
             return <div>Select book</div>
        }
        return (
            <div>
                <p>{this.props.book.title}</p>
            </div>
            )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activebook
    }
}

export default connect(mapStateToProps)(BookDetail);