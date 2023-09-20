import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import { getTrails } from '../../utils/data/trailData';
import TrailCard from '../../components/trail/TrailCard';

export default function TrailsHome() {
  const [trails, setTrails] = useState([]);
  const router = useRouter();
  const getAllTrails = () => {
    getTrails().then(setTrails);
  };

  useEffect(() => {
    getAllTrails();
  }, []);

  return (
    <>
      <Head>
        <title>All Trails</title>
      </Head>
      <div className="trailbody">
        <div className="wrapper">
          <div className="indexheader">
            <h2>View All Trails</h2>
          </div>
          <div className="trailindex">
            {trails.map((trail) => (
              <section key={`trail--${trail.id}`} className="trails">
                <TrailCard trailObj={trail} onUpdate={getAllTrails} />
              </section>
            ))}
          </div>
        </div>
        <div className="footer">
          <Button onClick={() => { router.push('/trails/new'); }}>Add New Trail</Button>
        </div>
      </div>
    </>
  );
}
