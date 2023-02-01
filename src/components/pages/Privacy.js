import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "./home-comp/Footer";
import { Header } from "./home-comp/Header";
import { Track } from "./home-comp/Track";

export const Privacy = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="section">
          <div className="box">
            <div className="mb-8">
              <p className="border-l-4 border-green-600 lg:text-3xl lg:fw-600 lg:pl-7 lg:py-3">
                Privacy Policy
              </p>
            </div>
            <div className="mt-4">
              <p>
                At 5M global services one of our main priorities is the privacy
                of our visitors/ customers .This Privacy Policy document
                contains types of information that is collected and recorded by
                5M global services and how we use it.
              </p>
              <p className="mt-1">
                If you have additional questions or require more information
                about our Privacy Policy, do not hesitate to{" "}
                <Link to="/contact" className="text-primary">
                  contact us
                </Link>
                .
              </p>
              <p className="mt-1">
                This Privacy Policy applies to our online activities and is
                valid for visitors / customers and our website users with
                regards to the information shared and/or collected in 5M global
                services. where you can book and prepare shipments, track your
                shipment and make payments for shipments. Use by unregistered
                persons is strictly prohibited. As a registered user of the
                site, you are solely responsible for ensuring the
                confidentiality of your password and account and activities on
                your account.
              </p>
              <p className="mt-1">
                For security reasons, we recommend changing your password
                regularly by visiting "My Account" section on the site after you
                have logged in. You agree to notify us immediately if you
                suspect any unauthorized use of your account or any other
                security breach. You must immediately inform us of known
                security issues, such as compromise of your password, or
                unauthorized use of your account. Until we are notified in
                writing of any security breach, there is little we can do for
                any unauthorized use of your account.
              </p>
              <p className="mt-1">
                We reserve the right to review all accounts at any time to
                ensure compliance, or to ensure completion of shipping
                documentation on your behalf. You agree that at all times; you
                will provide us with complete and accurate information. You
                agree that we may suspend and terminate your account and your
                use of our website and service if you provide us with any
                inaccurate/misleading information.
              </p>
            </div>
            <div className="mt-4">
              <p className="fs-700 fw-600">User Submission</p>
              <p>
                For comments, feedback, postcards, suggestions, ideas etc
                submitted or offered to us on or through this Site, by e-mail or
                telephone.
              </p>
            </div>
            <div className="mt-4">
              <p className="fs-700 fw-600">Consent</p>
              <p>
                By using our website, you hereby consent to our Privacy Policy
                and agree to its terms. The personal information that you are
                asked to provide, and the reasons why you are asked to provide
                it, will be made clear to you at the point we ask you to provide
                your personal information.
              </p>
              <p className="mt-1">
                If you contact us directly, we may receive additional
                information about you such as your name, email address, phone
                number, the contents of the message and/or attachments you may
                send us, and any other information you may choose to provide.
              </p>
              <p>
                When you register for an Account, we may ask for your contact
                information, including items such as name, company name,
                address, email address, and telephone number.
              </p>
            </div>
            <div className="mt-4">
              <p className="fs-700 fw-600">How we use your information</p>
              <p>
                We use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc pl-6">
                <li className="mt-2">
                  Provide, operate, and maintain our website.
                </li>
                <li className="mt-2">
                  Improve, personalize, and expand our website.
                </li>
                <li className="mt-2">
                  Understand and analyze how you use our website.
                </li>
                <li className="mt-2">
                  Develop new products, services, features, and functionality.
                </li>
                <li className="mt-2">
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the website, and for
                  marketing and promotional purposes.
                </li>
                <li className="mt-2">Send you emails.</li>
                <li className="mt-2">Find and prevent fraud.</li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="fs-700 fw-600">
                Data we share with other 5M Partners
              </p>
              <p>
                To facilitate the booking of shipments or other interactions
                between Shipper and Carrier users, we need to share necessary
                information with other users, as it is necessary for the
                adequate performance of the contract between you and us, as
                follows:
              </p>
              <ul className="list-disc pl-6">
                <li className="mt-2">
                  When you want to send carriers requests for transport.
                </li>
                <li className="mt-2">
                  When you want to accept potential load requests.
                </li>
                <p className="mt-3 fw-500">
                  Information is also shared for the following reasons.
                </p>
                <li className="mt-2">
                  With contracted third parties such as consultants, vendors and
                  service providers who require access to such information to
                  carry out work on our behalf.
                </li>
              </ul>
              <p className="mt-2">
                5M may disclose your information, including personal
                information, to courts, law enforcement or governmental
                authorities, or authorized third parties, if and to the extent
                we are required or permitted to do so by law or if such
                disclosure is reasonably necessary. comply with our legal
                obligations.
              </p>
              <ul className="list-disc pl-6">
                <li className="mt-2">
                  {" "}
                  to comply with legal process and to respond to claims asserted
                  against 5M global services.
                </li>
                <li className="mt-2">
                  to respond to verified requests relating to a criminal
                  investigation or alleged or suspected illegal activity or any
                  other activity that may expose us, you, or any other of our
                  users to legal liability,
                </li>
                <li className="mt-2">
                  to enforce and administer our Term of Service.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="fs-700 fw-600">Unauthorized use of your account</p>
              <p>
                We reserve the right to review all accounts at any time to
                ensure compliance, or to ensure completion of shipping
                documentation on your behalf. You agree that at all times; you
                will provide us with complete and accurate information. You
                agree that we may suspend and terminate your account and your
                use of our website and service if you provide us with any
                inaccurate/misleading information.
              </p>
            </div>
            <div className="mt-4">
              <p className="fs-700 fw-600">Site Security</p>
              <p>
                Users must not at any time compromise the site security.
                Violation may in addition to civil remedies, result in criminal
                prosecution. Violation of security of this site include hacking,
                modifying or corrupting security or authentication measures,
                accessing data or information not intended for your use,
                malicious spreading of virus, worms transmission, time bombs,
                denial of service attack, etc that could damage, impair or
                interfere with our computer's functionality or the operation of
                this site. Other forms of violation include the
                misrepresentation of your identity, deceptive online marketing,
                defamation and abuse of the legal rights of others etc. You will
                be held responsible for any information you transmit on this
                site. By transmitting information to this site, you agree that
                the information you send to this site is true, accurate and not
                misleading and that you have the right to send such information.
              </p>
              <p className="mt-2">
                We may disclose your information if necessary to protect our
                legal rights, if the information relates to actual or threatened
                harmful conduct, or we believe that such action is necessary to
                conform to the requirements of the law or comply with
                governmental orders, court orders, or to protect and defend the
                property or rights of other users of this website or the public.
                This includes exchanging information with other companies and
                organizations for fraud protection and prevention, credit risk
                protection, and other prohibited or illegal activities. Except
                as stated above, we do not disclose shipper's personal
                information to third parties without consent
              </p>
            </div>
            <div className="mt-4">
              <p className="fs-700 fw-600">Insurance</p>
              <p>
                Insurance cover is determined on the stated value of items(s) in
                your warehouse. Items may have been delivered into your
                warehouse without your invoices attached. In that regard,
                estimated values will be stated against them. This will be
                displayed in your warehouse. You agree to verify and upload your
                invoice if any value is incorrectly stated to enable us to
                update accordingly.
              </p>
              <p className="mt-2">
                Otherwise you undertake to lose your right to any claim for the
                invoice value if you do not upload your invoice as you will only
                be compensated based on the stated value. If you declare a
                higher value for carriage and pay the additional charge, our
                maximum liability will be the lesser of your declared value for
                carriage or your actual damage. Please ensure you read the terms
                of insurance, as we do not provide all-risk insurance.
              </p>
              <p className="mt-2">
                The highest declared value we allow for our letters and
                documents, packages, and any envelope is US$50 per shipment or
                US$9.07 per pound (US$20/kilogram) (or the equivalent in local
                currency), whichever is lower.
              </p>
              <p className="mt-2">
                For other shipments, in particular shipments of very high value,
                including but not limited to jewelry, artwork, antiques,
                precious metals, clocks, inherently fragile or unique items, the
                declared value for carriage is limited to US$50.
              </p>
            </div>
            <div className="mt-4">
              <p className="fs-700 fw-600">Notices</p>
              <p>
                Notices shall be served on the address stipulated on the
                waybill.
              </p>
            </div>
            <div className="mt-4">
              <p className="fs-700 fw-600">General Terms</p>
              <ul className="list-disc pl-6 lg:w-7/12">
                <li className="mt-2">
                  These terms constitute the sole record of the agreement
                  between the parties. The Carrier shall not be bound by any
                  express or implied term, representation, warranty, promise or
                  the like not recorded herein.
                </li>
                <li className="mt-2">
                  No relaxation or indulgence which the Carrier may grant to the
                  Shipper shall constitute a waiver of the rights of the Carrier
                  regardless of when it arose.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="fs-700 fw-600">Customs Duties and Taxes</p>
              <ul className="list-disc pl-6 lg:w-7/12">
                <li className="mt-2">
                  Please note that customs duties and taxes may apply on your
                  items in the destination country.
                </li>
                <li className="mt-2">
                  5M global services have no control over these charges as these
                  tariffs are determined by the customs of the destination
                  country.
                </li>
                <li className="mt-2">
                  5M global services shall not be responsible for any delays
                  arising from customs border control.
                </li>
                <li className="mt-2">
                  {" "}
                  Shipper and receiver are responsible for providing all
                  documentation needed for customs clearance.
                </li>
              </ul>
              <p className="mt-2">
                In the event the shipper or receiver fails to provide this, the
                shipper will be charged for the return of the shipment to the
                origin.
              </p>
            </div>
          </div>
        </div>
        <Footer />
        <Track />
      </div>
    </div>
  );
};
