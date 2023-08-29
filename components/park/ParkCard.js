import React from 'react';
import PropTypes from 'prop-types';
import { Card, Dropdown, Button } from 'react-bootstrap';
import { deletePark, addFavoritePark, removeFavoritePark } from '../../utils/data/parkData';
import { useAuth } from '../../utils/context/authContext';

export default function ParkCard({ parkObj, onUpdate }) {
  const { user } = useAuth();
  const deleteThisPark = () => {
    if (window.confirm(`Delete ${parkObj.park_name}?`)) {
      deletePark(parkObj.id).then(() => onUpdate());
    }
  };

  const favorite = () => {
    addFavoritePark(parkObj.id, user.uid).then(() => onUpdate());
  };

  const unfavorite = () => {
    removeFavoritePark(parkObj.id, user.uid).then(() => onUpdate());
  };
  return (
    <div>
      <Card style={{ width: '18rem' }} className="parkCard">
        <Card.Img variant="top" src={parkObj.image_url} />
        <Card.Body>
          <Card.Title>{parkObj.park_name}</Card.Title>
          <Card.Text>{parkObj.location}</Card.Text>
          <Card.Text>{parkObj.park_type}</Card.Text>
          <Dropdown>
            <Dropdown.Toggle className="dropdownBtn">
              Options
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href={`/parks/${parkObj.id}`}>View Details</Dropdown.Item>
              <Dropdown.Item href={`/parks/edit/${parkObj.id}`}>Edit</Dropdown.Item>
              <Dropdown.Item onClick={deleteThisPark}>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {parkObj.favorited ? <Button onClick={unfavorite}>Unfavorite</Button> : <Button onClick={favorite}>Favorite</Button>}
        </Card.Body>
      </Card>
    </div>
  );
}

ParkCard.propTypes = {
  parkObj: PropTypes.shape({
    id: PropTypes.number,
    park_name: PropTypes.string,
    location: PropTypes.string,
    image_url: PropTypes.string,
    park_type: PropTypes.string,
    favorited: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
