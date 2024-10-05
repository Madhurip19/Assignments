import React, { useState, useEffect } from 'react';
import { DatePicker, Input, Table, Button, Modal, Form } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const { RangePicker } = DatePicker;

const ProductTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // Fetch product data from API
  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setData(response.data.products);
      setFilteredData(response.data.products);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter products by search term
  const handleSearch = (value) => {
    const filtered = data.filter((product) => 
      product.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
    setSearch(value);
  };

  // Handle form submission and navigate to confirmation page
  const handleSubmit = (values) => {
    navigate('/confirm', { state: values });
  };

  // Table columns configuration
  const columns = [
    { title: 'Product Name', dataIndex: 'title', key: 'title' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Brand', dataIndex: 'brand', key: 'brand' },
  ];

  return (
    <div>
      <h2>Product Table</h2>
      <RangePicker
        defaultValue={[moment().subtract(7, 'days'), moment()]}
        disabledDate={(current) => current && current > moment().endOf('day')}
      />
      <Input.Search 
        placeholder="Search products..." 
        value={search} 
        onChange={(e) => handleSearch(e.target.value)} 
        style={{ width: 300, marginLeft: 20 }}
      />
      <Table columns={columns} dataSource={filteredData} rowKey="id" />
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Add Product
      </Button>

      {/* Modal for adding new product */}
      <Modal
        title="Add New Product"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="title" label="Product Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="brand" label="Brand" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProductTable;
