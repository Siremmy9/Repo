import type { ReactNode } from 'react';

export const metadata = {"title":"Academics | Texcel Schools","description":"Curriculum, subjects, ICT, sports, creative arts, leadership and moral education at Texcel Schools, Lagos."} as const;
export const pageProps = {"bodyClass":"","scripts":["/js/config.js","/js/content.js","/js/storage.js","/js/main.js"]} as const;

export default function AcademicsPage(): ReactNode {
  return (
    <>


      <a className="skip-link" href="#main">Skip to main content</a>


      <header className="site-header" id="site-header" />


      


      <main id="main">


        <section className="page-hero">
          <div className="container">
            <h1>Academics</h1>
            <p>A balanced education: strong core subjects, ICT, sport, creative arts and character.</p>
          </div>
        </section>


        <section className="section" aria-labelledby="approach-h">

  
          <div className="container">
            <div className="section-head">
              <h2 id="approach-h">Our approach to learning</h2>
              <p>Curriculum, co-curricular activities, ICT education, sports, creative arts, leadership development and moral education.</p>
            </div>

  
            <div className="approach-grid" data-render="academics-approach" />
          </div>


        </section>


        <section className="section section--tint" aria-labelledby="subjects-h">

  
          <div className="container">
            <div className="section-head">
              <h2 id="subjects-h">Subjects and programmes</h2>
              <p>The school administrator can update this list at any time.</p>
            </div>

  
            <ul className="subject-grid" data-render="academics-subjects" />
          </div>


        </section>


        <section className="cta-band" aria-labelledby="cta-h">
          <div className="container">


            <h2 id="cta-h">See learning in action</h2>
            <p>Visit the school and sit in on a class.</p>


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
