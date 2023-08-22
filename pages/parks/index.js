import React, { useEffect, useState } from 'react';
import { getParks } from '../../utils/data/parkData';
import ParkCard from '../../components/park/ParkCard';

export default function ParksHome() {
  const [parks, setParks] = useState([]);
  const getAllParks = () => {
    getParks().then(setParks);
  };

  useEffect(() => {
    getAllParks();
  }, []);

  return (
    <div>
      <div>
        <button type="button">Add New Park</button>
      </div>
      <h2>View All Parks</h2>
      <div>
        {parks.map((park) => (
          <section key={`park--${park.id}`} className="parks">
            <ParkCard parkObj={park} onUpdate={getAllParks} />
          </section>
        ))}
      </div>
    </div>
  );
}
