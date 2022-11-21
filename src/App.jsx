import './App.css';
import vector from './sources/vector.png'
import vector2 from './sources/vector2.png'
import Navbar from './components/Navbar'
import Button from './components/Button';
import structure from './sources/structure.png'
import sketch from './sources/sketch.png'
import developing from './sources/developing.png'
import vector4 from './sources/vector4.png'
import business from'./sources/business.png'
import arrowRight from './sources/arrow-right.png'
import arrowLeft from './sources/arrow-left.png'
import p1 from './sources/p-1.png'
import p2 from './sources/p-2.png'
import p3 from './sources/p-3.png'
import p4 from './sources/p-4.png'
import o1 from './sources/o1.png'
import o2 from './sources/o2.png'
import o3 from './sources/o3.png'
import o4 from './sources/o4.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import box1 from './sources/box1.png'
import box2 from './sources/box2.png'
import box3 from './sources/box3.png'
import vector3 from './sources/vector3.png'
import bb from './sources/bb.png'
import dBg from './sources/d-bg.png'


function App() {
  return (
    <div className="app">
      <section className="section-1">
        <div className="bg-d">
          <img src={dBg} alt="background" className='bg'/>
        </div>
        <Navbar/>
        <div className="row" style={{width: '100%'}}>
          <div className="col-9">
            <h1 className='service'>creating high <br/> performance <br/> <span className='white-title'>digital asset</span></h1>
          </div>
          <div className="col-3">
            <div className="about-us">
              <h3 className='about-us-buttom'>about us</h3>
              <div className="reach-more">
                <div className="dots">
                  <span> </span>
                  <span> </span>
                  <span> </span>
                  <span> </span>
                </div>
                <img src={vector} alt="arrow" style={{ width: '75px'}} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-2'>
        <div className="row line-1" style={{width: '100%'}}>
          <div className="col-5">
            <h1 className='our-service'>our <br/> services</h1>
          </div>
          <div className="col-4">
            <p className='work'>
              We've worked with a wide array of clients across the globe to apply design fundamentals of elegance, simplicity
            </p>
          </div>
          <div className="col-3">
            <div className="view">
              <div><h2 className='view-all'>view all</h2></div>
              <div><img src={vector2} alt="arrow" style={{ width: '75px'}} className='vector-2'/></div>
            </div>
          </div>
        </div>

        <div className="row line-2" style={{width: '100%'}}>
          <div className="col-6">
            <h2 className='sub-title'>E-Commerce Development</h2>
          </div>
          <div className="col-3">
            <p className='body'>
              You want to get the best out of your business and turn mere visitors into paying customers? Sell your products on a secure platform and not worry about the technical details? We will help you implement your E-Commerce platform.
            </p>
          </div>
          <div className="col-3">
            <div className="learn-more">
              <div><Button/></div>
              <div><h2 className='add'>+</h2></div>
            </div>
          </div>
        </div>

        <div className="row line-2" style={{width: '100%'}}>
          <div className="col-6">
            <h2 className='sub-title'>E-Commerce Development</h2>
            <img src={structure} alt="structure" style={{width: '500px', marginTop: '20px'}} />
          </div>
          <div className="col-6">
            <div className="row" style={{width: '100%'}}>
              <div className="col-11">
                <p className='body'>
                  It's time to turn your vision into a high-performing and responsive app. This is how your customers will interact with your business, which is why we pay attention to every detail.
                </p>
              </div>
              <div className="col-1">
                <h2 className='add'>-</h2>
              </div>
            </div>
            <div className="images">
              <img src={sketch} alt="sketch"  style={{width: '300px', marginRight: '10px', marginBottom: '20px'}}/>
              <img src={developing} alt="sketch"  style={{width: '300px', marginBottom: '20px'}}/>
            </div>
            <div className='row' style={{width: '100%'}}>
              <div className="col-9">
                <p className='body'>
                  In the design process, they create both functional and beautiful things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract and visionary into a digital experience. They always put the clients first no matter how complicated the tasks are.
                </p>
              </div>
              <div className="col-3">
                <Button/>
              </div>
            </div>
          </div>
        </div>

        <div className="row line-2" style={{width: '100%'}}>
          <div className="col-6">
            <h2 className='sub-title'>Integration With 3rd Party Web Services</h2>
          </div>
          <div className="col-3">
            <p className='body'>
              We use all opportunities to solve business problems. Our intelligent digital strategy and a pragmatic and thoughtful approach to solving business calls deliver a successful framework for both you and your audience.
            </p>
          </div>
          <div className="col-3">
            <div className="learn-more">
              <div><Button/></div>
              <div><h2 className='add'>+</h2></div>
            </div>
          </div>
        </div>

        <div className="row line-2" style={{width: '100%'}}>
          <div className="col-6">
            <h2 className='sub-title'>Hosting/Maintenance</h2>
          </div>
          <div className="col-3">
            <p className='body'>
              Our hosting services are designed to give you the highest level of security with respect to your website’s performance. We exclusively use safe and modern servers, which minimizes the risk of any single point of failure. This includes a minimized risk of hacks or other malicious activities.
            </p>
          </div>
          <div className="col-3">
            <div className="learn-more">
              <div><Button/></div>
              <div><h2 className='add'>+</h2></div>
            </div>
          </div>
        </div>

        <div className="row line-2" style={{width: '100%'}}>
          <div className="col-6">
            <h2 className='sub-title'>Design UX/UI</h2>
          </div>
          <div className="col-3">
            <p className='body'>
              Although it might seem merely superficial, the user experience might be the most crucial part of your online presence. When viewers are confronted with long loading times, cramped landing pages or an otherwise infuriating design, they will leave quicker than they came.
            </p>
          </div>
          <div className="col-3">
            <div className="learn-more">
              <div><Button/></div>
              <div><h2 className='add'>+</h2></div>
            </div>
          </div>
        </div>

        <div className="row last-line" style={{width: '100%'}}>
          <div className="col-6">
            <h2 className='sub-title'>SEO Services</h2>
          </div>
          <div className="col-3">
            <p className='body'>
              A well-thought-out SEO strategy can boost your growth, and in turn sales, without an expensive PPC-campaign. There are multiple ways we can help you with this.
            </p>
          </div>
          <div className="col-3">
            <div className="learn-more">
              <div><Button/></div>
              <div><h2 className='add'>+</h2></div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-3'>
        <h2 className='work-flow'>WORK FLOW</h2>

        <div className="row line-1" style={{width: '100%'}}>
          <div className="col-6">
            <p >It is particularly important for us that you as a customer are actively involved in creative processes and that you know at all times which step we are about to take next. Learn more about our workflow and our communication with you as a customer here.</p>
            <img src={business} alt="business" style={{width: '550px', marginTop: '91px'}}/>
          </div>
          <div className="col-5">
            <h3>
              How we deal with projects from start to finish
            </h3>
            <p>
              The key to successful collaboration and results that are perfectly tailored to you is clear goal setting and the elimination of misunderstandings.
            </p>
            <p>
              Before each project, we therefore obtain detailed information from you about what you expect from our service, what your goals are and what you particularly value. Our experts will also be happy to advise you on this step with their extensive specialist knowledge.
            </p>
            <p style={{marginBottom: '49px'}}>
              As soon as your expectations have been clarified, we get down to work. We actively involve you, the customer, in the processes so that you always know where your project currently stands.
            </p>
            <Button/>
            <h3 style={{marginTop: '54px'}}><a href="/#" style={{color: 'black'}}>How we communicate with the client</a></h3>
            <h5 style={{marginTop: '74px'}}><a href="/#" style={{color: 'black'}}>How we communicate with the client</a></h5>
          </div>
          <div className="col-1">
            <div className='vector-4'><img src={vector4} alt="arrow" style={{ width: '24px'}}/></div>
          </div>
        </div>
      </section>

      <div className="section-3">
        <div className="row line-1" style={{width: '100%'}}>
          <div className="col-5">
            <h1 style={{fontSize: '75px'}}>PORTFOLIO</h1>
          </div>
          <div className="col-4">
            <p>
              Take a look at our most successful projects and see for yourself our skills and the results that speak for themselves.
            </p>
          </div>
          <div className="col-3">
            <div className="arrow">
              <div><img src={arrowLeft} alt="arrow-left" style={{ width: '49px'}}/></div>
              <div><img src={arrowRight} alt="arrow-right" style={{ width: '49px', marginLeft: '48px'}}/></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <h6 className='customer'>Custom WEB Development</h6>
            <h3 style={{fontWeight: '600'}}>HANA BANK <br/>Website</h3>

            <ul className='portfolio'>
              <li>
                2017 Webby Award Winner for Best Shopping App
              </li>
              <li>
                DSC was reportedly acquired by Unilever for $1 billion
              </li>
              <li>
                4.8 Google Play Reviews
              </li>
              <li>
                97% of app users would recommend the DSC app to a friend
              </li>
            </ul>
            <div style={{marginTop: '53px'}}>
              <Button/>
            </div>
          </div>
          <div className="col-8">
            <img src={p1} alt="portfolio" style={{width: '800px'}} />
          </div>
        </div>

        <div className="row" style={{marginTop: '189.19px'}}>
          <div className="col-8">
            <img src={p2} alt="portfolio" style={{width: '800px'}} />
          </div>
          <div className="col-4" style={{paddingTop: '225px'}}>
            <h6 className='customer'>Custom App Development</h6>
            <h3 style={{fontWeight: '600'}}>UTVI PWA</h3>

            <ul className='portfolio'>
              <li>
                2021 App Award Winner for Best Maid App
              </li>
              <li>
                DSC was reportedly acquired by Unilever for $1 billion
              </li>
              <li>
                4.8 Google Play Reviews
              </li>
              <li>
                97% of app users would recommend the DSC app to a friend
              </li>
            </ul>
            <div style={{marginTop: '53px'}}>
              <Button/>
            </div>
          </div>
        </div>

        <div className="row" style={{marginTop: '189.19px'}}>
          <div className="col-4">
            <h6 className='customer'>DESIGN UI/UX</h6>
            <h3 style={{fontWeight: '600'}}>BASF WEB DESIGN</h3>

            <ul className='portfolio'>
              <li>
                2017 Webby Award Winner for Best Shopping App
              </li>
              <li>
                DSC was reportedly acquired by Unilever for $1 billion
              </li>
              <li>
                4.8 Google Play Reviews
              </li>
              <li>
                97% of app users would recommend the DSC app to a friend
              </li>
            </ul>
            <div style={{marginTop: '53px'}}>
              <Button/>
            </div>
          </div>
          <div className="col-8">
            <img src={p3} alt="portfolio" style={{width: '800px'}} />
          </div>
        </div>

        <div className="row" style={{marginTop: '189.19px'}}>
          <div className="col-8">
            <img src={p4} alt="portfolio" style={{width: '800px'}} />
          </div>
          <div className="col-4" style={{paddingTop: '225px'}}>
            <h6 className='customer'>E-Commerce Development</h6>
            <h3 style={{fontWeight: '600'}}>Open Fashion Mobile App</h3>

            <ul className='portfolio'>
              <li>
                2021 App Award Winner for Best Maid App
              </li>
              <li>
                DSC was reportedly acquired by Unilever for $1 billion
              </li>
              <li>
                4.8 Google Play Reviews
              </li>
              <li>
                97% of app users would recommend the DSC app to a friend
              </li>
            </ul>
            <div style={{marginTop: '53px'}}>
              <Button/>
            </div>
          </div>
        </div>
        <h2 className='work-flow' style={{paddingBottom: '14px'}}>ABOUT US</h2>
      </div>

      <section className='section-5'>
        <div className="content">
          <div className="row" style={{width: '100%'}}>
            <div className="col">
              <p style={{marginTop: '55px', color: 'white'}}>
                Hardianto is a name of person work in digital agency based in Jakarta. Founder Novi Hardianto decided to go into business for himself, using his vast experience in software engineering and numerous ancillary fields to help people perfect their web presence and get seen. 
              </p>
              <p style={{marginBottom:'34px', color: 'white'}}>
                In setting up the company, he was able to rely on his vast experience from previous entrepreneurial activities and therefore knows what matters
              </p>
              <Button/>
            </div>
            <div className="col">
              <video controls style={{width: '600px', heigth: '600px', marginLeft: '20px',marginTop:'-119px'}}>
                <source src='https://www.youtube.com/watch?v=My2Tr3k1liw' type='video/mp4'/>
              </video>
            </div>
          </div>

          <div className="row" style={{width:'100%', marginTop:'109px'}}>
            <div className="col-10">
              <h2 style={{color:'white', fontSize:'75px', marginTop: '-25px'}}>Our magic team</h2>
            </div>
            <div className="col-2">
              <Button/>
            </div>
          </div>
        </div>
      </section>

      <section className='section-6'>
        <div className="row" style={{width: '100%'}}>
          <div className="col-10">
            <p>
              Wolven D.O.O. is a small digital agency based in Serbia. Founder Dave McGowan decided to go into business for himself, using his vast experience in software engineering and numerous ancillary fields to help people perfect their web presence and get seen. 
            </p>

            <p style={{marginBottom: '41px'}}>
              In setting up the company, he was able to rely on his vast experience from previous entrepreneurial activities and therefore knows what matters
            </p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card" style={{backgroundColor: '#FFFE55'}}>
              <img src={o1} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Sam flex</h5>
                <p className="card-text">Director</p>
                <div className="social-media" style={{display: 'flex'}}>
                  <LinkedInIcon/>
                  <FacebookIcon/>
                  <TwitterIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{backgroundColor: '#FFFE55'}}>
              <img src={o2} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Kate larson</h5>
                <p className="card-text">Manager</p>
                <div className="social-media" style={{display: 'flex'}}>
                  <LinkedInIcon/>
                  <FacebookIcon/>
                  <TwitterIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{backgroundColor: '#FFFE55'}}>
              <img src={o3} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Bobby fish</h5>
                <p className="card-text">Designer</p>
                <div className="social-media" style={{display: 'flex'}}>
                  <LinkedInIcon/>
                  <FacebookIcon/>
                  <TwitterIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{backgroundColor: '#FFFE55'}}>
              <img src={o4} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Amanda james</h5>
                <p className="card-text">Programmer</p>
                <div className="social-media" style={{display: 'flex'}}>
                  <LinkedInIcon/>
                  <FacebookIcon/>
                  <TwitterIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-7'>
        <h2 style={{color:'white', fontSize:'75px'}}>OUR VALUES</h2>

        <div className="row" style={{width: '100%', marginTop:'71px'}}>
          <div className="col">
            <p  style={{color:'white'}}>Transparency</p>
            <div className="box">
              <img src={box1} alt="..."/>
            </div>
            <p style={{color:'white', marginTop:'34px'}}>
              The goal of Wolven D.O.O. is to get as close as possible to the ideal of a ''glass company''.
            </p>
            <p style={{color:'white'}}>
              Our key to this is clear communication with our customers as well as the disclosure of our workflows and the permanent involvement of the customer in the creative processes.
            </p>
          </div>
          <div className="col">
            <p style={{color:'white'}}>Transparency</p>
            <div className="box">
              <img src={box2} alt="..." />
            </div>
            <p style={{color:'white', marginTop:'34px'}}>
              We are your competent partner for web development and everything that goes with it. 
            </p>
            <p style={{color:'white'}}>
              That means we don't just make empty promises, but deliver measurable results as well as real added value.
            </p>
          </div>
          <div className="col">
            <p style={{color:'white'}}>Transparency</p>
            <div className="box">
              <img src={box3} alt="..." />
            </div>
            <p style={{color:'white', marginTop:'34px'}}>
              Just being good at something is one side. 
            </p>
            <p style={{color:'white'}}>
              But for truly perfect results and content that converts, it takes people who put their heart and soul into every project until you as our client and partner, are 100% satisfied.
            </p>
          </div>
        </div>
      </section>

      <section className='section-8'>
        <div className="row" style={{width:'100%'}}>
          <div className="col">
            <h2 style={{fontSize:'75px'}}>OUR VALUES</h2>
            <p>
              Looking to talk to us directly, or planning an office visit? As Digital Agency, Dipstrategy start by understanding your business need to comes up with any solutions. That's why it is important for us to hear your story. When it come to listening to your story, we are all ears.
            </p>
            <p style={{marginTop:'76px'}}>
              Gd. Titan lt.3, Jl. Slamet Riyadi no.7, Jakarta 13150 - Indonesia 
            </p>
            <h4>P. +62 21 858 3944</h4>
            <h4>info@dipstrategy.co.id</h4>

            <div className="social-media-2">
              <p>FACEBOOK</p>
              <p>TWITTER</p>
              <p>INSTAGRAM</p>
              <p>LINKEDIN</p>
            </div>
          </div>
          <div className="col">
            <form className='form'>
              <input type="text" placeholder='NAME' />
              <input type="text" placeholder='EMAIL' />
              <input type="text" placeholder='MESSAGE*' style={{marginBottom: '50px', paddingBottom: '60px'}}/>
              <button className='button'>SUBMIT <span className='expand'><img src={vector3} alt="vector"/></span></button>
            </form>
          </div>
        </div>
      </section>

      <footer className='section-9'>
        <div className="row" style={{width:'100%'}}>
          <div className="col">
            <img src={bb} alt="..." style={{width:'90px'}}/>
          </div>
          <div className="col">
            <h4 style={{rotate: '-90deg', fontWeight: '600', marginTop:'55px'}}>P. +62 21 858 3944</h4>
          </div>
          <div className="col">
            <h5>Quick Links</h5>
            <p>Services</p>
            <p>Work Flow</p>
            <p>Portfolio</p>
            <p>About Us</p>
            <p>Our Value</p>
          </div>
          <div className="col">
            <h5>Follow</h5>
            <p>facebook</p>
            <p>twitter</p>
            <p>instagram</p>
            <p>About Us</p>
            <p>linkedin</p>
          </div>
          <div className="col">
            <h5>Sign up to our newsletter</h5>
            <input type="text" placeholder='E-MAIL' style={{backgroundColor: '#FFFE55', border: 'none', borderBottom:'1px solid black', width:'300px', marginTop: '67px', marginBottom:'20px'}}/>
            <p>This site is protected by reCAPTHCHA and the Google Privacy Policy and Terms of Service apply.</p>
          </div>
          <div className="col">
            <img src={vector} alt="arrow" style={{ width: '50px', marginTop:'70px'}} />
          </div>
        </div>
        <div className="row" style={{width:'100%'}}>
          <div className="col-2">

          </div>
          <div className="col-10 policy">
            <p>Copyright 2022 Digital Presence Strategy - Dipstrategy - Digital Agency Jakarta</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
