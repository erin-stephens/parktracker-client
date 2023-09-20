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
        <Link passHref href="/trails">
          <Button>All Trails</Button>
        </Link>
        <h2>Name: {trailDetails.trail_name}</h2>
        <h4>Park: {trailDetails.park_id?.park_name}</h4>
        <h4>Length: {trailDetails.length}</h4>
        <h4>Difficulty: {trailDetails.rating}</h4>
        <h4>Description: {trailDetails.description}</h4>
      </div>
      <div>
        <h2>Comments</h2>
        {comments.map((comment) => (
          <section
            key={`comment--${comment.id}`}
            className="comment"
          >
            <TrailCommentCard commentObj={comment} onUpdate={getAllComments} />
          </section>
        ))}
      </div>
      <div>
        <TrailCommentForm user={user} trailObj={trailDetails} onUpdate={getAllComments} />
      </div>
    </>
  );
}
