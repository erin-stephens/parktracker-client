import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleTrail } from '../../../utils/data/trailData';
import TrailForm from '../../../components/trail/TrailForm';

export default function EditTrailsPage() {
  const [editTrail, setEditTrail] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleTrail(id).then(setEditTrail);
  }, [id]);

  return (
    <TrailForm obj={editTrail} />
  );
}
