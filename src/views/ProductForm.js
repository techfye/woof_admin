import { React, useEffect, useState } from 'react'
import Select from 'react-select';
import InputField from '../components/InputFields/InputField';
import PulseLoader from '../components/PulseLoader';
import { useSelector, useDispatch } from 'react-redux';
import ImageField from '../components/InputFields/ImageField';
import { useNavigate, useParams } from 'react-router-dom';

const { addProduct, updateProduct } = require('../actions/productActions');
const { countries } = require('../data/countries');

const ProductForm = (props) => {
    const dispatch = useDispatch();
    const { FormName, Editable } = props;
    const redirect = useNavigate();
    const { id } = useParams();

    const Loading = false;
    const products = useSelector(state => state.Product.products);
    const categories = useSelector(state => state.Category.categories);
    const tags = useSelector(state => state.Tag.tags);
    const [Product, setProduct] = useState({
        name: '',
        category: '',
        description: '',
        information: '',
        skuNumber: '',
        tags: [],
        price: '',
        reviews: [],
        photos: '',
        stock: '',
        itemWeight: '',
        menufacturer: '',
        countryOfOrigin: '',
        itemModelNumber: '',
        brandName: '',
        directions: '',
        size: '',
        careInstructions: '',
        specificUses: '',
        specialIngredients: '',
        breedRecommendation: '',
        modalName: '',
    });
    useEffect(() => {
        if (Editable === 'true') {
            const product = products.find(product => product.id === Number(id));

            setProduct({
                name: product.name,
                category: product.category,
                description: product.description,
                information: product.information,
                skuNumber: product.skuNumber,
                tags: product.tags,
                price: product.price,
                reviews: product.reviews,
                photos: product.photos,
                stock: product.stock,
                itemWeight: product.itemWeight,
                menufacturer: product.menufacturer,
                countryOfOrigin: product.countryOfOrigin,
                itemModelNumber: product.itemModelNumber,
                brandName: product.brandName,
                directions: product.directions,
                size: product.size,
                careInstructions: product.careInstructions,
                specificUses: product.specificUses,
                specialIngredients: product.specialIngredients,
                breedRecommendation: product.breedRecommendation,
                modalName: product.modalName,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products, id]);


    const handleInputChange = (e) => {
        addProduct(Product);
        const { name, value } = e.target;
        setProduct({ ...Product, [name]: value });
    }

    const handleCategory = (e) => {
        setProduct({
            ...Product,
            category: e.value
        })
    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', Product.name);
        data.append('category', Product.category);
        data.append('description', Product.description);
        data.append('information', Product.information);
        data.append('skuNumber', Product.skuNumber);

        for (let i = 0; i < Product.tags.length; i++) {
            data.append('tags', Product.tags[i]);
        }

        data.append('price', Product.price);
        data.append('reviews', Product.reviews);
        data.append('stock', Product.stock);
        data.append('itemWeight', Product.itemWeight);
        data.append('menufacturer', Product.menufacturer);
        data.append('countryOfOrigin', Product.countryOfOrigin);
        data.append('itemModelNumber', Product.itemModelNumber);
        data.append('brandName', Product.brandName);
        data.append('directions', Product.directions);
        data.append('size', Product.size);
        data.append('careInstructions', Product.careInstructions);
        data.append('specificUses', Product.specificUses);
        data.append('specialIngredients', Product.specialIngredients);
        data.append('breedRecommendation', Product.breedRecommendation);
        data.append('modalName', Product.modalName);
        for (let i = 0; i < Product.photos.length; i++) {
            data.append('photos', Product.photos[i]);
        }
        dispatch(addProduct(data));
        redirect('/products');
    }

    const handleEditProduct = (e) => {
        const product = products.find(product => product.id === Number(id));
        e.preventDefault();
        const data = new FormData();
        data.append('name', Product.name);
        data.append('category', Product.category);
        data.append('description', Product.description);
        data.append('information', Product.information);
        data.append('skuNumber', Product.skuNumber);

        for (let i = 0; i < Product.tags.length; i++) {
            data.append('tags', Product.tags[i]);
        }

        data.append('price', Product.price);
        data.append('reviews', Product.reviews);
        data.append('stock', Product.stock);
        data.append('itemWeight', Product.itemWeight);
        data.append('menufacturer', Product.menufacturer);
        data.append('countryOfOrigin', Product.countryOfOrigin);
        data.append('itemModelNumber', Product.itemModelNumber);
        data.append('brandName', Product.brandName);
        data.append('directions', Product.directions);
        data.append('size', Product.size);
        data.append('careInstructions', Product.careInstructions);
        data.append('specificUses', Product.specificUses);
        data.append('specialIngredients', Product.specialIngredients);
        data.append('breedRecommendation', Product.breedRecommendation);
        data.append('modalName', Product.modalName);
        for (let i = 0; i < Product.photos.length; i++) {
            data.append('photos', Product.photos[i]);
        }

        updateProduct(product._id, data)
        redirect('/products');
    }

    const handleFileChange = (e) => {
        Product.photos = e.target.files;
    }

    const handleChangeTags = (e) => {
        Product.tags = e.map((tag) => {
            return tag.value
        }
        );
    }


    const selectTags = tags.map((tag) => {
        return { value: tag._id, label: tag.name }
    });

    const countryOfOrigin = countries.map((country) => {
        return { value: country.code, label: country.name }
    });


    const selectOptions = categories.map((category) => {
        return { value: category._id, label: category.name }
    });


    const changeCountry = (e) => {
        setProduct({
            ...Product,
            countryOfOrigin: e.value
        })
    }

    const selectBreed = [
        { value: 'Small', label: 'Small' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Large', label: 'Large' },
        { value: 'Extra Large', label: 'Extra Large' },
    ];

    return (
        <>
            <div className="content-wrapper container-fluid">
                {
                    Loading ? (<PulseLoader />) : (
                        <div className="row p-5 justify-content-center">
                            <div className="col-md-12">
                                <div className="card mb-4">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0">{FormName}</h5>
                                    </div>
                                    <div className="card-body">
                                        <form encType="multipart/form-data" method='POST'>
                                            <div className='row'>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <InputField label="Name" name='name' value={Product.name} onChange={handleInputChange} required={true} type='text' placeholder="Name here..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label required" htmlFor="basic-default-fullname">Category</label>
                                                        <Select options={selectOptions} onChange={handleCategory} value={
                                                            Product.category === null ? '' :
                                                            selectOptions.find((option) => {
                                                                return option.value === Product.category._id
                                                            }
                                                            )
                                                        } />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <InputField label="Sku Number" name='skuNumber' value={Product.skuNumber} onChange={handleInputChange} required={true} type="number" placeholder="Sku Number  here..." />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="basic-default-fullname">Tags</label>
                                                        <Select options={selectTags} onChange={handleChangeTags} isMulti />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="basic-default-fullname">Breed Recommendation</label>
                                                        <Select options={selectBreed}  />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <InputField label="Price" name='price' value={Product.price} onChange={handleInputChange} required={true} type='number' placeholder=" price here..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <InputField label='Stock' name='stock' value={Product.stock} onChange={handleInputChange} required={true} type='number' placeholder="Stock here..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <InputField label='Item Weight' name='itemWeight' value={Product.itemWeight} onChange={handleInputChange} type="text" placeholder="Item Weight here..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <InputField label='Menufacturer' name='menufacturer' value={Product.menufacturer} onChange={handleInputChange} type="text" placeholder="Menufacturer here..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="basic-default-fullname">Country of Origin</label>
                                                        <Select options={countryOfOrigin} onChange={changeCountry} />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <InputField label='Item Model Number' name='itemModelNumber' value={Product.itemModelNumber} onChange={handleInputChange} type='text' placeholder="Item Model Num..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <InputField label='Brand Name' name='brandName' value={Product.brandName} onChange={handleInputChange} type="text" placeholder="Brand Name here..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <InputField label='Directions' name='directions' value={Product.directions} onChange={handleInputChange} type="text" placeholder="Directions here..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <InputField label='Size' name='size' value={Product.size} onChange={handleInputChange} type='text' placeholder="Size here..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <InputField label='Model Name' name='modelName' value={Product.modelName} onChange={handleInputChange} type="text" placeholder="Model Name here..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label required" htmlFor="basic-default-fullname">Description</label>
                                                        <textarea className="form-control" name='description' value={Product.description} onChange={handleInputChange} required={true} placeholder="Description here..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label required" htmlFor="basic-default-fullname">Information</label>
                                                        <textarea className="form-control" name='information' value={Product.information} onChange={handleInputChange} required={true} placeholder="Information here..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="basic-default-fullname">Special Ingredients</label>
                                                        <textarea className="form-control" name='specialIngredients' value={Product.specialIngredients} onChange={handleInputChange} placeholder="Special Ingredients here..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="basic-default-fullname">Care Instructions</label>
                                                        <textarea className="form-control" name='careInstructions' value={Product.careInstructions} onChange={handleInputChange} placeholder="Care Instructions here..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="basic-default-fullname">Specific Uses</label>
                                                        <textarea className="form-control" name='specificUses' value={Product.specificUses} onChange={handleInputChange} placeholder="Specific Uses here..." />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className="col-md-6">
                                                    <ImageField label="Upload Images" type="file" name="photos" onChange={handleFileChange} />
                                                </div>
                                            </div>
                                            {
                                                Editable === 'true' ? <button type="submit" onClick={handleEditProduct} className="btn btn-primary">
                                                    Update Product
                                                </button> : <button type="submit" onClick={handleAddProduct} className="btn btn-primary">
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

export default ProductForm