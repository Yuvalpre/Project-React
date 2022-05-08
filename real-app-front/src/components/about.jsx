import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            Informtation about <i className="bi bi-geo-fill"></i>Card App!<i className="bi bi-geo-fill"></i>
          </>
        }
      />
      <div className="row">
        <div className="col-12">
          <p>
            Here users and businesses can sign in and work on their special cards to be used. Please contact me if you expirienced any issues with the app
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
