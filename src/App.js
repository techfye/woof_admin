import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidebarLayout from './components/Sidebar/SidebarLayout';
import Login from './views/Login';
import PageNotFound from './views/PageNotFound';
import ProductForm from './views/ProductForm';
import Product from './views/Product';
import Otp from './components/OTP/Otp';
import Category from './views/Category';
import CategoryForm from './views/CategoryForm';
import Dashboard from './views/Dashboard';
import Tag from './views/Tag';


function App() {
  const user = useSelector(state => state.Auth);
  return (
    <>
      <Router>
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            <Routes>
              <Route element={<SidebarLayout />} >
                <Route path="/" element={<ProtectedRoute user={user.isAuthenticated}>
                  <Dashboard/>
                </ProtectedRoute>} />
                
                <Route path="/categories" element={<ProtectedRoute user={user.isAuthenticated}>
                  <Category />
                </ProtectedRoute>} />
                <Route path="/categories/add-category" element={<ProtectedRoute user={user.isAuthenticated}>
                  <CategoryForm FormName="Add Category" Editable="false" />
                </ProtectedRoute>} />
                <Route path="/categories/edit-category/:id" element={<ProtectedRoute user={user.isAuthenticated}>
                  <CategoryForm FormName="Edit Category" Editable="true" />
                </ProtectedRoute>} />
                <Route path="/tags" element={<ProtectedRoute user={user.isAuthenticated}>
                  <Tag />
                </ProtectedRoute>} />

              <Route path="/products" element={<ProtectedRoute user={user.isAuthenticated}>
                <Product />
              </ProtectedRoute>} />
              <Route path="/products/add-product" element={
                <ProtectedRoute user={user.isAuthenticated}>
                  <ProductForm FormName="Add Product" Editable="false" />
                </ProtectedRoute>
              } />
              <Route path="/products/edit-product/:id" element={
                <ProtectedRoute user={user.isAuthenticated}>
                  <ProductForm FormName="Edit Product" Editable="true" />
                </ProtectedRoute>
              } />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path='/verification/email/:id' element={<Otp />} />
            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
      <ToastContainer autoClose={3000} theme='light' />
    </Router>
    </>
  );
}

export default App;

