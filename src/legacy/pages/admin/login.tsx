import type { ReactNode } from 'react';

export const metadata = {"title":"Admin | Texcel Schools","description":""} as const;
export const pageProps = {"bodyClass":"","adminPage":"login","scripts":["/js/config.js","/js/content.js","/js/storage.js","/js/admin.js"]} as const;

export default function AdminLoginPage(): ReactNode {
  return (
    <>

    
      <div className="login-page">

      
        <aside className="login-aside" aria-hidden="true">

        
          <h1 data-cfg="name">School</h1>

        
          <p data-cfg="tagline">Tagline</p>

      
        </aside>

      
        <main className="login-main" id="main">

        
          <div className="login-card">

          
            <div className="brand">

            
              <img data-logo="" src="/assets/images/facilities/logo.jpg" alt="" width={52} height={52} />
              <strong data-cfg="name">School</strong>

          
            </div>

          
            <h1 style={{"fontSize":"1.7rem","margin":"0 0 0.3rem"}}>Admin login</h1>

          
            <p style={{"margin":"0 0 1.2rem","color":"var(--muted)"}}>

            Sign in to manage the website and school activities.
          
            </p>

          
            <p className="login-error" id="login-error" role="alert" hidden={true} />

          
            <form id="login-form" noValidate={true}>

            
              <div className="field">

              
                <label htmlFor="username">Email or username</label>
                <input id="username" name="username" type="text" required={true} autoComplete="username" />

            
              </div>

            
              <div className="field">

              
                <label htmlFor="password">Password</label>

              
                <div className="pw-wrap">

                
                  <input id="password" name="password" type="password" required={true} autoComplete="current-password" />
                  <button className="btn btn-ghost" type="button" id="toggle-pw" aria-pressed="false">

                  Show
                
                  </button>

              
                </div>

            
              </div>

            
              <div className="login-row">

              
                <label className="check">
                  <input type="checkbox" id="remember" />
 Remember me
                </label>
                <button type="button" className="link-btn" id="forgot">

                Forgot password?
              
                </button>

            
              </div>

            
              <button className="btn btn-wine" type="submit" style={{"width":"100%"}}>

              Login
            
              </button>

          
            </form>

          

          
            <p style={{"margin":"1.2rem 0 0","textAlign":"center"}}>

            
              <a className="link" href="/">Back to website</a>

          
            </p>

        
          </div>

      
        </main>

    
      </div>

    
      

    

    

    

    

  


    </>
  );
}
