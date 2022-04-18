import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl">
          1.Difference between authorization and authentication?
        </h2>
        <p>
          Authentication: -Checks the persons identity to grant access to the
          system. -Its verifying user's Credentials(user name and password). -It
          is performed at very first step. Ex: online banking login.
          Authorization: -Checks Persons privileges or permission to access the
          resources. -Its Validating user Permission(user can access after
          permission). -It is useally performed after authentication.
          Ex:College/multiuser data base.
        </p>
      </div>
      <div>
        <h2 className="text-4xl">
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p>
          With development environment like Goole firebase this is can speed up
          the backend development and focus on apps frontend development. There
          are main 3 services I like:
          <li>
            i)Apps development: firebase ML/Firebase Auth/Cloud storage/Realtime
            Database.
          </li>
          <li>
            ii)Quality Improvement: Firebase crashlytics/Performance Monitoring
            Tools/Firebase test lab
          </li>
          <li>
            iii) Instrument for Business group : Firebase in-app
            messaging/Firebase A/B Testing{" "}
          </li>
          <h2>There are to many authentication types we can use:</h2>
          <li>-Thought cards</li>
          <li>Retina scan</li>
          <li>Voice Recognition</li>
          <li>Biometric</li>
          <li>Phone number etc.</li>
        </p>
      </div>
      <div>
        <h2 className="text-4xl">
          3. What other services does firebase provide other than
          authentication?
        </h2>
        <p>
          <h4>Firebase provide lot of services:</h4>
          <li>It provide Realtime database</li>
          <li>It provide Cloud storage</li>
          <li>It provide Test lab </li>
          <li>It provide Performance Monitoring Tools</li>
          <li>It provide in-app messaging for business.</li>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
