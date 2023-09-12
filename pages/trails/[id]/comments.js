import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCommentsByTrail } from '../../../utils/data/trailData';

export default function TrailComments() {
  const [, setComments] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getAllTrailComments = () => {
    getCommentsByTrail(id).then(setComments);
  };

  useEffect(() => {
    getAllTrailComments();
  });

  return (
    <div>comments</div>
  );
}
