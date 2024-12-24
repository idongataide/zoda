"use client";

import React, { useEffect } from 'react';
import Header from './components/header';
import Image from 'next/image';
import Images from '@/components/Images'; 
import Link from 'next/link';
import ClientsCarousel from './components/partners';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import Dashboard from './components/Dashboard';
import WOW from 'wow.js';



export default function Home() {

  useEffect(() => {
    new WOW().init(); 
  }, []);

  return (
    <>
    <Header/>
    <main className="main-wrapper" data-bs-spy="scroll" data-bs-target="#Parent_Scroll_Div" data-bs-smooth-scroll="false" tabIndex={0}>
        <div className="main-content">
          <section className="py-5 bg-hero" id="home">
            <div className="container py-4 px-4 px-lg-0">
              <div className="row align-items-center justify-content-center g-4">
                <div className="col-12 col-xl-5 text-center">
                  <p className='intro text-center mb-0 wow fadeInUp'>Introducing</p>
                  <h1 className="fw-bold mb-3 banner-heading wow fadeInUp" data-wow-delay="0.2s">Xplora.io</h1>
                  <p className="mb-0 banner-paragraph wow fadeInUp" data-wow-delay="0.3s">Analyze your data, create your <br/> dashboard, and unite your team</p>
                </div>          
              </div>  
              <div className="row align-items-center justify-content-center g-4 mt-5">
                <div className="col-12 col-xl-12 text-center">
                  <Dashboard/>
                </div>         
              </div>  
            </div>
          </section>

          <section className="py-5" id="Services">
            <div className="container py-4 px-4 px-lg-0">
              <div className='col-lg-6 col-md-12 m-auto'>
                <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.4s">
                  <h1 className="mb-2 section-title-name">Features</h1>
                  <p className="mb-0 section-subtitle f-inria">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
                </div>
              </div>
              <div className='col-lg-10 col-md-12 m-auto'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                  <div className="col d-flex wow fadeInUp" data-wow-delay="0.4s">
                    <div className="card rounded-4 mb-0 w-100">
                      <div className="card-body text-center p-4">
                        <div className="d-flex flex-column gap-4">
                          <div className="d-flex align-items-center justify-content-center mx-auto">
                            <Image src={Images.features1} alt="Feature 1" width={25} height={25} />
                          </div>
                          <div className="features-text">
                            <h3>A single source of truth</h3>
                            <p className="mb-0">
                              When you add work to your Slate calendar we automatically calculate useful insights.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex wow fadeInUp" data-wow-delay="0.6s">
                    <div className="card rounded-4 mb-0 w-100">
                      <div className="card-body text-center p-4">
                        <div className="d-flex flex-column gap-4">
                          <div className="d-flex align-items-center justify-content-center mx-auto">
                            <Image src={Images.features2} alt="Feature 2" width={25} height={25} />
                          </div>               
                          <div className="features-text">
                            <h3>Intuitive interface</h3>
                            <p className="mb-0">
                              When you add work to your Slate calendar we automatically calculate useful insights.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex  wow fadeInUp" data-wow-delay="0.8s">
                    <div className="card rounded-4 mb-0 w-100">
                      <div className="card-body text-center p-4">
                        <div className="d-flex flex-column gap-4">
                          <div className="d-flex align-items-center justify-content-center mx-auto">
                            <Image src={Images.features3} alt="Feature 3" width={25} height={25} />
                          </div>
                          <div className="features-text">
                            <h3>Or with rules</h3>
                            <p className="mb-0">
                            When you add work to your Slate calendar we automatically calculate useful insights 
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </section>
        {/*end services*/}

       <section className="py-5" id="Gallery">
          <div className="container py-4 px-4 px-lg-0">
            <div className='col-lg-6 col-md-12 m-auto'>
              <div className="section-title text-center mb-5">
                <h1 className="mb-2 section-title-name wow fadeInUp" data-wow-delay="0.6s">Gallery</h1>
                <p className="mb-0 section-subtitle wow fadeInUp" data-wow-delay="0.9s">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
              </div>
            </div>
            {/* First row of gallery images */}
            <div className="row row-cols-1 row-cols-lg-4 g-4 ms-4 me-4">
              <div className="col wow fadeInUp">
                <div className="inner rounded-4">
                  <img src={Images.gallery1} className="img-fluid" alt="Gallery Image" />
                </div>
              </div>
              <div className="col wow fadeInUp" data-wow-delay="0.2s">
                <div className="inner rounded-4">
                  <img src={Images.gallery2} className="img-fluid" alt="Gallery Image" />
                </div>
              </div>
              <div className="col wow fadeInUp" data-wow-delay="0.4s">
                <div className="inner rounded-4">
                  <img src={Images.gallery3} className="img-fluid" alt="Gallery Image" />
                </div>
              </div>
              <div className="col wow fadeInUp" data-wow-delay="0.6s">
                <div className="inner rounded-4">
                  <img src={Images.gallery4} className="img-fluid" alt="Gallery Image" />
                </div>
              </div>
            </div>

            {/* Second row of gallery images */}
            <div className="row g-4 mt-1">
              <div className="col-md-5 wow fadeInLeft">
                <div className="inner img-height rounded-4 ">
                  <img src={Images.gallery5} className="img-fluid" alt="Gallery Image" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="row g-4 ">
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="inner rounded-4 img-fit h-100">
                      <img src={Images.gallery6} className="img-fluid" alt="Gallery Image" />
                    </div>
                  </div>
                  <div className="col-md-8 wow fadeInRight" data-wow-delay="0.4s">
                    <div className="inner rounded-4">
                      <img src={Images.gallery7} className="img-fluid" alt="Gallery Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button for "See more" */}
            <div className="d-flex justify-content-center mt-5">
              <Link href="/buy-now" passHref>
                <button className="btn btn-md btn-grd btn-dark">
                  See more
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-5" id="Partners">
          <div className="container py-4 px-4 px-lg-0">
            <div className='col-lg-6 col-md-12 m-auto'>
              <div className="section-title text-center mb-5">
                <h1 className="mb-2 section-title-name wow fadeInUp" data-wow-delay="0.4s">Partners</h1>
                <p className="mb-0 section-subtitle wow fadeInUp" data-wow-delay="0.6s">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
              </div>
            </div>
           
           <div className='col-md-9 mx-auto'>
             <ClientsCarousel/>
              <div className="d-flex justify-content-center mt-5">
                <Link href="/buy-now" passHref>
                  <button className="btn btn-md btn-grd btn-dark ">
                    All Partners
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </section>

        <section className="py-5 testimonial" id="Testimonials">
          <div className="container py-4 px-4 px-lg-0">
            <div className='col-lg-6 col-md-12 m-auto'>
              <div className="section-title text-center mb-5">
                <h1 className="mb-2 section-title-name wow fadeInUp" data-wow-delay="0.4s">Testimonials</h1>
              </div>
            </div>
           
           <div className='col-md-9 mx-auto'>           
               <Testimonials/>
           </div>

          </div>
        </section>


      </div>
    </main>
  <Footer/>
  </>
    
  );
}
