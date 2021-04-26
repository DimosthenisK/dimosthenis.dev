import { mdiDownload, mdiEmail, mdiPen, mdiPhone } from "@mdi/js";
import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import { Button, ButtonGroup, Card } from "./components";
import { BaseLayout as Layout } from "./layouts";

function App() {
  const name = "Dimosthenis Kalaitzis";
  const workTitle = "Senior Software Engineer & Systems Designer";
  const description =
    "Experienced Web/Software Developer with a demonstrated history of working in the computer software industry. Skilled in the Javascript stack on both frontend and backend, with great knowledge of Typescript and a plethora of frameworks for fast and efficient web development. Team player with leading abilities.";

  const currentWork = {
    url: "https://sourcestrike.com",
    label: "SourceStrike",
  };

  const contact = {
    phone: "+306984599882",
    mail: "dimostheniskalaitzis@gmail.com",
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>
          {name} - {workTitle}
        </title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#b45309" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>"
        ></link>
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
                I'm <span className="font-bold">{name}</span>
              </h1>
              <h2 className="text-xl xs:text-base">{workTitle}</h2>
              <h3 className="text-md xs:text-sm">
                Currently working for{" "}
                <a href={currentWork.url}>{currentWork.label}</a>
              </h3>
              <hr className="border-black my-5 sm:my-2 xs:my-2"></hr>
              <blockquote className="text-justify  flex-grow">
                {description}
              </blockquote>
              <div className="flex mt-2 xs:flex-col sm:flex-col">
                <ButtonGroup label="Contact Me">
                  <div className="w-1/2 xs:w-full sm:w-full xs:pr-1 xs:my-1 sm:pr-1 sm:my-1">
                    <Button
                      url={`mailto:${contact.mail}`}
                      icon={mdiEmail}
                      label="Email"
                    ></Button>
                  </div>
                  <div className="w-1/2 pl-3 xs:w-full xs:pl-1 xs:my-1 sm:w-full sm:pl-1 sm:my-1">
                    <Button
                      url={`tel:${contact.phone}`}
                      icon={mdiPhone}
                      label="Phone"
                    ></Button>
                  </div>
                </ButtonGroup>

                <ButtonGroup label="View More">
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
                </ButtonGroup>
              </div>
            </div>
          </div>
        </Card>
      </Layout>
    </React.Fragment>
  );
}

export default App;
