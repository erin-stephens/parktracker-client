import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import { getParks } from '../../utils/data/parkData';
import ParkCard from '../../components/park/ParkCard';
import { useAuth } from '../../utils/context/authContext';

export default function ParksHome() {
  const [parks, setParks] = useState([]);
  const router = useRouter();
  const { user } = useAuth();
  const getAllParks = () => {
    getParks(user.uid).then(setParks);
  };

  useEffect(() => {
    getAllParks();
  }, []);

  return (
    <>
      <Head>
        <title>All Parks</title>
      </Head>
      <div className="wrapper">
        <div className="indexheader">
          <h1>View All Parks</h1>
        </div>
        <div className="parkindex">
          {parks.map((park) => (
            <section key={`park--${park.id}`} className="parks">
              <ParkCard parkObj={park} onUpdate={getAllParks} className="parkcard" />
            </section>
          ))}
        </div>
      </div>
      <div className="footer">
        <Button onClick={() => { router.push('/parks/new'); }}>Add New Park</Button>
      </div>
    </>
  );
}
