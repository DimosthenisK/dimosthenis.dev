import {
  mdiEmail,
  mdiFileDocumentOutline,
  mdiGithub,
  mdiLinkedin,
  mdiOpenInNew,
  mdiPhone,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import "./App.css";
import { StackRail } from "./StackRail";

const name = "Dimosthenis Kalaitzis";
const workTitle = "Senior Software Engineer & Systems Designer";
const blurb =
  "I build product systems end-to-end on the JavaScript stack - TypeScript, web, and the glue that ships. Need help on a project? Work with me through Anode Software.";
const description =
  "Senior software engineer focused on TypeScript systems across frontend and backend. Hire me for client work through Anode Software.";

const currentWork = {
  url: "https://finio.com/",
  label: "Finio Inc.",
};

const company = {
  url: "https://anodesoftware.com/",
  label: "Anode Software",
};

const contact = {
  phone: "+306946909170",
  mail: "dimostheniskalaitzis@gmail.com",
};

const actions = [
  {
    label: "Email",
    href: `mailto:${contact.mail}`,
    icon: mdiEmail,
    primary: true,
  },
  {
    label: "CV",
    href: "https://docs.google.com/document/d/1MbJkDGDY1mUWCq2YkYeQO2sBjmn9jls2IQNCasvXg1w/edit",
    icon: mdiFileDocumentOutline,
    primary: true,
  },
  {
    label: "Anode Software",
    href: company.url,
    icon: mdiOpenInNew,
    primary: false,
  },
  {
    label: "Call",
    href: `tel:${contact.phone}`,
    icon: mdiPhone,
    primary: false,
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dimostheniskalaitzis/",
    icon: mdiLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/dimosthenisk",
    icon: mdiGithub,
  },
];

function track(label: string) {
  ReactGA.event({ category: "Outbound", action: "Click", label });
}

function App() {
  return (
    <>
      <Helmet>
        <title>
          {name} - {workTitle}
        </title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#12161a" />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%2312161a'/%3E%3Ctext x='50%25' y='54%25' text-anchor='middle' font-size='34' font-family='Georgia, serif' fill='%235f8f8a'%3ED%3C/text%3E%3C/svg%3E"
        />
      </Helmet>

      <main className="site">
        <section className="hero" aria-label="Introduction">
          <div className="hero__copy">
            <p className="hero__eyebrow rise rise--1">dimosthenis.dev</p>
            <h1 className="hero__name rise rise--2">{name}</h1>
            <p className="hero__title rise rise--3">{workTitle}</p>
            <p className="hero__blurb rise rise--4">{blurb}</p>
            <p className="hero__now rise rise--5">
              Currently at{" "}
              <a
                href={currentWork.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => track("Finio")}
              >
                {currentWork.label}
              </a>
              . Client projects via{" "}
              <a
                href={company.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => track("Anode Software")}
              >
                {company.label}
              </a>
              .
            </p>

            <div className="hero__actions rise rise--6">
              {actions.map((action) => {
                const newTab = action.href.startsWith("http");
                return (
                  <a
                    key={action.label}
                    className={
                      action.primary ? "btn btn--primary" : "btn btn--ghost"
                    }
                    href={action.href}
                    {...(newTab
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    onClick={() => track(action.label)}
                  >
                    <Icon
                      path={action.icon}
                      size={action.primary ? 0.9 : 0.85}
                      aria-hidden
                    />
                    <span>{action.label}</span>
                  </a>
                );
              })}
            </div>

            <ul className="hero__social rise rise--7">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => track(social.label)}
                    aria-label={social.label}
                  >
                    <Icon path={social.icon} size={1} aria-hidden />
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__media">
            <img
              className="hero__photo"
              src="/me.jpg"
              alt={`${name} at Rhine Falls`}
              width={1440}
              height={1939}
            />
          </div>
          <div className="hero__gap" aria-hidden="true" />
          <StackRail />
        </section>
      </main>
    </>
  );
}

export default App;
