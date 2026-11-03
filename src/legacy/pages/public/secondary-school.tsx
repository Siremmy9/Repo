import type { ReactNode } from 'react';

export const metadata = {"title":"Secondary School | Texcel Schools","description":"Learn about the Secondary School at Texcel Schools, view its location and contact the school on WhatsApp."} as const;
export const pageProps = {"bodyClass":"","school":"secondary","scripts":["/js/config.js","/js/content.js","/js/storage.js","/js/main.js"]} as const;

export default function SecondarySchoolPage(): ReactNode {
  return (
    <>

    
      <a className="skip-link" href="#main">Skip to main content</a>

    
      <header className="site-header" id="site-header" />

    
      <main id="main">

      
        <section className="page-hero">

        
          <div className="container">

          
            <h1>Secondary School</h1>

          
            <p>Discover our Secondary School, its learning experience and location.</p>

        
          </div>

      
        </section>

      
        <section className="section" data-render="school-detail" data-school="secondary" />

    
      </main>

    
      <footer className="site-footer" id="site-footer" />

    

    

    

    

  


    </>
  );
}
