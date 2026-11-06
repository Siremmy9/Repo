import type { ReactNode } from 'react';

export const metadata = {"title":"About Us | Texcel Schools","description":"Learn about Texcel Schools: our mission, vision, philosophy, anthem and values, and the dedicated team behind our Crèche, Pre-School, Primary and College sections in Lagos."} as const;
export const pageProps = {"bodyClass":"","scripts":["/js/config.js","/js/content.js","/js/storage.js","/js/main.js"]} as const;

export default function AboutPage(): ReactNode {
  return (
    <>

    
      <a className="skip-link" href="#main">Skip to main content</a>

    
      <header className="site-header" id="site-header" />

    
      

    
      <main id="main">

      
        <section className="page-hero">

        
          <div className="container">

          
            <h1>About us</h1>

          
            <p>

            Who we are, what we believe and the people who teach your children.
          
            </p>

        
          </div>

      
        </section>

      
        <section className="section" aria-labelledby="who-h">

        
          <div className="container split">

          
            <div className="reveal">

            
              <h2 id="who-h">Raising Joy of nations</h2>

            
              <p className="lead" data-cfg="about.intro">

              Texcel Schools is a family-focused school.
            
              </p>

            
              <p data-cfg="tagline">

              Home of Leaders... Where The Future Begins!
            
              </p>

          
            </div>

          
            <div className="about-img reveal">

            
              <div className="arch arch--building">

              
                <img data-img="about" data-label="Our school" alt="Texcel Schools building exterior" width={800} height={1000} loading="lazy" decoding="async" />

            
              </div>

          
            </div>

        
          </div>

        
          <section className="container">

          
            <a className="btn btn-wine" href="/history">View History</a>

        
          </section>

      
        </section>

      
        <section className="section section--tint" aria-labelledby="mvp-h">

        
          <div className="container">

          
            <div className="section-head">

            
              <h2 id="mvp-h">Mission, vision, philosophy and anthem</h2>

          
            </div>

          
            <div className="about-cards" data-render="about" />

        
          </div>

      
        </section>

      
        <section className="section" aria-labelledby="values-h">

        
          <div className="container">

          
            <div className="section-head">

            
              <h2 id="values-h">Core values</h2>

            
              <p>

              Discipline, excellence, integrity, leadership, character and
              innovation.
            
              </p>

          
            </div>

          
            <ul className="values" data-render="values" />

        
          </div>

      
        </section>

      
        <section className="section section--wine" aria-label="School statistics">

        
          <div className="container">

          
            <div className="stats" data-render="stats" />

        
          </div>

      
        </section>

      
        <section className="section" id="team" aria-labelledby="team-h">

        
          <div className="container">

          
            <div className="section-head">

            
              <h2 id="team-h">Meet our dedicated team</h2>

            
              <p>Teachers and staff who care about every child's progress.</p>

          
            </div>

          
            <div className="staff-grid" data-render="staff" />

        
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

          
            <h2 id="cta-h">Come and see the school for yourself</h2>

          
            <p>Book a visit and meet the team.</p>

          
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
