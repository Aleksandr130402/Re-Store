import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import './book-list.css';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import compose from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BookList = ({books, onAddedToCart }) => {
    
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem 
                            book={book}
                            onAddedToCart={() => onAddedToCart(book.id)}
                            />
                        </li>
                    )
                })
            }
        </ul>
    ) 
}

class BookListContainer extends Component {

    

    componentDidMount() {
       
        this.props.fetchBooks()    

    }
    
    render() {
        const {books, loading, error, onAddedToCart, cartItems} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <BookList onAddedToCart={onAddedToCart} books={books}/>
    }
};


const mapStateToProps = ( {books, loading, error, cartItems} ) => {
    return {books, loading, error, cartItems};
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks : fetchBooks(dispatch, bookstoreService),
        onAddedToCart : (id) => dispatch(bookAddedToCart(id))
    };
};


export default compose(
withBookstoreService(),
connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
