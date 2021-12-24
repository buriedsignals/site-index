import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import Head from "next/head";

const Privacy = () => {
  return (
    <div className="global-wrapper">
      <Navbar />
      <Head>
        <meta />
      </Head>
      <div className="pages-wrapper">
        <h1>Privacy Policy</h1>
        <p>We believe in openness, privacy and 100% data ownership. We use Matomo to anonymize and aggregate data collected through cookies.</p>
        <p>This Policy describes the information we collect from you, how we use that information and our legal basis for doing so. It also covers whether and how that information may be shared and your rights and choices regarding the information you provide to us. This Privacy Policy applies to the information that we obtain through your use of buriedsignals.com
        </p>
        <h3>What We Collect and Receive</h3>
        <p>
        In order for us to improve, we need to collect and process certain anonymous information. Depending on your use of the Services, that may include:
        </p>
        <p>Usage data — when you visit our site, we will store: the website from which you visited us from, the parts of our site you visit, the date and duration of your visit, your anonymised IP address, information from the device (device type, operating system, screen resolution, language, country you are located in, and web browser type) you used during your visit, and more. We process this usage data in Matomo Analytics for statistical purposes, to improve our site and to recognize and stop any misuse.
        </p>
        <p>
        Cookies — we use anonymized cookies (small data files transferred onto computers or devices by sites) for record-keeping purposes and to enhance functionality on our site. You may deactivate or restrict the transmission of cookies by changing the settings of your web browser. Cookies that are already stored may be deleted at any time.
        </p>
        <h3>our Rights</h3>
        <p>
        You have the right to be informed of Personal Data processed by Matomo, a right to rectification/correction, erasure and restriction of processing. You also have the right to ask from us a structured, common and machine-readable format of Personal Data you provided to us. We can only identify you via your email address and we can only adhere to your request and provide information if we have Personal Data about you through you having made contact with us directly and/or you using our site and/or service. We cannot provide, rectify or delete any data that we store on behalf of our users or customers. To exercise any of the rights mentioned in this Privacy Policy and/or in the event of questions or comments relating to the use of Personal Data you may contact Matomos support team: privacy@matomo.org In addition, you have the right to lodge a complaint with the data protection authority in your jurisdiction.
        </p>
        <h3>Privacy Policy Changes</h3>
        <p>        
        We may update this Policy from time to time. If we do, well let you know about any material changes, either by notifying you on the website or by sending you an email.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
