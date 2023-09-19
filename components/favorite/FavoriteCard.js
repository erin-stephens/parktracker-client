import React from 'react';
import PropTypes from 'prop-types';
import { Card, Dropdown } from 'react-bootstrap';

export default function FavoriteParkCard({ favoriteObj }) {
  return (
    <div>
      <Card style={{ width: '18rem' }} className="parkCard border-0">
        <Card.Img variant="top" src={favoriteObj.park.image_url} />
        <Card.Body>
          <Card.Title>{favoriteObj.park.park_name}</Card.Title>
          <Card.Text>{favoriteObj.park.location}</Card.Text>
          <Card.Text>{favoriteObj.park.park_type}</Card.Text>
          <Dropdown>
            <Dropdown.Toggle className="dropdownBtn">
              Options
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href={`/parks/${favoriteObj.park.id}`}>View Details</Dropdown.Item>
              <Dropdown.Item href={`/parks/edit/${favoriteObj.park.id}`}>Edit</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </div>
  );
}

FavoriteParkCard.propTypes = {
  favoriteObj: PropTypes.shape({
    park: PropTypes.shape({
      id: PropTypes.number,
      park_name: PropTypes.string,
      location: PropTypes.string,
      image_url: PropTypes.string,
      park_type: PropTypes.string,
    }),
  }).isRequired,
};
