import React from 'react';
import SiteForm from '../../components/site/SiteForm';
import { useAuth } from '../../utils/context/authContext';

export default function CreateSitePage() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Add a New Site</h1>
      <SiteForm user={user} />
    </div>
  );
}
