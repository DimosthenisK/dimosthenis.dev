import { mdiDownload, mdiEmail, mdiPen, mdiPhone } from "@mdi/js";
import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import { Button, Card } from "./components";
import { BaseLayout as Layout } from "./layouts";

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Dimosthenis Kalaitzis - Senior Software Engineer & Systems Designer
        </title>
        <meta
          name="description"
          content="Experienced Web/Software Developer with a demonstrated history
                of working in the computer software industry. Skilled in the
                Javascript stack on both frontend and backend, with great
                knowledge of Typescript and a plethora of frameworks for fast
                and efficient web development. Team player with leading
                abilities."
        />
      </Helmet>
      <Layout>
        <Card>
          <div className="w-4/12 sm:w-full xs:w-full h-full inline-block">
            <img
              src="/me.png"
              className="px-5 xs:px-0 w-full h-full sm:h-3/4"
              alt="Profile"
            ></img>
          </div>
          <div className="w-8/12 sm:w-full xs:w-full h-full inline-block">
            <div className="flex flex-col h-full">
              <h1 className="text-4xl xs:text-2xl">
                I'm <span className="font-bold">Dimosthenis Kalaitzis</span>
              </h1>
              <h2 className="text-xl xs:text-base">
                Senior Software Engineer & Systems Designer
              </h2>
              <h3 className="text-md xs:text-sm">
                Currently working for{" "}
                <a href="https://sourcestrike.com">SourceStrike</a>
              </h3>
              <hr className="border-black my-5 sm:my-2 xs:my-2"></hr>
              <blockquote className="text-justify  flex-grow">
                Experienced Web/Software Developer with a demonstrated history
                of working in the computer software industry. Skilled in the
                Javascript stack on both frontend and backend, with great
                knowledge of Typescript and a plethora of frameworks for fast
                and efficient web development. Team player with leading
                abilities.
              </blockquote>
              <div className="flex mt-2 xs:flex-col sm:flex-col">
                <div className="w-1/2 xs:w-full xs:mb-2 sm:w-full sm:mb-2 border border-yellow-700 border-solid rounded-xl p-3 mr-1">
                  <h3 className="font-semibold rounded-2xl border border-solid border-yellow-700 inline px-2 bg-yellow-700 text-white">
                    Contact Me
                  </h3>
                  <div className="flex flex-row mt-2">
                    <div className="w-1/2 xs:w-full sm:w-full xs:pr-1 xs:my-1 sm:pr-1 sm:my-1">
                      <Button
                        url="mailto:dimostheniskalaitzis@gmail.com"
                        icon={mdiEmail}
                        label="Email"
                      ></Button>
                    </div>
                    <div className="w-1/2 pl-3 xs:w-full xs:pl-1 xs:my-1 sm:w-full sm:pl-1 sm:my-1">
                      <Button
                        url="tel:+306984599882"
                        icon={mdiPhone}
                        label="Phone"
                      ></Button>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 xs:w-full sm:w-full border border-yellow-700 border-solid rounded-xl p-3 ml-1 xs:ml-0 sm:ml-0">
                  <h3 className="font-semibold rounded-2xl border border-solid border-yellow-700 inline px-2 bg-yellow-700 text-white">
                    View More
                  </h3>
                  <div className="flex flex-row mt-2">
                    <div className="w-1/2 xs:w-full xs:pr-1 xs:my-1 sm:w-full sm:pl-1 sm:my-1">
                      <Button
                        url="https://blog.dimosthenis.dev"
                        icon={mdiPen}
                        label="Blog"
                      ></Button>
                    </div>
                    <div className="w-1/2 pl-3 xs:w-full xs:pl-1 xs:my-1 sm:w-full sm:pr-1 sm:my-1">
                      <Button
                        url="https://docs.google.com/document/d/1MbJkDGDY1mUWCq2YkYeQO2sBjmn9jls2IQNCasvXg1w/edit"
                        icon={mdiDownload}
                        label="My CV"
                      ></Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Layout>
    </React.Fragment>
  );
}

export default App;
