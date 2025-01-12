import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus policy-page">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 policy-content">
          <h2 className="policy-title">Privacy Policy</h2>
          <p className="policy-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere
            velit aliquet. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </p>
          <p className="policy-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere
            velit aliquet. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </p>
          <p className="policy-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere
            velit aliquet. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
