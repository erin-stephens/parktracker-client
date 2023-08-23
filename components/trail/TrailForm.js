import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getParks } from '../../utils/data/parkData';
import { createTrail, updateTrail } from '../../utils/data/trailData';

const initialState = {
  trailName: '',
  parkId: 0,
  length: '',
  rating: '',
  description: '',
};

export default function TrailForm({ obj }) {
  const [parks, setParks] = useState([]);
  const [currentTrail, setCurrentTrail] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getParks().then(setParks);
    if (obj.id) {
      setCurrentTrail({
        id: obj.id,
        trailName: obj.trail_name,
        parkId: obj.park_id?.id,
        length: obj.length,
        rating: obj.rating,
        description: obj.description,
      });
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentTrail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      const trailUpdate = {
        id: obj.id,
        trailName: currentTrail.trailName,
        parkId: currentTrail.parkId,
        length: currentTrail.length,
        rating: currentTrail.rating,
        description: currentTrail.description,
        userId: user.uid,
      };
      updateTrail(trailUpdate).then(() => router.push('/trails'));
    } else {
      const trail = {
        trailName: currentTrail.trailName,
        parkId: currentTrail.parkId,
        length: currentTrail.length,
        rating: currentTrail.rating,
        description: currentTrail.description,
        userId: user.uid,
      };
      createTrail(trail).then(() => router.push('/trails'));
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <FloatingLabel controlId="floatingInput1" label="Trail name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter trail name"
              name="trailName"
              value={currentTrail.trailName}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput2"
            label="Trail length"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter trail length"
              name="length"
              value={currentTrail.length}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput3" label="Description" className="mb-3">
            <Form.Control
              type="textarea"
              placeholder="Enter trail description"
              name="description"
              value={currentTrail.description}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <FloatingLabel>
            <Form.Select
              name="rating"
              onChange={handleChange}
              className="mb-3"
              value={currentTrail.rating}
              required
            >
              <option value="">Choose trail difficulty</option>
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="hard">hard</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel>
            <Form.Select
              name="parkId"
              onChange={handleChange}
              className="mb-3"
              value={currentTrail.parkId}
              required
            >
              <option value="">Select a Park</option>
              {parks.map((park) => (
                <option
                  key={park.id}
                  value={park.id}
                >
                  {park.park_name}
                </option>
              ))}
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
        <Button type="submit">Create Park</Button>
      </Form>
    </div>
  );
}

TrailForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    trail_name: PropTypes.string,
    length: PropTypes.string,
    rating: PropTypes.string,
    description: PropTypes.string,
    park_id: PropTypes.shape({
      id: PropTypes.number,
      park_name: PropTypes.string,
    }),
  }),
};

TrailForm.defaultProps = {
  obj: initialState,
};
