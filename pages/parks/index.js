import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getParks } from '../../utils/data/parkData';
import ParkCard from '../../components/park/ParkCard';

export default function ParksHome() {
  const [parks, setParks] = useState([]);
  const router = useRouter();
  const getAllParks = () => {
    getParks().then(setParks);
  };

  useEffect(() => {
    getAllParks();
  }, []);

  return (
    <>
      <div>
        <Button onClick={() => { router.push('/parks/new'); }}>Add New Park</Button>
      </div>
      <h2>View All Parks</h2>
      <div>
        {parks.map((park) => (
          <section key={`park--${park.id}`} className="parks">
            <ParkCard parkObj={park} onUpdate={getAllParks} />
          </section>
        ))}
      </div>
    </>
  );
}
