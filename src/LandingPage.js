import './App.css';
import logo from './images/logo.png';
import banner1 from './images/banner1.png';
import eclipse1 from './images/Ellipse 2.png';
import eclipse2 from './images/Ellipse 3.png';
import eclipse3 from './images/Ellipse 4.png';
import offer1 from './images/Rectangle 95.png';
import offer2 from './images/Rectangle 97.png';
import offer3 from './images/Rectangle 99.png';
import appstore from './images/app-store-img 1.png';
import playstore from './images/google-play-img .png';
import phonehand from './images/phone-hand.png';
import blog1 from './images/blog1.png';
import blog2 from './images/blog2.png';
import blog3 from './images/blog3.png';
import blog4 from './images/blog4.png';
import followus from './images/follow-us.svg';
import "./style.css"
import {useNavigate} from 'react-router-dom';


function LandingPage() {

  const navigate = useNavigate();


  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div className='landing-page'>
      <div className='header' style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
        <div> <img src={logo} /> </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div class="dropdown">
            <button class="dropbtn">Accounts</button>
            <div class="dropdown-content">
              <a>Savings Account</a>
              <a>FD Accounts</a>
              <a>Salary Accounts</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Cards</button>
            <div class="dropdown-content">
              <a>Credit Cards</a>
              <a>Debit Cards</a>
              <a>Prepaid Cards</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Offers</button>
            <div class="dropdown-content">
              <a>Credit Card Offers</a>
              <a>Debit Card Offers</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Quick Assistance</button>
            <div class="dropdown-content">
              <a>Contact Us</a>
              <a>Locate Us</a>
            </div>
          </div>
          <button className='login-btn' onClick={navigateToLogin}>Login</button>
        </div>
      </div>
      <div className='banner' style={{ width: "100%" }}>
        <img style={{ width: "100%" }} src={banner1} />
      </div>
      <div>
        <div style={{ padding: "20px", marginLeft: "0" }}>Why choose us vuBank?</div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <img src={eclipse1} />
            <div style={{ padding: "20px", marginLeft: "0" }}>Advance</div>
          </div>
          <div>
            <img src={eclipse2} />
            <div style={{ padding: "20px", marginLeft: "0" }}>Innovative</div>
          </div>
          <div>
            <img src={eclipse3} />
            <div style={{ padding: "20px", marginLeft: "0" }}>Instant</div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ padding: "20px", marginLeft: "0" }}>Exclusive Offers</div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <img src={offer1} />
            <div style={{ padding: "20px" }}>Offer ends: 26 September 2023</div>
          </div>
          <div>
            <img src={offer2} />
            <div style={{ padding: "10px" }}>Offer ends: 6 September 2023</div>
          </div>
          <div>
            <img src={offer3} />
            <div style={{ padding: "20px" }}>Offer ends: 10 September 2023</div>
          </div>
        </div>
      </div>
      <div style={{ background: "#DA1B5017", width: "2000px", height: "400px", position: "relative", display: "flex" }}>
        <div className='app-content'>
          <p className='bank-app'>The Bank is an app!</p>
          <p className='feature-title'>Features:</p>
          <ul class="features">
            <li className='item'>Fund Transfers</li>
            <li className='item'>Balance Enquiry</li>
            <li className='item'>Recharge and Bill Pay</li>
          </ul>
          <p className='download-text'>Download the vuBank One Mobile App and simplify your banking.</p>
          <img className='app-store' src={appstore} />
          <img className='app-store' src={playstore} />
        </div>
        <div>
          <img className='phone-hand' src={phonehand} />
        </div>
      </div>
      <div style={{ background: "#C91A72", width: "2000px", height: "52px" }}>
        <div style={{ color: "white", textAlign: "center", padding: "20px" }}>Now enjoy interest rates upto 7% p.a.* on your savings account . Open an account</div>
      </div>
      <div style={{ padding: "20px", marginLeft: "0" }}>Blogs</div>
      <div className="blog-thumbnail">
        <div>
          <img src={blog1} />
          <div style={{ padding: "10px" }}>5 Types of Regulatory Reporting for Banks</div>
        </div>
        <div>
          <img src={blog2} />
          <div style={{ padding: "10px" }}>Top 10 Fintech Trends for 2023</div>
        </div>
        <div>
          <img src={blog3} />
          <div style={{ padding: "10px" }}>The Top Co-Operative Banks in India</div>
        </div>
        <div>
          <img src={blog4} />
          <div style={{ padding: "10px" }}>No-Code Revolution in the Fintech Industry</div>
        </div>
      </div>
      <div className="about-us-section">
        <div className='section-wrapper'>
          <p className="about-us-title">About Vubank</p>
          <p className="about-us-content">vubank app </p>
          <p className="about-us-content">follow us </p>
          <img src={followus} />
        </div>
        <div className='section-wrapper'>
          <p className="about-us-title">Our Products</p>
          <p className="about-us-content">Savings account</p>
          <p className="about-us-content">personal loan </p>
          <p className="about-us-content">fixed deposit </p>
          <p className="about-us-content">recharge and pay bill</p>
        </div>
        <div className='section-wrapper'>
          <p className="about-us-title">About Us</p>
          <p className="about-us-content">Disclaimer</p>
          <p className="about-us-content">Privacy Policy</p>
          <p className="about-us-content">Terms of use </p>
          <p className="about-us-content">FAQ</p>
        </div>
        <div className='section-wrapper'>
          <p className="about-us-title">Customer Service</p>
          <p className="about-us-content">Contact Us</p>
          <p className="about-us-content">Locate Us</p>
        </div>
        <div className='section-wrapper'>
          <p className="about-us-title">Download vuBank</p>
          <img className='app-store' src={appstore} />
          <img className='app-store' src={playstore} />
        </div>
      </div>

    </div >
  );
}

export default LandingPage;