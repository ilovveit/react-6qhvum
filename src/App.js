import React from 'react';
import './style.css';

export default function App() {
  return (
    <>
      <div className="intro">
      

        <h1>Hello user</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
      <div className="list-users">
        <div className="usrlstitem">
        <svg className="svgicon" width="16" height="16" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.00002C0 3.86741 0.0526785 3.74024 0.146447 3.64647C0.240215 3.5527 0.367392 3.50002 0.5 3.50002H6.293L4.146 1.35402C4.05211 1.26013 3.99937 1.1328 3.99937 1.00002C3.99937 0.867246 4.05211 0.739908 4.146 0.646021C4.23989 0.552135 4.36722 0.49939 4.5 0.49939C4.63278 0.49939 4.76011 0.552135 4.854 0.646021L7.854 3.64602C7.90056 3.69247 7.93751 3.74764 7.96271 3.80839C7.98792 3.86913 8.00089 3.93425 8.00089 4.00002C8.00089 4.06579 7.98792 4.13091 7.96271 4.19165C7.93751 4.2524 7.90056 4.30758 7.854 4.35402L4.854 7.35402C4.76011 7.44791 4.63278 7.50065 4.5 7.50065C4.36722 7.50065 4.23989 7.44791 4.146 7.35402C4.05211 7.26013 3.99937 7.1328 3.99937 7.00002C3.99937 6.86725 4.05211 6.73991 4.146 6.64602L6.293 4.50002H0.5C0.367392 4.50002 0.240215 4.44734 0.146447 4.35358C0.0526785 4.25981 0 4.13263 0 4.00002Z"/>
</svg>
          <img
            className="profPic"
            src="https://randomuser.me/api/portraits/men/62.jpg"
            alt="prof"
          />
          <h1>Albert Gallardo </h1>
          <p className="title" > Programmer </p>
          <div className="prof-contnt"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nulla ipsum. Proin vulputate sem eleifend sollicitudin tempus. </p></div>
        </div>


         <div className="usrlstitem">
        <svg className="svgicon" width="16" height="16" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.00002C0 3.86741 0.0526785 3.74024 0.146447 3.64647C0.240215 3.5527 0.367392 3.50002 0.5 3.50002H6.293L4.146 1.35402C4.05211 1.26013 3.99937 1.1328 3.99937 1.00002C3.99937 0.867246 4.05211 0.739908 4.146 0.646021C4.23989 0.552135 4.36722 0.49939 4.5 0.49939C4.63278 0.49939 4.76011 0.552135 4.854 0.646021L7.854 3.64602C7.90056 3.69247 7.93751 3.74764 7.96271 3.80839C7.98792 3.86913 8.00089 3.93425 8.00089 4.00002C8.00089 4.06579 7.98792 4.13091 7.96271 4.19165C7.93751 4.2524 7.90056 4.30758 7.854 4.35402L4.854 7.35402C4.76011 7.44791 4.63278 7.50065 4.5 7.50065C4.36722 7.50065 4.23989 7.44791 4.146 7.35402C4.05211 7.26013 3.99937 7.1328 3.99937 7.00002C3.99937 6.86725 4.05211 6.73991 4.146 6.64602L6.293 4.50002H0.5C0.367392 4.50002 0.240215 4.44734 0.146447 4.35358C0.0526785 4.25981 0 4.13263 0 4.00002Z"/>
</svg>
          <img
            className="profPic"
            src="https://randomuser.me/api/portraits/men/62.jpg"
            alt="prof"
          />
          <h1>Albert Gallardo </h1>
          <p className="title" > Programmer </p>
          <div className="prof-contnt"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nulla ipsum. Proin vulputate sem eleifend sollicitudin tempus. </p></div>
        </div>



         <div className="usrlstitem">
        <svg className="svgicon" width="16" height="16" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.00002C0 3.86741 0.0526785 3.74024 0.146447 3.64647C0.240215 3.5527 0.367392 3.50002 0.5 3.50002H6.293L4.146 1.35402C4.05211 1.26013 3.99937 1.1328 3.99937 1.00002C3.99937 0.867246 4.05211 0.739908 4.146 0.646021C4.23989 0.552135 4.36722 0.49939 4.5 0.49939C4.63278 0.49939 4.76011 0.552135 4.854 0.646021L7.854 3.64602C7.90056 3.69247 7.93751 3.74764 7.96271 3.80839C7.98792 3.86913 8.00089 3.93425 8.00089 4.00002C8.00089 4.06579 7.98792 4.13091 7.96271 4.19165C7.93751 4.2524 7.90056 4.30758 7.854 4.35402L4.854 7.35402C4.76011 7.44791 4.63278 7.50065 4.5 7.50065C4.36722 7.50065 4.23989 7.44791 4.146 7.35402C4.05211 7.26013 3.99937 7.1328 3.99937 7.00002C3.99937 6.86725 4.05211 6.73991 4.146 6.64602L6.293 4.50002H0.5C0.367392 4.50002 0.240215 4.44734 0.146447 4.35358C0.0526785 4.25981 0 4.13263 0 4.00002Z"/>
</svg>
          <img
            className="profPic"
            src="https://randomuser.me/api/portraits/men/62.jpg"
            alt="prof"
          />
          <h1>Albert Gallardo </h1>
          <p className="title" > Programmer </p>
          <div className="prof-contnt"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nulla ipsum. Proin vulputate sem eleifend sollicitudin tempus. </p></div>
        </div>


         <div className="usrlstitem">
        <svg className="svgicon" width="16" height="16" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.00002C0 3.86741 0.0526785 3.74024 0.146447 3.64647C0.240215 3.5527 0.367392 3.50002 0.5 3.50002H6.293L4.146 1.35402C4.05211 1.26013 3.99937 1.1328 3.99937 1.00002C3.99937 0.867246 4.05211 0.739908 4.146 0.646021C4.23989 0.552135 4.36722 0.49939 4.5 0.49939C4.63278 0.49939 4.76011 0.552135 4.854 0.646021L7.854 3.64602C7.90056 3.69247 7.93751 3.74764 7.96271 3.80839C7.98792 3.86913 8.00089 3.93425 8.00089 4.00002C8.00089 4.06579 7.98792 4.13091 7.96271 4.19165C7.93751 4.2524 7.90056 4.30758 7.854 4.35402L4.854 7.35402C4.76011 7.44791 4.63278 7.50065 4.5 7.50065C4.36722 7.50065 4.23989 7.44791 4.146 7.35402C4.05211 7.26013 3.99937 7.1328 3.99937 7.00002C3.99937 6.86725 4.05211 6.73991 4.146 6.64602L6.293 4.50002H0.5C0.367392 4.50002 0.240215 4.44734 0.146447 4.35358C0.0526785 4.25981 0 4.13263 0 4.00002Z"/>
</svg>
          <img
            className="profPic"
            src="https://randomuser.me/api/portraits/men/62.jpg"
            alt="prof"
          />
          <h1>Albert Gallardo </h1>
          <p className="title" > Programmer </p>
          <div className="prof-contnt"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nulla ipsum. Proin vulputate sem eleifend sollicitudin tempus. </p></div>
        </div>


         <div className="usrlstitem">
        <svg className="svgicon" width="16" height="16" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.00002C0 3.86741 0.0526785 3.74024 0.146447 3.64647C0.240215 3.5527 0.367392 3.50002 0.5 3.50002H6.293L4.146 1.35402C4.05211 1.26013 3.99937 1.1328 3.99937 1.00002C3.99937 0.867246 4.05211 0.739908 4.146 0.646021C4.23989 0.552135 4.36722 0.49939 4.5 0.49939C4.63278 0.49939 4.76011 0.552135 4.854 0.646021L7.854 3.64602C7.90056 3.69247 7.93751 3.74764 7.96271 3.80839C7.98792 3.86913 8.00089 3.93425 8.00089 4.00002C8.00089 4.06579 7.98792 4.13091 7.96271 4.19165C7.93751 4.2524 7.90056 4.30758 7.854 4.35402L4.854 7.35402C4.76011 7.44791 4.63278 7.50065 4.5 7.50065C4.36722 7.50065 4.23989 7.44791 4.146 7.35402C4.05211 7.26013 3.99937 7.1328 3.99937 7.00002C3.99937 6.86725 4.05211 6.73991 4.146 6.64602L6.293 4.50002H0.5C0.367392 4.50002 0.240215 4.44734 0.146447 4.35358C0.0526785 4.25981 0 4.13263 0 4.00002Z"/>
</svg>
          <img
            className="profPic"
            src="https://randomuser.me/api/portraits/men/62.jpg"
            alt="prof"
          />
          <h1>Albert Gallardo </h1>
          <p className="title" > Programmer </p>
          <div className="prof-contnt"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nulla ipsum. Proin vulputate sem eleifend sollicitudin tempus. </p></div>
        </div>


         <div className="usrlstitem">
        <svg className="svgicon" width="16" height="16" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.00002C0 3.86741 0.0526785 3.74024 0.146447 3.64647C0.240215 3.5527 0.367392 3.50002 0.5 3.50002H6.293L4.146 1.35402C4.05211 1.26013 3.99937 1.1328 3.99937 1.00002C3.99937 0.867246 4.05211 0.739908 4.146 0.646021C4.23989 0.552135 4.36722 0.49939 4.5 0.49939C4.63278 0.49939 4.76011 0.552135 4.854 0.646021L7.854 3.64602C7.90056 3.69247 7.93751 3.74764 7.96271 3.80839C7.98792 3.86913 8.00089 3.93425 8.00089 4.00002C8.00089 4.06579 7.98792 4.13091 7.96271 4.19165C7.93751 4.2524 7.90056 4.30758 7.854 4.35402L4.854 7.35402C4.76011 7.44791 4.63278 7.50065 4.5 7.50065C4.36722 7.50065 4.23989 7.44791 4.146 7.35402C4.05211 7.26013 3.99937 7.1328 3.99937 7.00002C3.99937 6.86725 4.05211 6.73991 4.146 6.64602L6.293 4.50002H0.5C0.367392 4.50002 0.240215 4.44734 0.146447 4.35358C0.0526785 4.25981 0 4.13263 0 4.00002Z"/>
</svg>
          <img
            className="profPic"
            src="https://randomuser.me/api/portraits/men/62.jpg"
            alt="prof"
          />
          <h1>Albert Gallardo </h1>
          <p className="title" > Programmer </p>
          <div className="prof-contnt"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nulla ipsum. Proin vulputate sem eleifend sollicitudin tempus. </p></div>
        </div>


         <div className="usrlstitem">
        <svg className="svgicon" width="16" height="16" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.00002C0 3.86741 0.0526785 3.74024 0.146447 3.64647C0.240215 3.5527 0.367392 3.50002 0.5 3.50002H6.293L4.146 1.35402C4.05211 1.26013 3.99937 1.1328 3.99937 1.00002C3.99937 0.867246 4.05211 0.739908 4.146 0.646021C4.23989 0.552135 4.36722 0.49939 4.5 0.49939C4.63278 0.49939 4.76011 0.552135 4.854 0.646021L7.854 3.64602C7.90056 3.69247 7.93751 3.74764 7.96271 3.80839C7.98792 3.86913 8.00089 3.93425 8.00089 4.00002C8.00089 4.06579 7.98792 4.13091 7.96271 4.19165C7.93751 4.2524 7.90056 4.30758 7.854 4.35402L4.854 7.35402C4.76011 7.44791 4.63278 7.50065 4.5 7.50065C4.36722 7.50065 4.23989 7.44791 4.146 7.35402C4.05211 7.26013 3.99937 7.1328 3.99937 7.00002C3.99937 6.86725 4.05211 6.73991 4.146 6.64602L6.293 4.50002H0.5C0.367392 4.50002 0.240215 4.44734 0.146447 4.35358C0.0526785 4.25981 0 4.13263 0 4.00002Z"/>
</svg>
          <img
            className="profPic"
            src="https://randomuser.me/api/portraits/men/62.jpg"
            alt="prof"
          />
          <h1>Albert Gallardo </h1>
          <p className="title" > Programmer </p>
          <div className="prof-contnt"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nulla ipsum. Proin vulputate sem eleifend sollicitudin tempus. </p></div>
        </div>


         <div className="usrlstitem">
        <svg className="svgicon" width="16" height="16" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.00002C0 3.86741 0.0526785 3.74024 0.146447 3.64647C0.240215 3.5527 0.367392 3.50002 0.5 3.50002H6.293L4.146 1.35402C4.05211 1.26013 3.99937 1.1328 3.99937 1.00002C3.99937 0.867246 4.05211 0.739908 4.146 0.646021C4.23989 0.552135 4.36722 0.49939 4.5 0.49939C4.63278 0.49939 4.76011 0.552135 4.854 0.646021L7.854 3.64602C7.90056 3.69247 7.93751 3.74764 7.96271 3.80839C7.98792 3.86913 8.00089 3.93425 8.00089 4.00002C8.00089 4.06579 7.98792 4.13091 7.96271 4.19165C7.93751 4.2524 7.90056 4.30758 7.854 4.35402L4.854 7.35402C4.76011 7.44791 4.63278 7.50065 4.5 7.50065C4.36722 7.50065 4.23989 7.44791 4.146 7.35402C4.05211 7.26013 3.99937 7.1328 3.99937 7.00002C3.99937 6.86725 4.05211 6.73991 4.146 6.64602L6.293 4.50002H0.5C0.367392 4.50002 0.240215 4.44734 0.146447 4.35358C0.0526785 4.25981 0 4.13263 0 4.00002Z"/>
</svg>
          <img
            className="profPic"
            src="https://randomuser.me/api/portraits/men/62.jpg"
            alt="prof"
          />
          <h1>Albert Gallardo </h1>
          <p className="title" > Programmer </p>
          <div className="prof-contnt"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nulla ipsum. Proin vulputate sem eleifend sollicitudin tempus. </p></div>
        </div>


         <div className="usrlstitem">
        <svg className="svgicon" width="16" height="16" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.00002C0 3.86741 0.0526785 3.74024 0.146447 3.64647C0.240215 3.5527 0.367392 3.50002 0.5 3.50002H6.293L4.146 1.35402C4.05211 1.26013 3.99937 1.1328 3.99937 1.00002C3.99937 0.867246 4.05211 0.739908 4.146 0.646021C4.23989 0.552135 4.36722 0.49939 4.5 0.49939C4.63278 0.49939 4.76011 0.552135 4.854 0.646021L7.854 3.64602C7.90056 3.69247 7.93751 3.74764 7.96271 3.80839C7.98792 3.86913 8.00089 3.93425 8.00089 4.00002C8.00089 4.06579 7.98792 4.13091 7.96271 4.19165C7.93751 4.2524 7.90056 4.30758 7.854 4.35402L4.854 7.35402C4.76011 7.44791 4.63278 7.50065 4.5 7.50065C4.36722 7.50065 4.23989 7.44791 4.146 7.35402C4.05211 7.26013 3.99937 7.1328 3.99937 7.00002C3.99937 6.86725 4.05211 6.73991 4.146 6.64602L6.293 4.50002H0.5C0.367392 4.50002 0.240215 4.44734 0.146447 4.35358C0.0526785 4.25981 0 4.13263 0 4.00002Z"/>
</svg>
          <img
            className="profPic"
            src="https://randomuser.me/api/portraits/men/62.jpg"
            alt="prof"
          />
          <h1>Albert Gallardo </h1>
          <p className="title" > Programmer </p>
          <div className="prof-contnt"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nulla ipsum. Proin vulputate sem eleifend sollicitudin tempus. </p></div>
        </div>

         <div className="usrlstitem">
        <svg className="svgicon" width="16" height="16" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.00002C0 3.86741 0.0526785 3.74024 0.146447 3.64647C0.240215 3.5527 0.367392 3.50002 0.5 3.50002H6.293L4.146 1.35402C4.05211 1.26013 3.99937 1.1328 3.99937 1.00002C3.99937 0.867246 4.05211 0.739908 4.146 0.646021C4.23989 0.552135 4.36722 0.49939 4.5 0.49939C4.63278 0.49939 4.76011 0.552135 4.854 0.646021L7.854 3.64602C7.90056 3.69247 7.93751 3.74764 7.96271 3.80839C7.98792 3.86913 8.00089 3.93425 8.00089 4.00002C8.00089 4.06579 7.98792 4.13091 7.96271 4.19165C7.93751 4.2524 7.90056 4.30758 7.854 4.35402L4.854 7.35402C4.76011 7.44791 4.63278 7.50065 4.5 7.50065C4.36722 7.50065 4.23989 7.44791 4.146 7.35402C4.05211 7.26013 3.99937 7.1328 3.99937 7.00002C3.99937 6.86725 4.05211 6.73991 4.146 6.64602L6.293 4.50002H0.5C0.367392 4.50002 0.240215 4.44734 0.146447 4.35358C0.0526785 4.25981 0 4.13263 0 4.00002Z"/>
</svg>
          <img
            className="profPic"
            src="https://randomuser.me/api/portraits/men/62.jpg"
            alt="prof"
          />
          <h1>Albert Gallardo </h1>
          <p className="title" > Programmer </p>
          <div className="prof-contnt"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nulla ipsum. Proin vulputate sem eleifend sollicitudin tempus. </p></div>
        </div>
      </div>
    </>
  );
}
