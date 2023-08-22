import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createPark, updatePark } from '../../utils/data/parkData';

const initialState = {
  parkName: '',
  imageUrl: '',
  location: '',
  parkType: '',
};

export default function ParkForm({ obj }) {
  const [currentPark, setCurrentPark] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) {
      setCurrentPark({
        id: obj.id,
        parkName: obj.park_name,
        imageUrl: obj.image_url,
        location: obj.location,
        parkType: obj.park_type,
      });
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentPark((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      const parkUpdate = {
        id: obj.id,
        parkName: currentPark.parkName,
        imageUrl: currentPark.imageUrl,
        location: currentPark.location,
        parkType: currentPark.parkType,
        userId: user.uid,
      };
      updatePark(parkUpdate).then(() => router.push('/parks'));
    } else {
      const park = {
        parkName: currentPark.parkName,
        imageUrl: currentPark.imageUrl,
        location: currentPark.location,
        parkType: currentPark.parkType,
        userId: user.uid,
      };
      createPark(park).then(() => router.push('/parks'));
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <FloatingLabel controlId="floatingInput1" label="parkName" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter park name"
              name="parkName"
              value={currentPark.parkName}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput2" label="imageUrl" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter image"
              name="imageUrl"
              value={currentPark.imageUrl}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput3" label="location" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter park location (state)"
              name="location"
              value={currentPark.location}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <FloatingLabel label="parkType">
            <Form.Select
              name="parkType"
              onChange={handleChange}
              className="mb-3"
              value={currentPark.parkType}
              required
            >
              <option value="">Choose a park type</option>
              <option value="state">State Park</option>
              <option value="national">National Park</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
        <Button type="submit">Create Park</Button>
      </Form>
    </div>
  );
}

ParkForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    park_name: PropTypes.string,
    location: PropTypes.string,
    image_url: PropTypes.string,
    park_type: PropTypes.string,
  }),
};

ParkForm.defaultProps = {
  obj: initialState,
};
