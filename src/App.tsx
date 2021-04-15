import React from "react";
import "./App.css";
import { Card } from "./components";
import { BaseLayout as Layout } from "./layouts";

function App() {
  return (
    <Layout>
      <Card>
        <div className="w-4/12 h-full inline-block">
          <img src="/me.png" className="px-5 w-full h-full"></img>
        </div>
        <div className="w-8/12 h-full inline-block">
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
              Experienced Web/Software Developer with a demonstrated history of
              working in the computer software industry. Skilled in the
              Javascript stack on both frontend and backend, with great
              knowledge of Typescript and a plethora of frameworks for fast and
              efficient web development. Team player with leading abilities.
            </blockquote>
            <div className="flex mt-auto">
              <div className="w-1/4">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded block w-full">
                  Button
                </button>
              </div>
              <div className="w-1/4 pl-3">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded block w-full">
                  Button
                </button>
              </div>
              <div className="w-1/2 pl-3">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded block w-full">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}

export default App;
