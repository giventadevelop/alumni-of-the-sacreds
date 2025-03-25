'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
// import Head from 'next/head'; // Comment out this import

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function Home() {
  return (
    <>
      {/* Comment out the Head section since we have meta tags in layout.jsx */}
      {/*<Head>
        <meta name="description" content="Sacred Heart Alumni Association - Alumni Of The Sacreds - SHEMHSS Moolamattom" />
        <meta name="keywords" content="alumni, sacred heart, moolamattom, school, association, SHEMHSS" />
        <meta name="author" content="Sacred Heart Alumni" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>*/}

      <main>
        {/* Header Area */}
        <header id="header-area">
          <div className="preheader-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-7 col-7">
                  <div className="preheader-left"></div>
                </div>
                <div className="col-lg-6 col-sm-5 col-5 text-right">
                  <div className="preheader-right"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-bottom-area" id="fixheader">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="main-menu navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">
                      <Image src="/img/logo.png" alt="Logo" width={150} height={50} priority />
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#menucontent"
                      aria-controls="menucontent"
                      aria-expanded="false"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="menucontent">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="event.html">Event</a></li>
                        <li className="nav-item"><a className="nav-link" href="gallery.html">Gallery</a></li>
                        <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* New Test Slider */}
        <section id="slider-area">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="slider-active-wrap"
          >
            {/* First Slide */}
            <SwiperSlide>
              <div className="test-slide" style={{
                backgroundImage: 'url("https://picsum.photos/1920/1080")',
                height: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="slider-content">
                        <h3>Test Slide 1</h3>
                        <h4><span>Placeholder Content</span></h4>
                        <p>This is a test slide with placeholder image</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Second Slide */}
            <SwiperSlide>
              <div className="test-slide" style={{
                backgroundImage: 'url("https://picsum.photos/1920/1081")',
                height: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="slider-content">
                        <h3>Test Slide 2</h3>
                        <h4><span>Another Placeholder</span></h4>
                        <p>Second test slide with different placeholder image</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Third Slide */}
            <SwiperSlide>
              <div className="test-slide" style={{
                backgroundImage: 'url("https://picsum.photos/1920/1082")',
                height: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="slider-content">
                        <h3>Test Slide 3</h3>
                        <h4><span>Final Placeholder</span></h4>
                        <p>Third test slide with another placeholder image</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Upcoming Event Area */}
        <section id="upcoming-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="upcoming-event-wrap">
                  <div className="up-event-titile">
                    <h3>Upcoming event</h3>
                  </div>
                  <div className="upcoming-event-content owl-carousel">
                    {/* Event items */}
                    {/* Copy the event items from index.html */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Area */}
        <section id="about-area" className="section-padding">
          {/* ... about content ... */}
        </section>

        {/* Other sections ... */}
      </main>
    </>
  );
}