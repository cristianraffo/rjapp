import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <section class="error text-center d-flex">
    <div className="container m-auto">
      <img className="img-fluid" src="404-logo.png" alt="404 image" />
      <h2 className="error-title">
        <a className="error-link" href="./">
          Beam me up
        </a>
        , Scotty!
      </h2>
      <p className="error-subtitle">There is no intelligent life down here.</p>
    </div>
    </section>
  );
};

export default NotFoundPage;
