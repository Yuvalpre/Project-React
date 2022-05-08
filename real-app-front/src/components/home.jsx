import PageHeader from "./common/pageHeader";

const Home = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            <i className="bi bi-geo-fill"></i>Card App!<i className="bi bi-geo-fill"></i>
          </>
        }
      />
      <div className="row">
        <div className="col-12">
          <p>
            Hello! welcome to my first app! made with React! Please log in to use my app!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
