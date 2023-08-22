import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSinglePark } from '../../../utils/data/parkData';
import ParkForm from '../../../components/park/ParkForm';

export default function EditPark() {
  const [editPark, setEditPark] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSinglePark(id).then(setEditPark);
  }, [id]);

  return (
    <ParkForm obj={editPark} />
  );
}
