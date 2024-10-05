import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const ProductForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, price, brand } = location.state || {};

  // Submit form data to the API
  const handleSubmit = async () => {
    try {
      const newProduct = { title, price, brand };
      await axios.post('https://dummyjson.com/products/add', newProduct);
      alert('Product successfully added!');
      navigate('/');
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };

  return (
    <div>
      <h2>Confirm Product Details</h2>
      <Form layout="vertical">
        <Form.Item label="Product Name">
          <Input value={title} disabled />
        </Form.Item>
        <Form.Item label="Price">
          <Input value={price} disabled />
        </Form.Item>
        <Form.Item label="Brand">
          <Input value={brand} disabled />
        </Form.Item>
        <Button type="primary" onClick={handleSubmit}>
          Confirm and Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;
