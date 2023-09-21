import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
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
      <Head>
        <title>{parkDetails.park_name} {parkDetails.park_type} Park</title>
      </Head>
      <div className="parkdeets">
        <Link passHref href="/parks">
          <Button>All Parks</Button>
        </Link>
        <div className="parkdetails">
          <div>
            <img
              src={parkDetails.image_url}
              alt={parkDetails.park_name}
              style={{
                height: '400px',
                width: '500px',
              }}
            />
          </div>
          <div className="parkdetailtext">
            <h2>{parkDetails.park_name} {parkDetails.park_type} Park</h2>
            <h4>Location: {parkDetails.location}</h4>
          </div>
        </div>
        <div>
          <h1 className="parkh1">Park Trails</h1>
          <div className="parktrails">
            {trails.length === 0 ? (<Button onClick={() => { router.push('/trails/new'); }}>Add Trail</Button>) : (
              trails.map((trail) => (
                <section key={`trail--${trail.id}`} className="trails">
                  <TrailCard trailObj={trail} onUpdate={getTrails} />
                </section>
              ))
            )}
          </div>
        </div>
        <div>
          <h1 className="parkh1">Park Attractions</h1>
          <div className="parksites">
            {sites.length === 0 ? (<Button onClick={() => { router.push('/sites/new'); }}>Add Attraction</Button>) : (
              sites.map((site) => (
                <section key={`site--${site.id}`} className="sites">
                  <SiteCard siteObj={site} onUpdate={getSites} />
                </section>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
