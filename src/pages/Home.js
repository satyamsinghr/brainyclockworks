import React from 'react'

const Home = () => {
  return (
    <div>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <a class="logo">
                            <img src="images/logo.png" width="294px" alt/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <section
            class="banner_section position-relative d-flex align-items-center">
            <div class="container position-relative" style={{zIndex: '9'}}>
                <div class="row pt-lg-5">
                    <div class="col-12 pt-lg-5 pt-md-4 pt-0">
                        <div class="banner_content">
                            <h1 class="m-0">We<span><img src="images/heart.gif"
                                        width="72px"
                                        height="72px" alt/></span>demanding
                                challenges.</h1>
                        </div>
                    </div>
                    <div
                        class="col-lg-5 col-md-7 col-sm-12 col-12 mt-lg-3 mt-md-3 mt-3">
                        <div class="banner_content">
                            <p>Hey there! We’re a tech firm that offers bespoke
                                software solutions for automation, robotics, and
                                AI applications and we make problem-solving look
                                like a coffee break.</p>
                        </div>
                        <a 
                            class="btn btn-primary mt-lg-5 mt-md-4 mt-4">Brainy
                            who?
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M11.8965 13.5965L0.352114 2.05212C-0.117355 1.58266 -0.117355 0.821571 0.352114 0.352102C0.821583 -0.117367 1.58267 -0.117367 2.05214 0.352102L13.5966 11.8965V4.93299C13.5966 4.26965 14.1349 3.73128 14.7983 3.73128C15.4616 3.73128 16 4.26965 16 4.93299V14.7983C16 15.4616 15.4616 16 14.7983 16H4.93303C4.26968 16 3.73132 15.4616 3.73132 14.7983C3.73132 14.1349 4.26968 13.5965 4.93303 13.5965H11.8965Z"
                                        fill="#1D1A2F" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="bg_video">
                {/* <video autoplay loop>
                    <source src="video/banner_bg.mp4" type="video/mp4"/>
                </video> */}
                <video autoPlay muted loop >
                        <source src="video/banner_bg.mp4" type="video/mp4" />
                    </video>
            </div>
        </section>
        <section class="brightest">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="automation position-relative">
                            <img src="images/automation.png" width="100%" alt/>
                            <div class="automation_content">
                                <h4 class="mb-3">Automation</h4>
                                <p class="m-0">Because making things<br />easy
                                    is just too hard!</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 col-md-8 col-sm-12">
                                <div class="robotics_card">
                                    <div class="automation_content">
                                        <h4 class="mb-3">Automation</h4>
                                        <p class="m-0">Because making
                                            things<br />easy
                                            is just too hard!</p>
                                    </div>
                                    <div class="robotics_bg">
                                        <img src="images/robotics_hand.png" alt/>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="col-lg-4 col-md-4 col-sm-12 col-12 mt-3">
                                <img src="images/down_arrow.png" width="100%"
                                    alt/>
                            </div>
                        </div>
                    </div>
                    <div
                        class="col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-between">
                        <div class="where_we_shine">
                            <div class="automation_content">
                                <h4 class="mb-lg-4 mb-md-3 mb-3 pb-lg-2">This is
                                    where we shine<br/>our
                                    brightest.</h4>
                                <p class="m-0 pe-lg-4">We're a team of tech enthusiasts,
                                    not afraid to push boundaries while having a
                                    blast with innovation. Our mix of expertise
                                    and playfulness sets us apart in the world
                                    of software development.</p>
                            </div>
                        </div>
                        <div class="artifical_content position-relative">
                            <img src="images/artifical.png" alt/>
                            <div class="automation_content">
                                <h4 class="mb-3">Artificial Intelligence</h4>
                                <p class="m-0">Where science fiction becomes
                                    your everyday reality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="tackling">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-12">
                        <div class="tackling_card">
                            <div class="row">
                                <div
                                    class="col-lg-7 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                                    <div class="where_we_shine">
                                        <div class="automation_content">
                                            <h4
                                                class="mb-lg-4 mb-md-3 mb-3 pb-lg-2">Tackling
                                                80% of complexity in just 20%
                                                time!</h4>
                                            <p class="m-0">If we don’t, the bill
                                                is on us. Seriously! We love a
                                                dare, and if you have a
                                                challenge for us we’d happily
                                                take it on.</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="col-lg-5 col-md-12 col-sm-12 col-12">
                                    <div class="tracking_form">
                                        <form>
                                            <div class="mb-3">
                                                <input type="text"
                                                    class="form-control"
                                                    placeholder="Your name"
                                                    id="name"/>
                                            </div>
                                            <div class="mb-3">
                                                <input type="text"
                                                    placeholder="Organization"
                                                    class="form-control"
                                                    id="Organization"/>
                                            </div>
                                            <div class="mb-3">
                                                <input type="email"
                                                    placeholder="Email"
                                                    class="form-control"
                                                    id="Email" />
                                            </div>
                                            <div class="mb-4">
                                                <textarea class="form-control"
                                                    id="challenging"
                                                    placeholder="What’s challenging you?"
                                                    rows="3"></textarea>
                                            </div>
                                            <button
                                                class="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 mt-lg-0 mt-md-5 mt-4">
                        <div class="address_bg">
                            <h5 class="mb-lg-4 mb-md-4 mb-3 pb-lg-2">251 East
                                32nd Street 7C NYC, NY 10016 United States</h5>
                            <a >Show on map <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25" height="25" viewBox="0 0 25 25"
                                    fill="none">
                                    <path fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M19.1831 5.89415V19.9232C19.1833 20.1211 19.2619 20.3108 19.4019 20.4507C19.5418 20.5906 19.7316 20.6693 19.9295 20.6694C20.1273 20.6693 20.3171 20.5906 20.457 20.4507C20.597 20.3108 20.6756 20.1211 20.6758 19.9232V5.14782C20.6758 4.94988 20.5972 4.76005 20.4572 4.62008C20.3172 4.48012 20.1274 4.40149 19.9295 4.40149H5.15405C4.95617 4.40163 4.76644 4.48031 4.62654 4.62025C4.48663 4.76019 4.408 4.94994 4.4079 5.14782C4.4079 5.55976 4.74229 5.89415 5.15405 5.89415H19.1831Z"
                                        fill="black" />
                                    <path fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M20.4574 5.67545L5.68195 20.4508C5.54197 20.5907 5.35219 20.6693 5.15431 20.6693C4.95643 20.6693 4.76665 20.5907 4.62667 20.4508C4.4868 20.3109 4.40824 20.1211 4.40824 19.9232C4.40824 19.7253 4.4868 19.5355 4.62667 19.3956L19.4021 4.62016C19.542 4.4803 19.7318 4.40173 19.9297 4.40173C20.1276 4.40173 20.3174 4.4803 20.4574 4.62016C20.5972 4.76014 20.6758 4.94992 20.6758 5.1478C20.6758 5.34568 20.5972 5.53547 20.4574 5.67545Z"
                                        fill="black" />
                                </svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-5 col-md-6 col-sm-12 col-12">
                        <div class="banner_content pe-lg-5">
                            <p class="m-0 text-lg-start text-md-start text-center">Embracing creativity and technology,
                                one line of code at a time. Crafted with passion
                                for innovation.</p>
                        </div>
                    </div>
                    <div
                        class="col-lg-5 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-lg-end justify-content-md-end justify-content-center mt-lg-0 mt-md-0 mt-4">
                        <div class="banner_content">
                            <ul
                                class=" d-flex align-items-center justify-content-lg-end justify-content-md-end justify-content-center gap-4">
                                <li><a >
                                        Facebook
                                    </a></li>
                                <li><a >
                                        X
                                    </a></li>
                                <li><a >
                                        LinkedIn
                                    </a></li>
                            </ul>
                        </div>
                    </div>
                    <div
                        class="col-lg-6 col-md-12 col-sm-12 col-12 offset-lg-6 my-5 py-lg-5">
                        <div class="footer_heading">
                            <h4>why settle for<br />
                                off the shelf<br />
                                when you can have<br />
                                ‘out of this world’.</h4>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="copyright">
                            <p class="m-0">© 2023 Brainyclock.works</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Home