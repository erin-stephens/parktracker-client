import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getSites } from '../../utils/data/siteData';
import SiteCard from '../../components/site/SiteCard';

export default function SitesHome() {
  const [sites, setSites] = useState([]);
  const router = useRouter();
  const getAllSites = () => {
    getSites().then(setSites);
  };

  useEffect(() => {
    getAllSites();
  }, []);

  return (
    <>
      <div>
        <Button onClick={() => { router.push('/sites/new'); }}>Add New Site</Button>
      </div>
      <h2>View All Sites</h2>
      <div>
        {sites.map((site) => (
          <section key={`site--${site.id}`} className="sites">
            <SiteCard siteObj={site} onUpdate={getAllSites} />
          </section>
        ))}
      </div>
    </>
  );
}
