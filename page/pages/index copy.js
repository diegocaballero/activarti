import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import SectionNumeral from '../components/section-numeral'
import Speaker from '../components/speaker'

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Activarti</title>
          <meta property="og:title" content="Activarti (Template 8)" />
        </Head>
        <section className="home-hero">
          <div className="home-background1">
            <img
              alt="image"
              src="/circle-background.svg"
              className="home-image10"
            />
            <img
              alt="image"
              src="/line-background.svg"
              className="home-image11"
            />
          </div>
          <header className="home-header10">
            <header data-thq="thq-navbar" className="home-navbar">
              <h2 className="home-text10">Activarti</h2>
              <div
                data-thq="thq-navbar-nav"
                data-role="Nav"
                className="home-desktop-menu"
              >
                <nav
                  data-thq="thq-navbar-nav-links"
                  data-role="Nav"
                  className="home-nav1"
                >
                  <span className="navLink">Schedule</span>
                  <span className="navLink">Sponsors</span>
                  <span className="navLink">Useful</span>
                </nav>
                <button className="button">
                  <span>Register now</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </button>
              </div>
              <div data-thq="thq-burger-menu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="home-nav2"
                >
                  <div className="home-container11">
                    <h2 className="home-text12">Activarti</h2>
                    <div data-thq="thq-close-menu" className="home-menu-close">
                      <svg viewBox="0 0 1024 1024" className="home-icon14">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className="home-nav3"
                  >
                    <span className="navLink home-text13">About</span>
                    <span className="navLink home-text14">Features</span>
                    <span className="navLink home-text15">Pricing</span>
                    <span className="navLink home-text16">Team</span>
                    <span className="navLink home-text17">Blog</span>
                  </nav>
                  <div className="home-button-container">
                    <button className="home-login button">Login</button>
                    <button className="button home-register2">Register</button>
                  </div>
                  <div className="home-icon-group">
                    <div className="home-icons">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="home-icon16"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="home-icon18"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="home-icon20"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/quote-background.svg"
                  className="home-background2"
                />
              </div>
            </header>
          </header>
          <div className="home-hero-content">
            <h1 className="home-text18">
              Marketing digital y Desarrollo de software
            </h1>
            <div className="home-caption10">
              <button className="button-style-1 button home-register3">
                <span className="home-text19">Contáctanos</span>
              </button>
              <p className="home-caption11">
                Septiembre 2024
              </p>
            </div>
          </div>
        </section>
        <section className="home-notes">
          <div className="home-first">
            <div data-aos="fade-up-right" className="home-content10">
              <h2 className="home-header11">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <div className="home-list1">
                <div className="home-note1">
                  <div className="home-point10"></div>
                  <p className="home-text20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
                <div className="home-note2">
                  <div className="home-point11"></div>
                  <p className="home-text21">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/notes-1-1400w.png"
              className="home-image12 image-notes"
            />
          </div>
          <div className="home-second">
            <div data-aos="fade-up-left" className="home-content11">
              <h2 className="home-header12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
              <button className="button button-style-2 home-register4">
                <span>Contactanos</span>
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
            <img alt="image" src="/notes-2-1400w.png" className="image-notes" />
          </div>
        </section>
        <section className="home-quote10">
          <div className="home-content12">
            <h2 className="home-quoted">
              “I love lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliquaation ullamco 100%.”
            </h2>
            <div className="home-author10">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                className="home-icon24"
              />
              <div className="home-details10">
                <span className="home-name10">Diego Caballero</span>
                <span className="home-from">(Founder Activarti)</span>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/quote-background.svg"
            className="home-background3"
          />
          <img
            alt="image"
            src="/quote-background.svg"
            className="home-background4"
          />
        </section>
        <section className="home-speakers">
          <div className="home-header13">
            <SectionNumeral></SectionNumeral>
            <div data-aos="fade-right" className="home-heading1">
              <h2 className="home-title10">Speakers</h2>
              <p className="home-caption12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="home-list2">
            <div className="home-row10">
              <div className="speaker">
                <Speaker rootClassName="speakerroot-class-name"></Speaker>
                <Speaker
                  image="/speakers-2-1500w.png"
                  rootClassName="speakerroot-class-name3"
                ></Speaker>
              </div>
              <div className="home-row12 speaker">
                <Speaker
                  image="/speakers-3-1500w.png"
                  rootClassName="speakerroot-class-name2"
                ></Speaker>
                <Speaker
                  image="/speakers-4-1500w.png"
                  rootClassName="speakerroot-class-name1"
                ></Speaker>
              </div>
            </div>
            <div className="home-row13">
              <div className="home-row14 speaker">
                <Speaker
                  image="/speakers-4-1500w.png"
                  rootClassName="speakerroot-class-name13"
                ></Speaker>
                <Speaker
                  image="/speakers-3-1500w.png"
                  rootClassName="speakerroot-class-name12"
                ></Speaker>
              </div>
              <div className="home-row15 speaker">
                <Speaker rootClassName="speakerroot-class-name10"></Speaker>
                <Speaker
                  image="/speakers-2-1500w.png"
                  rootClassName="speakerroot-class-name11"
                ></Speaker>
              </div>
            </div>
            <div className="home-row16">
              <div className="home-row17 speaker">
                <Speaker
                  image="/speakers-2-1500w.png"
                  rootClassName="speakerroot-class-name15"
                ></Speaker>
                <Speaker rootClassName="speakerroot-class-name14"></Speaker>
              </div>
              <div className="home-row18 speaker"></div>
            </div>
          </div>
        </section>
        <section className="home-watch">
          <div className="home-content13">
            <h2 className="home-header14">
              Watch our Watch our OnConf 2022 trailer
            </h2>
            <div className="home-video1">
              <video
                src
                poster="/quotes-1-1400w.png"
                className="home-video2"
              ></video>
              <img alt="image" src="/play.svg" className="home-image14" />
            </div>
            <button className="button home-register5">
              <span>Register now</span>
              <svg viewBox="0 0 1024 1024" className="home-icon25">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <img
            alt="image"
            src="/trailer-background.svg"
            className="home-image15"
          />
        </section>
        <section className="home-schedule">
          <div className="home-content14">
            <div className="home-header15">
              <div className="home-section-numeral1">
                <div className="home-divide1"></div>
                <p className="home-text24">02</p>
              </div>
              <div data-aos="fade-right" className="home-heading2">
                <h2 className="home-title11">Schedule</h2>
                <p className="home-caption13">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="home-main10">
              <div className="home-tab-selector">
                <div
                  data-role="schedule-select"
                  className="tab-active tab home-tab1"
                >
                  <span className="home-text25">Friday, Nov 04</span>
                </div>
                <div data-role="schedule-select" className="tab home-tab2">
                  <span className="home-text26">Saturday, Nov 05</span>
                </div>
                <div data-role="schedule-select" className="tab home-tab3">
                  <span className="home-text27">Sunday, Nov 06</span>
                </div>
              </div>
              <div className="home-lists">
                <section data-role="schedule-content" className="home-list3">
                  <div className="home-element10">
                    <div className="home-main11">
                      <span className="home-time10">
                        8:00 AM - 2:00 PM GMT +1 / 10:00 AM - 4:00 PM Your local
                        time (6 Hours)
                      </span>
                      <h3 className="home-title12">Pre-event networking</h3>
                      <div className="home-author11">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon27"
                        />
                        <div className="home-details11">
                          <span className="home-name11">Andy Smith</span>
                          <div className="home-point12"></div>
                          <span className="home-caption14">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button10">
                      Connect to chat room
                    </button>
                  </div>
                  <div className="home-element11">
                    <div className="home-main12">
                      <span className="home-time11">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title13">How to Lorem Ipsum.</h3>
                      <div className="home-author12">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon28"
                        />
                        <div className="home-details12">
                          <span className="home-name12">Samantha Johnson</span>
                          <div className="home-point13"></div>
                          <span className="home-caption15">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button11">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="home-element12">
                    <div className="home-main13">
                      <span className="home-time12">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title14">How to Lorem Ipsum.</h3>
                      <div className="home-author13">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon29"
                        />
                        <div className="home-details13">
                          <span className="home-name13">Samantha Johnson</span>
                          <div className="home-point14"></div>
                          <span className="home-caption16">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button12">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="home-element13">
                    <div className="home-main14">
                      <span className="home-time13">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title15">How to Lorem Ipsum.</h3>
                      <div className="home-author14">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon30"
                        />
                        <div className="home-details14">
                          <span className="home-name14">Samantha Johnson</span>
                          <div className="home-point15"></div>
                          <span className="home-caption17">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button13">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="home-element14">
                    <div className="home-main15">
                      <span className="home-time14">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title16">How to Lorem Ipsum.</h3>
                      <div className="home-author15">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon31"
                        />
                        <div className="home-details15">
                          <span className="home-name15">Samantha Johnson</span>
                          <div className="home-point16"></div>
                          <span className="home-caption18">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button14">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="home-element15">
                    <div className="home-main16">
                      <span className="home-time15">
                        8:00 PM - 10:00 PM GMT +1 / 10:00 PM - 12:00 AM Your
                        local time (2 Hours)
                      </span>
                      <h3 className="home-title17">Post-event networking</h3>
                      <div className="home-author16">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBvdHJhaXR8ZW58MHx8fHwxNjcxNDg1OTU2&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon32"
                        />
                        <div className="home-details16">
                          <span className="home-name16">Samantha Johnson</span>
                          <div className="home-point17"></div>
                          <span className="home-caption19">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button15">
                      <span>
                        <span>Connect to chat room</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </section>
                <section data-role="schedule-content" className="home-list4">
                  <div className="home-element16">
                    <div className="home-main17">
                      <span className="home-time16">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title18">How to Lorem Ipsum.</h3>
                      <div className="home-author17">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon33"
                        />
                        <div className="home-details17">
                          <span className="home-name17">Samantha Johnson</span>
                          <div className="home-point18"></div>
                          <span className="home-caption20">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button16">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="home-element17">
                    <div className="home-main18">
                      <span className="home-time17">
                        8:00 AM - 2:00 PM GMT +1 / 10:00 AM - 4:00 PM Your local
                        time (6 Hours)
                      </span>
                      <h3 className="home-title19">Pre-event networking</h3>
                      <div className="home-author18">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon34"
                        />
                        <div className="home-details18">
                          <span className="home-name18">Andy Smith</span>
                          <div className="home-point19"></div>
                          <span className="home-caption21">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button17">
                      Connect to chat room
                    </button>
                  </div>
                  <div className="home-element18">
                    <div className="home-main19">
                      <span className="home-time18">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title20">How to Lorem Ipsum.</h3>
                      <div className="home-author19">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon35"
                        />
                        <div className="home-details19">
                          <span className="home-name19">Samantha Johnson</span>
                          <div className="home-point20"></div>
                          <span className="home-caption22">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button18">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </section>
                <section data-role="schedule-content" className="home-list5">
                  <div className="home-element19">
                    <div className="home-main20">
                      <span className="home-time19">
                        8:00 AM - 2:00 PM GMT +1 / 10:00 AM - 4:00 PM Your local
                        time (6 Hours)
                      </span>
                      <h3 className="home-title21">Pre-event networking</h3>
                      <div className="home-author20">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon36"
                        />
                        <div className="home-details20">
                          <span className="home-name20">Andy Smith</span>
                          <div className="home-point21"></div>
                          <span className="home-caption23">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button19">
                      Connect to chat room
                    </button>
                  </div>
                  <div className="home-element20">
                    <div className="home-main21">
                      <span className="home-time20">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title22">How to Lorem Ipsum.</h3>
                      <div className="home-author21">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon37"
                        />
                        <div className="home-details21">
                          <span className="home-name21">Samantha Johnson</span>
                          <div className="home-point22"></div>
                          <span className="home-caption24">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button20">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="home-element21">
                    <div className="home-main22">
                      <span className="home-time21">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title23">How to Lorem Ipsum.</h3>
                      <div className="home-author22">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon38"
                        />
                        <div className="home-details22">
                          <span className="home-name22">Samantha Johnson</span>
                          <div className="home-point23"></div>
                          <span className="home-caption25">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button21">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="home-element22">
                    <div className="home-main23">
                      <span className="home-time22">
                        8:00 PM - 10:00 PM GMT +1 / 10:00 PM - 12:00 AM Your
                        local time (2 Hours)
                      </span>
                      <h3 className="home-title24">Post-event networking</h3>
                      <div className="home-author23">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBvdHJhaXR8ZW58MHx8fHwxNjcxNDg1OTU2&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon39"
                        />
                        <div className="home-details23">
                          <span className="home-name23">Samantha Johnson</span>
                          <div className="home-point24"></div>
                          <span className="home-caption26">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button22">
                      <span>
                        <span>Connect to chat room</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </section>
              </div>
              <div>
                <div className="home-container13">
                  <Script
                    html={`<script>
// Get all tab buttons
const tabButtons = document.querySelectorAll('[data-role="schedule-select"]');
// Get all tab contents
const tabContents = document.querySelectorAll('[data-role="schedule-content"]');

// Add "tab-active" class to the first tab button
tabButtons[0].classList.add("tab-active");
// Show the first tab content
tabContents[0].style.display = "block";

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", () => {
    // Remove "tab-active" class from all tab buttons
    tabButtons.forEach((button) => {
      button.classList.remove("tab-active");
    });
    // Add "tab-active" class to the current tab button
    tabButton.classList.add("tab-active");
    // Hide all tab contents
    tabContents.forEach((tabContent) => {
      tabContent.style.display = "none";
    });
    // Show the tab content for the current tab button
    tabContents[index].style.display = "block";
  });
});
</script>`}
                  ></Script>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-sponsors">
          <div className="home-header16">
            <div className="home-section-numeral2">
              <div className="home-divide2"></div>
              <p className="home-text58">03</p>
            </div>
            <div data-aos="fade-right" className="home-heading3">
              <h2 className="home-title25">Sponsors</h2>
              <p className="home-caption27">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="home-brands1">
            <div className="brand">
              <img alt="image" src="/brand-1.svg" className="home-image16" />
            </div>
            <div className="brand home-brand2">
              <img alt="image" src="/brand-2.svg" className="home-image17" />
            </div>
            <div className="brand home-brand3">
              <img alt="image" src="/brand-3.svg" className="home-image18" />
            </div>
            <div className="home-brand4 brand">
              <img alt="image" src="/brand-4.svg" className="home-image19" />
            </div>
            <div className="home-brand5 brand">
              <img alt="image" src="/brand-5.svg" className="home-image20" />
            </div>
            <div className="home-brand6 brand">
              <img alt="image" src="/brand-6.svg" className="home-image21" />
            </div>
            <div className="home-brand7 brand">
              <img alt="image" src="/brand-7.svg" className="home-image22" />
            </div>
            <div className="home-brand8 brand">
              <img alt="image" src="/brand-8.svg" className="home-image23" />
            </div>
          </div>
        </section>
        <section className="home-why">
          <div className="home-header17">
            <div className="home-section-numeral3">
              <div className="home-divide3"></div>
              <p className="home-text59">04</p>
            </div>
            <div data-aos="fade-right" className="home-heading4">
              <h2 className="home-title26">Why OnConf</h2>
              <p className="home-caption28">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="home-brands2">
            <div className="home-row19">
              <div className="home-item1">
                <img alt="image" src="/why-1.svg" className="home-image24" />
                <div className="home-details24">
                  <h3 className="home-title27">Networking</h3>
                  <p className="home-description10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="home-item2">
                <img alt="image" src="/why-2.svg" className="home-image25" />
                <div className="home-details25">
                  <h3 className="home-title28">Learning</h3>
                  <p className="home-description11">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="home-item3">
                <img alt="image" src="/why-3.svg" className="home-image26" />
                <div className="home-details26">
                  <h3 className="home-title29">Developing</h3>
                  <p className="home-description12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-black">
          <img alt="image" src="/black-vector.svg" className="home-image27" />
          <section className="home-quotes1">
            <div className="home-row20">
              <img
                alt="image"
                src="/quotes-1-1400w.png"
                className="home-image28"
              />
              <div className="home-row21">
                <div className="home-details27">
                  <p className="home-quote11">
                    “Lorem ipsum dolor sit amet consectetur “
                  </p>
                  <span className="home-author24">The Guard</span>
                </div>
                <img
                  alt="image"
                  src="/quotes-2-700w.png"
                  className="home-image29"
                />
              </div>
            </div>
            <div className="home-row22">
              <div className="home-details28">
                <p className="home-quote12">
                  “Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet“
                </p>
                <span className="home-author25">Wall Street News</span>
              </div>
              <img
                alt="image"
                src="/quotes-3-1400w.png"
                className="home-image30"
              />
              <div className="home-details29">
                <p className="home-quote13">
                  “Duis aute irure dolor in reprehenderit in voluptate velit “
                </p>
                <span className="home-author26">Inside Business</span>
              </div>
            </div>
          </section>
          <section className="home-testimonials">
            <div className="home-header18">
              <div className="home-section-numeral4">
                <div className="home-divide4"></div>
                <p className="home-text60">05</p>
              </div>
              <div data-aos="fade-right" className="home-heading5">
                <h2 className="home-title30">
                  Don’t just take our word for it. Here’s what past attendees
                  have to say:
                </h2>
              </div>
            </div>
            <div id="scrollbar" className="home-quotes2">
              <div className="home-quote14">
                <div className="home-author27">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image31"
                  />
                  <div className="home-details30">
                    <span className="home-name24">Samantha Johnson</span>
                    <span className="home-handle1">@thisissammy</span>
                  </div>
                </div>
                <p className="home-quote15">
                  “Duis aute irure dolor in reprehenderit in voluptate velit.”
                </p>
              </div>
              <div className="home-quote16">
                <div className="home-author28">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image32"
                  />
                  <div className="home-details31">
                    <span className="home-name25">Samantha Johnson</span>
                    <span className="home-handle2">@thisissammy</span>
                  </div>
                </div>
                <p className="home-quote17">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  ”
                </p>
              </div>
              <div className="home-quote18">
                <div className="home-author29">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image33"
                  />
                  <div className="home-details32">
                    <span className="home-name26">Samantha Johnson</span>
                    <span className="home-handle3">@thisissammy</span>
                  </div>
                </div>
                <p className="home-quote19">
                  “Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea.”
                </p>
              </div>
              <div className="home-quote20">
                <div className="home-author30">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image34"
                  />
                  <div className="home-details33">
                    <span className="home-name27">Samantha Johnson</span>
                    <span className="home-handle4">@thisissammy</span>
                  </div>
                </div>
                <p className="home-quote21">
                  “Duis aute irure dolor in reprehenderit in voluptate velit.”
                </p>
              </div>
              <div className="home-quote22">
                <div className="home-author31">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image35"
                  />
                  <div className="home-details34">
                    <span className="home-name28">Samantha Johnson</span>
                    <span className="home-handle5">@thisissammy</span>
                  </div>
                </div>
                <p className="home-quote23">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  ”
                </p>
              </div>
            </div>
          </section>
          <section className="home-join">
            <h2 className="home-title31">
              Join us at OnConf on November 22-24
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <button className="home-button23 button">
              <span>
                <span>Register now</span>
                <br></br>
              </span>
            </button>
          </section>
          <section className="home-more">
            <div className="home-header19">
              <div className="home-section-numeral5">
                <div className="home-divide5"></div>
                <p className="home-text64">06</p>
              </div>
              <div data-aos="fade-right" className="home-heading6">
                <h2 className="home-title32">
                  More about pricing, accessibility or what this year’s event
                  includes
                </h2>
              </div>
            </div>
            <div className="home-accordions">
              <div className="home-accordion1">
                <div className="home-header20">
                  <div className="home-divide6"></div>
                  <h3 className="home-title33">Event information</h3>
                </div>
                <div className="home-items1">
                  <div
                    data-role="accordion-container"
                    className="home-element23 accordion"
                  >
                    <div className="home-content15">
                      <span className="home-header21">
                        Esse cillum dolore eu fugiat nulla pariatur.
                      </span>
                      <span
                        data-role="accordion-content"
                        className="home-description13"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="home-icon-container1">
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-closed"
                        className="home-icon40"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-open"
                        className="home-icon42"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    data-role="accordion-container"
                    className="home-element24 accordion"
                  >
                    <div className="home-content16">
                      <span className="home-header22">
                        Esse cillum dolore eu fugiat nulla pariatur.
                      </span>
                      <span
                        data-role="accordion-content"
                        className="home-description14"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="home-icon-container2">
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-closed"
                        className="home-icon44"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-open"
                        className="home-icon46"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    data-role="accordion-container"
                    className="home-element25 accordion"
                  >
                    <div className="home-content17">
                      <span className="home-header23">
                        Esse cillum dolore eu fugiat nulla pariatur.
                      </span>
                      <span
                        data-role="accordion-content"
                        className="home-description15"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="home-icon-container3">
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-closed"
                        className="home-icon48"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-open"
                        className="home-icon50"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-accordion2">
                <div className="home-header24">
                  <div className="home-divide7"></div>
                  <h3 className="home-title34">Event information</h3>
                </div>
                <div className="home-items2">
                  <div
                    data-role="accordion-container"
                    className="home-element26 accordion"
                  >
                    <div className="home-content18">
                      <span className="home-header25">
                        Esse cillum dolore eu fugiat nulla pariatur.
                      </span>
                      <span
                        data-role="accordion-content"
                        className="home-description16"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="home-icon-container4">
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-closed"
                        className="home-icon52"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-open"
                        className="home-icon54"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    data-role="accordion-container"
                    className="home-element27 accordion"
                  >
                    <div className="home-content19">
                      <span className="home-header26">
                        Esse cillum dolore eu fugiat nulla pariatur.
                      </span>
                      <span
                        data-role="accordion-content"
                        className="home-description17"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="home-icon-container5">
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-closed"
                        className="home-icon56"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-open"
                        className="home-icon58"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    data-role="accordion-container"
                    className="home-element28 accordion"
                  >
                    <div className="home-content20">
                      <span className="home-header27">
                        Esse cillum dolore eu fugiat nulla pariatur.
                      </span>
                      <span
                        data-role="accordion-content"
                        className="home-description18"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="home-icon-container6">
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-closed"
                        className="home-icon60"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-open"
                        className="home-icon62"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="home-container15">
                  <Script
                    html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
                  ></Script>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="home-subscribe">
          <div className="home-main24">
            <h2 className="home-header28">
              Subscribe to our newsletter for the latest OnConf news
            </h2>
            <div className="home-content21">
              <div className="home-inputs">
                <input
                  type="text"
                  required
                  placeholder="Name *"
                  autoComplete="name"
                  className="home-textinput1 input"
                />
                <input
                  type="email"
                  required
                  placeholder="Email *"
                  autoComplete="email"
                  className="home-textinput2 input"
                />
              </div>
              <span className="home-text65">
                By submitting, you agree to receive email communications from
                OnConf, including upcoming promotions and discounted tickets,
                news, and access to exclusive invite-only events.
              </span>
              <button className="home-button24 button">
                <span>
                  <span>Sign up for our newsletter</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-content22">
            <div className="home-details35">
              <h2 className="home-title35">OnConf</h2>
              <p className="home-description19">
                Product Calgary brings professionals together to connect, learn
                from each other, find opportunities, and find talent. We started
                as a meetup and have grown to be Alberta’s largest Product
                Management community.
              </p>
            </div>
            <div className="home-socials">
              <img alt="image" src="/linkedin.svg" className="social" />
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5"
              >
                <img
                  alt="image"
                  src="/instagram.svg"
                  className="home-image37 social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link6"
              >
                <img
                  alt="image"
                  src="/twitter.svg"
                  className="home-image38 social"
                />
              </a>
            </div>
            <span className="home-copyright">
              Privacy — Terms &amp; Conditions — Code of Conduct © 2022 OnConf
              All Rights Reserved
            </span>
          </div>
        </footer>
        <div>
          <div className="home-container17">
            <Script
              html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="home-container19">
            <Script
              html={`<style>
#scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar
{
	height: 12px;
	background-color: #F5F5F5;
	border-radius: 10px;
}

#scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 85vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/grainy-1500w.png');
            background-position: center;
          }
          .home-background1 {
            left: 0px;
            right: 0px;
            bottom: 0px;
            height: 85%;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image10 {
            right: 0px;
            bottom: 0px;
            height: 90%;
            position: absolute;
            object-fit: cover;
          }
          .home-image11 {
            height: 100%;
            z-index: 100;
            object-fit: cover;
          }
          .home-header10 {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .home-text10 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .home-desktop-menu {
            gap: var(--dl-space-space-threeunits);
            display: flex;
          }
          .home-nav1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon10 {
            width: 16px;
            height: 16px;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .home-nav2 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container11 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-text12 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-button-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            display: flex;
            z-index: 20;
          }
          .home-icons {
            display: flex;
          }
          .home-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon20 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-background2 {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 80%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-hero-content {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1000px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text18 {
            color: rgb(255, 255, 255);
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
          }
          .home-caption10 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text19 {
            width: 100%;
            font-size: 24px;
            max-width: 85px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 24px;
          }
          .home-caption11 {
            color: rgb(255, 255, 255);
            font-size: 32px;
          }
          .home-notes {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .home-first {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-content10 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-header11 {
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-list1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-note1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-point10 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .home-text20 {
            width: 100%;
            font-size: 18px;
            line-height: 27px;
          }
          .home-note2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-point11 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .home-text21 {
            width: 100%;
            font-size: 18px;
            line-height: 27px;
          }
          .home-image12 {
            width: 50%;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-second {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
          }
          .home-content11 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-header12 {
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-icon22 {
            width: 16px;
            height: 16px;
          }
          .home-quote10 {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #aa82ff;
          }
          .home-content12 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1000px;
            align-items: center;
            flex-direction: column;
          }
          .home-quoted {
            font-size: 40px;
            font-style: italic;
            text-align: center;
            font-weight: 600;
            line-height: 60px;
          }
          .home-author10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon24 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details10 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-name10 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
          }
          .home-from {
            font-size: 18px;
            font-style: italic;
            font-weight: 400;
            line-height: 27px;
          }
          .home-background3 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-background4 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-speakers {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header13 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title10 {
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-caption12 {
            font-size: 18px;
            line-height: 27px;
          }
          .home-list2 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-row10 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row12 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row13 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row14 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row15 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row16 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row17 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row18 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-watch {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #aa82ff;
          }
          .home-content13 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .home-header14 {
            font-size: 50px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 60px;
          }
          .home-video1 {
            width: 100%;
            cursor: pointer;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-video2 {
            width: 100%;
            transition: 0.3s;
          }
          .home-video2:hover {
            box-shadow: 0px 0px 30px 0px #000000;
          }
          .home-image14 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 80px;
            bottom: 0px;
            cursor: pointer;
            margin: auto;
            position: absolute;
            object-fit: cover;
            transition: 0.3s;
          }
          .home-image14:hover {
            width: 90px;
          }
          .home-icon25 {
            width: 16px;
            height: 16px;
          }
          .home-image15 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-schedule {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: column;
            padding-bottom: 200px;
            background-size: cover;
            justify-content: center;
            background-image: url('/grainy-1500w.png');
          }
          .home-content14 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-header15 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-numeral1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide1 {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #ffffff;
          }
          .home-text24 {
            color: rgb(255, 255, 255);
          }
          .home-heading2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title11 {
            color: #ffffff;
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-caption13 {
            color: #ffffff;
            font-size: 18px;
            line-height: 27px;
          }
          .home-main10 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-tab-selector {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            border-bottom-width: 1px;
          }
          .home-text25 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
          }
          .home-text26 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
          }
          .home-text27 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
          }
          .home-lists {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-list3 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-element10 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main11 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time10 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title12 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author11 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-icon27 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details11 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name11 {
            width: 100%;
            font-style: normal;
            font-weight: 600;
          }
          .home-point12 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-caption14 {
            width: 100%;
          }
          .home-element11 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main12 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time11 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title13 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon28 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details12 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name12 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point13 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-element12 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main13 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time12 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title14 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author13 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon29 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details13 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name13 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point14 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-element13 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main14 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time13 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title15 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon30 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details14 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name14 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point15 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-element14 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main15 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time14 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title16 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author15 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon31 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details15 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name15 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point16 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-element15 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main16 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time15 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title17 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author16 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-icon32 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details16 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name16 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point17 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-list4 {
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-element16 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main17 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time16 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title18 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author17 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon33 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details17 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name17 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point18 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-element17 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main18 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time17 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title19 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author18 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-icon34 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details18 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name18 {
            width: 100%;
            font-style: normal;
            font-weight: 600;
          }
          .home-point19 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-caption21 {
            width: 100%;
          }
          .home-element18 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main19 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time18 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title20 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author19 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon35 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details19 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name19 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point20 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-list5 {
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-element19 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main20 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time19 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title21 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author20 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-icon36 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details20 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name20 {
            width: 100%;
            font-style: normal;
            font-weight: 600;
          }
          .home-point21 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-caption23 {
            width: 100%;
          }
          .home-element20 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main21 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time20 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title22 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author21 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon37 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details21 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name21 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point22 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-element21 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main22 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time21 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title23 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author22 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon38 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details22 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name22 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point23 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-element22 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main23 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time22 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title24 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author23 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-icon39 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details23 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name23 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point24 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-container13 {
            display: contents;
          }
          .home-sponsors {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header16 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-numeral2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide2 {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #000000;
          }
          .home-heading3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title25 {
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-caption27 {
            font-size: 18px;
            line-height: 27px;
          }
          .home-brands1 {
            width: 100%;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(4, 1fr);
          }
          .home-image16 {
            object-fit: cover;
          }
          .home-image17 {
            object-fit: cover;
          }
          .home-image18 {
            object-fit: cover;
          }
          .home-brand4 {
            border-right-width: 0px;
          }
          .home-image19 {
            object-fit: cover;
          }
          .home-brand5 {
            border-top-width: 1px;
          }
          .home-image20 {
            object-fit: cover;
          }
          .home-brand6 {
            border-top-width: 1px;
          }
          .home-image21 {
            object-fit: cover;
          }
          .home-brand7 {
            border-top-width: 1px;
          }
          .home-image22 {
            object-fit: cover;
          }
          .home-brand8 {
            border-top-width: 1px;
            border-right-width: 0px;
          }
          .home-image23 {
            object-fit: cover;
          }
          .home-why {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header17 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-numeral3 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide3 {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #000000;
          }
          .home-heading4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title26 {
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-caption28 {
            font-size: 18px;
            line-height: 27px;
          }
          .home-brands2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-row19 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-item1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image24 {
            height: 200px;
            object-fit: cover;
          }
          .home-details24 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title27 {
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-description10 {
            font-size: 18px;
            line-height: 27px;
          }
          .home-item2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image25 {
            height: 200px;
            object-fit: cover;
          }
          .home-details25 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title28 {
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-description11 {
            font-size: 18px;
            line-height: 27px;
          }
          .home-item3 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image26 {
            height: 200px;
            object-fit: cover;
          }
          .home-details26 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title29 {
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-description12 {
            font-size: 18px;
            line-height: 27px;
          }
          .home-black {
            gap: 120px;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('/grainy-1500w.png');
          }
          .home-image27 {
            top: 0px;
            left: 0px;
            bottom: 0px;
            height: 650px;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-quotes1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-row20 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image28 {
            height: 320px;
            object-fit: cover;
          }
          .home-row21 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-details27 {
            gap: var(--dl-space-space-oneandhalfunits);
            color: white;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-quote11 {
            font-size: 24px;
            font-style: italic;
            font-weight: 400;
            line-height: 36px;
            letter-spacing: 1%;
          }
          .home-author24 {
            font-size: 24px;
            max-width: 35%;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
            letter-spacing: 1%;
          }
          .home-image29 {
            height: 320px;
            object-fit: cover;
          }
          .home-row22 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-details28 {
            gap: var(--dl-space-space-oneandhalfunits);
            color: white;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-quote12 {
            font-size: 24px;
            font-style: italic;
            font-weight: 400;
            line-height: 36px;
            letter-spacing: 1%;
          }
          .home-author25 {
            font-size: 24px;
            max-width: 50%;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
            letter-spacing: 1%;
          }
          .home-image30 {
            height: 320px;
            object-fit: cover;
          }
          .home-details29 {
            gap: var(--dl-space-space-oneandhalfunits);
            color: white;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-quote13 {
            font-size: 24px;
            font-style: italic;
            font-weight: 400;
            line-height: 36px;
            letter-spacing: 1%;
          }
          .home-author26 {
            font-size: 24px;
            max-width: 35%;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
            letter-spacing: 1%;
          }
          .home-testimonials {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-header18 {
            gap: var(--dl-space-space-oneandhalfunits);
            color: white;
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-section-numeral4 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide4 {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #ffffff;
          }
          .home-heading5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title30 {
            font-size: 50px;
            max-width: 900px;
            font-style: normal;
            font-weight: 600;
            line-height: 55px;
          }
          .home-quotes2 {
            width: 100%;
            display: flex;
            overflow: auto;
            max-width: var(--dl-size-size-maxwidth);
            align-items: stretch;
            margin-left: max(0px, (100% - 1240px)/2);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            border-bottom-width: 1px;
          }
          .home-quote14 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author27 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image31 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details30 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name24 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle1 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote15 {
            color: #ffffff;
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-quote16 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author28 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image32 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details31 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name25 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle2 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote17 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-quote18 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author29 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image33 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details32 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name26 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle3 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote19 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-quote20 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author30 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image34 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details33 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name27 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle4 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote21 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-quote22 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author31 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image35 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details34 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name28 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle5 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote23 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-join {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-title31 {
            color: #ffffff;
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-button23 {
            align-self: flex-start;
            background-color: rgb(170, 130, 255);
          }
          .home-more {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header19 {
            gap: var(--dl-space-space-oneandhalfunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-numeral5 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide5 {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #ffffff;
          }
          .home-heading6 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title32 {
            font-size: 50px;
            max-width: 900px;
            font-style: normal;
            font-weight: 600;
            line-height: 55px;
          }
          .home-accordions {
            gap: var(--dl-space-space-fourunits);
            color: white;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-accordion1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header20 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide6 {
            width: 40px;
            height: 1px;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: #ffffff;
          }
          .home-title33 {
            font-size: 40px;
            max-width: 900px;
            font-style: normal;
            font-weight: 600;
            line-height: 44px;
          }
          .home-items1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-element23 {
            align-items: flex-start;
          }
          .home-content15 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header21 {
            font-size: 24px;
          }
          .home-description13 {
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container1 {
            position: relative;
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon40 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon42 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element24 {
            align-items: flex-start;
          }
          .home-content16 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header22 {
            font-size: 24px;
          }
          .home-description14 {
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container2 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon44 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon46 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element25 {
            align-items: flex-start;
          }
          .home-content17 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header23 {
            font-size: 24px;
          }
          .home-description15 {
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container3 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon48 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon50 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-accordion2 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header24 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide7 {
            width: 40px;
            height: 1px;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: #ffffff;
          }
          .home-title34 {
            font-size: 40px;
            max-width: 900px;
            font-style: normal;
            font-weight: 600;
            line-height: 44px;
          }
          .home-items2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-element26 {
            align-items: flex-start;
          }
          .home-content18 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header25 {
            font-size: 24px;
          }
          .home-description16 {
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container4 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon52 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon54 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element27 {
            align-items: flex-start;
          }
          .home-content19 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header26 {
            font-size: 24px;
          }
          .home-description17 {
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container5 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon56 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon58 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element28 {
            align-items: flex-start;
          }
          .home-content20 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header27 {
            font-size: 24px;
          }
          .home-description18 {
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container6 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon60 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon62 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-container15 {
            display: contents;
          }
          .home-subscribe {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-main24 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header28 {
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 55px;
          }
          .home-content21 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-inputs {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-textinput1 {
            width: 100%;
            font-size: 18px;
            line-height: 27px;
            padding-top: 0px;
            border-color: rgba(0, 0, 0, 0.2);
            border-width: 0px;
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-textinput2 {
            width: 100%;
            font-size: 18px;
            line-height: 27px;
            padding-top: 0px;
            border-color: rgba(0, 0, 0, 0.2);
            border-width: 0px;
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-text65 {
            font-size: 14px;
          }
          .home-button24 {
            align-self: flex-start;
            background-color: rgb(170, 130, 255);
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: #aa82ff;
          }
          .home-content22 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-details35 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .home-title35 {
            width: 100%;
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .home-description19 {
            width: 100%;
            font-size: 18px;
            line-height: 27px;
          }
          .home-socials {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: row;
          }
          .home-link5 {
            display: contents;
          }
          .home-image37 {
            text-decoration: none;
          }
          .home-link6 {
            display: contents;
          }
          .home-image38 {
            text-decoration: none;
          }
          .home-copyright {
            width: 100%;
            font-size: 14px;
            line-height: 21px;
          }
          .home-container17 {
            display: contents;
          }
          .home-container19 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-text19 {
              font-size: 24px;
              font-style: normal;
              font-weight: 600;
              line-height: 24px;
            }
            .home-first {
              flex-direction: column;
            }
            .home-content10 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-image12 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-second {
              flex-direction: column;
            }
            .home-content11 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-point12 {
              margin-top: 4px;
            }
            .home-caption14 {
              font-size: 10px;
            }
            .home-point13 {
              margin-top: 4px;
            }
            .home-caption15 {
              font-size: 10px;
            }
            .home-point14 {
              margin-top: 4px;
            }
            .home-caption16 {
              font-size: 10px;
            }
            .home-point15 {
              margin-top: 4px;
            }
            .home-caption17 {
              font-size: 10px;
            }
            .home-point16 {
              margin-top: 4px;
            }
            .home-caption18 {
              font-size: 10px;
            }
            .home-point17 {
              margin-top: 4px;
            }
            .home-caption19 {
              font-size: 10px;
            }
            .home-point18 {
              margin-top: 4px;
            }
            .home-caption20 {
              font-size: 10px;
            }
            .home-point19 {
              margin-top: 4px;
            }
            .home-caption21 {
              font-size: 10px;
            }
            .home-point20 {
              margin-top: 4px;
            }
            .home-caption22 {
              font-size: 10px;
            }
            .home-point21 {
              margin-top: 4px;
            }
            .home-caption23 {
              font-size: 10px;
            }
            .home-point22 {
              margin-top: 4px;
            }
            .home-caption24 {
              font-size: 10px;
            }
            .home-point23 {
              margin-top: 4px;
            }
            .home-caption25 {
              font-size: 10px;
            }
            .home-point24 {
              margin-top: 4px;
            }
            .home-caption26 {
              font-size: 10px;
            }
            .home-brands1 {
              grid-template-rows: repeat(4, 1fr);
              grid-template-columns: repeat(2, 1fr);
            }
            .home-brand2 {
              border-right-width: 0px;
            }
            .home-brand3 {
              border-top-width: 1px;
            }
            .home-brand4 {
              border-top-width: 1px;
            }
            .home-brand6 {
              border-right-width: 0px;
            }
            .home-row20 {
              flex-direction: column;
            }
            .home-image28 {
              width: 100%;
            }
            .home-details27 {
              width: 50%;
            }
            .home-image29 {
              width: 50%;
            }
            .home-row22 {
              border-bottom-width: 0px;
            }
            .home-details28 {
              display: none;
            }
            .home-image30 {
              width: 50%;
              aspect-ratio: 1;
            }
            .home-details29 {
              width: 50%;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              height: 60vh;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-icon12 {
              fill: white;
            }
            .home-nav2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-container11 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text12 {
              color: #000000;
            }
            .home-nav3 {
              gap: var(--dl-space-space-unit);
            }
            .home-text13 {
              color: #000000;
            }
            .home-text14 {
              color: rgb(0, 0, 0);
            }
            .home-text15 {
              color: rgb(0, 0, 0);
            }
            .home-text16 {
              color: rgb(0, 0, 0);
            }
            .home-text17 {
              color: rgb(0, 0, 0);
            }
            .home-button-container {
              gap: var(--dl-space-space-unit);
              width: 50%;
              margin-top: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .home-login {
              width: 100%;
              border-width: 1px;
              margin-right: 0px;
            }
            .home-register2 {
              width: 100%;
              border-width: 1px;
            }
            .home-icon-group {
              width: 100%;
              justify-content: flex-start;
            }
            .home-hero-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-caption10 {
              gap: var(--dl-space-space-unit);
            }
            .home-register3 {
              padding: var(--dl-space-space-halfunit);
            }
            .home-text19 {
              font-size: 18px;
              line-height: 18px;
            }
            .home-caption11 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-content10 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content11 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-register4 {
              width: 100%;
            }
            .home-quote10 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-quoted {
              font-size: 20px;
              line-height: 30px;
            }
            .home-speakers {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .home-title10 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption12 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-row10 {
              flex-direction: column;
            }
            .home-row13 {
              flex-direction: column;
            }
            .home-row16 {
              flex-direction: column;
            }
            .home-watch {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-content13 {
              gap: var(--dl-space-space-oneandhalfunits);
              max-width: 900px;
            }
            .home-header14 {
              font-size: 20px;
              line-height: 24px;
            }
            .home-image14 {
              width: 40px;
            }
            .home-register5 {
              width: 100%;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .home-image15 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .home-schedule {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-content14 {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-divide1 {
              width: 50px;
            }
            .home-heading2 {
              gap: var(--dl-space-space-unit);
            }
            .home-title11 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption13 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-tab-selector {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-tab1 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text25 {
              font-size: 16px;
            }
            .home-tab2 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text26 {
              font-size: 16px;
            }
            .home-tab3 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text27 {
              font-size: 16px;
            }
            .home-main11 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time10 {
              font-size: 10px;
            }
            .home-title12 {
              font-size: 18px;
            }
            .home-point12 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption14 {
              font-size: 10px;
            }
            .home-main12 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time11 {
              font-size: 10px;
            }
            .home-title13 {
              font-size: 18px;
            }
            .home-icon28 {
              width: 25px;
            }
            .home-details12 {
              align-items: center;
            }
            .home-name12 {
              font-size: 10px;
            }
            .home-point13 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption15 {
              font-size: 10px;
            }
            .home-main13 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time12 {
              font-size: 10px;
            }
            .home-title14 {
              font-size: 18px;
            }
            .home-icon29 {
              width: 25px;
            }
            .home-details13 {
              align-items: center;
            }
            .home-name13 {
              font-size: 10px;
            }
            .home-point14 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption16 {
              font-size: 10px;
            }
            .home-main14 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time13 {
              font-size: 10px;
            }
            .home-title15 {
              font-size: 18px;
            }
            .home-icon30 {
              width: 25px;
            }
            .home-details14 {
              align-items: center;
            }
            .home-name14 {
              font-size: 10px;
            }
            .home-point15 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption17 {
              font-size: 10px;
            }
            .home-main15 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time14 {
              font-size: 10px;
            }
            .home-title16 {
              font-size: 18px;
            }
            .home-icon31 {
              width: 25px;
            }
            .home-details15 {
              align-items: center;
            }
            .home-name15 {
              font-size: 10px;
            }
            .home-point16 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption18 {
              font-size: 10px;
            }
            .home-main16 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time15 {
              font-size: 10px;
            }
            .home-title17 {
              font-size: 18px;
            }
            .home-point17 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption19 {
              font-size: 10px;
            }
            .home-main17 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time16 {
              font-size: 10px;
            }
            .home-title18 {
              font-size: 18px;
            }
            .home-icon33 {
              width: 25px;
            }
            .home-details17 {
              align-items: center;
            }
            .home-name17 {
              font-size: 10px;
            }
            .home-point18 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption20 {
              font-size: 10px;
            }
            .home-main18 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time17 {
              font-size: 10px;
            }
            .home-title19 {
              font-size: 18px;
            }
            .home-point19 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption21 {
              font-size: 10px;
            }
            .home-main19 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time18 {
              font-size: 10px;
            }
            .home-title20 {
              font-size: 18px;
            }
            .home-icon35 {
              width: 25px;
            }
            .home-details19 {
              align-items: center;
            }
            .home-name19 {
              font-size: 10px;
            }
            .home-point20 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption22 {
              font-size: 10px;
            }
            .home-main20 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time19 {
              font-size: 10px;
            }
            .home-title21 {
              font-size: 18px;
            }
            .home-point21 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption23 {
              font-size: 10px;
            }
            .home-main21 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time20 {
              font-size: 10px;
            }
            .home-title22 {
              font-size: 18px;
            }
            .home-icon37 {
              width: 25px;
            }
            .home-details21 {
              align-items: center;
            }
            .home-name21 {
              font-size: 10px;
            }
            .home-point22 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption24 {
              font-size: 10px;
            }
            .home-main22 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time21 {
              font-size: 10px;
            }
            .home-title23 {
              font-size: 18px;
            }
            .home-icon38 {
              width: 25px;
            }
            .home-details22 {
              align-items: center;
            }
            .home-name22 {
              font-size: 10px;
            }
            .home-point23 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption25 {
              font-size: 10px;
            }
            .home-main23 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time22 {
              font-size: 10px;
            }
            .home-title24 {
              font-size: 18px;
            }
            .home-point24 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption26 {
              font-size: 10px;
            }
            .home-sponsors {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-divide2 {
              width: 50px;
            }
            .home-heading3 {
              gap: var(--dl-space-space-unit);
            }
            .home-title25 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption27 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-why {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-divide3 {
              width: 50px;
            }
            .home-heading4 {
              gap: var(--dl-space-space-unit);
            }
            .home-title26 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption28 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-row19 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-item1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-image24 {
              height: 60px;
            }
            .home-details24 {
              gap: var(--dl-space-space-unit);
            }
            .home-title27 {
              font-size: 24px;
              line-height: 28px;
            }
            .home-description10 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-item2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-image25 {
              height: 60px;
            }
            .home-details25 {
              gap: var(--dl-space-space-unit);
            }
            .home-title28 {
              font-size: 24px;
              line-height: 28px;
            }
            .home-description11 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-item3 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-image26 {
              height: 60px;
            }
            .home-details26 {
              gap: var(--dl-space-space-unit);
            }
            .home-title29 {
              font-size: 24px;
              line-height: 28px;
            }
            .home-description12 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-black {
              gap: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-image27 {
              display: none;
            }
            .home-quotes1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-quote11 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-quote12 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-quote13 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-testimonials {
              gap: var(--dl-space-space-threeunits);
              padding-top: 0px;
            }
            .home-header18 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-divide4 {
              width: 50px;
            }
            .home-heading5 {
              gap: var(--dl-space-space-unit);
            }
            .home-title30 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-quotes2 {
              margin-left: 0px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-quote14 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-author27 {
              width: 100%;
            }
            .home-image31 {
              width: 40px;
            }
            .home-details30 {
              flex: 1;
            }
            .home-name24 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-handle1 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home-quote15 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-quote16 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-author28 {
              width: 100%;
            }
            .home-image32 {
              width: 40px;
            }
            .home-details31 {
              flex: 1;
            }
            .home-name25 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-handle2 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home-quote17 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-quote18 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-author29 {
              width: 100%;
            }
            .home-image33 {
              width: 40px;
            }
            .home-details32 {
              flex: 1;
            }
            .home-name26 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-handle3 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home-quote19 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-quote20 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-name27 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-handle4 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-quote21 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-quote22 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-name28 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-handle5 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-quote23 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-join {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-title31 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-button23 {
              width: 100%;
              align-self: center;
            }
            .home-more {
              gap: var(--dl-space-space-threeunits);
              padding-top: 0px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: 0px;
            }
            .home-divide5 {
              width: 50px;
            }
            .home-heading6 {
              gap: var(--dl-space-space-unit);
            }
            .home-title32 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-title33 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-element24 {
              align-items: flex-start;
            }
            .home-title34 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-element26 {
              align-items: flex-start;
            }
            .home-element27 {
              align-items: flex-start;
            }
            .home-element28 {
              align-items: flex-start;
            }
            .home-subscribe {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-main24 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-header28 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-content21 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-inputs {
              gap: var(--dl-space-space-twounits);
            }
            .home-textinput1 {
              font-size: 16px;
              line-height: 24px;
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-textinput2 {
              font-size: 16px;
              line-height: 24px;
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text65 {
              font-size: 10px;
            }
            .home-button24 {
              width: 100%;
            }
            .home-footer {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-content22 {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-title35 {
              font-size: 24px;
              line-height: 34px;
            }
            .home-description19 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-socials {
              gap: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-mobile-menu {
              padding: 16px;
            }
            .home-button-container {
              width: 100%;
            }
            .home-icon-group {
              justify-content: center;
            }
            .home-text18 {
              font-size: 50px;
            }
            .home-header11 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-list1 {
              gap: var(--dl-space-space-unit);
            }
            .home-point10 {
              width: 100%;
              max-width: 20px;
            }
            .home-text20 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-point11 {
              width: 100%;
              max-width: 20px;
            }
            .home-text21 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-content11 {
              gap: var(--dl-space-space-twounits);
            }
            .home-header12 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-content12 {
              gap: var(--dl-space-space-twounits);
            }
            .home-author10 {
              flex-direction: column;
            }
            .home-details10 {
              gap: 4px;
              flex-direction: column;
            }
            .home-name10 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-from {
              font-size: 16px;
              line-height: 24px;
            }
            .home-divide1 {
              width: 20px;
            }
            .home-text24 {
              font-size: 12px;
              line-height: 13px;
            }
            .home-tab1 {
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-tab2 {
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-tab3 {
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-details11 {
              gap: 4px;
              flex-direction: column;
            }
            .home-name11 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-point12 {
              width: 100%;
              max-width: 20px;
            }
            .home-button10 {
              display: none;
            }
            .home-author12 {
              width: 100%;
            }
            .home-icon28 {
              display: none;
            }
            .home-button11 {
              display: none;
            }
            .home-author13 {
              width: 100%;
            }
            .home-icon29 {
              display: none;
            }
            .home-button12 {
              display: none;
            }
            .home-author14 {
              width: 100%;
            }
            .home-icon30 {
              display: none;
            }
            .home-button13 {
              display: none;
            }
            .home-author15 {
              width: 100%;
            }
            .home-icon31 {
              display: none;
            }
            .home-button14 {
              display: none;
            }
            .home-details16 {
              gap: 4px;
              flex-direction: column;
            }
            .home-name16 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-point17 {
              width: 100%;
              max-width: 20px;
            }
            .home-button15 {
              display: none;
            }
            .home-author17 {
              width: 100%;
            }
            .home-icon33 {
              display: none;
            }
            .home-button16 {
              display: none;
            }
            .home-details18 {
              gap: 4px;
              flex-direction: column;
            }
            .home-name18 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-point19 {
              width: 100%;
              max-width: 20px;
            }
            .home-button17 {
              display: none;
            }
            .home-author19 {
              width: 100%;
            }
            .home-icon35 {
              display: none;
            }
            .home-button18 {
              display: none;
            }
            .home-details20 {
              gap: 4px;
              flex-direction: column;
            }
            .home-name20 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-point21 {
              width: 100%;
              max-width: 20px;
            }
            .home-button19 {
              display: none;
            }
            .home-author21 {
              width: 100%;
            }
            .home-icon37 {
              display: none;
            }
            .home-button20 {
              display: none;
            }
            .home-author22 {
              width: 100%;
            }
            .home-icon38 {
              display: none;
            }
            .home-button21 {
              display: none;
            }
            .home-details23 {
              gap: 4px;
              flex-direction: column;
            }
            .home-name23 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-point24 {
              width: 100%;
              max-width: 20px;
            }
            .home-button22 {
              display: none;
            }
            .home-divide2 {
              width: 20px;
            }
            .home-text58 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image16 {
              width: 75%;
            }
            .home-image17 {
              width: 75%;
            }
            .home-image18 {
              width: 75%;
            }
            .home-image19 {
              width: 75%;
            }
            .home-image20 {
              width: 75%;
            }
            .home-image21 {
              width: 75%;
            }
            .home-image22 {
              width: 75%;
            }
            .home-image23 {
              width: 75%;
            }
            .home-divide3 {
              width: 20px;
            }
            .home-text59 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-divide4 {
              width: 20px;
            }
            .home-text60 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-divide5 {
              width: 20px;
            }
            .home-text64 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-divide6 {
              width: 20px;
            }
            .home-title33 {
              font-size: 18px;
            }
            .home-header21 {
              font-size: 16px;
            }
            .home-description13 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header22 {
              font-size: 16px;
            }
            .home-description14 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header23 {
              font-size: 16px;
            }
            .home-description15 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-divide7 {
              width: 20px;
            }
            .home-title34 {
              font-size: 18px;
            }
            .home-header25 {
              font-size: 16px;
            }
            .home-description16 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header26 {
              font-size: 16px;
            }
            .home-description17 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header27 {
              font-size: 16px;
            }
            .home-description18 {
              font-size: 14px;
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
