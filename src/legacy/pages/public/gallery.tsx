import type { ReactNode } from 'react';

export const metadata = {"title":"Gallery | Texcel Schools","description":"Photos of classrooms, students, events, sports, graduation and cultural activities at Texcel Schools."} as const;
export const pageProps = {"bodyClass":"","scripts":["/js/config.js","/js/content.js","/js/storage.js","/js/main.js","/js/gallery.js"]} as const;

export default function GalleryPage(): ReactNode {
  return (
    <>

    
      <a className="skip-link" href="#main">Skip to main content</a>

    
      <header className="site-header" id="site-header" />

    
      

    
      <main id="main">

      
        <section className="page-hero">

        
          <div className="container">

          
            <h1>Gallery</h1>

          
            <p>Photos from classrooms, events, sports and school life.</p>

        
          </div>

      
        </section>

      
        <section className="section">

        
          <div className="container">            <div data-render="gallery" /></div>

      
        </section>

    
      </main>

    
      <footer className="site-footer" id="site-footer" />

    

    

    

    

    

  


    </>
  );
}
