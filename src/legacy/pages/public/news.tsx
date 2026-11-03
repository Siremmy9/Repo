import type { ReactNode } from 'react';

export const metadata = {"title":"News and Events | Texcel Schools","description":"School news, announcements, events and updates from Texcel Schools, Lagos."} as const;
export const pageProps = {"bodyClass":"","scripts":["/js/config.js","/js/content.js","/js/storage.js","/js/main.js"]} as const;

export default function NewsPage(): ReactNode {
  return (
    <>

    
      <a className="skip-link" href="#main">Skip to main content</a>

    
      <header className="site-header" id="site-header" />

    
      

    
      <main id="main">

      
        <section className="page-hero">

        
          <div className="container">

          
            <h1>News and events</h1>

          
            <p>Announcements and updates for parents and pupils.</p>

        
          </div>

      
        </section>

      
        <section className="section">

        
          <div className="container">

          
            <div className="news-grid" data-render="news" />

        
          </div>

      
        </section>

    
      </main>

    
      <footer className="site-footer" id="site-footer" />

    

    

    

    

  


    </>
  );
}
