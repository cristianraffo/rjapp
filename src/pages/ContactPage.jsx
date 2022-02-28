import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="form">
      <div className="form-container container">
        <form id="contact-form" name="contact-form" method="POST">
          <div className="row">
            <p className="form-text mb-5">
              If you want to talk about anything, <br />
              please fill the form below and I'll get back to you.
            </p>
          </div>
          <div className="row mb-3">
            <div className="col-lg-6 mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" id="name" type="text" required />
            </div>
            <div className="col-lg-6 mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                id="email"
                type="email"
                required
              />
            </div>
          </div>
          <div className="row w-100">
            <div className="col-lg-12 mb-3">
              <label className="form-label" htmlFor="message">
                How can I help you?
              </label>
              <textarea
                className="form-control textarea"
                id="message"
                type="text"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <input type="submit" className="btn" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
