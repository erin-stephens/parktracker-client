import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleSite } from '../../../utils/data/siteData';
import SiteForm from '../../../components/site/SiteForm';

export default function EditSite() {
  const [editSite, setEditSite] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleSite(id).then(setEditSite);
  }, [id]);

  return (
    <SiteForm obj={editSite} />
  );
}
