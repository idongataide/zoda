import React from 'react';
import Image from 'next/image';
import Images from './Images';

const Footer: React.FC = () => {
  return (
    <footer className="page-footer py-5">
      <div className="container py-4 px-4 px-lg-0">
        <div className='col-md-10 mx-auto'>
        <div className="row g-4">
          {/* Fingertipe Section */}
          <div className="col-12 col-xl-2">
            <div className="footer-widget-2">
              <div className="footer-links">
                <h5 className="mb-4">Fingertipe</h5>
                <div className="d-flex flex-column gap-2">
                  <a href="#">Home</a>
                  <a href="#">Examples</a>
                  <a href="#">Pricing</a>
                  <a href="#">Updates</a>
                </div>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="col-12 col-xl-2">
            <div className="footer-widget-2">
              <div className="footer-links">
                <h5 className="mb-4">Resources</h5>
                <div className="d-flex flex-column gap-2">
                  <a href="#">Home</a>
                  <a href="#">Examples</a>
                  <a href="#">Pricing</a>
                  <a href="#">Updates</a>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="col-12 col-xl-3">
            <div className="footer-widget-2">
              <div className="footer-links">
                <h5 className="mb-4">About</h5>
                <div className="d-flex flex-column gap-2">
                  <a href="#">Home</a>
                  <a href="#">Examples</a>
                  <a href="#">Pricing</a>
                  <a href="#">Updates</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact and Social Section */}
          <div className="col-12 col-xl-4">
            <div className="footer-widget-4">
              <div className="d-flex align-items-center gap-2 mb-4">
                <Image src={Images.location} alt="location" width={32} height={32} />
                <p className='mb-0'>7480 Mockingbird Hill, undefined</p>
              </div>
              <div className="d-flex align-items-center gap-2 mb-4">
                <Image src={Images.phone} alt="phone" width={32} height={32} />
                <p className='mb-0'>(239) 555-0108</p>
              </div>
              <div className="d-flex align-items-center justify-content-start gap-3">
                <a href="#" className="d-flex align-items-center justify-content-center" aria-label="twitter">
                  <Image src={Images.twitter} className='hover-up' alt="Twitter" width={32} height={32} />
                </a>
                <a href="#" className="d-flex align-items-center justify-content-center" aria-label="facebook">
                  <Image src={Images.facebook} className='hover-up' alt="Facebook" width={32} height={32} />
                </a>
                <a href="#" className="d-flex align-items-center justify-content-center" aria-label="LinkedIn">
                  <Image src={Images.linkedin} className='hover-up' alt="LinkedIn" width={32} height={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      </div>
    </footer>
  );
};

export default Footer;
