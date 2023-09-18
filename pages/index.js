import Image from 'next/image';
import Link from 'next/link';
import parkhome from '../src/assets/pics/parkhome.jpeg';
import sitehome from '../src/assets/pics/sitehome.jpeg';
import trailhome from '../src/assets/pics/trailhome.jpeg';
import Header from '../components/Header';

function Home() {
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
            <div> park info</div>
            <Link passHref href="/parks">
              <button type="button"> Go To Parks </button>
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
          <div className="textcontainer">
            <h1>Trails</h1>
            <div> trail info</div>
            <Link passHref href="/trails">
              <button type="button"> Go To Trails </button>
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
            <div> site info</div>
            <Link passHref href="/sites">
              <button type="button"> Go To Sites </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
