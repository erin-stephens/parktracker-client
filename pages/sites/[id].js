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
      <div className="sitedeetbtn">
        <Link passHref href="/sites">
          <Button>All Attractions</Button>
        </Link>
      </div>
      <div className="siteid">
        <div>
          <img
            src={siteDetails.image_url}
            alt={siteDetails.site_name}
            style={{
              height: '400px',
              width: '500px',
            }}
          />
        </div>
        <div className="sitetext">
          <h2>{siteDetails.site_name}</h2>
          <hr />
          <h4>{siteDetails.park_id?.park_name} {siteDetails.park_id?.park_type} Park</h4>
          <br />
          <h4>{siteDetails.description}</h4>
          <br />
          <h4> This attraction type is a {siteDetails.site_type}.</h4>
        </div>
      </div>
    </div>
  );
}
