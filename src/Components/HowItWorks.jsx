import React from "react";
import snap1 from "../Utils/snap1.png";
import image2 from "../Utils/image2slide.jpg";
import image3 from "../Utils/image3lide.png";
import image4 from "../Utils/image4slide.png";
import image7 from "../Utils/image7slide.jpg";
import image9 from "../Utils/image9slide.jpg";
import image12 from "../Utils/image12slide.jpg";
import image13 from "../Utils/image13slide.jpg";
import downslide from "../Utils/downslide.png";
import downpic from "../Utils/downsnipved.png";
import snip1 from "../Utils/Screenshot (1628).png";
import snip2 from "../Utils/Screenshot (1629).png";
import snip3 from "../Utils/Screenshot (1630).png";
import snip4 from "../Utils/Screenshot (1631).png";
import snip5 from "../Utils/Screenshot (1632).png";
import data from "../Utils/snipdata.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./How.module.css";
import Navbar from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
const HowItWorks = () => {
  const handleDragStart = (e) => {
    e.preventDefault();
  };

  const items = [
    <img alt="img1" src={image2} onDragStart={handleDragStart} />,
    <img alt="img2" src={image3} onDragStart={handleDragStart} />,
    <img alt="img3" src={image4} onDragStart={handleDragStart} />,
    <img alt="img4" src={image7} onDragStart={handleDragStart} />,
    <img alt="img5" src={image9} onDragStart={handleDragStart} />,
    <img alt="img6" src={image12} onDragStart={handleDragStart} />,
    <img alt="img7" src={image13} onDragStart={handleDragStart} />,
  ];
  const handleDragStart2 = (e) => {
    e.preventDefault();
  };

  const items2 = [
    <img alt="img1" src={snip1} onDragStart={handleDragStart2} />,
    <img alt="img2" src={snip2} onDragStart={handleDragStart2} />,
    <img alt="img3" src={snip3} onDragStart={handleDragStart2} />,
    <img alt="img4" src={snip4} onDragStart={handleDragStart2} />,
    <img alt="img5" src={snip5} onDragStart={handleDragStart2} />,
  ];

  return (
    <div className={styles.mainBody}>
      <Navbar />
      <div>
        <img alt="snap1" src={snap1} />
      </div>
      <div className={styles.middle_item}>
        <div className={styles.left_middle}>
          <AliceCarousel
            infinite={true}
            autoPlay={true}
            mouseTracking
            items={items}
          />
          <img alt="downsl" src={downslide} />
        </div>
        <div className={styles.right_middle}>
          <div>
            <img
              alt="logo"
              src="https://ketto.gumlet.io/assets/images/how-it-works/ketto-logo.svg?w=480&dpr=1.0"
            />
            <h3>
              We know you are in urgent need of <br /> funds.
            </h3>
            <p>
              Our personal fundraiser expert is waiting to get you <br />{" "}
              started!
            </p>
          </div>

          <div className={styles.inputDiv}>
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="number" placeholder="Your Mobile Number" />
            </div>
            <div className={styles.dropdown}>
              <input
                for="funds"
                placeholder="What will be the funds used for?"
              />
              <select className={styles.option}>
                <option value=""></option>
                <option value="Medical">Medical</option>
                <option value="NGO">NGO</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <p>102 People started fundraiser in last 2 days</p>
              <button className={styles.signBtn1}>GET A CALL</button>
              <br />
              <button className={styles.signBtn}>CONNECT ON WHATSAPP</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.h2P}>
        <h2>How Crowdfunding Works?</h2>
        <p>
          Decided to raise funds? Pat yourself on the back. Still have doubts?
          Watch This!
        </p>
        <div className={styles.vdiocont}>
          <iframe
            width="730"
            height="411"
            src="https://www.youtube.com/embed/4uu-mKoFR6w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h2>Follow these simple steps and start raising in a few minutes.</h2>
        </div>
      </div>
      <br />
      <div className={styles.downBox}>
        <div>
          <img alt="videsnap" src={downpic} />
        </div>
        <div>
          <video width="300" autoPlay loop>
            <source
              src="https://www.ketto.org/assets/videos/screen_recording.webm"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
      <div className={styles.btns}>
        <button className={styles.btns1}>START A FUND RAISER</button>
        <button className={styles.btns2}>TALK TO US</button>
      </div>
      <div className={styles.btnnning}>
        <p>Have any questions for us? Chat with our team on WhatsApp Now</p>
        <button className={styles.btns3}>Chat(+91 7700975559)</button>
      </div>
      <div className={styles.carousBody}>
        <div>
          <h2>Most Promising Platform To Raise Funds</h2>
          <p>
            Millions of people succesfully raised funds on Ketto for their
            cause. Hear what some of our successful campaigners have to say.
          </p>
        </div>
        <div>
          <AliceCarousel
            infinite={true}
            autoPlayInterval={700}
            autoPlay={true}
            mouseTracking
            items={items2}
          />
        </div>
      </div>
      <div>
        <img alt="data" src={data} />
        <p></p>
        <button className={styles.btns5}>START A FUND RAISER</button>
      </div>
      <div className={styles.dropdowns}>
        <div className={styles.faq}>
          <h1>FAQs</h1>
        </div>
        <div className={styles.dropdowns1}>
          <label for="funds">How do I raise funds?</label>
          <select className={styles.option2}>
            <option value=""></option>
            <option value="">
              To Start a Fundraiser, follow the three steps:
            </option>
            <option value="">1. Sign up on Ketto</option>
            <option value="">2. Fill up the form</option>
            <option value="">3. Hit Submit</option>
          </select>
        </div>
        <div className={styles.dropdowns1}>
          <label for="funds">Can I raise funds for a friend as well?</label>
          <select className={styles.option2}>
            <option value=""></option>
            <option value="">
              Yes, you can also raise funds for a friend, a loved one or anyone
              in need during life's crucial moments
            </option>
          </select>
        </div>
        <div className={styles.dropdowns1}>
          <label for="funds">
            Does the raised amount reach the individual directly?
          </label>
          <select className={styles.option2}>
            <option value=""></option>
            <option value="">
              With Ketto, the money you collect goes directly to the bank
              account associated with your fundraising page. Raising money for
              yourself or anyone has never been easier.
            </option>
          </select>
        </div>
        <div className={styles.dropdowns1}>
          <label for="funds">Is it safe?</label>
          <select className={styles.option2}>
            <option value=""></option>
            <option value="">
              Your Ketto fundraiser features the very best in secure payment
              encryption technology. Not only are your donors online payments
              safe, your money is stored securely until you're ready to request
              a withdrawal via electronic bank transfer.
            </option>
          </select>
        </div>
        <div className={styles.dropdowns1}>
          <label for="funds">What if I don't reach my goal?</label>
          <select className={styles.option2}>
            <option value=""></option>
            <option value="">
              No problem. You will still receive the raised amount after the
              transactional processing fee.
            </option>
          </select>
        </div>
        <div className={styles.dropdowns1}>
          <label for="funds">I have more questions, who do I write to?</label>
          <select className={styles.option2}>
            <option value=""></option>
            <option value="">
              You can write to info@ketto.org Know someone who needs funds for
              medical treatment urgently? Help them out by sharing this
              information with them.
            </option>
          </select>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
