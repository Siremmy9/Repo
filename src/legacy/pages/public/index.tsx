import type { ReactNode } from 'react';

export const metadata = {"title":"Texcel Schools | Raising the very best","description":"Texcel Schools offers Crèche, Nursery, Primary and Secondary education on the Epe-Ajah Expressway, Lagos. View fees, admissions, facilities and contact the school."} as const;
export const pageProps = {"bodyClass":"","scripts":["/js/config.js","/js/content.js","/js/storage.js","/js/main.js","/js/gallery.js"]} as const;

export default function HomePage(): ReactNode {
  return (
    <>

    
      <a className="skip-link" href="#main">Skip to main content</a>

    
      <header className="site-header" id="site-header" />

    
      

    
      <main id="main">

      
        <section className="hero" id="hero" aria-labelledby="hero-title">

   
        
          <video className="hero-video" autoPlay={true} muted={true} loop={true} playsInline={true} preload="metadata" aria-hidden="true" tabIndex={-1}>

          
            <source src="/assets/videos/school-hero.mp4" type="video/mp4" />

        
          </video>

        
          <div className="hero-arch" aria-hidden="true" />

        
          <div className="container hero-inner">

          
            <h1 id="hero-title" data-cfg="heroTitle">Integrity &amp; Excellence</h1>

          
            <p className="hero-sub" data-cfg="heroSubtitle">

            ....Raising the very best
          
            </p>

          
            <p className="hero-text" data-cfg="heroText">

          "Building Character of determination, dedication and Diligience"
          
            </p>

          
            <div className="btn-row">

            
              <a className="btn btn-gold" href="/admissions#apply">Apply for Admission</a>

            
              <a className="btn btn-ghost-light" href="#schools">Explore Our School</a>

            
              <a className="btn btn-ghost-light" data-wa="" target="_blank" rel="noopener" data-icon="whatsapp">WhatsApp </a>

              
              <a className="btn btn-ghost-light" href="/admin/login">Admin Login</a>

          
            </div>

        
          </div>

        
          <div className="hero-trust">

          
            <div className="container">

            
              <ul data-render="hero-levels" aria-label="School sections">

              
                <li>Crèche</li>

              
                <li>Nursery</li>

              
                <li>Primary</li>

              
                <li>Secondary</li>

            
              </ul>

          
            </div>

        
          </div>

      
        </section>


      
        <section className="section" aria-labelledby="intro-h">

        
          <div className="container split">

          
            <div className="reveal">

            
              <h2 id="intro-h">Integrity and Excellence is our heartbeat and watchword</h2>

            
              <p className="lead" data-cfg="about.intro">

              Eagles World Schools is a family-focused school offering Crèche,
              Nursery, Primary and Secondary education.
            
              </p>

            
              <div className="btn-row">

              
                <a className="btn btn-wine" href="/about">About our school</a>
                <a className="btn btn-outline" href="/contact">Visit us</a>

            
              </div>

          
            </div>

          
            <div className="about-img reveal">

            
              <div className="arch arch--building">

              
                <img data-img="about" data-label="Our school" alt="Texcel Schools building exterior" width={800} height={1000} loading="lazy" decoding="async" />

            
              </div>

          
            </div>

        
          </div>

      
        </section>


      
        <section className="section section--wine" aria-label="School statistics">

        
          <div className="container">

          
            <div className="stats" data-render="stats" />

        
          </div>

      
        </section>


      
        <section className="section" id="schools" aria-labelledby="schools-h">

        
          <div className="container">

          
            <div className="section-head">

            
              <h2 id="schools-h">Our schools</h2>

            
              <p>

              Four sections, one family. Choose the stage that fits your child.
            
              </p>

          
            </div>

          
            <div className="schools-grid" data-render="schools" />

        
          </div>

      
        </section>


      
        <section className="section section--tint" aria-labelledby="values-h">

        
          <div className="container">

          
            <div className="section-head">

            
              <h2 id="values-h">What we stand for</h2>

            
              <p>

              Six values that shape lessons, playtime and the way we treat each
              other.
            
              </p>

          
            </div>

          
            <ul className="values" data-render="values" />

        
          </div>

      
        </section>


      
        <section className="section" aria-labelledby="gallery-h">

        
          <div className="container">

          
            <div className="section-head">

            
              <h2 id="gallery-h">Life at school</h2>

            
              <p>A glimpse of classrooms, events and everyday moments.</p>

          
            </div>

          
            <div data-render="gallery" data-limit="6" data-filters="off" />

          
            <p style={{"marginTop":"2rem"}}>

            
              <a className="btn btn-outline" href="/gallery">See the full gallery</a>

          
            </p>

        
          </div>

      
        </section>


      
        <section className="section section--tint" aria-labelledby="news-h">

        
          <div className="container">

          
            <div className="section-head">

            
              <h2 id="news-h">News and events</h2>

            
              <p>Announcements, activities and updates for parents.</p>

          
            </div>

          
            <div className="news-grid" data-render="news" data-limit="3" />

          
            <p style={{"marginTop":"2rem"}}>

            
              <a className="btn btn-outline" href="/news">All news and events</a>

          
            </p>

        
          </div>

      
        </section>


      
        <section className="section section--wine" aria-labelledby="testi-h">

        
          <div className="container">

          
            <div className="section-head center">

            
              <h2 id="testi-h">What parents say</h2>

          
            </div>

          
            <div data-render="testimonials" />

        
          </div>

      
        </section>


      
        <section className="cta-band" aria-labelledby="cta-h">

        
          <div className="container">

          
            <h2 id="cta-h">Begin your child's journey with us</h2>

          
            <p>

            Send an enquiry, book a visit or chat with the school office on
            WhatsApp. We will guide you through each step.
          
            </p>

          
            <div className="btn-row">

            
              <a className="btn btn-gold" href="/admissions#apply">Apply for Admission</a>

            
              <a className="btn btn-ghost-light" data-wa="" target="_blank" rel="noopener" data-icon="whatsapp">Chat on WhatsApp</a>

          
            </div>

        
          </div>

      
        </section>

    
      </main>

    
      <footer className="site-footer" id="site-footer" />

    

    

    

    

    

  


    </>
  );
}
