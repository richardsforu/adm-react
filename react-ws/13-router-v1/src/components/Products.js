import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then(response => {
                setProducts(response.data);
            })
    })

    function renderProducts() {
        return products.map((product, index) => {
            return (
                <tr key={index}>
                    <td>
                        <Link to={`/edit/${product.id}`} >
                            {product.id}
                        </Link>
                    </td>

                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>


                </tr>
            )
        })
    }

    return (
        <div>
            <h1>Products</h1>

            <table className="table">
                <tbody>
                    {renderProducts()}

                </tbody>
            </table>




        </div>
    );
};

export default Products;