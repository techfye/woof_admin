import { React, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import './Sidebar.css'
import { useDispatch } from 'react-redux';
const { getCategories } = require('../../actions/categoryActions');
const { getProducts } = require('../../actions/productActions');
const { getTags } = require('../../actions/tagsAction');

const Sidebar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
        dispatch(getTags());
    }, []);

    const currentUrl = window.location.pathname;
    return (
        <>
            <Navbar/>
            <div className="nav" id="navbar">
            <nav className="nav__container">
                <div>
                    <Link to="/" className="nav__link nav__logo">
                        <i className='bx bxs-disc nav__icon' ></i>
                        <span className="nav__logo-name">Pet App    </span>
                    </Link>
    
                    <div className="nav__list">
                        <div className="nav__items">
                            <h3 className="nav__subtitle">Profile</h3>
    
                            <Link to="/" className={
                                currentUrl === '/' ? 'nav__link active' : 'nav__link'
                            }>
                                <i className='bx bx-home nav__icon' ></i>
                                <span className="nav__name">Dashboard</span>
                            </Link>
                            
                            <Link to="/categories" className={
                                currentUrl === '/categories' ? 'nav__link active' : 'nav__link'
                            } >
                                <i className='bx bx-category nav__icon' ></i>
                                <span className="nav__name">Categories</span>
                            </Link>
                            <Link to="/tags" className={
                                currentUrl === '/tags' ? 'nav__link active' : 'nav__link'
                            } >
                                <i className='bx bx-category nav__icon' ></i>
                                <span className="nav__name">Tags</span>
                            </Link>

                            <Link to="/products" className={
                                currentUrl === '/products' ? 'nav__link active' : 'nav__link'
                            } >
                                <i className='bx bx-user nav__icon' ></i>
                                <span className="nav__name">Products </span>
                            </Link>

                            <div className="nav__dropdown">
                                <Link to="/" className="nav__link">
                                    <i className='bx bx-store-alt nav__icon' ></i>
                                    <span className="nav__name">Menu</span>
                                    <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                </Link>

                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                        <Link to="/customer/wholeseller" className="nav__dropdown-item">Sub Menu</Link>
                                        <Link to="/customer/dropshipper" className="nav__dropdown-item">Sub Menu</Link>
                                        <Link to="/customer/requests" className="nav__dropdown-item">Sub Menu</Link>
                                    </div>
                                </div>
                            </div>


                            {/* <div className="nav__dropdown">
                                <Link to="/product" className="nav__link">
                                    <i className='bx bx-store-alt nav__icon' ></i>
                                    <span className="nav__name">Products</span>
                                    <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                </Link>

                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                        <Link to="/product" className="nav__dropdown-item">All Products</Link>
                                        <Link to="/on-sale" className="nav__dropdown-item">On Sale</Link>
                                        <Link to="/featured-products" className="nav__dropdown-item">Featured</Link>
                                    </div>
                                </div>
                            </div>
                            <Link to="/payments" className="nav__link">
                                <i className='bx bx-dollar nav__icon' ></i>
                                <span className="nav__name">Payments</span>
                            </Link>
                            <Link to="/shippingcost" className="nav__link">
                                <i className='bx bx-calculator nav__icon' ></i>
                                <span className="nav__name">Shipping Cost</span>
                            </Link>
                            <div className="nav__dropdown">
                                <div className="nav__link">
                                    <i className='bx bx-file nav__icon' ></i>
                                    <span className="nav__name">Reports</span>
                                    <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                </div>

                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                        <Link to="/reports/order-report" className="nav__dropdown-item">Order Report</Link>
                                        <Link to="/" className="nav__dropdown-item">Customer Details </Link>
                                        <Link to="/" className="nav__dropdown-item">Dropship Customer Profit</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="nav__dropdown">
                                <Link to="/dropship-pending" className="nav__link">
                                    <i className='bx bx-menu nav__icon' ></i>
                                    <span className="nav__name">DS Profit</span>
                                    <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                </Link>

                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                        <Link to="/dropship-pending" className="nav__dropdown-item">Pending Profit</Link>
                                        <Link to="/dropship-paid" className="nav__dropdown-item">Paid Profit</Link>
                                    </div>
                                </div>
                            </div> */}

                            
                        </div>
    
                        {/* <div className="nav__items">
                            <h3 className="nav__subtitle">Orders</h3>
    
                            <div className="nav__dropdown">
                                <Link to="/wholesale-orders" className="nav__link">
                                    <i className='bx bx-task nav__icon' ></i>
                                    <span className="nav__name">Wholesale</span>
                                    <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                </Link>

                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                        <Link to="/" className="nav__dropdown-item">Return Orders</Link>
                                        <Link to="/" className="nav__dropdown-item">Pending Orders</Link>
                                    </div>
                                </div>

                            </div>
                            <div className="nav__dropdown">
                                <Link to="/dropship-orders" className="nav__link">
                                    <i className='bx bx-task nav__icon' ></i>
                                    <span className="nav__name">Dropship</span>
                                    <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                </Link>

                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                        <Link to="/" className="nav__dropdown-item">Return Orders</Link>
                                        <Link to="/" className="nav__dropdown-item">Pending Orders</Link>

                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="nav__link nav__logout" >
                    <i className='bx bx-log-out nav__icon' ></i>
                    <span className="nav__name">Log Out</span>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Sidebar