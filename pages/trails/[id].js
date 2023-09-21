import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import TrailCommentCard from '../../components/trailcomment/TrailCommentCard';
import { useAuth } from '../../utils/context/authContext';
import { getSingleTrail, getCommentsByTrail } from '../../utils/data/trailData';
import TrailCommentForm from '../../components/trailcomment/TrailCommentForm';

export default function TrailDetailsPage() {
  const [trailDetails, setTrailDetails] = useState({});
  const [comments, setComments] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;

  const getATrail = () => {
    getSingleTrail(id).then(setTrailDetails);
  };
  const getAllComments = () => {
    getCommentsByTrail(id).then(setComments);
  };
  useEffect(() => {
    getATrail();
    getAllComments();
  }, [id]);

  return (
    <>
      <div>
        <div className="traildeetbtn">
          <Link passHref href="/trails">
            <Button>All Trails</Button>
          </Link>
        </div>
        <div className="trailinfo">
          <h2>{trailDetails.trail_name}</h2>
          <h4>{trailDetails.park_id?.park_name} {trailDetails.park_id?.park_type} Park</h4>
          <br />
          <h4>Trail Length: {trailDetails.length} miles</h4>
          <h4> Trail Difficulty: {trailDetails.rating}</h4>
          <h4>Trail Description: {trailDetails.description}</h4>
        </div>
        <br />
      </div>
      <hr />
      <div className="trailcomments">
        <h2>Comments</h2>
        <div className="commentscard">
          {comments.length === 0 ? (<p>No Comments Yet. Add one below!</p>) : (
            comments.map((comment) => (
              <section
                key={`comment--${comment.id}`}
                className="comment"
              >
                <TrailCommentCard commentObj={comment} onUpdate={getAllComments} />
              </section>
            ))
          )}
        </div>
      </div>
      <div className="trailcommentform">
        <TrailCommentForm user={user} trailObj={trailDetails} onUpdate={getAllComments} />
      </div>
    </>
  );
}
