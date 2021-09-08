import React from "react";
import "./Docs.css";
import mtc from '../pics/mtc.png';
export default function MaterialTrackingControl() {
  return (
    <div className="main-block">
      <h2 className="heading">CUBE Material Tracking & Control (MTC)</h2>  
      <br/> 
      <p>
        In the EMS industry, detailed tracking and traceability is a crucial element in producing
mission critical products for medical, military, aerospace, and other similar industries. For
EMS companies working in those fields, manex has incorporated Material Tracking &
Control (MTC) into the foundation of CUBE to fulfill ISO compliance requirements for our
customers. EMS companies have full visibility of all MTC parts while maintaining all historical
information of each part.
      </p>
      <p>
      CUBE's MTC contains 3 sections to give the manufacturer total traceability:
      </p>
      <ol>
           <li>  <span className="bold">Component Tracking</span> – Each package of parts that is inspected and received is
assigned an MTC tag with all component detail info
<ul className="disc">
<br />
           <li>MTC captures following information:
               <ul className="square">
                   <li>Part Info: record the part number and revision, description, and the manufacturer and manufacturer part number </li>
                   <li>Supplier Info: in addition to the Purchase Order (PO) number, record carrier information with the tracking number, quantity, and type of packaging used to ship parts </li>
                   <li>Additional Info: optional and provisional info, such as a part’s serial number, date code, lot code, and compliance information (RoHS, ITAR, REACH, EAR, Sarbanes-Oxley, Conflict Mineral, etc.) </li>
                   </ul> </li>
           <li>Component is tracked until used in Semiconductor, PCA, C&H, or System</li>
           <li>Components with the MTC tag are consumed directly in each WC until the product is
completed and put into Finished Goods Inventory (FGI)</li>
           <li>Tag moisture-sensitive parts with MSL Level and Time Duration </li>
           <li>All MSL parts are tracked and timed from the time they are exposed to the environment
to ensure that the part enters the reflow oven prior to time expiration </li>
            <li>If an MSL part has passed its expiration, CUBE notifies the user that the part has been
exposed to the environment longer than the allotted time</li>
            </ul>
            </li>
           <li> <span className="bold">Product Tracking</span> - Know in which product each part is used 
           <ul className="disc">
               < br/>
                   <li>Products that are assigned a serial number can be tracked as they move through the shop floor. 
                       MTC-tagged components are added within the make part assembly or system </li>
                   <li>When a product is moved into FGI, an MTC code is created and assigned to the product for traceability. </li>
                   <li>MTC code/Serial Number can be used for quality analysis if customer has any issues with the product.  </li>
                   <li>MTC codes and Serial Numbers can be included with the assembly information in the Packing List (PL) </li>
                   </ul> </li>
           <li> <span className="bold">Shop Floor Tracking</span> - Real-time tracking of parts and products as they move through each Work Center (WC)
           <ul className="disc">
               < br/>
                   <li>MTC components reserved to the Work Order (WO) kit can be issued directly to a product.  </li>
                   <li>MTC trackable components are placed onto the machine and can be scanned and consumed in real-time as they are used in each Work Center (WC)  </li>
                   <li>Shortages are identified in real time and production can easily determine exact quantity required to complete the order   </li>
                   <li>Logs the amount of time spent in each WO WC as setup time and runtime to get it as close as possible to the real Job Costing.  </li>
                   <li>MTC components with defects can be logged and traced before being processed to final assembly </li>
                   </ul> </li>
            </ol>
            <p>
            MTC tracking applies to all assembly and testing of: 
      </p> 
      <ul className="disc">
                   <li>Semiconductor  </li>
                   <li>PCBA Assembly </li>
                   <li>Cable & Harness Assembly  </li>
                   <li>System Assembly  </li>
                   </ul>
      <p> 
      A PCBA assembly is used as an example to visually show the MTC process: 
      </p> 
      <div >
      <img src= {mtc} alt= "Material Tracking and Control" width="80%"/>
    
      </div>
      <p> 
      A PCBA assembly is used as an example to visually show the MTC process: 
      </p> 
      <ol>
                   <li> <span className="bold">Inventory Receiving</span> – PO, all shipping information, date received, who received part(s), who inspected part(s), etc.  </li>
                   <li> <span className="bold">Inventory Warehouse</span> - Know exact location of part in warehouse(s)  </li>
                   <li> <span className="bold">WO Dynamic Scheduling & Tracking (DPST)</span> - Scan Serial Number for tracking from work center to work center. When a Serial Number is removed, the system automatically backflushes the MTC parts and is reconciled. </li>
                   <li> <span className="bold">Finished Goods Inventory (FGI)</span> - Assembly MTC code or serial number contains all component MTC and part information  </li>
                   <li> <span className="bold">Shipment with Packing List </span>- All MTC information is available in the PL </li>
                   </ol>
      <p>
        The MTC feature in CUBE enables EMS companies to have real-time and accurate 
        inventory control while maintaining total visibility of the Shop Floor.
         In result of these benefits, EMS companies are also able to use 
         CUBE’s total traceability to view a part’s history for recall or to notify a supplier. 
        Companies who work with mission critical products can meet ISO compliances by virtue of using the MTC feature within CUBE. 
      </p>
      
      </div>
  );
}