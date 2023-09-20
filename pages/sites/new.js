import React from 'react';
import SiteForm from '../../components/site/SiteForm';
import { useAuth } from '../../utils/context/authContext';

export default function CreateSitePage() {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="addnew">Add a New Attraction</h1>
      <SiteForm user={user} />
    </div>
  );
}
