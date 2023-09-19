import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getSingleSite } from '../../utils/data/siteData';

export default function SiteDetailsPage() {
  const [siteDetails, setSiteDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleSite(id).then(setSiteDetails);
  }, [id]);

  return (
    <div>
      <Link passHref href="/sites">
        <Button>All Sites</Button>
      </Link>
      <img src={siteDetails.image_url} alt={siteDetails.site_name} />
      <h2>Name: {siteDetails.site_name}</h2>
      <h4>Park: {siteDetails.park_id?.park_name}</h4>
      <h4>Description: {siteDetails.description}</h4>
      <h4>Site Type: {siteDetails.site_type}</h4>
    </div>
  );
}
