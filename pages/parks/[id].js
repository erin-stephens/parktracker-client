import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getSinglePark } from '../../utils/data/parkData';
import { getSiteByPark } from '../../utils/data/siteData';
import SiteCard from '../../components/site/SiteCard';
import { getTrailByPark } from '../../utils/data/trailData';
import TrailCard from '../../components/trail/TrailCard';

export default function ParkDetailsPage() {
  const [parkDetails, setParkDetails] = useState({});
  const [sites, setSites] = useState([]);
  const [trails, setTrails] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getSites = () => {
    getSiteByPark(id).then(setSites);
  };

  const getTrails = () => {
    getTrailByPark(id).then(setTrails);
  };

  useEffect(() => {
    getSinglePark(id).then(setParkDetails);
    getSites();
    getTrails();
  }, [id]);

  return (
    <>
      <Link passHref href="/parks">
        <Button>All Parks</Button>
      </Link>
      <div>
        <img src={parkDetails.image_url} alt={parkDetails.park_name} />
        <h2>Name: {parkDetails.park_name}</h2>
        <h4>Location: {parkDetails.location}</h4>
        <h4>Park Type: {parkDetails.park_type}</h4>
      </div>
      <div>
        <h1>Park Trails</h1>
        {trails.map((trail) => (
          <section key={`trail--${trail.id}`} className="trails">
            <TrailCard trailObj={trail} onUpdate={getTrails} />
          </section>
        ))}
      </div>
      <div>
        <h1>Park Sites</h1>
        {sites.map((site) => (
          <section key={`site--${site.id}`} className="sites">
            <SiteCard siteObj={site} onUpdate={getSites} />
          </section>
        ))}
      </div>
    </>
  );
}
