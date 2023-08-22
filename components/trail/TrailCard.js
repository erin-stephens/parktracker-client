import React from 'react';
import PropTypes from 'prop-types';
import { Card, Dropdown } from 'react-bootstrap';
import { deleteTrail } from '../../utils/data/trailData';

export default function TrailCard({ trailObj, onUpdate }) {
  const deleteThisTrail = () => {
    if (window.confirm(`Delete ${trailObj.trail_name}?`)) {
      deleteTrail(trailObj.id).then(() => onUpdate());
    }
  };
  return (
    <div>
      <Card style={{ width: '18rem' }} className="trailCard">
        <Card.Body>
          <Card.Title>{trailObj.trail_name}</Card.Title>
          <Card.Text>{trailObj.park_id.park_name}</Card.Text>
          <Card.Text>{trailObj.length}</Card.Text>
          <Card.Text>{trailObj.rating}</Card.Text>
          <Dropdown>
            <Dropdown.Toggle className="dropdownBtn">
              Options
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href={`/trails/${trailObj.id}`}>View Details</Dropdown.Item>
              <Dropdown.Item href={`/trails/edit/${trailObj.id}`}>Edit</Dropdown.Item>
              <Dropdown.Item onClick={deleteThisTrail}>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </div>
  );
}

TrailCard.propTypes = {
  trailObj: PropTypes.shape({
    id: PropTypes.number,
    trail_name: PropTypes.string,
    length: PropTypes.string,
    rating: PropTypes.string,
    park_id: PropTypes.shape({
      park_name: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
