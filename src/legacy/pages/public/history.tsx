import type { ReactNode } from 'react';

export const metadata = {"title":"Our History | Texcel Schools","description":"Discover how Texcel Schools began in 2011 and the founding purpose that continues to guide the school."} as const;
export const pageProps = {"bodyClass":"","scripts":["/js/config.js","/js/content.js","/js/storage.js","/js/main.js"]} as const;

export default function HistoryPage(): ReactNode {
  return (
    <>

    
      <a className="skip-link" href="#main">Skip to main content</a>

    
      <header className="site-header" id="site-header" />

    
      

    
      <main id="main">

      
        <section className="page-hero">

        
          <div className="container">

          
            <h1>Our history</h1>

          
            <p>A story rooted in faith, education and a belief in every child.</p>

        
          </div>

      
        </section>

      
        <section className="section" aria-labelledby="beginning-h">

        
          <div className="container">

          
            <div className="section-head">

            
              <h2 id="beginning-h">A beginning with a purpose</h2>

          
            </div>

          
            <p className="lead">

            Texcel Schools was founded in 2011 by Mrs Olufadeji Foluso
          
            </p>

          
            <p>

            The school began with one building ................
          
            </p>

        
          </div>

      
        </section>

      
        <section className="section section--tint" aria-labelledby="purpose-h">

        
          <div className="container">

          
            <div className="section-head">

            
              <h2 id="purpose-h">The purpose that guides us</h2>

          
            </div>

          
            <p>

            From the beginning, 
          
            </p>

          
            <p>

            Today, the school provides a learning path through Crèche, Preschool,
            Primary and College education. Our founding vision remains at the
            heart of that journey:
          
            </p>
            <div className="btn-row">

            
              <a className="btn btn-wine" href="/about">Back to About Us</a>

            
              <a className="btn btn-outline" href="/schools">Explore Our Schools</a>

          
            </div>

        
          </div>

      
        </section>

    
      </main>

    
      <footer className="site-footer" id="site-footer" />

    

    

    

    

  


    </>
  );
}
