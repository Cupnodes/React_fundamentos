import React from 'react';
import Products from '../data/products';

function getProductsListItem(){
    return Products.map((prod => {
        return (<li key={prod.id}>{prod.id} - {prod.name}: {prod.price}</li>)
    }))
}
export default props => 


    <div>
        <h2>Looping</h2>
        <ul>
            {getProductsListItem()}
        </ul>
    </div>

