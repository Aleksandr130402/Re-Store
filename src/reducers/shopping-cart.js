const updateCartItem = (book, item = {}, quantity) => {
    const {
        id = book.id,
        title = book.title,
        count = 0,
        total = 0 } = item;
    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    };
};

const updateCartItems = (state, index, item) => {
    if (item.count < 1) {
        return [
            ...state.slice(0, index),
            ...state.slice(index + 1)
        ]
    }
    if (index === -1) {
        return [
            ...state,
            item
        ]
    } else {
        return [
            ...state.slice(0, index),
            item,
            ...state.slice(index + 1)
        ]
    }
};

const updateOrder = (state, bookId, quantity) => {
    const {bookList: {books}, shoppingCart : {cartItems}} = state;

    const book = books.find(({id}) => id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(book, item, quantity);

    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, itemIndex, newItem)
    };
}

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }
    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            
            return updateOrder(state, action.payload, 1);
                        
        case 'BOOK_REMOVED_FROM_CART': 
            
            return updateOrder(state, action.payload, -1);

        case 'ALL_BOOKS_REMOVED_FROM_CART': 
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);

            return updateOrder(state, action.payload, -item.count);

        default: return state.shoppingCart;    
    }
}

export default updateShoppingCart;