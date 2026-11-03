import type { ReactNode } from 'react';

export const metadata = {"title":"Facilities | Texcel Schools","description":"Modern classrooms, ICT and science laboratories, library, playground, sports, security and more at Texcel Schools."} as const;
export const pageProps = {"bodyClass":"","scripts":["/js/config.js","/js/content.js","/js/storage.js","/js/main.js"]} as const;

export default function FacilitiesPage(): ReactNode {
  return (
    <>

    
      <a className="skip-link" href="#main">Skip to main content</a>

    
      <header className="site-header" id="site-header" />

    
      

    
      <main id="main">

      
        <section className="page-hero">

        
          <div className="container">

          
            <h1>Facilities</h1>

          
            <p>Spaces designed for learning, play, safety and care.</p>

        
          </div>

      
        </section>

      
        <section className="section">

        
          <div className="container">

          
            <div className="facility-grid" data-render="facilities" />

        
          </div>

      
        </section>

      
        <section className="cta-band" aria-labelledby="cta-h">

        
          <div className="container">

          
            <h2 id="cta-h">Tour our facilities</h2>

          
            <p>See the classrooms, labs and playground in person.</p>

          
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
