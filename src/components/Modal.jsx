import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";
import { useDispatch } from "react-redux";
import { gettingApiData } from "../Redux/ProductReducers";
import './SellButton.css'

function ModalComp() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [checked,setChecked] = useState(false)
  const [productImage,setProductImage] = useState(null);

 //setting initil vlues for adding product
  const initialValue = {   
    productName : '',
    productPrice : 0,
    productDescription : '',
    UserContact : 0,
    detailDescription : '',
    location : '',
    area : '',
    ProductCondition : 0,
    sellerName : '',



 }
  
 //setting initial value in post data
  const [postData] = useState({initialValue})
    

  //function to close modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggle = (value)=>{
      return !value;
    }
 
    //adding given data to products api
  const UploadingDetail = () =>{
   
    const addingUserProduct = async () =>{
 
        const req = await axios.post(`http://localhost:3001/products`,{
        productName: postData.productName,
        description: postData.productDescription,
        price : postData.productPrice,
        featured : checked,
        UserContact :postData.userContact,
        DetailDescription : postData.detailDescription,
        SellerName : postData.sellerName,
        Location :  postData.area + "," + postData.location,
        ProductCondition : postData.productCondition,
        Image: productImage
        });

      dispatch(gettingApiData("http://localhost:3001/products?_sort=featured&_order=desc"))
    }
    
   addingUserProduct()
   handleClose();
  }

  //function to handle read file 

  const onImageFileChangeHandler = (e) =>{
    const Image = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(Image[0]);
    reader.onload = (e)=>{
        setProductImage(e.target.result);
    }
  
  }


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
            <Form.Control  type="text" onChange={(e)=>{
                 postData.productName = e.target.value
            }} required />
          </FloatingLabel>
          <FloatingLabel label="Price">
            <Form.Control type="number" onChange={(e)=>{
                  postData.productPrice = e.target.value
            }} required />
          </FloatingLabel>
          <br />
          <FloatingLabel label="Product description" className="mb-3">
            <Form.Control type="text" onChange={(e)=>{
              postData.productDescription = e.target.value
            }} required/>
            </FloatingLabel>
            <FloatingLabel label="Your Name">
            <Form.Control type="text" onChange={(e)=>{
             postData.sellerName = e.target.value
            }} required/>
          </FloatingLabel>
          <br/>
          <FloatingLabel label="Contact">
            <Form.Control type="number" onChange={(e)=>{
              postData.userContact = e.target.value
            }} required/>
            <br/>
          </FloatingLabel>
          <FloatingLabel label="condition 0/10">
            <Form.Control type="number"  onChange={(e)=>{
              postData.productCondition = e.target.value
            }}required />
          </FloatingLabel>
          <br/>
          <FloatingLabel label="Enter City">
            <Form.Control
            required
            type="text"
             onChange={(e)=>{
              postData.location = e.target.value
            }} />
          </FloatingLabel>
          <br/>
            <FloatingLabel label="Enter Area">
            <Form.Control type="text" onChange={(e)=>{
             postData.area = e.target.value
            }}required/>
          </FloatingLabel>
          <br/>
          <FloatingLabel label="Detail Description">
            <Form.Control as="textarea"  onChange={(e)=>{
              postData.detailDescription = e.target.value
            }} required />
          </FloatingLabel>
          <br/>
          <input type="file" onChange={onImageFileChangeHandler} />
          <label htmlFor = "input">
          Want Featured? 
          <input type ="checkbox" checked = {checked} onChange = {()=> setChecked(toggle)} />
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={UploadingDetail}>
            Upload Detail
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComp;
