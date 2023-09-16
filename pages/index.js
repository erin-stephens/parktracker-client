import Header from '../components/Header';

function Home() {
  return (
    <>
      <div className="homeheader">
        <div
          className="header"
          style={{
            height: '160px',
            width: '200px',
          }}
        >
          <Header />
        </div>
      </div>
      <div className="hometabs">
        <div className="parkhome">
          <h1>Parks</h1>
          <div> park image</div>
          <div> park info</div>
        </div>
        <div className="trailhome">
          <h1>Trails</h1>
          <div> trail image</div>
          <div> trail info</div>
        </div>
        <div className="sitehome">
          <h1>Sites</h1>
          <div> site image</div>
          <div> site info</div>
        </div>
      </div>
    </>
  );
}

export default Home;
