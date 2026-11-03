import type { ReactNode } from 'react';

export const metadata = {"title":"Primary School | Texcel Schools","description":"Learn about the Primary School at Texcel Schools, view its location and contact the school on WhatsApp."} as const;
export const pageProps = {"bodyClass":"","school":"primary","scripts":["/js/config.js","/js/content.js","/js/storage.js","/js/main.js"]} as const;

export default function PrimarySchoolPage(): ReactNode {
  return (
    <>

    
      <a className="skip-link" href="#main">Skip to main content</a>

    
      <header className="site-header" id="site-header" />

    
      <main id="main">

      
        <section className="page-hero">

        
          <div className="container">

          
            <h1>Primary School</h1>

          
            <p>Discover our Primary School, its learning experience and location.</p>

        
          </div>

      
        </section>

      
        <section className="section" data-render="school-detail" data-school="primary" />

    
      </main>

    
      <footer className="site-footer" id="site-footer" />

    

    

    

    

  


    </>
  );
}
