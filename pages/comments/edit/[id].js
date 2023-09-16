import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSingleTrailComment } from '../../../utils/data/commentData';
import TrailCommentForm from '../../../components/trailcomment/TrailCommentForm';

export default function EditTrailComment() {
  const [editComment, setEditComment] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleTrailComment(id).then(setEditComment);
  }, [id]);
  return (
    <TrailCommentForm obj={editComment} />
  );
}
