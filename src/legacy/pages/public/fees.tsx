import type { ReactNode } from 'react';

export const metadata = {"title":"School Fees | Texcel Schools","description":"Tuition, registration and other fees for Crèche, Pre-School, Primary and College at Texcel Schools, plus how to pay."} as const;
export const pageProps = {"bodyClass":"","scripts":["/js/config.js","/js/content.js","/js/storage.js","/js/main.js","/js/fees.js"]} as const;

export default function FeesPage(): ReactNode {
  return (
    <>

    
      <a className="skip-link" href="#main">Skip to main content</a>

    
      <header className="site-header" id="site-header" />

    
      

    
      <main id="main">

      
        <section className="page-hero">

        
          <div className="container">

          
            <h1>School fees</h1>

          
            <p>

            Clear fee information for every section, with simple ways to pay.
          
            </p>

        
          </div>

      
        </section>

      
        <section className="section" aria-labelledby="fees-h">

        
          <div className="container">

          
            <div className="section-head">

            
              <h2 id="fees-h">Fees by section</h2>

            
              <p>

              Contact the school office to confirm current
              amounts of various sections.
            
              </p>

          
            </div>

          
            {/* <div className="fees-grid" data-render="fees-cards" /> */}

          
            {/* <p id="fees-note" className="lead" hidden={true} /> */}

          
            {/* <p style={{"marginTop":"2rem"}}>

            
              <button type="button" className="btn btn-wine" id="download-fees" data-icon="download">

              Download Fee Schedule
            
              </button>

          
            </p> */}

        
          </div>

      
        </section>

      
        <section className="section section--tint" aria-labelledby="pay-h">

        
          <div className="container">

          
            <div className="section-head">

            
              <h2 id="pay-h">How to pay</h2>

            
              <p>

              Pay by bank transfer, POS, at the school payment office or online.
              Keep your payment receipt and bring it to the school office.
            
              </p>

          
            </div>

          
            <div className="pay-layout" data-render="fees-payment" />

        
          </div>

      
        </section>

      
        <section className="cta-band" aria-labelledby="cta-h">

        
          <div className="container">

          
            <h2 id="cta-h">Questions about fees?</h2>

          
            <p>Message the school office and we will explain what is included.</p>

          
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
