import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProducts, gettingApiData } from "../Redux/ProductReducers";

function ModalComp() {
  const [show, setShow] = useState(false);
  const [productName,setProductName] = useState('')
  const [productPrice,setProductPrice] = useState(0)
  const [productDescription,setProductDescription] = useState('')
  const [productImage,setProductImage] = useState(null)
  const dispatch = useDispatch();
  const [checked,setChecked] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggle = (value)=>{
      return !value;
    }

 


  const UploadingDetail = () =>{
   
    const addingUserProduct = async () =>{
 
        const req = await axios.post(`http://localhost:3001/products`,{
        productName: productName,
        // featured:checked,
        description: productDescription,
        price : productPrice,
        Image: productImage
        });
        dispatch(gettingApiData())
    }
    
    addingUserProduct()
   handleClose();
  }

  const onImageFileChangeHandler = (e) =>{
    const Image = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(Image[0]);
    reader.onload = (e)=>{
        setProductImage(e.target.result);
    }
    console.log(productImage);
  }
  return (
    <>
      <Button variant="primary" className="button-8" onClick={handleShow}>
        +SELL YOUR ITEM
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel label="Product Name" className="mb-3">
            <Form.Control type="text" placeholder="Enter product name" onChange={(e)=>{
                setProductName(e.target.value)
            }} />
          </FloatingLabel>
          <FloatingLabel label="Price">
            <Form.Control type="number" placeholder="Enter price" onChange={(e)=>{
                setProductPrice(e.target.value)
            }} />
          </FloatingLabel>
          <br />
          <FloatingLabel label="Product description" className="mb-3">
            <Form.Control type="text" placeholder="Enter product description" onChange={(e)=>{
                setProductDescription(e.target.value)
            }} />
          </FloatingLabel>
          <input type="file" onChange={onImageFileChangeHandler} />
          <label htmlFor = "input">
          Want Featured? 
          <input type ="checkbox" checked = {checked} onChange = {()=> setChecked(toggle)}/>
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
