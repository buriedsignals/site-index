import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import HeaderPages from "../components/header-pages";
// import articles from "../articles.json";
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
        <title>Buried Signals</title>
        <meta charset="utf-8" />
        <meta name="description" content="A publication curating visual, interactive and investigative stories." key="meta_description" />
        <meta name="image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" key="meta_image" />
        <meta itemProp="name" content="Buried Signals" />
        <meta itemProp="description" content="A publication curating visual, interactive and investigative stories.." />
        <meta itemProp="image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
        <meta name="twitter:card" content="summary_large_image" key="twitter_card" />
        <meta name="twitter:title" content="Buried Signals" key="twitter_title" />
        <meta name="twitter:description" content="A publication curating visual, immersive and interactive journalism." key="twitter_description" />
        <meta name="twitter:site" content="@buriedsignals" key="twitter_site" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" key="twitter_image" />
        <meta name="title" property="og:title" content="Buried Signals" key="title" />
        <meta name="description" property="og:description" content="A publication curating visual, interactive and investigative stories."  key="description" />
        <meta name="image" property="og:image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" key="image"></meta>
        <meta name="url" property="og:url" content="https://buriedsignals.com" key="url" />
        <meta name="site_name" property="og:site_name" content="Buried Signals" key="site_name" />
        <meta name="type" property="og:type" content="website" key="type" />
      </Head>
      <HeaderPages title="This publication curates creative experiments in journalism." />
      <div className="pages-wrapper">
        <div className="pages-text-container">
          <h2 className="typography-paragraph-header">The Publication</h2>
          <p className="typography-paragraph">
            Buried Signals is a platform to spotlight extraordinary visual essays which communicate complex stories or data
            efficiently. Occasionally we&apos;ll publish insights from research and investigations.
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
          <h2 className="typography-paragraph-header">Manifesto</h2>
          <p className="typography-paragraph">
            To abstain from false claims of objectivity we try to keep our   
            <a href="http://www.paulgraham.com/identity.html" target="_blank" rel="noreferrer">identities small</a> and apply the following principles on any work we publish. Tenets 2 and 6 will need to be excluded from curated stories.
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
            <img src="https://www.protruthpledge.org/hotlink-ok/ptpBacked.gif" className="logo-sizer"></img>
            <p className="typography-pledge">We signed the <a href="http://ProTruthPledge.org">Pro-Truth Pledge</a> please hold us accountable.</p>
            <img src="../static/img/1percent.png" className="logo-sizer"></img>
          </div>
        </div>
      </div>
      <NewsletterBox />
      <Footer />
    </div>
  );
};

export default About;
