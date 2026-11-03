import type { ReactNode } from 'react';

export const metadata = {"title":"Admissions | Texcel Schools","description":"Apply to Texcel Schools: see the six-step admission process and submit an enquiry for Crèche, Nursery, Primary or Secondary."} as const;
export const pageProps = {"bodyClass":"","scripts":["/js/config.js","/js/content.js","/js/storage.js","/js/main.js","/js/admissions.js"]} as const;

export default function AdmissionsPage(): ReactNode {
  return (
    <>

    
      <a className="skip-link" href="#main">Skip to main content</a>

    
      <header className="site-header" id="site-header" />

    
      

    
      <main id="main">

      
        <section className="page-hero">

        
          <div className="container">

          
            <h1>Admissions</h1>

          
            <p>Begin your child's journey with us. Here is how it works.</p>

        
          </div>

      
        </section>

      
        <section className="section" aria-labelledby="steps-h">

        
          <div className="container">

          
            <div className="section-head">

            
              <h2 id="steps-h">Begin your child's journey with us</h2>

            
              <p>

              Six simple steps from first enquiry to the first day at school.
            
              </p>

          
            </div>

          
            <ol className="steps" data-render="admission-steps" />

          
            <p style={{"marginTop":"2rem"}}>

            
              <a className="btn btn-gold" href="#apply">Apply Now</a>

          
            </p>

        
          </div>

      
        </section>

      
        <section className="section section--tint" id="apply" aria-labelledby="apply-h">

        
          <div className="container form-layout">

          
            <div className="form-card">

            
              <h2 id="apply-h">Admission enquiry</h2>

            
              <p className="lead">

              Tell us about your child and we will get back to you.
            
              </p>

            
              <form id="admission-form" noValidate={true}>

              
                <div className="form-grid">

                
                  <div className="field">

                  
                    <label htmlFor="parent">
Parent/Guardian name
                    
                      <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input id="parent" name="parent" type="text" required={true} autoComplete="name" />

                
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
Phone number
                    
                      <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input id="phone" name="phone" type="tel" required={true} autoComplete="tel" />

                
                  </div>

                
                  <div className="field">

                  
                    <label htmlFor="child">
Child's name
                    
                      <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input id="child" name="child" type="text" required={true} />

                
                  </div>

                
                  <div className="field">

                  
                    <label htmlFor="childAge">
Child's age
                    
                      <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input id="childAge" name="childAge" type="number" required={true} min="0" max="25" inputMode="numeric" />

                
                  </div>

                
                  <div className="field">

                  
                    <label htmlFor="classApplying">
Class applying for
                    
                      <span className="req" aria-hidden="true">*</span>
                    </label>
                    <select id="classApplying" name="classApplying" required={true}>

                    
                      <option value="">Select a class</option>

                  
                    </select>

                
                  </div>

                
                  <div className="field full">

                  
                    <label htmlFor="contactMethod">
Preferred contact method
                    
                      <span className="req" aria-hidden="true">*</span>
                    </label>
                    <select id="contactMethod" name="contactMethod" required={true}>

                    
                      <option value="">Select an option</option>

                    
                      <option>Phone call</option>

                    
                      <option>WhatsApp</option>

                    
                      <option>Email</option>

                  
                    </select>

                
                  </div>

                
                  <div className="field full">

                  
                    <label htmlFor="message">
Message 
                      <span className="optional">(optional)</span>
                    </label>
                    <textarea id="message" name="message" rows={4} />

                
                  </div>

              
                </div>

              
                <div className="hp" aria-hidden="true">

                
                  <label>
Leave this empty
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </label>

              
                </div>

              
                <button className="btn btn-wine" type="submit">

                Submit Admission Enquiry
              
                </button>

            
              </form>

          
            </div>

          
            <aside className="side-card" aria-label="Other ways to reach us">

            
              <h3>Prefer to talk?</h3>

            
              <p>

              Message the school office on WhatsApp or visit us. We are happy to
              answer questions before you apply.
            
              </p>

            
              <div className="btn-row">

              
                <a className="btn btn-gold" data-wa="" target="_blank" rel="noopener" data-icon="whatsapp">WhatsApp us</a>
                <a className="btn btn-ghost-light" href="/contact">Contact and directions</a>

            
              </div>

            
              <p style={{"marginTop":"1.5rem"}}>

              
                <a href="/fees" style={{"color":"#fff","textDecoration":"underline"}}>View school fees</a>

            
              </p>

          
            </aside>

        
          </div>

      
        </section>

    
      </main>

    
      <footer className="site-footer" id="site-footer" />

    

    

    

    

    

  


    </>
  );
}
