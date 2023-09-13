import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { createTrailComment, updateTrailComment } from '../../utils/data/commentData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  content: '',
  trailId: '',
  authorId: '',
};

export default function TrailCommentForm({ obj, trailObj }) {
  const [currentComment, setCurrentComment] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) {
      setCurrentComment({
        id: obj.id,
        content: obj.content,
        authorId: obj.author_id,
        trailId: obj.trail_id,
      });
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentComment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      const commentUpdate = {
        id: obj.id,
        content: currentComment.content,
        trailId: currentComment.trailId,
        authorId: user.id,
      };
      updateTrailComment(commentUpdate).then(() => router.push(`/trails/${trailObj.id}`));
    } else {
      const comment = {
        content: currentComment.content,
        trailId: trailObj.id,
        authorId: user.id,
      };
      createTrailComment(comment).then(() => router.push(`/trails/${trailObj.id}`));
    }
  };

  return (
    <>
      <h2> Add a Comment </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <FloatingLabel
            controlId="floatingTextarea"
            label="Write comment here"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              type="content"
              placeholder="Write comment here"
              name="content"
              value={currentComment.content}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>
  );
}

TrailCommentForm.propTypes = {
  obj: PropTypes.shape({
    content: PropTypes.string,
    author_id: PropTypes.number,
    trail_id: PropTypes.shape({
      id: PropTypes.number,
    }),
    id: PropTypes.number,
  }),
  trailObj: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

TrailCommentForm.defaultProps = {
  obj: initialState,
};
