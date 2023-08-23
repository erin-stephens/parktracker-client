import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getParks } from '../../utils/data/parkData';
import { createSite, updateSite } from '../../utils/data/siteData';

const initialState = {
  siteName: '',
  parkId: 0,
  imageUrl: '',
  siteType: '',
  description: '',
};

export default function SiteForm({ obj }) {
  const [parks, setParks] = useState([]);
  const [currentSite, setCurrentSite] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getParks().then(setParks);
    if (obj.id) {
      setCurrentSite({
        id: obj.id,
        siteName: obj.site_name,
        parkId: obj.park_id?.id,
        imageUrl: obj.image_url,
        siteType: obj.site_type,
        description: obj.description,
      });
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentSite((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      const siteUpdate = {
        id: obj.id,
        siteName: currentSite.siteName,
        parkId: currentSite.parkId,
        imageUrl: currentSite.imageUrl,
        siteType: currentSite.siteType,
        description: currentSite.description,
        userId: user.uid,
      };
      updateSite(siteUpdate).then(() => router.push('/sites'));
    } else {
      const site = {
        siteName: currentSite.siteName,
        parkId: currentSite.parkId,
        imageUrl: currentSite.imageUrl,
        siteType: currentSite.siteType,
        description: currentSite.description,
        userId: user.uid,
      };
      createSite(site).then(() => router.push('/sites'));
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <FloatingLabel controlId="floatingInput1" label="Site name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter site name"
              name="siteName"
              value={currentSite.siteName}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput2"
            label="Image Url"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter site image url"
              name="imageUrl"
              value={currentSite.imageUrl}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput3" label="Description" className="mb-3">
            <Form.Control
              type="textarea"
              placeholder="Enter site description"
              name="description"
              value={currentSite.description}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <FloatingLabel>
            <Form.Select
              name="siteType"
              onChange={handleChange}
              className="mb-3"
              value={currentSite.siteType}
              required
            >
              <option value="">Choose a site type</option>
              <option value="overlook">overlook</option>
              <option value="water feature">water feature</option>
              <option value="rock formation">rock formation</option>
              <option value="flora and fauna">flora and fauna</option>
              <option value="activity">activity</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel>
            <Form.Select
              name="parkId"
              onChange={handleChange}
              className="mb-3"
              value={currentSite.parkId}
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
        <Button type="submit">Create Site</Button>
      </Form>
    </div>
  );
}

SiteForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    site_name: PropTypes.string,
    site_type: PropTypes.string,
    image_url: PropTypes.string,
    description: PropTypes.string,
    park_id: PropTypes.shape({
      id: PropTypes.number,
      park_name: PropTypes.string,
    }),
  }),
};

SiteForm.defaultProps = {
  obj: initialState,
};
