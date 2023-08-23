import React from 'react';
import PropTypes from 'prop-types';
import { Card, Dropdown } from 'react-bootstrap';
import { deleteSite } from '../../utils/data/siteData';

export default function SiteCard({ siteObj, onUpdate }) {
  const deleteThisSite = () => {
    if (window.confirm(`Delete ${siteObj.site_name}?`)) {
      deleteSite(siteObj.id).then(() => onUpdate());
    }
  };
  return (
    <div>
      <Card style={{ width: '18rem' }} className="siteCard">
        <Card.Img variant="top" src={siteObj.image_url} />
        <Card.Body>
          <Card.Title>{siteObj.site_name}</Card.Title>
          <Card.Text>{siteObj.park_id.park_name}</Card.Text>
          <Card.Text>{siteObj.site_type}</Card.Text>
          <Dropdown>
            <Dropdown.Toggle className="dropdownBtn">
              Options
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href={`/sites/${siteObj.id}`}>View Details</Dropdown.Item>
              <Dropdown.Item href={`/sites/edit/${siteObj.id}`}>Edit</Dropdown.Item>
              <Dropdown.Item onClick={deleteThisSite}>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </div>
  );
}

SiteCard.propTypes = {
  siteObj: PropTypes.shape({
    id: PropTypes.number,
    site_name: PropTypes.string,
    image_url: PropTypes.string,
    site_type: PropTypes.string,
    park_id: PropTypes.shape({
      park_name: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
