import React from 'react';
import ParkForm from '../../components/park/ParkForm';
import { useAuth } from '../../utils/context/authContext';

export default function CreateParkPage() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Add a New Park</h1>
      <ParkForm user={user} />
    </div>
  );
}
