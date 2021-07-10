import React from 'react';
import background from '../../images/back_girl.png'
import sac_separator from '../../images/sac-separator.png'
import homepage_video from '../../images/screen_recording.webm'
import lib_distraction from '../../images/lib-distraction.png'
import cancerimg from '../../images/cancer.jpg'
import accidentimg from '../../images/accident.jpg'
import liverimg from '../../images/liver.jpg'
import kidneyimg from '../../images/kidney_failure.jpg'
import child from '../../images/child.jpg'
import heart from '../../images/heart.jpg'
import brain_injury from '../../images/brain.jpg'
import animal from '../../images/animal.jpg'
import memorial from '../../images/memorial.jpg'
import rare from '../../images/rare.jpg'
import lung_injury from '../../images/lung_injury.jpg'
import why_ketto1 from '../../images/why_ketto1.png'
import why_ketto2 from '../../images/why_ketto2.png'
import why_ketto3 from '../../images/why_ketto3.png'
import why_ketto4 from '../../images/why_ketto4.png'
import why_ketto5 from '../../images/why_ketto5.png'
import why_ketto6 from '../../images/why_ketto6.png'
import why_ketto7 from '../../images/why_ketto7.png'
import why_ketto8 from '../../images/why_ketto8.png'
import call_to_action1 from '../../images/call_to_action1.png'
import call_to_action2 from '../../images/call_to_action2.png'
import success_story1 from '../../images/success_story1.jpg'
import { Link, useHistory } from 'react-router-dom';
import './Home_Css.css'
import {Footer} from '../Footer/Footer';
import  HomeDisplayCard  from './Home_Display_Cards';
import Navbar from '../Navbar/Navbar';
export default function Home() {
  let history = useHistory(); 

  const redirect = () => {
    history.push('/new/fundraiser')
  }

  
  const redirect1 = () => {
    history.push('/how_it_works')
  }

  return (
    <>
      {/* <h1 className='home'>EPIC</h1> */}
      <div>
      <Navbar />
        <section>
          <div style={{ backgroundImage: `url(${background})`, height: "480px", objectFit: 'cover' }}>
            <div className='img_div1'>

              <div style={{ fontWeight: '700', color: '#444', fontSize: '34px' }}>
                <p>Need Funds to Pay For a Medical Emergency or Social Cause?</p>
              </div>
              <div style={{ width: "80%", height: "28%", marginTop: "0px" }}>
                <div className='home_company_data'>
                  <p className='home_company_data1'>₹1100 Crs+</p>
                  <p className='home_company_data2'>RAISED</p>

                </div>
                <div className='home_company_data'>
                  <p className='home_company_data1'>55 Lakh+</p>
                  <p className='home_company_data2'>DONORS</p>

                </div>
                <div className='home_company_data'>
                  <p className='home_company_data1'>2 Lakh+</p>
                  <p className='home_company_data2'>FUNDRAISERS</p>

                </div>
              </div>
              <div style={{ width: "80%", height: "30%" }}>
                <p class="home_fontmanage">Ketto’s
                <span className='home_fontmanage1'> 0% </span> <span className="home_fontmanage2"> Platform fees</span> ensures maximum funds for you</p>
                <button onClick={redirect} className='home_button'>Start a Fundraiser for FREE</button>
                <br />
                <Link className="home_fontmanage3" href="#">नि: शुल्क फंडरेजर शुरू करें</Link>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div style={{ height:"650px", color:"#444", textAlign:"center",marginTop:"50px"}}>
            <h1 style={{ fontSize:"32px"}}> 
              Trending Fundraisers
            </h1>
                   
            <p style={{ textAlign:"center"}}>
              View the fundraisers that are most active right now
            </p>

            <div style={{width:"95%", margin:"5%"}}>
            {/* <DisplayCard/> */}
            <HomeDisplayCard/>

            {/* <BrowseFundraiser/> */}
            </div>

            
          </div>
        </section> 

        <section>
          <div>
            <h1 className='home_middle'>Follow these simple steps and start raising in a few minutes.</h1>
          </div>
          <div style={{  height: "560px", width: "80%", margin: "auto" }}>

            <div className="home_middle2">
              <img src={sac_separator} style={{ height: "450px" }} alt="separator"/>
            </div>
            <div className="home_middle1">
              <div style={{  height: "33%" }}>
                <p className="startfont">Start your fundraiser</p>
                <p className="startfont1">It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.</p>
              </div>

              <div style={{  height: "33%" }}>
                <p className="startfont">Share your fundraiser</p>
                <p className="startfont1">All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.</p>
              </div>

              <div style={{ height: "33%" }}>
                <p className="startfont">Withdraw Funds</p>
                <p className="startfont1">The funds raised can be withdrawn without any hassle directly to your bank account.</p>
              </div>
            </div>
            <div >

              <video className="home_middle3" loop autoPlay width="270">
                <source src={homepage_video} type="video/webm" />
              </video>

            </div>

          </div>
          <div className='home_button_css'>
            <button onClick={redirect} className='home_button'>Start a Fundraiser for FREE</button>
            <button onClick={redirect1} className='home_button11'>TALK TO US</button>
          </div>
          <div className='home_button_css'>
            <div className='home_button_css3'>Have any questions for us? Chat with our team on WhatsApp Now</div>
            <button className='home_button_css33'>CHAT (+ 7700975559)</button>

          </div>
        </section>


        <section>
          <div>
            <div className='home_middle'>Causes you can raise funds for</div>
            <div className="home_middle_para">Be it for a personal need, social cause or a creative idea - you can count on us for<br />
the project that you want to raise funds for.</div>
          </div>
          <div>
            <div className="home_blocks">
              <div className="home_small_blocks" style={{ backgroundImage: `url(${cancerimg})` }}>
                <div style={{ marginTop: "65%" }}>
                  <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "700" }}>CANCER</p>

                </div>
              </div>
              <div className="home_small_blocks" style={{ backgroundImage: `url(${accidentimg})` }}>
                <div style={{ marginTop: "65%" }}>
                  <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "700" }}>ACCIDENT</p>

                </div>
              </div>
              <div className="home_small_blocks" style={{ backgroundImage: `url(${liverimg})` }}>
                <div style={{ marginTop: "65%" }}>
                  <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "700" }}>LIVER CIRRHOSIS</p>

                </div>
              </div>
              <div className="home_small_blocks" style={{ backgroundImage: `url(${kidneyimg})` }}>
                <div style={{ marginTop: "65%" }}>
                  <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "700" }}>KIDNEY FAILURE</p>

                </div>
              </div>
              <div className="home_small_blocks" style={{ backgroundImage: `url(${brain_injury})` }}>
                <div style={{ marginTop: "65%" }}>
                  <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "700" }}>BRAIN INJURY</p>

                </div>
              </div>
              <div className="home_small_blocks" style={{ backgroundImage: `url(${heart})` }}>
                <div style={{ marginTop: "65%" }}>
                  <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "700" }}>HEART DEASEASE</p>

                </div>
              </div>
              <div className="home_small_blocks" style={{ backgroundImage: `url(${child})` }}>
                <div style={{ marginTop: "65%" }}>
                  <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "700" }}>CHILD HEALTH</p>

                </div>
              </div>
              <div className="home_small_blocks" style={{ backgroundImage: `url(${rare})` }}>
                <div style={{ marginTop: "65%" }}>
                  <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "700" }}>RARE</p>

                </div>
              </div>
              <div className="home_small_blocks" style={{ backgroundImage: `url(${lung_injury})` }}>
                <div style={{ marginTop: "65%" }}>
                  <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "700" }}>LUNG INJURY</p>

                </div>
              </div>
              <div className="home_small_blocks" style={{ backgroundImage: `url(${memorial})` }}>
                <div style={{ marginTop: "65%" }}>
                  <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "700" }}>MEMORIAL</p>

                </div>
              </div>
              <div className="home_small_blocks" style={{ backgroundImage: `url(${animal})` }}>
                <div style={{ marginTop: "65%" }}>
                  <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "700" }}>ANIMAL</p>

                </div>
              </div>
              <div className="home_small_blocks" style={{ backgroundColor: "#01bfbd" }}>
                <div style={{ marginTop: "65%" }}>
                  <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "700" }}>OTHER</p>

                </div>
              </div>





            </div>
          </div>
        </section>

        <section>
          <div>
            <p className='hashtag_library'>#LibraryOfDistractions</p>
            <div className="hash_mid_cont">
              <div style={{ float: "left", marginRight: "50px" }}>
                <img src={lib_distraction} style={{ height: "300px", width: "110%" }} alt="lib"/>
              </div>
              <div style={{ margin: "40px" }}>
                <p style={{ fontSize: "20px" }}>Ketto is gearing up to set the world record by curating the largest <span style={{ fontWeight: "bold" }}>#LibraryOfDistractions</span> stories. And you can become a part of this. Are you ready to help set a #worldrecord?</p>
                <button onClick={redirect} style={{ marginLeft: "5px" }} className='home_button11'>Let's Start</button>

              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#f7f7f7", margin: "50px" }}>
          <div style={{ textAlign: "center", fontSize: "34px", fontWeight: "700", color: "#444"}}>Why Ketto?</div>
          <div className="home_blocks" style={{ height: "550px" }}>

            <div className="why_ketto_block">
              <div style={{ backgroundImage: `url(${why_ketto1})` }} className="why_ketto_block1">

              </div>
              <div className="why_ketto_block2">
                Industry’s best fundraising success rate
              </div>
            </div>


            <div className="why_ketto_block">
              <div style={{ backgroundImage: `url(${why_ketto2})` }} className="why_ketto_block1">

              </div>
              <div className="why_ketto_block2">
                Supported By 55,00,000+ Donors
              </div>
            </div>



            <div className="why_ketto_block">
              <div style={{ backgroundImage: `url(${why_ketto3})` }} className="why_ketto_block1">

              </div>
              <div className="why_ketto_block2">
                Easy-To-Manage Tools To Boost Results
              </div>
            </div>



            <div className="why_ketto_block">
              <div style={{ backgroundImage: `url(${why_ketto4})` }} className="why_ketto_block1">

              </div>
              <div className="why_ketto_block2">
                Receive donations via all popular payment modes
              </div>
            </div>



            <div className="why_ketto_block">
              <div style={{ backgroundImage: `url(${why_ketto5})` }} className="why_ketto_block1">

              </div>
              <div className="why_ketto_block2">
                Get Expert Support 24/7
              </div>
            </div>



            <div className="why_ketto_block">
              <div style={{ backgroundImage: `url(${why_ketto6})` }} className="why_ketto_block1">

              </div>
              <div className="why_ketto_block2">
                A Dedicated Smart-Dashboard
              </div>
            </div>



            <div className="why_ketto_block">
              <div style={{ backgroundImage: `url(${why_ketto7})` }} className="why_ketto_block1">

              </div>
              <div className="why_ketto_block2">
                Withdraw Funds Without Hassle
              </div>
            </div>


            <div className="why_ketto_block">
              <div style={{ backgroundImage: `url(${why_ketto8})` }} className="why_ketto_block1">

              </div>
              <div className="why_ketto_block2">
                International Payment Support
              </div>
            </div>
          </div>
        </section>


        <section style={{marginBottom:"50px"}}>
          <div>
            <p className='success_story'>Success Story</p>
            <div className="success_story_cont">

              <div style={{ float: "left", marginRight: "30px" }}>
                <img src={success_story1} style={{  width: "100%" }} alt="Success" />
              </div>
              <div>
                <p style={{ fontSize: "20px",fontWeight:"600" }}>
                Amit and the world’s toughest cycling expedition
                </p>
                <p style={{ }}>
                At 38, Dr. Amit Samarth is the first Asian to qualify, contest and complete the Trans-Siberian Extreme Endurance Race. It is the world's longest and the toughest cycling race - starting from Moscow, traversing 9100 kms through Russia, to finally end in Vladivostok. Amit was one of the only six people who finished the race. He successfully raised the amount needed for this once in a lifetime adventure on Ketto, where


                </p>
                <button style={{ marginLeft: "15px" }} className='Subscribe'>Subscribe</button>

              </div>
            </div>
          </div>
        </section>
        <div style={{display:"none"}}></div>

        <section>
          <div style={{  height: "600px", width: "90%", margin: "auto" }}>
            
            
            <div className="get_demo">
              <div style={{ backgroundImage: `url(${call_to_action1})`,height:"51%"}} className="getdeomo_block1">

              </div>
              <div className="getdemo_block2">
              Get a demo of all fundraising features
              <p style={{fontSize:"16px",fontWeight:"500"}}>Connect with an expert for a one-on-one demonstration of how Ketto can help you fundraise.</p>
              <button style={{ marginLeft: "5px" }} className='lets_Start_Btn1'>Talk To Us</button>

              </div>

            </div>


            <div className="get_demo">
              <div style={{ backgroundImage: `url(${call_to_action2})`,height:"51%"}} className="getdeomo_block1">

              </div>
              <div className="getdemo_block2">
              Launch your next fundraiser in minutes
              <p style={{fontSize:"16px",fontWeight:"500"}}>Start your fundraiser on Ketto and be ready to get your first donation in minutes.</p>
              <button onClick={redirect} className='home_button'>Start a Fundraiser for FREE</button>

              </div>

            </div>

            
          </div>
          <Footer/>
        </section>
      </div>
    </>
  );
}