import { React, useEffect } from 'react'
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import PulseLoader from '../components/PulseLoader';

import { useSelector, useDispatch } from 'react-redux';

const { deleteTag } = require('../actions/tagsAction');

const Category = () => {

  const dispatch = useDispatch();
  const tags = useSelector(state => state.Tag.tags);
    const Loading = useSelector(state => state.Tag.loading);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteTag(id));
    }
  }


  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true,
      // width: '70px'
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Slug',
      selector: row => row.slug,
    },
    {
      name: 'Action',
      cell: row => <div className="dropdown">
        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="bx bx-dots-vertical-rounded"></i>
        </button>
        <div className="dropdown-menu">
          <Link className="dropdown-item" to={{
            pathname: `/categories/edit-category/${row.id}`
          }}><i className="bx bx-edit-alt me-1"></i> Edit</Link>
          <div className="dropdown-item" onClick={()=>{handleDelete(row.catId)}} ><i className="bx bx-trash me-1"></i> Delete</div>
        </div>
      </div>,
      width: '100px',
    },
  ];

  const data = tags.map(category => {
    return {
      catId : category._id,
      id: category.id,
      name: category.name,
      slug: category.slug,
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
                  <h5 className="card-header">All Tags</h5>
                  <div>
                    <Link to='/tags/add-tag' className="btn btn-outline-primary my-3">
                      <span className="tf-icons bx bx-plus-circle"></span>&nbsp; Add Tag
                    </Link>

                  </div>
                </div>
                <div className="table-responsive text-nowrap">
                  <DataTable columns={columns} data={data} defaultSortAsc='true' pagination responsive='true' />
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

export default Category