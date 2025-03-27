import Image from 'next/image';

export default function AboutContent() {
  return (
    <section id="page-content-wrap">
      <div className="about-page-content-wrap section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 m-auto">
              {/* First About Section - 2019 */}
              <div className="single-about-text">
                <span className="year">2019</span>
                <div className="img-wrapper">
                  <Image
                    src="/img/about-page/img1.jpg"
                    alt="About"
                    width={400}
                    height={300}
                    className="img-fluid img-left"
                  />
                </div>
                <h2 className="h3">ESTD of This Alumni Association</h2>
                <div id="ContentMiddle">
                  <h2>Alumni Of The Sacreds Relations</h2>
                  <h4>MISSION</h4>
                  <p>Seeking to engage all Alumni Of The Sacreds in a mutually beneficial, lifelong connection to each other, their school, and encourage alumni support and guidance to advance The Sacreds's eminence for future generations.</p>

                  <h4>Alumni Of The Sacreds: Demographics, History, Purpose, and Structure</h4>
                  <p>Alumni Of The Sacreds is the formal name for our family of over 4000 living The Sacreds graduates. Of these, the split of undergraduate degree (52.5%) and graduate degree holders (47.5%) is fairly even. Most alumni reside in India, but The Sacreds does have over 1000 alumni living abroad. Not surprisingly, the largest geographic concentration of our alumni is in the state of Kerala area.</p>
                  {/* ... Continue with other content ... */}
                </div>
              </div>

              {/* Second About Section - 1974 */}
              <div className="single-about-text">
                <span className="year">1974</span>
                <div className="img-wrapper">
                  <Image
                    src="/img/about-page/img2.jpg"
                    alt="About"
                    width={400}
                    height={300}
                    className="img-fluid img-right"
                  />
                </div>
                <h2 className="h3">About the school</h2>
                <p>Sacred Heart English Medium Higher Secondary School Moolamattom is affiliated to C.B.S.E, Delhi is a premier minority educational institution established and administrated under SH Congregation. Staff are dedicated to imparting the highest standards of education and the holistic nurturing of students.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}