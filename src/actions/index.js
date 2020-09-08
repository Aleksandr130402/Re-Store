const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SECCESS',
        payload: newBooks
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error 
    }
}

export const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

export const bookIncrease = (itemId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: itemId
    }
}

export const bookDecrease = (itemId) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: itemId
    }
}
export const bookDelete = (itemId) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: itemId
    }
}
const fetchBooks = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)))
    }

export {
    fetchBooks
};