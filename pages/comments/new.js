import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TrailCommentForm from '../../components/trailcomment/TrailCommentForm';
import { useAuth } from '../../utils/context/authContext';
import { getSingleTrail } from '../../utils/data/trailData';

export default function NewTrailComment() {
  const [trail, setTrail] = useState({});
  const { user } = useAuth();
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleTrail(id).then(setTrail);
  }, [id]);

  return (
    <div>
      <h2>Add a Comment</h2>
      <TrailCommentForm user={user} trailObj={trail} />
    </div>
  );
}
