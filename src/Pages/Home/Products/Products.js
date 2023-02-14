/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import categories from '../../Shared/Categories';
import Product from './Product';

const Products = () => {
    const [count, setCount] = useState(228);
    const [categoryCount, setCategoryCount] = useState([])
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('All')
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(16);

    const pages = Math.ceil(count / size);
    const handleCategoryChange = event =>{
        event.preventDefault();
        const category = event.target.value;
        setCategory(category)
        
    }
    
    const URL = `http://localhost:5000/products?page=${page}&category=${category}`
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                
            })
    }, [page, category])
    
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${category}`)
        .then(res => res.json())
        .then(data => {
            setCount(data.length)
        })
    },[category])
    

    
    return (
        <div>
            <div className='text-xl mt-5'>
                <select onChange={handleCategoryChange}>
                    {
                        categories.map(category => <option
                            key={category.id}
                            value={category.name}
                            >{category.name}</option>)
                    }
                </select>
            </div>
            <div className='grid grid-cols-4 mt-12 gap-10'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }

            </div>
            <div className="pageination flex justify-center my-28">
                {
                    pages < 1 
                    ? <div>nohing</div>
                    :[...Array(pages).keys()].map(number => <button
                        key={number}
                        className={number === page
                        ? `btn my-28 ml-5 btn-primary`
                        : `btn my-28 ml-5`
                        }
                        onClick={()=> setPage(number)}
                        >{number + 1}</button>)
                    
                }
            </div>
        </div>
    );
};

export default Products;
