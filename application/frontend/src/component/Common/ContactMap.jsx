import React, { Component } from "react";
class ContactMap extends Component {
  render() {
    return (
      <section className="pb-110">
        <div className="container">
          <div className="map-area position-relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123561.29360279336!2d120.91403895820314!3d14.582519900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca216bfbdb1f%3A0x65f5c05c8e66cd7e!2sCafe%20France!5e0!3m2!1sen!2s!4v1585135158878!5m2!1sen!2s"
              frameborder="0"
              // style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
            <div className="contact-bar bg-white py-4">
              <div className="row">
                <div className="col-md-7">
                  <div className="contact-bar-info d-flex align-items-center">
                    <i className="flaticon-clock"></i>
                    <div>
                      <span className="fs-16  text-gray2 d-block">
                        Monday- Friday:
                      </span>
                      <span className="font-weight-bold text-black font-size-16">
                        08am - 12pm
                      </span>
                    </div>
                    <div>
                      <span className="fs-16  text-gray2 d-block">
                        Saturday - Sunday:
                      </span>
                      <span className=" font-weight-bold text-black font-size-16">
                        10am - 11pm{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="contact-bar-info d-flex align-items-center">
                    <i className="flaticon-gps"></i>
                    <div>
                      <span className="fs-16 text-gray">
                        8121 Sierra Lane Tampa,
                        <br /> Florida 33604
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ContactMap;
