import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="t1">
      <Helmet>
        <title>About Us </title>
        <meta name="description" content="Read about our company" />
        <meta name="keywords" content="ERP,EMS industry,MES,EQS" />
      </Helmet>
      <span className="title">About Us</span>
      <p>
        <br />
        Solid as a rock. Since 1992 we've weathered the ups and downs of the ERP
        and MES industry. <span className="bold">manex</span> remains true and
        continues to flourish because we have maintained our singular focus on
        the EMS industry.
      </p>
      <p>
        At <span className="bold">manex</span>, our litmus test is determined by
        the ability to adapt to the changing business environment of the EMS
        industry, from their customers to compliances and government regulations
        – Does manex provide a relevant ERP and MES system that can cater to our
        customers’ needs and stand the test of time?
      </p>
      <p>
        <span className="bold">manex's sole focus is the EMS industry.</span>{" "}
        Our integrated ERP, MES, and EQS system is not for a general company
        crossing multiple industries. Our background is from the EMS industry,
        and our advantage comes from applying our industry knowledge and
        specialties to the ins and out of the complex EMS business.
      </p>
      <p>
        We understand that the EMS company needs a system that’s user friendly
        while maintaining complex details for the system to perform tasks.
        That’s why <span className="bold">CUBE</span> was designed from the
        ground up using EMS terminology. We help to prevent errors and assist in
        making decisions by offering AI-based suggestions. Our ERP and MES will
        help knowledgeable workers navigate the complex world of electronic
        contract manufacturing in new and powerful ways.{" "}
        <span className="bold">
          manex has an intuitive design that makes sense.
        </span>
      </p>
      <p>
        With thousands of daily users in our system, we have big plans at manex,
        centered around continued improvement of our software and new and better
        ways to support our customers. Our goal is to stay relevant by providing
        the best possible ERP, MES, and EQS manufacturing software system for
        the EMS industry.
      </p>
    </div>
  );
}
