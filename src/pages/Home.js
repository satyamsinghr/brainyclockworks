import React from 'react'
// import { useNavigate } from 'react-router-dom';

const Home = () => {
    // const navigate = useNavigate();

    const handleClick = () => {
        window.open('https://brainycode.software', '_blank');
      };
    const handleClickSign = () => {
        window.open('https://brainycode.software/signup', '_blank');
      };
    return (
        <>
            <header className="home_header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <a  className="logo">
                                <img src="images/logo.png" width="241px" alt='' />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <section
                className="banner_section position-relative d-flex align-items-center">
                <div className="container position-relative" style={{zIndex: '9'}}>
                    <div className="row pt-lg-5">
                        <div className="col-6 pt-lg-5 pt-md-4 pt-0">
                            <div className="banner_content">
                                <h1 className="m-0">We make the impossible happen faster
                                    than explaining why it can't.</h1>
                            </div>
                            <div className="banner_content mt-lg-4 mt-md-3 mt-3">
                                <p className="mb-0">We're a tech firm that crafts custom
                                    software
                                    solutions faster than you can say 'deadline'.
                                    Here, time is always on your side.</p>
                            </div>
                            <a 
                                className="btn btn-outline-primary mt-lg-4 mt-md-4 mt-3 icon_button">Brainy
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
                        <div
                            className="col-lg-5 col-md-7 col-sm-12 col-12 mt-lg-3 mt-md-3 mt-3">
                        </div>
                    </div>
                </div>
                <div className="bg_video">
                <video autoPlay muted loop >
                        <source src="video/banner_bg.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>
            <section className="brightest">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="automation position-relative">
                                <img src="images/automation.png" width="100%" alt='' />
                            </div>
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <div className="robotics_card">
                                        <div className="robotics_bg">
                                            <img src="images/robotics_hand.png" alt='' />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <img src="images/brightness.png"
                                            width="100%" alt='' />
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-4 col-sm-12 col-12 mt-3">
                                    <div className="robotics_arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="67" height="169"
                                            viewBox="0 0 67 169" fill="none">
                                            <path fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M28.7011 151.332L28.5028 4.90218C28.4954 2.2014 30.6786 0.0182108 33.3794 0.0256144C36.0801 0.0330124 38.2753 2.22819 38.2827 4.92897L38.481 151.326L58.4398 131.367C60.3426 129.464 63.4398 129.473 65.353 131.386C67.2663 133.299 67.2748 136.396 65.372 138.299L37.0732 166.598C35.1704 168.501 32.0733 168.492 30.16 166.579L1.70573 138.125C-0.207555 136.211 -0.216042 133.114 1.68678 131.212C3.58961 129.309 6.68674 129.317 8.60002 131.23L28.7011 151.332Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-5 offset-lg-1 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center">
                            <div className="where_we_shine mt-0">
                                <div className="automation_content">
                                    <h4 className="mb-lg-4 mb-md-3 mb-3">This is
                                        where we<br /> shine our<br />
                                        brightest.</h4>
                                    <p className="mb-1"><b>Automation</b></p>
                                    <p>Because making things easy is just too
                                        hard!</p>
                                    <p
                                        className="mb-1 mt-lg-4 mt-md-4 mt-3"><b>Robotics</b></p>
                                    <p>Working smarter or plotting world domination?
                                        You decide, we build.</p>
                                    <p
                                        className="mb-1 mt-lg-4 mt-md-4 mt-3"><b>Artificial
                                            Intelligence</b></p>
                                    <p>Where science fiction becomes your everyday
                                        reality.</p>
                                    <p
                                        className="mb-1 mt-lg-4 mt-md-4 mt-3">We ensure
                                        your project moves from concept to testing
                                        at breakneck speeds. How do we do this? With
                                        our powerful AI engine BrainyCode.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tackle">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row position-relative">
                                <div
                                    className="col-lg-8 col-md-12 col-sm-12 col-12 d-flex align-items-end">
                                    <div className="section_content tackle_content">
                                        <div className="pb-5">
                                            <h2 className="mb-lg-4 mb-md-3 mb-3">We
                                                tackle
                                                80% of the complexity in just 20% of
                                                the time!</h2>
                                            <div className="sign_up_img inner_text">
                                                <h5>If we don’t, the bill is on us.
                                                    Seriously!</h5>
                                            </div>
                                        </div>
                                        <div
                                            className="tackel_action mt-lg-5 mt-md-4 mt-4 pt-lg-5 pt-md-4">
                                            <a 
                                                className="d-flex align-items-center gap-3"  style={{ textDecoration: 'none' }}><span>How
                                                    do we achieve this? We let
                                                    <b> BrainyCode AI</b> handle the
                                                    tantrums of
                                                    syntax
                                                    errors
                                                    and logic loops.</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24"
                                                    style={{ flex: '0 0 auto' }}
                                                    viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M19.8002 15.086L14.4862 20.4M14.4862 20.4L9.17217 15.086M14.4862 20.4L14.4862 7.60003C14.4862 5.39089 12.6953 3.60003 10.4862 3.60003L4.20019 3.60003"
                                                        stroke="black"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="tackle_img">
                                        <img src="images/tackle.png" width="100%"
                                            alt=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="deal_with position-relative">
                <div className="bg_vector">
                    <img src="images/deal_side_vector.png" alt='' />
                </div>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <img src="images/deal_img.png" width="100%" alt='' />
                        </div>
                        <div
                            className="col-lg-5 col-md-12 col-sm-12 col-12 offset-lg-1 px-lg-0">
                            <div className="inner_text">
                                <h2 className="mb-3">Sometimes, the best way to deal
                                    with code is to
                                    not deal with it at all.</h2>
                                <p><b>BrainyCode</b> is our AI engine based on GPT4,
                                    that lets you generate code for an idea, and we
                                    can test it and make sure it works.</p>
                                <a 
                                    className="btn btn-primary d-inline-flex my-lg-5 my-md-4 my-3 align-items-center gap-2 px-3  w-auto" 
                                    onClick={handleClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="12" height="14" viewBox="0 0 12 14"
                                        fill="none">
                                        <path
                                            d="M6.60245 0L0.367552 7.4816C0.123952 7.7742 0.00145229 7.9212 5.22878e-05 8.0444C-0.000865817 8.09751 0.0103173 8.15014 0.0327543 8.19828C0.0551913 8.24643 0.0882934 8.28884 0.129552 8.3223C0.226152 8.4 0.416552 8.4 0.798052 8.4H5.90245L5.20245 14L11.4374 6.5184C11.681 6.2258 11.8035 6.0788 11.8049 5.9556C11.8058 5.90249 11.7946 5.84986 11.7722 5.80172C11.7497 5.75357 11.7166 5.71116 11.6754 5.6777C11.5788 5.6 11.3884 5.6 11.0069 5.6H5.90245L6.60245 0Z"
                                            fill="white" />
                                    </svg>
                                    Try it for FREE now!
                                </a>
                                <p className="mb-1"><b>Here’s how it works,</b></p>
                                <a ><svg xmlns="http://www.w3.org/2000/svg"
                                    width="32" height="32" viewBox="0 0 32 32"
                                    fill="none">
                                    <path
                                        d="M19.243 21.6625C19.793 21.7125 20.2794 21.3072 20.3294 20.7572C20.3794 20.2072 19.974 19.7208 19.424 19.6708L19.243 21.6625ZM12.0001 20L11.0042 20.0905C11.0479 20.5713 11.4288 20.9522 11.9096 20.9959L12.0001 20ZM12.3293 12.5761C12.2793 12.026 11.7929 11.6207 11.2429 11.6707C10.6929 11.7207 10.2875 12.2071 10.3375 12.7571L12.3293 12.5761ZM20.7073 12.707C21.0978 12.3165 21.0978 11.6833 20.7073 11.2928C20.3167 10.9023 19.6836 10.9023 19.2931 11.2928L20.7073 12.707ZM19.424 19.6708L12.0906 19.0041L11.9096 20.9959L19.243 21.6625L19.424 19.6708ZM12.996 19.9094L12.3293 12.5761L10.3375 12.7571L11.0042 20.0905L12.996 19.9094ZM12.7072 20.7071L20.7073 12.707L19.2931 11.2928L11.293 19.2929L12.7072 20.7071ZM16.0002 27.7999C9.48323 27.7999 4.2002 22.5169 4.2002 15.9999H2.2002C2.20019 23.6215 8.37866 29.7999 16.0002 29.7999V27.7999ZM4.2002 15.9999C4.2002 9.48299 9.48323 4.19995 16.0002 4.19995V2.19995C8.37866 2.19995 2.2002 8.37842 2.2002 15.9999H4.2002ZM16.0002 4.19995C22.5172 4.19995 27.8002 9.48299 27.8002 16H29.8002C29.8002 8.37842 23.6217 2.19995 16.0002 2.19995V4.19995ZM27.8002 16C27.8002 22.5169 22.5172 27.7999 16.0002 27.7999V29.7999C23.6217 29.7999 29.8002 23.6215 29.8002 16H27.8002Z"
                                        fill="#1D1A2F" />
                                </svg></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom_arrow left">
                    <svg width="237" height="198" viewBox="0 0 237 198" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M120 16C120 7.16344 127.163 0 136 0H229C233.418 0 237 3.58172 237 8V31C237 35.4183 233.418 39 229 39H206C201.582 39 198 42.5817 198 47V62C198 70.8366 190.837 78 182 78H175C166.163 78 159 85.1634 159 94V121C159 129.837 151.837 137 143 137H136C127.163 137 120 144.163 120 153V198H0V78H73C77.4183 78 81 74.4183 81 70V55C81 46.1634 88.1634 39 97 39H104C112.837 39 120 31.8366 120 23V16Z"
                            fill="#1D1A2F" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M120 181.012L120 198L137 198C127.615 198 120.006 190.395 120 181.012Z"
                            fill="#1D1A2F" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M2.32952e-06 61L3.8147e-06 77.9885L17 77.9885C7.615 77.9885 0.00622111 70.3836 2.32952e-06 61Z"
                            fill="#1D1A2F" />
                    </svg>

                </div>
                <div className="bottom_arrow right">
                    <svg width="235" height="194" viewBox="0 0 235 194" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M157 50C157 41.1634 164.163 34 173 34H235V194H16V173.5C16 162.73 24.7304 154 35.5 154C46.2696 154 55 145.27 55 134.5V134C55 122.954 63.9543 114 75 114H125C142.673 114 157 99.6731 157 82V50Z"
                            fill="#1D1A2F" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M16 178L16 194H0C8.83656 194 16 186.837 16 178Z"
                            fill="#1D1A2F" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M235 0.988524C235 19.2093 220.233 33.981 202.014 33.9885L235 33.9885L235 0.988524Z"
                            fill="#1D1A2F" />
                    </svg>
                </div>
            </section>

            <section className="brainycode_steps">
                <div className="brainycode_steps_top">
                    <svg width="231" height="80" viewBox="0 0 231 80" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 0H216V24C216 32.8366 208.837 40 200 40H146C141.582 40 138 43.5817 138 48V56C138 69.2548 127.255 80 114 80H60C46.7452 80 36 69.2548 36 56V48C36 43.5817 32.4183 40 28 40H20C15.5817 40 12 36.4183 12 32V0Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12 12V0H0C6.62742 0 12 5.37258 12 12Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M216 15C216 6.71573 222.716 0 231 0H216V15Z"
                            fill="white" />
                    </svg>

                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-2 ">
                            <div className="inner_text sign_up_img">
                                <h5 className="text-white mb-3"><b>Step 1</b></h5>
                                <h5 className="text-white mb-0">You tell us your wildest
                                    dreams.</h5>
                            </div>
                        </div>
                        <div
                            className="col-lg-1 d-flex align-items-center justify-content-center">
                            <img src="images/down_animated_arrow.gif" width="70px"
                                alt='' />
                        </div>
                        <div className="col-lg-2 ">
                            <div className="inner_text sign_up_img">
                                <h5 className="text-white mb-3"><b>Step 2</b></h5>
                                <h5 className="text-white mb-0">We feed them to
                                    <span
                                        className="higlight_color">BrainyCode.</span></h5>
                            </div>
                        </div>
                        <div
                            className="col-lg-1 d-flex align-items-center justify-content-center">
                            <img src="images/down_animated_arrow.gif" width="70px"
                                alt='' />
                        </div>
                        <div className="col-lg-2 ">
                            <div className="inner_text sign_up_img">
                                <h5 className="text-white mb-3"><b>Step 3</b></h5>
                                <h5 className="text-white mb-0">A prototype appears
                                    before your coffee gets cold.</h5>
                            </div>
                        </div>
                        <div
                            className="col-lg-1 d-flex align-items-center justify-content-center">
                            <img src="images/down_animated_arrow.gif" width="70px"
                                alt='' />
                        </div>
                        <div className="col-lg-2 ">
                            <div className="inner_text sign_up_img">
                                <h5 className="text-white mb-3"><b>Step 4</b></h5>
                                <h5 className="text-white mb-0">You're left wondering
                                    why you didn't come to us sooner.</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brainycode_steps_bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="115" height="80"
                        viewBox="0 0 115 80" fill="none">
                        <path
                            d="M114.5 80L-0.000152588 80L-0.000154686 56C-0.000155459 47.1634 7.16329 40 15.9998 40L24.9998 40C29.418 40 32.9997 36.4183 32.9997 32L32.9997 12C32.9997 5.37257 38.3723 -8.6035e-06 44.9997 -9.18288e-06L78.5 -1.21116e-05C85.1274 -1.2691e-05 90.5 5.37257 90.5 12L90.5 32C90.5 36.4183 94.0817 40 98.5 40L106.5 40C110.918 40 114.5 43.5817 114.5 48L114.5 80Z"
                            fill="white" />
                    </svg>
                </div>
            </section>

            <section className="generate_code">
                <div className="container">
                    <div className="row g-4">
                        <div
                            className="col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                            <div className="inner_text">
                                <h2 className="mb-4">Generate Code from a Text
                                    Prompt.</h2>
                                <p className="mb-0">Imagine simply describing what you
                                    need your
                                    software or application to do, and
                                    <b> BrainyCode </b>
                                    crafts the necessary code snippets. It’s like
                                    talking to a genius coder who’s ready to bring
                                    your ideas to digital reality.</p>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 offset-lg-1 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                            <div className="generate_img">
                                <img src="images/generate_code.png" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="generate_code">
                <div className="container">
                    <div className="row g-4">
                        <div
                            className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                            <div className="generate_img">
                                <img src="images/intergration.png" alt='' />
                            </div>
                        </div>
                        <div
                            className="col-lg-5 offset-lg-1 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                            <div className="inner_text">
                                <h2 className="mb-4">Integrated Code Testing and
                                    Review.</h2>
                                <p className="mb-0">Through <b>BrainyCode,</b> you have
                                    the luxury of submitting your code for
                                    comprehensive testing and review. Think of it as
                                    having an in-house team of experts that
                                    immediately checks your code for errors,
                                    efficiency, and functionality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="generate_code">
                <div className="container">
                    <div className="row g-4">
                        <div
                            className="col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                            <div className="inner_text">
                                <h2 className="mb-4">Rapid Prototyping & Intent
                                    Verification.</h2>
                                <p className="mb-0"><b>BrainyCode</b> specializes in
                                    generating rapid prototypes, swiftly bringing
                                    your vision to tangible form. But we don’t stop
                                    there; our dedicated team takes the baton,
                                    meticulously testing each prototype to verify
                                    the intent behind your idea. With us, your
                                    concepts are not just quickly realized but also
                                    validated, guaranteeing that the final product
                                    truly aligns with your original vision.</p>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 offset-lg-1 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                            <div className="generate_img">
                                <img src="images/repid.png" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="generate_code">
                <div className="container">
                    <div className="row g-4">
                        <div
                            className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                            <div className="generate_img">
                                <img src="images/embedded.png" alt='' />
                            </div>
                        </div>
                        <div
                            className="col-lg-5 offset-lg-1 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                            <div className="inner_text">
                                <h2 className="mb-4">Custom Embedded Boards, Powered by
                                    BrainyCode.</h2>
                                <p className="mb-0">Speed up hardware innovations with
                                    our specialized service offering embedded
                                    boards, made with custom code generated by
                                    <b> BrainyCode.</b> Each board is rigorously
                                    tested and its functionality verified to meet
                                    your specific requirements. Once ready, your
                                    customized and fully operational board is
                                    shipped directly to you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="generate_code free_dredits">
                <div className="container">
                    <div className="row g-4">
                        <div
                            className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                            <div className="inner_text credits_card">
                                <h2 className="mb-4 text-white">Get 20 Credits FREE,
                                    when you sign up!</h2>
                                <p className="mb-4 text-white">Whether you're a student,
                                    a seasoned professional, or a spy (we promise we
                                    won't tell), we've got something exciting for
                                    you! Whether you're a student, a seasoned
                                    professional, or a spy (we promise we won't
                                    tell), we've got something exciting for you!</p>
                                <a 
                                    className="btn btn-primary d-inline-flex align-items-center gap-2 px-3 bg-secondary  w-auto"
                                    onClick={handleClickSign}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="12" height="14" viewBox="0 0 12 14"
                                        fill="none">
                                        <path
                                            d="M6.60245 0L0.367552 7.4816C0.123952 7.7742 0.00145229 7.9212 5.22878e-05 8.0444C-0.000865817 8.09751 0.0103173 8.15014 0.0327543 8.19828C0.0551913 8.24643 0.0882934 8.28884 0.129552 8.3223C0.226152 8.4 0.416552 8.4 0.798052 8.4H5.90245L5.20245 14L11.4374 6.5184C11.681 6.2258 11.8035 6.0788 11.8049 5.9556C11.8058 5.90249 11.7946 5.84986 11.7722 5.80172C11.7497 5.75357 11.7166 5.71116 11.6754 5.6777C11.5788 5.6 11.3884 5.6 11.0069 5.6H5.90245L6.60245 0Z"
                                            fill="white" />
                                    </svg>
                                    Sign up NOW!
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                            <div className="generate_img">
                                <img src="images/free_credits.png" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="row justify-content-between">
                        <div
                            className="col-lg-5 col-md-6 col-sm-12 col-12 d-flex align-items-end justify-content-lg-start justify-content-md-start justify-content-start mt-lg-0 mt-md-0 mt-4">
                            <div><div className="banner_content">
                                <ul
                                    className=" d-flex align-items-center justify-content-lg-end justify-content-md-end justify-content-center gap-4">
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
                                <div className="inner_text mt-4">
                                    <p className="text-white mb-0">© 2023
                                        Brainyclock.works</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-5 col-md-12 col-sm-12 col-12 offset-lg-2 d-flex align-items-end">
                            <div className="inner_text">
                                <h2 className="text-white">why settle for<br />
                                    off the shelf<br />
                                    when you can have<br />
                                    ‘out of this world’.</h2>
                                <p
                                    className="m-0 text-lg-start text-white text-md-start text-center">Embracing
                                    creativity and technology,
                                    one line of code at a time. Crafted with
                                    passion
                                    for innovation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home