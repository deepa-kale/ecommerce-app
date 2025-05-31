import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/productModel.js";

//function for add product
const addProduct = async (req, res) => {
    try {
        console.log('Received files:', req.files);
        const { name, description, price, category , subCategory, sizes, bestseller } = req.body
        
        const image1 = req.files.image1 && req.files.image1?.[0] || null;
        const image2 = req.files.image2 && req.files.image2?.[0] || null;
        const image3 = req.files.image3 && req.files.image3?.[0] || null;
        const image4 = req.files.image4 && req.files.image4?.[0] || null;

        console.log('Image files:', { image1, image2, image3, image4 });

        const images = [image1,image2,image3,image4].filter(Boolean)
        console.log('Filtered images:', images);

        let imagesUrl = await Promise.all(
            images.map(async(item)=>{
                console.log('Uploading image to Cloudinary:', item.path);
                let result = await cloudinary.uploader.upload(item.path, {resource_type:'image'});
                console.log('Cloudinary upload result:', result.secure_url);
                return result.secure_url
            })
        )

        console.log('Final image URLs:', imagesUrl);

        const productData = {
            name, 
            description, 
            category, 
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            images: imagesUrl,
            date: Date.now()
        }

        console.log('Product data being saved:', productData);

        const product = new productModel(productData);
        await product.save()
        
        res.json({success:true, message: "Product Added"})
    } catch (error) {
        console.log('Error in addProduct:', error);
        res.json({success: false, message:error.message})
    }
}

//function for list product
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        // Transform the data to match frontend expectations
        const transformedProducts = products.map(product => ({
            id: product._id,
            name: product.name,
            description: product.description,
            price: product.price,
            images: product.images || [],
            category: product.category,
            subCategory: product.subCategory,
            sizes: product.sizes,
            bestseller: product.bestseller,
            date: product.date
        }));
        console.log('Transformed products:', transformedProducts);
        res.json({success: true, products: transformedProducts})
    } catch (error) {
        console.log('Error in listProducts:', error);
        res.json({success: false, message:error.message}) 
    }
}

//function for removing product
const removeProduct = async (req, res) => {
    try {

        await productModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message: "Product Removed"})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message})
    }
}

//function for single product
const singleProduct = async (req, res) => {
    try {
        
        const {productId} = req.body
        const product = await productModel.findById(productId)
        res.json({success: true, product})

    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message})
    }
}

//function for removing all products
const removeAllProducts = async (req, res) => {
    try {
        await productModel.deleteMany({});
        res.json({success: true, message: "All Products Removed"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message})
    }
}

export { listProducts, addProduct, removeProduct, singleProduct, removeAllProducts }