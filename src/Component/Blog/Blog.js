import React from 'react';

const Blog = () => {
    return (
        <div className='container pt-4'>
            <div className="accordion accordion-flush border" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        1. what is cors?
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate 
                      any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script)
                      loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others. CORS is implemented primarily in web browsers,
                      but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari. The standard has been accepted as a W3C Recommendation in 
                      January 2014. Based on that, we can assume that it is implemented in all currently available and other than listed web browsers.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        2. Why are you using firebase? What other options do you have to implement authentication?
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. Here's why you should use it! Google Firebase offers 
                        many features that pitch it as the go-to backend development tool for web and mobile apps.<br /><br /> Usually, authentication by a server entails the use of a user name and password. Other ways to 
                        authenticate can be through cards, retina scans, voice recognition, and fingerprints.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        3. How does the private route work?
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will 
                        be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        4. What is Node? How does Node work?
                    </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Learn about Node.js, a JavaScript runtime for building server-side or desktop applications.<br /><br /> It is a used as backend service where javascript works on the 
                        server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, 
                        lightweight, fast, and data-intensive.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;