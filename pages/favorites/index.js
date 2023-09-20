import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getFavoriteParks } from '../../utils/data/parkData';
import FavoriteParkCard from '../../components/favorite/FavoriteCard';

export default function Home() {
  const [parks, setParks] = useState([]);
  const { user } = useAuth();
  const getUserFavorites = async () => {
    const favorites = await getFavoriteParks(user.id);
    setParks(favorites);
    console.warn(favorites);
  };

  useEffect(() => {
    getUserFavorites();
    console.warn(parks);
  }, [user.id]);

  return (
    <>
      <Head>
        <title>Favorite Parks</title>
      </Head>
      <div>
        <div className="indexheader">
          <h1>Favorited Parks</h1>
        </div>
        <div className="favoriteindex">
          {parks.map((park) => (
            <section key={`park--${park.id}`} className="parks">
              <FavoriteParkCard favoriteObj={park} onUpdate={getUserFavorites} />
            </section>
          ))}
        </div>
      </div>
      <div className="footer">
        <Link passHref href="/parks">
          <Button className="btn"> Return To Parks </Button>
        </Link>
      </div>
    </>
  );
}
