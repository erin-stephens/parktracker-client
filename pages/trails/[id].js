import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleTrail } from '../../utils/data/trailData';

export default function TrailDetailsPage() {
  const [trailDetails, setTrailDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleTrail(id).then(setTrailDetails);
  }, [id]);

  return (
    <div>
      <h2>Name: {trailDetails.trail_name}</h2>
      <h4>Park: {trailDetails.park_id?.park_name}</h4>
      <h4>Length: {trailDetails.length}</h4>
      <h4>Difficulty: {trailDetails.rating}</h4>
      <h4>Description: {trailDetails.description}</h4>
    </div>
  );
}
