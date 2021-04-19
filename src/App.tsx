import { mdiDownload, mdiEmail, mdiPhone } from "@mdi/js";
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
              className="px-5 w-full h-full"
              alt="Profile"
            ></img>
          </div>
          <div className="w-8/12 sm:w-full xs:w-full h-full inline-block">
            <div className="flex flex-col h-full">
              <h1 className="text-4xl">
                I'm <span className="font-bold">Dimosthenis Kalaitzis</span>
              </h1>
              <h2 className="text-xl">
                Senior Software Engineer & Systems Designer
              </h2>
              <h3 className="text-md">
                Currently working for{" "}
                <a href="https://sourcestrike.com">SourceStrike</a>
              </h3>
              <hr className="border-black my-5"></hr>
              <blockquote className="text-justify  flex-grow">
                Experienced Web/Software Developer with a demonstrated history
                of working in the computer software industry. Skilled in the
                Javascript stack on both frontend and backend, with great
                knowledge of Typescript and a plethora of frameworks for fast
                and efficient web development. Team player with leading
                abilities.
              </blockquote>
              <div className="flex mt-auto">
                <div className="w-1/4">
                  <Button
                    url="mailto:dimostheniskalaitzis@gmail.com"
                    icon={mdiEmail}
                    label="Email"
                  ></Button>
                </div>
                <div className="w-1/4 pl-3">
                  <Button
                    url="tel:+306984599882"
                    icon={mdiPhone}
                    label="Phone"
                  ></Button>
                </div>
                <div className="w-1/2 pl-3">
                  <Button
                    url="https://docs.google.com/document/d/1MbJkDGDY1mUWCq2YkYeQO2sBjmn9jls2IQNCasvXg1w/edit"
                    icon={mdiDownload}
                    label="Download CV"
                  ></Button>
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
