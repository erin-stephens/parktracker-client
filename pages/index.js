import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import parkhome from '../src/assets/pics/parkhome.jpeg';
import sitehome from '../src/assets/pics/sitehome.jpeg';
import trailhome from '../src/assets/pics/trailhome.jpeg';
import Header from '../components/Header';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  return (
    <>
      <div className="homeheader">
        <div
          className="header"
          style={{
            height: '200px',
            width: '200px',
          }}
        >
          <Header />
        </div>
      </div>
      <div className="hometabs">
        <h1> Welcome {user.first_name}! Ready to explore?</h1>
        <hr />
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
            <div> Interested in finding out what parks other users have been too? Check out our list of National and State parks! </div>
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
            className="imagecontainer"
          >
            <Image src={sitehome} alt="siteimage" className="siteimage" />
          </div>
          <div className="trailtextcontainer">
            <h1>Trails</h1>
            <div> Interested in finding out which trails are the best at each park? Check out our list of trails! </div>
            <Link passHref href="/trails">
              <Button className="btn"> Go To Trails </Button>
            </Link>
          </div>
        </div>
        <div className="sitehome">
          <div
            style={{
              height: '160px',
              width: '200px',
            }}
            className="imagecontainer"
          >
            <Image src={trailhome} alt="trailimage" className="trailimage" />
          </div>
          <div className="textcontainer">
            <h1>Sites</h1>
            <div> Interested to find out where others visited while in the parks? Check out our list of sites! </div>
            <Link passHref href="/sites">
              <Button className="btn"> Go To Sites </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
