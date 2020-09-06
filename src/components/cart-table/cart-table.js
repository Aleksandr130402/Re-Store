import React from 'react';

const CartTable = () => {
    return (
        <div className="cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>  
                    </tr>
                    
                </thead>
                <tbody>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tbody>
                    <tr>
                        <td>1</td>
                        <td>Site</td>
                        <td>2</td>
                        <td>$40</td>
                        <td>
                            <button className="btn btn-outline-danger ">
                                <i className="fa fa-trash-o"/>
                            </button>
                            <button className="btn btn-outline-success">
                                <i className="fa fa-plus-circle"/>
                            </button>
                            <button className="btn btn-outline-warning">
                                <i className="fa fa-minus-circle"/>
                            </button>
                        </td>
                    </tr>
            </table>
            <div className="total">
                Total: $201
            </div>
        </div>
    )
}

export default CartTable;