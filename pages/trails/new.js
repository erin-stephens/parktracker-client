import React from 'react';
import TrailForm from '../../components/trail/TrailForm';
import { useAuth } from '../../utils/context/authContext';

export default function CreateTrailPage() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Add a New Trail</h1>
      <TrailForm user={user} />
    </div>
  );
}
