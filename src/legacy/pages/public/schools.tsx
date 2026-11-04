import type { ReactNode } from 'react';

export const metadata = {"title":"Our Schools | Texcel Schools","description":"Explore the Crèche, Pre-School, Primary and College sections of Texcel Schools in Lagos, Nigeria."} as const;
export const pageProps = {"bodyClass":"","scripts":["/js/config.js","/js/content.js","/js/storage.js","/js/main.js"]} as const;

export default function SchoolsPage(): ReactNode {
  return (
    <>

    
      <a className="skip-link" href="#main">Skip to main content</a>

    
      <header className="site-header" id="site-header" />

    
      

    
      <main id="main">

      
        <section className="page-hero">

        
          <div className="container">

          
            <h1>Our schools</h1>

          
            <p>

            Crèche, Pre-School, Primary and College: a clear path from a child's
            first day to university.
          
            </p>

        
          </div>

      
        </section>

      
        <section className="section section--tint" aria-label="Welcome from the proprietress">

        
          <div className="container" data-render="leadership" data-leader="proprietress" />

      
        </section>

      
        <section className="section" aria-label="School sections">

        
          <div className="container">

          
            <div className="levels" data-render="schools" data-variant="full" />

        
          </div>

      
        </section>

      
        <section className="cta-band" aria-labelledby="cta-h">

        
          <div className="container">

          
            <h2 id="cta-h">Not sure which section is right?</h2>

          
            <p>

            Tell us your child's age and we will point you to the right class.
          
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
