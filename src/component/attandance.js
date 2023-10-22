import React, { useState } from 'react'
import { Table, Button, Modal, Form } from 'react-bootstrap';
import Nav from './navbar';
import '../css/style.css';

function Attandance(Toggle) {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        jabatan: '',
        time: getCurrentTime(),
    });

    const openModal = () => {
      setFormData({ ...formData, time: getCurrentTime() }); // Update time to current time
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
        setFormData({ name: '', jabatan: '', time: getCurrentTime() });
        closeModal();
      };

      function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
      }

  return (
    <div className=''>
      <div className="d-flex justify-content-between mb-4 float-end">
      <Button className="white-button" onClick={openModal}>Add Attendance</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Jabatan</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.jabatan}</td>
              <td>{item.time}</td>
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
              <Form.Group controlId="time">
                <Form.Label>Time:</Form.Label>
                <Form.Control
                  type="time"
                  name="time"
                  value={formData.time}
                  readonly
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

export default Attandance