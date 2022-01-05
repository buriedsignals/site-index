import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import Clients from "../components/clients";
import HeaderPages from "../components/header-pages";
import articles from "../articles.json";
import NewsletterBox from "../components/newsletter-box";
import Spacer from "../components/spacer/spacer";

const bulletPoints = [
  "Communicate in a clear and concise manner",
  "Seek to understand the opposing viewpoint and give readers access to both perspectives",
  "Fight stereotypes, fear-mongering and bipartisan polarisation",
  "Controversy for it’s own sake is entertainment",
  "Collaborate with experts, identify uncertainty when it exists",
  "Propose solutions to the problem",
  "Sources are verified and always accessible",
  "Privacy matters, analytics and cookies on this site are non-invasive",
];

const About = () => {

  return (
    <div className="global-wrapper">
      <Navbar theme="dark" />
      <Head>
        <title>About | Buried Signals</title>
        <meta title="About | Buried Signals" />
        <meta description="Experiments in visual journalism. Curating and crafting explorable explanations, web documentaries and interfaces." />
        <meta image src="../static/img/meta.png" />
      </Head>
      <HeaderPages title="This publication curates creative experiments in visual storytelling." />
      <div className="pages-wrapper">
        <div className="pages-text-container">
          <h1 className="typography-paragraph-header">The Publication</h1>
          <p className="typography-paragraph">
            Buried Signals is a platform to spotlight extraordinary visual or
            interactive essays which communicate complex stories or data
            efficiently. Occasionally we&apos;ll feature noteworthy OSINT research.
          </p>
          <p className="typography-paragraph">
            The publication is built atop 
            <a href="https://idyll-lang.org/docs/getting-started">Idyll</a> (an
            open-source toolkit for writing interactive articles) and run by{" "}
            <a href="https://tomvaillant.com" target="_blank" rel="noreferrer">
              Tom Vaillant
            </a>
            . All of the code is visible on Github, if you&apos;re interested in
            contributing don&apos;t hesitate to reach out! Any work we
            publish can be challenged on our Discord server.
          </p>
          <h1 className="typography-paragraph-header">Manifesto</h1>
          <p className="typography-paragraph">
            To abstain from false claims of objectivity I will try to keep my&nbsp;   
            <a href="http://www.paulgraham.com/identity.html" target="_blank" rel="noreferrer">identity small</a> and apply the following journalism principles on any work we publish ourselves. Tenets 2 and 6 will need to be excluded from essays we curate.
          </p>
          <Spacer multiplier={2} />
          <ol>
            {bulletPoints.map((point, index) => (
              <div key={index}>
                <li>{point}</li>
                <Spacer multiplier={4} />
              </div>
            ))}
          </ol>
          <div className="button-container">
            <img src="https://www.protruthpledge.org/hotlink-ok/ptpBacked.gif"></img>
            <p className="typography-pledge">We signed the <a href="http://ProTruthPledge.org">Pro-Truth Pledge</a> please hold us accountable.</p>
          </div>
        </div>
      </div>
      <NewsletterBox />
      <Footer />
    </div>
  );
};

export default About;
