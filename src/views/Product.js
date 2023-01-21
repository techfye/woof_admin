import { React } from 'react'
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import PulseLoader from '../components/PulseLoader';

import { useSelector, useDispatch } from 'react-redux';

const { deleteProduct } = require('../actions/productActions');

const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.Product.products);
    const Loading = useSelector(state => state.Product.loading);


    const handleDeleteProduct = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteProduct(id));
        }
    }

    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
            sortable: true,
            width: '70px'
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'category',
            selector: row => row.category,
        },
        {
            name: 'Tags',
            cell: row => <div className='d-flex flex-wrap'>{
                row.role
            }</div>,
        },
        
        {
            name: 'Price',
            selector: row => row.price,
        },
        {
            name: 'Action',
            cell: row => <div className="dropdown">
                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bx bx-dots-vertical-rounded"></i>
                </button>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to={{
                        pathname: `/products/edit-product/${row.id}`
                    }}><i className="bx bx-edit-alt me-1"></i>Edit</Link>
                    <div className="dropdown-item" onClick={() => {handleDeleteProduct(row.prodId)}} ><i className="bx bx-trash me-1"></i>Delete</div>
                </div>
            </div>,
            width: '100px',
        },
    ];

    const data = products.map(product => {
        return {
            prodId: product._id,
            id: product.id,
            name: product.name,
            category: product.category ? product.category.name : 'Uncategorized',
            role: product.tags.map(tag => <div className="badge bg-label-primary me-1 my-1" key={tag._id} >{tag.name}</div>),
            price: product.price,
        }
    })
            
    return (
            <>
                <div className="content-wrapper container-fluid">
                    {
                        Loading ? (<PulseLoader />) : (
                            <div className="row p-5">
                                <div className="card">
                                    <div className='d-flex justify-content-between'>
                                        <h5 className="card-header">All Products</h5>
                                        <div>
                                            <Link to='/products/add-product' className="btn btn-outline-primary my-3">
                                                <span className="tf-icons bx bx-plus-circle"></span>&nbsp; Add Product
                                            </Link>

                                        </div>
                                    </div>
                                    <div className="table-responsive text-nowrap">
                                        <DataTable  columns={columns} data={data} defaultSortAsc='true' pagination responsive='true' />
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    <div className="content-backdrop fade"></div>
                </div>
            </>
    )
}

export default Product