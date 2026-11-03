import type { ReactNode } from 'react';

export const metadata = {"title":"Contact | Texcel Schools","description":"Contact Texcel Schools, Majek, opposite Fara Park Estate, Epe-Ajah Expressway, Lagos. Call, WhatsApp, send a message or get directions."} as const;
export const pageProps = {"bodyClass":"","scripts":["/js/config.js","/js/content.js","/js/storage.js","/js/main.js","/js/admissions.js"]} as const;

export default function ContactPage(): ReactNode {
  return (
    <>

    
      <a className="skip-link" href="#main">Skip to main content</a>

    
      <header className="site-header" id="site-header" />

    
      

    
      <main id="main">

      
        <section className="page-hero">

        
          <div className="container">

          
            <h1>Contact us</h1>

          
            <p>

            We would love to hear from you. Visit, call, message us on WhatsApp
            or send a note.
          
            </p>

        
          </div>

      
        </section>

      
        <section className="section" aria-labelledby="contact-h">

        
          <div className="container contact-grid">

          
            <div className="contact-card reveal">

            
              <div data-render="contact-details" />

            
              <div className="btn-row" style={{"marginTop":"1.5rem"}}>

              
                <a className="btn btn-gold" data-wa="" target="_blank" rel="noopener" data-icon="whatsapp">Chat on WhatsApp</a>

            
              </div>

          
            </div>

          
            <div className="form-card reveal">

            
              <h2 id="contact-h">Send us a message</h2>

            
              <form id="contact-form" noValidate={true}>

              
                <div className="form-grid">

                
                  <div className="field">

                  
                    <label htmlFor="name">
Name 
                      <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input id="name" name="name" type="text" required={true} autoComplete="name" />

                
                  </div>

                
                  <div className="field">

                  
                    <label htmlFor="email">
Email 
                      <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input id="email" name="email" type="email" required={true} autoComplete="email" />

                
                  </div>

                
                  <div className="field">

                  
                    <label htmlFor="phone">
Phone 
                      <span className="optional">(optional)</span>
                    </label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" />

                
                  </div>

                
                  <div className="field">

                  
                    <label htmlFor="subject">
Subject
                    
                      <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input id="subject" name="subject" type="text" required={true} />

                
                  </div>

                
                  <div className="field full">

                  
                    <label htmlFor="message">
Message
                    
                      <span className="req" aria-hidden="true">*</span>
                    </label>
                    <textarea id="message" name="message" rows={5} required={true} />

                
                  </div>

              
                </div>

              
                <div className="hp" aria-hidden="true">

                
                  <label>
Leave this empty
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </label>

              
                </div>

              
                <button className="btn btn-wine" type="submit">Send Message</button>

            
              </form>

          
            </div>

        
          </div>

      
        </section>

      
        <section className="section section--tint" id="find-us" aria-labelledby="map-h">

        
          <div className="container">

          
            <div className="section-head">

            
              <h2 id="map-h">Find us</h2>

            
              <p data-cfg="location">

              Majek, opposite Fara Park Estate, Epe-Ajah Expressway, Lagos
            
              </p>

          
            </div>

          
            <div className="map-box" data-render="map" />

          

        
          </div>

      
        </section>

    
      </main>

    
      <footer className="site-footer" id="site-footer" />

    

    

    

    

    

  


    </>
  );
}
