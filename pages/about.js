import NavigationPages from "../components/navigation-pages";
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
  function handleAnalytics() {
    var _paq = (window._paq = window._paq || []);
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);
    (function () {
      var u = "https://buriedsignals.matomo.cloud/";
      _paq.push(["setTrackerUrl", u + "matomo.php"]);
      _paq.push(["setSiteId", "1"]);
      var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.async = true;
      g.src = "//cdn.matomo.cloud/buriedsignals.matomo.cloud/matomo.js";
      s.parentNode.insertBefore(g, s);
    })();
  }

  return (
    <div className="global-wrapper">
      <NavigationPages />
      <Head>
        <title>About | Buried Signals</title>
        <meta title="About | Buried Signals" />
        <meta description="Experiments in visual journalism. Curating and crafting explorable explanations, web documentaries and interfaces." />
        <meta image src="../static/img/meta.png" />
        {handleAnalytics}
      </Head>
      <HeaderPages title="This publication curates creative experiments in visual storytelling." />
      <div className="pages-wrapper">
        <div className="pages-text-container">
          <h1 className="typography-paragraph-header">The Publication</h1>
          <p className="typography-paragraph">
            Buried Signals is a platform to spotlight extraordinary visual or
            interactive essays which communicate complex stories or data
            efficiently, sometimes in combination with open-source investigative
            techniques.
          </p>
          <p className="typography-paragraph">
            The publication is built atop 
            <a href="https://idyll-lang.org/docs/getting-started">Idyll</a> (an
            open-source toolkit for writing interactive articles) and run by{" "}
            <a href="https://tomvaillant.com" target="_blank" rel="noreferrer">
              Tom Vaillant
            </a>
            . All of our code is visible on Github, if you&apos;re interested in
            contributing don&apos;t hesitate to reach out! Any work we&apos;ve
            published can be challenged on Discord.
          </p>
          <h1 className="typography-paragraph-header">Manifesto</h1>
          <p className="typography-paragraph">
            To abstain from false claims of objectivity we try to keep our
            identities small and apply the tenets of Jim Lehrer’s journalism
            principles. We&apos;re applying the following principles:
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
        </div>
      </div>
      <NewsletterBox />
      <Footer />
    </div>
  );
};

export default About;
