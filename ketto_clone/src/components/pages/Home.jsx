import React from 'react';
import background from '../../images/back_girl.png'
import './Home_Css.css'
export default function Home() {
  return (
    <>
      {/* <h1 className='home'>EPIC</h1> */}
      <div>
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
                  <p className='home_company_data2'>RAISED</p>

                </div>
                <div className='home_company_data'>
                  <p className='home_company_data1'>2 Lakh+</p>
                  <p className='home_company_data2'>RAISED</p>

                </div>
              </div>
              <div style={{ width: "80%", height: "30%" }}>
                <p class="home_fontmanage">Ketto’s
                <span className='home_fontmanage1'> 0% </span> <span className="home_fontmanage2"> Platform fees</span> ensures maximum funds for you</p>
                <button className='home_button'>Start a Fundraiser for FREE</button>
                <br/>
                <a className="home_fontmanage3" href="#">नि: शुल्क फंडरेजर शुरू करें</a>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div>
            <h1>
              Trending Fundraisers
          </h1>
          </div>
        </section> */}
      </div>
    </>
  );
}