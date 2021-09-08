import React from "react";
import "./Docs.css"
import { ReactComponent as Intro1 } from '../pics/scm.svg';
export default function IntroSCM() {
  return (
    <div className="main-block">
      <h2 className="heading"> Introduction to SCM</h2>
      <p>Supply Chain Management (SCM) is about 70% of the total manufacturing cost. Therefore,
the greatest effort is spent to make this section as automated and efficient as possible. Every
percent saved in high-cost labor, material cost, and warehouse space significantly impacts
the profitability of the EMS business.</p>
<p>Below is a summary diagram of the SCM section's flow and process. There are several
software modules or apps related to material management, and they will contain detailed
information about each of these highlighted features, in addition to others in order to make
the SCM work properly. They are all interlinked and operate as one.</p>
 <Intro1 />
      </div>
  );
}