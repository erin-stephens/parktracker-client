import React from 'react';
import { useRouter } from 'next/router';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { deleteTrailComment } from '../../utils/data/commentData';
import { useAuth } from '../../utils/context/authContext';

export default function TrailCommentCard({ commentObj, onUpdate }) {
  const router = useRouter();
  const { user } = useAuth();

  const deleteThisComment = () => {
    if (window.confirm('Delete this comment?')) {
      deleteTrailComment(commentObj.id).then(() => onUpdate());
    }
  };
  return (
    <div>
      <Card className="comment-card">
        <div className="commentContainer">
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                {commentObj.content}
                {' '}
              </p>
              <footer className="blockquote-footer">
                {commentObj.author_id.first_name} {commentObj.author_id.last_name}
                <br />
                <div className="btn-group">
                  <div>
                    {commentObj.author_id.uid === user.uid ? (
                      <Button type="button" className="m-2" onClick={() => router.push(`/comments/edit/${commentObj.id}`)}>Edit</Button>) : ''}
                  </div>
                  <div>
                    {commentObj.author_id.uid === user.uid ? (
                      <Button type="button" className="m-2" onClick={deleteThisComment}>Delete</Button>) : ''}
                  </div>
                </div>
              </footer>
            </blockquote>
          </Card.Body>
        </div>
      </Card>

    </div>
  );
}

TrailCommentCard.propTypes = {
  commentObj: PropTypes.shape({
    content: PropTypes.string,
    author_id: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      uid: PropTypes.string,
    }),
    post_id: PropTypes.shape({
      id: PropTypes.number,
    }),
    id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
