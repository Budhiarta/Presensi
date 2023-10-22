import React, { useState } from 'react'
import { Table, Button, Modal, Form } from 'react-bootstrap';
import '../css/style.css';

function Permission() {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([
      {
        name: 'Budhi',
        jabatan: 'Frontend developer',
        date: '2023-10-22', // Format tanggal YYYY-MM-DD
        reason: 'ijin metatah'
      },
      {
        name: 'Budhi',
        jabatan: 'Frontend developer',
        date: '2023-10-21',
        reason: 'Ijin menikah'
      }
    ]);
    const [formData, setFormData] = useState({
        name: '',
        jabatan: '',
        date: '',
        reason: '',
    });

    const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      
      const handleSubmit = () => {
        setData([...data, formData]);
        setFormData({ name: '', jabatan: '', time: '', reason: ''});
        closeModal();
      };

  return (
    <div>
      <div className="d-flex justify-content-between mb-4 float-end">
      <Button className='per-button' onClick={openModal}>Add Permission</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Jabatan</th>
            <th>Time</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.jabatan}</td>
              <td>{item.date}</td>
              <td>{item.reason}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <div className="d-flex flex-column col-12">
              <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="jabatan">
                <Form.Label>Jabatan:</Form.Label>
                <Form.Control
                  type="text"
                  name="jabatan"
                  value={formData.jabatan}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="date">
                <Form.Label>Date:</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="reason">
                <Form.Label>Reason:</Form.Label>
                <Form.Control
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Permission