import React from "react";
import Layout from "./../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* External Stylesheets */}
      <div>
        <link
          rel="stylesheet"
          href="https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/bs-brain@2.0.4/utilities/bsb-overlay/bsb-overlay.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/bs-brain@2.0.4/utilities/background/background.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/bs-brain@2.0.4/utilities/margin/margin.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/bs-brain@2.0.4/utilities/padding/padding.css"
        />
      </div>

      {/* Contact Section */}
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Need Help</h2>
              <p className="text-secondary mb-5 text-center lead fs-4">
                Our team is available to provide prompt and helpful responses to
                all inquiries. You can reach us via phone, email, or by filling
                out the contact form below.
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card border border-dark rounded shadow-sm overflow-hidden">
                <div className="card-body p-0">
                  <div className="row gy-3 gy-md-4 gy-lg-0">
                    {/* Left Panel - Contact Info */}
                    <div
                      className="col-12 col-lg-6 bsb-overlay background-position-center background-size-cover"
                      style={{
                        backgroundImage:
                          'url("./assets/img/contact-img-1.webp")',
                        bsbOverlayOpacity: "0.7",
                      }}
                    >
                      <div className="row align-items-lg-center justify-content-center h-100">
                        <div className="col-11 col-xl-10">
                          <div className="contact-info-wrapper py-4 py-xl-5">
                            <h2 className="h1 mb-3 text-light">Get in touch</h2>
                            <p className="lead fs-4 text-light opacity-75 mb-4 mb-xxl-5">
                              We're always on the lookout to work with new
                              clients. If you're interested in working with us,
                              please get in touch in one of the following ways.
                            </p>
                            {/* Address */}
                            <div className="d-flex mb-4 mb-xxl-5">
                              <div className="me-4 text-primary">
                                {/* Icon */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={32}
                                  height={32}
                                  fill="currentColor"
                                  className="bi bi-geo"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h4 className="mb-3 text-light">Address</h4>
                                <address className="mb-0 text-light opacity-75">
                                  8014 Edith Blvd NE, Albuquerque, New York,
                                  United States
                                </address>
                              </div>
                            </div>
                            {/* Phone */}
                            <div className="d-flex mb-4 mb-xxl-5">
                              <div className="me-4 text-primary">
                                {/* Icon */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={32}
                                  height={32}
                                  fill="currentColor"
                                  className="bi bi-telephone-outbound"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="mb-3 text-light">Phone</h4>
                                <p className="mb-0">
                                  <a
                                    className="link-light link-opacity-75 link-opacity-100-hover text-decoration-none"
                                    href="tel:+15057922430"
                                  >
                                    (505) 792-2430
                                  </a>
                                </p>
                              </div>
                            </div>
                            {/* Email */}
                            {/* Add similar blocks for Email and other details */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Form Section */}
                    <div className="col-12 col-lg-6">
                      {/* Add the form here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
