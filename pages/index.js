import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import parkhome from '../src/assets/pics/parkhome.jpeg';
import sitehome from '../src/assets/pics/sitehome.jpeg';
import trailhome from '../src/assets/pics/trailhome.jpeg';
import { useAuth } from '../utils/context/authContext';
import Logo from '../components/Logo';

function Home() {
  const { user } = useAuth();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="homeheader">
        <div
          style={{
            height: '260px',
            width: '260px',
          }}
        >
          <Logo />
        </div>
      </div>
      <div className="hometabs">
        <div>
          <h1> Welcome, {user.first_name}! Ready to Explore?</h1>
          <hr />
        </div>
        <div className="homenav">
          <div className="parkhome">
            <div
              style={{
                height: '200px',
                width: '200px',
              }}
              className="imagecontainer"
            >
              <Image src={parkhome} alt="parkimage" className="parkimage" />
            </div>
            <div className="textcontainer">
              <h1>Parks</h1>
              <div> <h5>Interested in finding out what parks other users have been to? Check out our list of National and State parks! </h5></div>
              <Link passHref href="/parks">
                <Button className="btn"> Go To Parks </Button>
              </Link>
            </div>
          </div>
          <div className="trailhome">
            <div
              style={{
                height: '200px',
                width: '200px',
              }}
              className="siteimagecontainer"
            >
              <Image src={trailhome} alt="trailimage" className="trailimage" />
            </div>
            <div className="trailtextcontainer">
              <h1>Trails</h1>
              <div> <h5>Interested in finding out which trails are the best at each park? Check out our list of trails! </h5></div>
              <Link passHref href="/trails">
                <Button className="btn"> Go To Trails </Button>
              </Link>
            </div>
          </div>
          <div className="sitehome">
            <div
              style={{
                height: '200px',
                width: '200px',
              }}
              className="imagecontainer"
            >
              <Image src={sitehome} alt="siteimage" className="siteimage" />
            </div>
            <div className="textcontainer">
              <h1>Attractions</h1>
              <div> <h5>Interested to find out where others visited while in the parks? Check out our list of attractions! </h5></div>
              <Link passHref href="/sites">
                <Button className="btn"> Go To Attractions </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer" />
    </>
  );
}

export default Home;
