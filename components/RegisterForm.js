import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { registerUser } from '../utils/auth'; // Update with path to registerUser

function RegisterForm({ user, updateUser }) {
  const [formData, setFormData] = useState({
    bio: '',
    uid: user.uid,
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then(() => updateUser(user.uid));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="">
        <FloatingLabel
          controlId="firstName"
          label="First Name"
          className="mb-3"
        >
          <Form.Control type="text" required onChange={handleChange} value={formData.firstName} name="firstName" />
        </FloatingLabel>

        <FloatingLabel controlId="lastName" label="Last Name">
          <Form.Control type="text" required onChange={handleChange} value={formData.lastName} name="lastName" />
        </FloatingLabel>

        <Form.Label>User Bio</Form.Label>
        <Form.Control as="textarea" name="bio" required placeholder="Enter your Bio" onChange={handleChange} value={formData.bio} />
        <Form.Text className="text-muted">Let other users know a little bit about you...</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
