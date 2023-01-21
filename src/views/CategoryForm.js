import { React, useState, useEffect } from 'react'
import InputField from '../components/InputFields/InputField';
import PulseLoader from '../components/PulseLoader';
import ImageField from '../components/InputFields/ImageField';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
const { toast } = require('react-toastify');

const { addCategory, updateCategory } = require('../actions/categoryActions');
const CategoryForm = (props) => {
  const { id } = useParams();
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const { FormName, Editable } = props;
  const { Loading } = useSelector(state => state.Category);
  const categories = useSelector(state => state.Category.categories);

if (Editable === 'true') {
    var category = categories.find(category => category.id == id);
  }
  
  
  const [Category, setCategory] = useState({
    name: '',
    photo: '',
  });
  
  
  useEffect(() => {
    if (Editable === 'true') {
      setCategory({
        name: category.name,
      });
      
    }
    // eslint-disable-next-line
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...Category, [name]: value });
  };

  const handleFileChange = (e) => {
    const photo = e.target.files[0];
    setCategory({ ...Category, photo });
  }


  const handleAddCategory = (e) => {
    e.preventDefault();
    dispatch(addCategory(Category));
    redirect('/categories');
    toast.success('Category added');
  }

  const handleUpdateCategory = (e) => {
    e.preventDefault();
    dispatch(updateCategory(category._id, Category));
    redirect('/categories');
    toast('Category Updated Successfully', {
      type: 'success'
    })
  }

  return (
    <>
      <div className="content-wrapper container-fluid">
        {
          Loading ? (<PulseLoader />) : (
            <div className="row p-5 justify-content-center">
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">{FormName}</h5>
                  </div>
                  <div className="card-body">
                    <form  >
                      <div className='row'>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <InputField label="Name" name='name' value={Category.name} onChange={handleInputChange} required={true} type='text' placeholder="Name here..." />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <ImageField label="Image" name='photo' onChange={handleFileChange} required={true} type='file' placeholder="Image here..." />
                          </div>
                        </div>
                      </div>

                      {
                        Editable === 'true' ? <button type="submit" onClick={handleUpdateCategory} className="btn btn-primary">
                          Update Category
                        </button> : <button type="submit" onClick={handleAddCategory} className="btn btn-primary">
                          Save
                        </button>
                      }

                    </form>
                  </div>
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

export default CategoryForm