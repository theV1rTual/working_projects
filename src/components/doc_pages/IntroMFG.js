import React from "react";
import "./Docs.css"
import { ReactComponent as Intro2 } from '../pics/mfg.svg';
export default function IntroMFG() {
  return (
    <div className="main-block">
      <h2 className="heading"> Introduction to MFG</h2>
      <p>Manufacturing (MFG) and Engineering (ENG) is our second highest priority - and to that
end, we've devoted our resources to this section. Our manufacturing is focused on making it
easy-to-use and intuitive for production floor personnel. Ease-of-use and quick access to
production information were paramount in our design. All complexities and details are, by-
and-large, automated and hidden from the users. For production control personnel, we
provide a Dashboard to see all open Work Orders (WOs), including WIP status, shortages
for each WO, and ECO / EDNs for appropriate actions to be taken. As a new WO is opened
by the PC, the system automatically reviews all open WOs and schedules the first priority in
the first Work Center (WC). When that WO moves to the next WC, the system reviews all the
WOs in that WC, and again reschedules for that WC automatically. This process repeats
through all WCs until the product reaches Finished Goods Inventory (FGI). To ensure on-
time completion of the WO, the module also employs color-coding as a visual reference to
ensure all jobs stay on schedule.The production module is based on each Work Center
(WC), where personnel can view all WOs in the WC based on production priority. Each WO
is pre-assigned to a machine or labor, with time allocation for setup and run times. Prior to
releasing for production within the WC, personnel must review the Checklist and Electronic
Work Instructions (EWI), including prior quality information, to ensure that they build the
product correctly. They also have the ability to view what WOs are coming for pre-planning
purposes. As new jobs arrive in the WC, CUBE compares all other WOs and automatically
schedules and places jobs in the correct queue order.</p>
<p>Quality is continually monitored and analytical information is always available in real-time. If
the quality level reaches below the acceptable range, it automatically sends a notification to
both the quality engineer and WC supervisor to take appropriate action. This method
ensures the highest level of first-pass yield. By use of CAPA, they'll be able to take actions to
prevent future issues. If the problem is caused by the process, then CUBE's Project
Management is used in collaboration with the people involved to update the process for
continuous improvement.</p>
 <Intro2 />
      </div>
  );
}