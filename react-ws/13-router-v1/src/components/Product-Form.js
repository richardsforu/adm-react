import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'


const ProductForm = (props) => {

    const [product, setProduct] = useState({
        id: '',
        name: '',
        price: 0.0,
        description: ''
    })

    const [isEdit, setIsEdit] = useState(false);

    let { params } = props.match;
    let { id } = params;

    useEffect(() =>{
        if(params.id){
            console.log(">>>>> EDIT");
            axios.get(`http://localhost:8080/api/products/${id}`)
            .then(response=>response.data)
            .then(product=>{
                setProduct(product);
                setIsEdit(true);
            })
        }else{
            console.log(">>> Save");
        }
    },[])


    function handleSubmit(e) {
        e.preventDefault();
        console.log(product);
        // if alll validations are pass through

        axios.post('http://localhost:8080/api/products', product)
            .then(response => {
                <Redirect to={
                    { pathname: "/listAll" }
                } />
            })


    }

    function handleChange(e) {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value })
        // console.log(name +' '+value);
    }



    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="col-5">
                    <div className="form-group">
                        <label htmlFor="">Product ID</label>
                        <input type="text" name="id"
                            className="form-control"
                            onChange={e => handleChange(e)}
                            value={product.id}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Product Name</label>
                        <input type="text" name="name"
                            className="form-control"
                            onChange={e => handleChange(e)}
                            value={product.name}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Product Price</label>
                        <input type="text" name="price"
                            className="form-control"
                            onChange={e => handleChange(e)}
                            value={product.price}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Product Description</label>
                        <textarea name="description"
                            className="form-control"
                            onChange={e => handleChange(e)}
                            value={product.description}
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary">Save</button>
                        <button type="reset" className="btn btn-info">Clear All</button>
                        <button type="button" className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </form>




        </div>
    );
};

export default ProductForm;