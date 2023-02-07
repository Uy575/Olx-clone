import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";
import { useDispatch } from "react-redux";
import { gettingApiData } from "../Redux/ProductReducers";
import "./SellButton.css";
import { useFormik } from "formik";
import { modalSchema } from "./schema";

function ModalComp() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [productImage, setProductImage] = useState(null);

  //setting initil vlues for adding product
 const initialValues = {
  productName: "",
  productPrice: "",
  productDescription: "",
  UserContact: "",
  detailDescription: "",
  location: "",
  area: "",
  ProductCondition: "",
  sellerName: "",
  
}
  const formik = useFormik({
    initialValues,
    validationSchema: modalSchema,
    onSubmit: (values) => {
      UploadingDetail(values);
    },
  });


 

  //adding given data to products api
  const UploadingDetail = (values) => {

    const {productName,productDescription,productPrice,UserContact,detailDescription,sellerName,area,location,ProductCondition} = values

    const addingUserProduct = async () => {
        await axios.post(`http://localhost:3001/products`, {
        productName: productName,
        description: productDescription,
        price: productPrice,
        featured: checked,
        UserContact: UserContact,
        DetailDescription: detailDescription,
        SellerName: sellerName,
        Location: area + "," + location,
        ProductCondition: ProductCondition,
        Image: productImage,
      });

      dispatch(
        gettingApiData(
          "http://localhost:3001/products?_sort=featured&_order=desc"
        )
      );
    };

    addingUserProduct();
    handleClose();
  };

  //function to handle read file

  const onImageFileChangeHandler = (e) => {
    const Image = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(Image[0]);
    reader.onload = (e) => {
      setProductImage(e.target.result);
    };
  };

   //function to close modal
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
 
   const toggle = (value) => {
     return !value;
   };

  return (
    <>
      {/* creating Modal fields  */}
      <Button variant="primary" className="button-8" onClick={handleShow}>
        +SELL YOUR PRODUCT
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel label="Product Catagory" className="mb-3">
            <Form.Control
              name="productName"
              value={formik.values.name}
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.productName && formik.errors.productName && (
              <p style={{ color: "red" }}>{formik.errors.productName}</p>
            )}
          </FloatingLabel>

          <FloatingLabel label="Price">
            <Form.Control
              name="productPrice"
              value={formik.values.name}
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.productPrice && formik.errors.productPrice && (
              <p style={{ color: "red" }}>{formik.errors.productPrice}</p>
            )}
          </FloatingLabel>

          <br />

          <FloatingLabel label="Product description" className="mb-3">
            <Form.Control
              type="text"
              name="productDescription"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            
            />
              {formik.touched.productDescription && formik.errors.productDescription && (
              <p style={{ color: "red" }}>{formik.errors.productDescription}</p>
            )}
          </FloatingLabel>

          <FloatingLabel label="Your Name">
            <Form.Control
              type="text"
              name="sellerName"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
            />
              {formik.touched.sellerName && formik.errors.sellerName && (
              <p style={{ color: "red" }}>{formik.errors.sellerName}</p>
            )}
          </FloatingLabel>
          <br />
          <FloatingLabel label="Contact">
            <Form.Control
              type="text"
              name="UserContact"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
            />
              {formik.touched.UserContact && formik.errors.UserContact && (
              <p style={{ color: "red" }}>{formik.errors.UserContact}</p>
            )}
            <br />
          </FloatingLabel>

          <FloatingLabel label="condition 0/10">
            <Form.Control
              type="text"
              name="ProductCondition"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
            />
              {formik.touched.ProductCondition && formik.errors.ProductCondition && (
              <p style={{ color: "red" }}>{formik.errors.ProductCondition}</p>
            )}
          </FloatingLabel>

          <br />
          <FloatingLabel label="Enter City">
            <Form.Control
             
              type="text"
              name="location"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
            />
              {formik.touched.location && formik.errors.location && (
              <p style={{ color: "red" }}>{formik.errors.location}</p>
            )}
          </FloatingLabel>

          <br />
          <FloatingLabel label="Enter Area">
            <Form.Control
                 type="text"
                 name="area"
                 value={formik.values.name}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur} 
               />
                 {formik.touched.area && formik.errors.area && (
                 <p style={{ color: "red" }}>{formik.errors.area}</p>
               )}
          </FloatingLabel>

          <br />
          <FloatingLabel label="Detail Description">
            <Form.Control
              as="textarea"
                 type="text"
              name="detailDescription"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
            />
              {formik.touched.detailDescription && formik.errors.detailDescription && (
              <p style={{ color: "red" }}>{formik.errors.detailDescription}</p>
            )}
          </FloatingLabel>
          
          <br />
          <input type="file" onChange={onImageFileChangeHandler} />
          <label htmlFor="input">
            Want Featured?
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(toggle)}
            />
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={formik.handleSubmit}>
            Upload Detail
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComp;
