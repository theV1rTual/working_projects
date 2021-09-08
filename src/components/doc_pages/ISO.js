import React from "react";
import "./Docs.css";
import partNumber from '../pics/partNumber.png';
import { ReactComponent as CubeMRP } from '../pics/Frame3.svg';
import { ReactComponent as Inventory} from '../pics/inventory.svg';
import { ReactComponent as JustInTime} from '../pics/justInTime.svg';
import { ReactComponent as Ems} from '../pics/ems.svg';
import { ReactComponent as G32} from '../pics/G32.svg';
import { ReactComponent as G33} from '../pics/G33.svg';
import { ReactComponent as G34} from '../pics/G34.svg';
import G23 from '../pics/G233.png';
import G2 from '../pics/G23.png';
import G25 from '../pics/G25.png';
import G24 from '../pics/G24.png';
import G235 from '../pics/G235.png';
import G6 from '../pics/G6.png';
import G5 from '../pics/G5.png';
import G27 from '../pics/G27.png';
import G35 from '../pics/G35.png';
import img14 from '../pics/img14.png';
import Rohs from '../pics/rohs.png';
import Reach from '../pics/reach-EU.png';
import CM from '../pics/CM.png';
import EAR from '../pics/EAR15.jpeg';
import Sox from '../pics/sox.png';
import itar from '../pics/itar.png';
import pm from '../pics/pm.png';
import img from '../pics/img.png';
import img1 from '../pics/img1.png';
import img2 from '../pics/img2.png';
import img3 from '../pics/img3.png';
import img4 from '../pics/img4.png';
import img5 from '../pics/img5.png';
import img6 from '../pics/img6.png';
import img7 from '../pics/img7.png';
import img8 from '../pics/img8.png';
import img9 from '../pics/img9.png';
import img10 from '../pics/img10.png';
import img11 from '../pics/img11.png';
import img12 from '../pics/img12.png';
import imgMenu from '../pics/img_menu.png';
import menu1 from '../pics/menu1.png';
import menu2 from '../pics/menu2.png';
import menu3 from '../pics/menu3.png';
import menu4 from '../pics/menu4.png';
import menu5 from '../pics/menu5.png';
import imgMenu1 from '../pics/img_menu1.png';
import { ReactComponent as ScmMfg } from '../pics/Frame9.svg';
import { ReactComponent as  UserElements} from '../pics/Frame8.svg';
import img13 from '../pics/img13.png';
import img15 from '../pics/img15.png';
import img16 from '../pics/img16.png';
import img17 from '../pics/img17.png';
import img18 from '../pics/img18.png';
import img19 from '../pics/img19.png';
import img20 from '../pics/img20.png';
import img21 from '../pics/img21.png';
import img22 from '../pics/img22.png';
import img23 from '../pics/img23.png';
import img24 from '../pics/img24.png';
import img25 from '../pics/img25.png';
import img26 from '../pics/img26.png';
export default function LeanManufacturing() {
  return (
    <div className="main-block">
      <h2 className="heading">ISO Certification</h2>
      <h3 className="sub-heading-1">Section 1   Introduction</h3>
      <p>
      This document gives a brief orientation of three Quality Management System(QMS) Standards as they apply 
      to the Electronics Manufacturing Service (EMS) Industry within the CUBE system.
      </p>
      <p>
      CUBE is an Enterprise Resource Planning (ERP) and Manufacturing ExecutionSystem (MES) designed 
      for the EMS industry. CUBE customers are outsourced Electronics Contract Manufacturers (ECM), 
      herein called Electronics Manufacturing Service (EMS). ​EMS companies ​are in the business of manufacturing 
      electronic products for their Original Equipment Manufacturer (OEM) customers. OEMs provide product specification 
      and manufacturing guidance to EMS companies.
      </p>
      <p>
      EMS is one of the most specialized industries in the world, providing a wide range of electronics manufacturing services. 
      They produce and test the electronics that are developed and designed by their customers (OEMs). An EMS company is 
      generally responsible for purchasing the required materials to produce the electronic product. OEMs may provide 
      all or part of the kit(consigned) for assembly and testing.
      </p>
      <p>
      Most EMS companies use an ERP system for material planning, material acquisition, inventory control, and work order kits. 
      The current ERP system leader is SAP and is mostly used by larger companies. There are also companies like IFS, EPICOR, 
      and more than fifty other reputable ERP software companies to help manage material and business operations for various 
      industries.
      </p>
      <p>
      Since the EMS industry is a niche specialty in manufacturing, there are less than ten companies offering integrated ERP 
      and MES systems to serve the needs of EMS companies. Although more specialized, these systems still require bolt-on 
      customizations that require continuous maintenance to adjust for evolving requirements. CUBE is the only system 
      catered specifically for the EMS industry and offers a production-focused MES system integrated with the ERP.
      </p>
      <p>
      CUBE can be viewed as an external software development team for EMS companies, continually fulfilling ever-changing 
      business requirements in manufacturing compliances, methods, and ISO SOP needs.
      </p>
      <p> 
           <span className="bold"> Quality Management - EMS vs. OEM </span> 
      </p> 
      <p>
      In the Electronics Manufacturing ​Quality Management System (QMS),​ the scope of operations for an EMS versus an OEM 
      is different based on their organization and responsibilities.
      </p>
      <div>
      <img src= {partNumber} alt= "Part Number System" />
      </div>
      <p>
      OEMs do the ​research and development (​R&D) and engineering of the electronic product while forecasting sales. 
      Products can be any electronic device, such as ​heart ​monitor machines, satellites or radar, automotive electronics, ​
      personal computers, etc​. In short, OEM designs the product and EMS assembles/manufactures the product for OEMs.
      </p>
      <p>
      EMS companies primarily deal with electronics components, cables, and mechanical assembly. 
      They assemble printed circuit assemblies (PCA), cable & harness assemblies, box builds, and/or finished systems 
      under contracts with OEMS. If an OEM needs to produce an electronic product, they need an EMS company to fulfill 
      their product manufacturing requirements. EMS companies do not design or sell their own product. The designing(engineering) 
      and selling of the product is the responsibility of the OEM.
      </p>
      <p>
      After an OEM has designed and forecasted for a new product, the information is passed to their Supply Chain Management (SCM) 
      department.The SCM department then releases an order to the EMS (CUBE user) to manufacture the product. EMS then manufactures 
      and returns the finished product to the SCM department of the OEM according to the order schedule. This is the business of 
      EMS companies - to manufacture electronics products for the OEM. They are an outsourced manufacturing arm of OEMs.
      </p>
      <h3 className="sub-heading-1">Section 2   CUBE ERP</h3>
      <p>An ERP system has three main sections for manufacturing: 
      </p>
      <ol>
           <li>SGA - sales and accounting</li>
           <li>SCM (Supply Chain Management) - material planning, procurement,inventory control, warehousing, 
               WO kitting/shortage control, and material flow.</li>
           <li>CRM (Customer Relationship Management) - manage the sales processfor orders, pricing and quoting, 
               and company/contacts management</li>
            </ol>
            <p>
            This section will explore SCM and its role in the EMS industry. More than 70% of manufacturing material (parts cost), 
            related labor (acquisition,inventory handling, and management), and warehousing operations costs plus inventory carrying 
            costs are related to this area.
      </p> 
      <p>
      Goal: Operational efficiency and cost savings
      </p>
      <p> 
           <span className="bold"> Supply Chain Management for the EMS Industry (SCM) </span> 
    </p>
      <p>
      EMS companies face unique challenges in their SCM. It involves managing the processes from material planning to procurement, 
      parts receiving,inventory control, and use of the components through WO Kitting (by ≥1WOs), along with shortage management 
      for up to hundreds of customers.This presents a monumental daily challenge.
      </p>
      <p>
      An EMS business model differs from OEMs in that their EMS customers mandate a different material AML and specifications. 
      The three main challenges EMS face for parts aggregation are:
      </p>
      <ol>
           <li>Sorting by each Customer Part Number</li>
           <li>Sorting by Approved Manufacturer List (AML) for each BOM assembly</li>
           <li>Sorting by packaging type for each Manufacturer Part Number (MPN)</li>
            </ol>
      <p>
      1. Sorting by Customer Part Number   
      </p>
      <p>
      EMS’ customers use different part numbers for the same parts, as required for building assemblies and products. A single customer can require
    hundreds of parts for one assembly. The same customer may also demand several different PCA configurations. An EMS will likely have multiple customers, 
    each with their own part numbers and manufacturing specification. This makes it virtually impossible to merge the total 
    parts requirement. An EMS’s planning, purchasing, receipts, and inventory become extraordinary tasks for management </p>
      <p>
        CUBE’s MRP drives Lean Manufacturing practices to ensure that purchases are made to reduce overall costs, 
        reduce manual labor, and reduce handling of components in each order. 
      </p> 
      <p>
      If an EMS has only one customer, the manufacturing process is simple andany SCM system can be used. 
      CUBE has no special advantage in this situation. However, as more customers and demands are added, the increasingly 
      complex situations are handled with ease through CUBE’s SCM.This is where CUBE is designed to flourish.
      </p>
      <p>
      2. Sorting by AML for each BOM assembly </p>
      <p>       
      EMS companies also face the challenge of part aggregation while following multiple AMLs.
      EMS is required to purchase parts only on the AML for their customers.
      </p>
      <p>
      One part can be used by several different customers, each using a different part number for the same part. 
      With each customer using a different part number, an EMS company has no way of knowing that they’re ordering the 
      same part separately for each customer. So how does an EMS company resolve the aggregation of parts while sorting 
      by AML? </p>
      <p>
      3. Sorting by packaging type for each MPN </p>
      <p>       
      Part manufacturers themselves have different part numbers for the same parts, depending on packaging type.
       One manufacturer can have 4 or more different part numbers for the same part due to carrier packaging.
      </p>
      <p>
      This adds the third layer to the challenge of purchasing parts.
      </p>
      <p>
      Over 100 million different commercially accessible electronic part numbers exist worldwide by various component manufacturers. 
      New parts are updated, obsoleted, and discontinued daily. 
      Maintaining this information and sourcing alone is a continuous challenge.
      </p>
      <p>   
               {/*  We are here  */}
      The current process of purchasing requires immense amounts of manual labor. Each customer has different requirements, 
      which leads to the same parts often being purchased hundreds of different times. The cost of labor and increased 
      pricing for ordering the same part multiple times in small quantities causes higher pricing to customers and 
      reduced gross margin.These parts, if aggregated correctly, can be identified at the purchasingstage, 
      allowing the EMS company to purchase these parts by bulk.</p>
       <br />
      <p>      
      <span className="bold"> SCM Solution Pt. 1: Relational Parts Database System (RPDBS) </span>
      </p>
      <p>
      With over 40 years of experience in the EMS industry, manex has createdthe Relational Parts Database System (RPDBS) 
      through componentengineering to provide a solution for the unique challenges EMS face withSCM.
      </p>
      <p>
      An entire part number database template through component engineering 
      toprovide a solution for the unique challenges EMS face with SCM.
      </p>
      <p>
      Along with CUBE’s design, the parts database offers EMS a starting point toconsolidate part numbers for all 
      customers and aggregate purchaserequirements. 
      The general process of RPDBS is as follows:
      </p>
      <ol>
           <li>BOM is uploaded in CUBE with BOM Import and Scrubbing module</li>
           <li>CUBE uses part descriptions to determine part class, type, and value </li>
           <li>CUBE uses RPDBS to compare newly uploaded parts to existinginternal part numbers to match like parts </li>
            </ol>
            <p>
            RPDBS is one of the key solutions for EMS to consolidate purchaserequirements and reduce procurement costs and labor. 
            This database iscontinuously updated to stay current with changing part information.RPDBS is included in the Parts Master 
            and Inventory Control Managementwith the AMLs and packaging for each part incorporated into the partnumber database.
      </p>
      <p><span className="bold" style={{color: "#13A0FE"}}>CUBE provides an environment for EMS to aggregate material 
      acquisition andreduce both purchase price and labor for parts. </span></p>
      <p>      
      <span className="bold"> SCM Solution Pt. 2: Material Planning and Procurement (MPP) </span>
      </p>
      <p>Material Planning and Procurement (MPP) allows purchasers to create a PObased on necessary parts 
        and scheduling requirements through MRP Actions.CUBE has specialized features in its MRP for EMS companies
        which can bedefined as four main differentiators:</p>
      <ol>
           <li>Contracts Management items generate automatic PO </li>
           <li>Generate Purchase Actions and Customer Consigned Material Actions</li>
           <li>eg parts to a WO as PO is created</li>
           <li>Online PO Approval Workflow</li>
           </ol>  
        <p> CUBE’s MRP monitors purchase history for all parts and recommendscontracts with suppliers for most commonly used parts. 
        This part of the MRPautomates the data collection process, such as Estimated Annual Usage, andenables the purchaser 
        to take action. The MRP also merges AMLrequirements for all customers for highest quantity aggregation bymanufacturer.
        </p>
        <p style={{fontStyle: "underline"}} >Standard Inventory Management Process Flow</p>
        <CubeMRP style={{marginLeft: "100px", width:"70%"}} />
        <p>      
      <span className="bold"> SCM Solution Pt. 3:Inventory Management and WO Kitting </span>
      </p>
      <p> 1. Standard Inventory ManagementThe standard process for inventory management and WO Kitting in EMSindustry. 
          After parts are received and inspected, they are placed in awarehouse location and stored until they are assigned 
          or placed in a kit. Thismethod also requires occasional physical inventory and frequent cycle countsto validate 
          inventory accuracy and adjustments.
      </p>
      <p style={{fontStyle: "underline"}} >Standard Inventory Management Process Flow</p>
      <Inventory  />
      {/* place for pic */}
      <p> 2. “Just-in-Time” Inventory ManagementWO Kitting is the application of RPDBS. With merged parts requirements,
          purchasers can order parts for “just-in-time” WO kitting. This methodeliminates the need for vast warehouse 
          space because parts can be kitteddirectly as they are received and inspected. Bypassing the warehouse andkitting 
          directly from receiving also facilitates real-time visibility of theshortage list.
    </p>
    <p style={{fontStyle: "underline"}}> “Just-in-Time” Inventory Management Process Flow </p>
    <JustInTime  />
    <p>
    CUBE’s inventory management begins with the MRP and PO. During thepurchasing process, each part can be optionally pegged 
    to its designatedWO. Since each part can be assigned multiple WOs at the time of receiving,parts can be placed directly 
    into its respective kit by the work center by passing the warehouse.
    </p>
    <p>The “just-in-time” method brings a variety of benefits to EMS companies.An entire step in labor and time can be eliminated 
        by pegging parts to a WOat PO and issuing them to a kit as they are received and inspected. Carryingless inventory 
        in warehouses causes faster inventory turns and frees up lineof credit, reducing monthly inventory carrying interest charges. 
        Reducingthis material handling step also reduces the risk of human errors.
        </p>
    <p><span className="bold" style={{color: "#13A0FE"}}>  CUBE promotes “just-in-time” delivery to save major costs 
    in supply chain management. </span></p>
    <p>      
      <span className="bold"> SCM Solution Pt. 4: CUBE Material Tracking & Control (MTC) </span>
      </p>
      <p> CUBE features a function throughout the manufacturing process to trackmaterial at both the component and 
          the work order assembly level. Thisfunction was created to meet the needs of ISO9001, ISO13485, andAS9100. 
          For many EMS companies, detailed tracking and traceability is acrucial element in producing mission critical 
          products for medical, military,aerospace, and other similar mission critical industries. For EMS companies working 
          in these industries, CUBE has implemented Material Tracking &Control (MTC) capabilities built into the foundation 
          of the system.  Throughthis MTC method, all tracking and historical traceability is maintained, andISO compliance 
          requirements are met by virtue of using the CUBE system.  
        </p>
          <p> CUBE's MTC consists of 3 fundamental areas to give the manufacturer total control of tracking:   </p>
      <ol>
           <li>Part Info: record the part number and revision, description, and themanufacturer and 
               manufacturer part number </li>
           <li>Supplier Info: in addition to Purchase Order (PO) number, recordcarrier information with the tracking number, quantity,
               and type ofpacking used to ship the part(s) </li>
           <li>Additional Info: optional and provisional information, such as a part’sserial number, date code, and lot code. 
               Compliance information (forRoHS, ITAR, and others) can be recorded here</li>
           </ol> 
        <p> Within these 3 areas, MTC offers 3 levels of tracking: </p>
        <ul className="none">
            <li>1)  component or part - track by individual component if the part has aserial number; 
                track by packaging (reel, stick, tray, etc.) if the part isnot serialized </li>
            <li>2) assembly/PCA or cable/harness</li>
            <li>3) product/finished goods (box build) </li>
        </ul>
        <p>CUBE's MTC provides “cradle to grave” traceability and begins when a part isreceived. 
            Additional information can be recorded ​at this stage;​ informationcan be:
        </p>
        <ul className="dash">
            <li>supplier information  - received date  - packing list number</li>
            <li>shipping number  - number of parts in batch  - packaging type </li>
            <li>manufacturer part number  - serial numbers  etc.</li>
        </ul>
        <p>The parts are then assigned to a work order (WO), and with MTC, the fullhistory of 
            each part is available within the WO.  
        </p>
        <p>Track – Start to End:  </p>
        <ol>
           <li>Inventory Receiving – PO, all shipping information, date received, whoreceived part(s), 
               who inspected part(s), etc. </li>
           <li>Inventory Warehouse - Know exact location of part in warehouse(s);also which Work Orders and 
               serial number consumed the part at whichwork center</li>
           <li>WO/Dynamic Production Scheduling & Tracking (DPST)- ScanMTC from the machine, and when part is removed, 
               system will automatically order more parts to machine. Parts can be reconciled.  </li>
           <li>Finished Goods Inventory (FGI) </li>
           <li>Shipment with Packing List</li>
           </ol> 
           <Ems style={{width:"70%"}} />
           {/* place for pic */}
           <p> EMS companies can now know the full history of every part. In emergencysituations, 
               EMS companies can utilize maximum traceability in CUBE to viewa part’s history for recall or to notify a supplier. 
               Companies who work withmission critical products can now meet ISO compliances within the system.
            </p>
            <p>In summary, there are 3 major areas of SCM: </p>
        <ol>
           <li>To run a smooth and efficient process for SCM management.</li>
           <li>Inventory Control Management and Just-In-Time WO Kitting.</li>
           <li>Track components and assemblies from inventory receiving to shippingthe product. </li>
           </ol>  
           <p>      
      <span className="bold"> Restriction of Hazardous Substances Directive (RoHS) </span>
      </p>
           <div>
      <img className="iso" src= {Rohs} alt= "Rohs Compliant" style={{width:"10%"}} />
      </div>  
      <p> Directive on the restriction of the use of certain hazardous substances inelectrical and electronic equipment. 
          ​The Restriction of Hazardous Substanceswas initiated by the European Union and was soon realized globally. 
          Itspurpose is to reduce heavy metals (primarily lead) and other chemicals inelectrical/electronic equipment. 
          In the US, RoHS has different meanings foreach state, but the EU’s directive as Suppliers and Distributors of
          electricalor electronic parts is generally followed.  
    </p>
    <p>
    To be RoHS compliant, a Certificate of Conformance (C of C) is required forParts Received. 
    When an EMS makes an Assembly (PCA) for its Customer(OEM), where Parts Received are supported by RoHS C of Cs and 
    EMSWorkstations are Lead-Free Solder and RoHS Compliant, that Product maynow be designated RoHS Compliant by way of 
    Received CofC. An EMSProduct’s Certification is based on C of C’s Received as RoHS Parts. RoHScompliant products 
    manufactured by EMS are labeled as “Electrically Safe”. 
    </p>
    <p><span className="bold" style={{color: "#13A0FE"}}> CUBE identifies the RoHS parts as Received and Recorded. 
    This identification isalso printed on the part label. </span></p>
       
     <p> <span className="bold"> Registration, Evaluation, Authorization, and Restriction ofChemicals (REACH) </span></p>
      <div>
      <img className="iso" src= {Reach} alt= "Reach Compliance" style={{width:"7%", height:"5%"}} />
      </div> 
      <p> Has little to no impact on EMS operations. Regulation of the European Unionwas adopted to protect human health and 
          the environment from dangerouschemicals. REACH compliance is mandatory on chemical products producedin or shipped 
          into the European Union (EU).​​Its registration requirements arefor companies that export goods to the EU. 
          It requires companies to classify,label, and package their hazardous chemicals appropriately before placingthem 
          on the market.
    </p>
    <p><span className="bold" style={{color: "#13A0FE"}}> REACH is informative but does not apply to the EMS industry. </span></p>
    <p> <span className="bold"> Counterfeit Parts (CP)</span></p>
    <p>
    A part misrepresented as to its Origin or Quality. EMS companies should usethe CP detection program as an effort to 
    reduce trademark violations,security protocol intrusions, or other similar infringements. CPs are generallyseen 
    in the Defense Industry and are reported to the Supplier and Customerwhen found. CPs are “Non-Conformances” when found, 
    and handled by EMSas such. Inspectors should be trained in this program.
    </p>
    <p><span className="bold" style={{color: "#13A0FE"}}> CUBE provides a generic EMS Training Matrix as a flat-file.
     A checkbox is providedin the parts receiving module to confirm that the received part is not a counterfeitpart.
     </span></p>
     <p> <span className="bold"> Conflict Minerals (CM) </span></p> 
     <div>
      <img className="iso" src= {CM} alt= "Conflict Minerals (CM) " style={{width:"20%"}} />
      </div> 
    <p>The US Conflict Minerals Law is directed by the Dodd-Frank Wall StreetReform and Consumer Protection Act of 2010. 
        The European Union (EU) hasa new regulation effective January 1, 2021. In politically unstable areas, theminerals 
        trade can be used to finance armed groups, fuel forced labor andother human rights violations, and support corruption 
        and moneylaundering. These so-called 'conflict minerals' (ie.​​tin, tungsten, tantalum)can be used in everyday products 
        such as mobile phones, cars, or jewelry. 
    </p>
    <p>The EU and U.S. Securities and Exchange Commission (SEC) rules requiremanufacturers to file certain reports with 
        the SEC or EU to disclose whetherthe products they manufacture or contract to manufacture contain “conflictminerals...”. 
        Manufacturers that make Printed Wiring Boards and Electroniccomponents (Transistors, Capacitors, Chokes, Resistors, or CPUs) 
        are morelikely to be subjected to “Conflict Material” reports. The EMS is generally aReceiver of a Supplier’s or 
        Distributor’s “CM statement” in a Certificate ofConformance or Compliance (C of C), which describes the Origin of 
        theirProduct. For EMS, when a Received C of C has a Conflict Minerals statement(Statement of Origin), that C of C 
        becomes a Record and should bemaintained by EMS for at least 5 years.  
    </p>
    <p><span className="bold" style={{color: "#13A0FE"}}> CUBE has a built-in data storage to keep photocopies 
    of all receipts which includesthe C of C information.
     </span></p>
     <p> <span className="bold"> Export Administration Regulations (EAR) </span></p> 
     <div>
      <img className="iso" src= {EAR} alt= "EAR" style={{width:"7%"}} />
      </div> 
      <p>A set of regulations found at 15 C.F.R. § 730 et seq. They are administeredby the Bureau of Industry and Security,
          which is part of the US CommerceDepartment. In general, the EAR govern whether a person may export athing from 
          the U.S., re-export the thing from a foreign country, or transfer athing from one person to another 
          in a foreign country. The EAR apply tophysical things (sometimes referred to as "commodities") as well 
          astechnology and software. This is the responsibility of OEM and not the EMS,as EMS’s responsibility is 
          to make products for OEM according to OEM’srequirements.
    </p>
    <p><span className="bold" style={{color: "#13A0FE"}}> EAR is informative but does not apply to the EMS industry. </span></p>
    <p> <span className="bold">Sarbanes–Oxley Act</span></p> 
     <div>
      <img className="iso" src= {Sox} alt= "Sarbanes–Oxley Act" style={{width:"7%"}} />
      </div> 
      <p> Also known as the "Public Company Accounting Reform and InvestorProtection Act" (in the ​Senate​) and 
          "Corporate and Auditing Accountability,Responsibility, and Transparency Act" (in the ​House​) and more 
          commonlycalled ​Sarbanes–Oxley​, ​Sarbox​ or ​SOX​, is a ​United States federal law​ thatset new or expanded 
          requirements for all U.S. ​public company​ boards,management and public accounting firms. A number of 
          provisions of the Actalso apply to privately held companies, such as the willful destruction ofevidence 
          to impede a federal investigation.
    </p>
    <p><span className="bold" style={{color: "#13A0FE"}}> In CUBE, all applicable module information, including all changes, are permanently
    saved in the archived historical data.</span></p>
    <p> <span className="bold">OSHA and EU-OSHA</span></p> 
    <p>The U.S. and EU​​Occupational Safety and Health Administration, under theU.S. Department of Labor in the U.S., 
        serve the needs of EMS personnelinvolved in Safety and Health at the Workplace. An EMS HR Team mightutilize this 
        agency for general EMS Job Descriptors and annual Trainingrequirements (CUBE provides the Training Records module 
        to record alltraining, including the worker safety). Each U.S. State has its own Laborlaws for Workplace Safety 
        and Health and Posted in a conspicuous place: <a href= "https://www.dir.ca.gov/​"> https://www.dir.ca.gov/​</a>.</p>
        <p> <span className="bold"> Country of Origin (COO) for Tariff </span></p> 
        <p>Represents the country or countries of manufacture, production, design, orbrand origin where an article or product comes from. 
            For multinationalbrands, COO may include multiple countries within the value-creationprocess. 
            There are differing rules of origin under various national laws andinternational treaties.
            <br/>
            The country of origin is determined for the purpose of applying tariff andnon-tariff measures to regulate the 
            import of goods into the customsterritory of the country and export of goods from this territory, and toensure that 
            goods are recorded in foreign trade statistics.
            <br/>
            Determination of the country of origin is carried out on the basis of 
            theprinciples of international practice. The country of origin is the country inwhich the product has been fully produced 
            or has undergone sufficientprocessing in accordance with the criteria established by the laws of thecountry. 
            In this case, the country of origin can be understood as a group ofcountries, customs unions of countries, and a region or part 
            of a country ifthere is a need to separate them in order to determine the origin of goods.
            <br/>
            The rate of customs duty is set 
            depending on the country of origin.Determination of the country of origin is made in all cases when theapplication 
            of measures of customs and tariff and non-tariff regulationdepends on the country of origin.
            <br/>
            The determination of the country of origin is carried out in accordance withinternational treaties of the member states of the 
            customs union, whichregulate the rules for determining the country of origin.
            <br/>
Determination of the country of origin originating from the territory of amember state of the customs union 
is carried out in accordance with thelegislation of such a member state of the customs union, unless otherwiseprovided 
by international treaties.</p>
<p><span className="bold" style={{color: "#13A0FE"}}> CUBE has the ability to record the country of origin during the 
receival of material.</span></p>
<h3 className="sub-heading-1">Section 3 CUBE MES</h3>
<p><span className="bold"> Manufacturing Execution System for the EMS Industry</span> <br />
Managing Production is the second biggest challenge for EMS companies.Scheduling changes occur numerous times a day and 
    the ability to makereal-time dynamic scheduling changes is imperative in the EMS industry.This production process 
    makes up about 20% of the total product cost. Themain goal of MES is customer satisfaction and it is achieved in two steps:
    </p>
    <ol>
        <li>Consistent delivery of product on time by continually balancing allworkcenters to avoid bottlenecks.</li>
        <li>Higher average quality of products by 1) the operator or technicianreviewing previous work order quality level (required to review andcheck-off prior to starting the work; 
            and 2) continually monitoringproduction activities, analyze and notifying the responsible personnelto correct the root cause of the problem to avoid or minimize therework down the process.</li>
    </ol>
    <p><span className="bold"> Capacity Planning & Scheduling (CPS)</span> <br/>
    The Capacity Planning and Scheduling (CPS) system for manufacturing is apowerful tool for many types of manufacturing. 
    Capacity planningdetermines the production capacity needed by a manufacturer to meet eithertheir own or their customers’ 
    demands to produce products. Effective use ofthis tool produces the maximum work that a manufacturer can completewithin 
    a period with available capacity.</p>
    <p>CPS, however, can be immensely complex, and even unrealistic, for somespecialty manufacturing sectors like EMS because 
        they need to makenumerous scheduling adjustments throughout the day to accommodatemany unplanned activities such as 
        ECO and hundreds of other variables. Thisfeature and its role will be explored through work order-based electronics
        manufacturing.</p>
        <p><span className="bold"> Capacity Planning & Scheduling in EMS</span> <br/>
        CPS​ has been an elusive tool in the EMS industry. The concept seems simplebased on its performance with process and 
        dedicated-line manufacturing,but becomes complex when implemented in a non-dedicated line production.Companies such 
        as SAP, Epicor, and manex have struggled for decades tomatch the effectiveness of CPS in non process oriented or 
        discretemanufacturing, which requires constant change during the WIP process.Even after setting up each parameter, 
        production soon meets slight timingdifferences between the assembly of various parts at different quantities and
        conditions. This massive amount of data and variables still makes it difficultto create a functioning, 
        fully-automatic CPS system for EMS companies.</p>
    <p>With the current process of CPS, a work order-based electronicsmanufacturer would need dedicated positions 
        to change the plan andschedule throughout the day. They would then need to notify all affectedwork center 
        stakeholders separately. This is counterproductive as it causesthe use of excess resources instead of 
        increasing efficiency. Nevertheless,CPS is unanimously thought of as a tremendous tool for almost 
        all manufacturing environments and can be equally as powerful for EMS companies.</p>
        <p>Even in intricate environments like electronics manufacturing, CPS has thepotential to become a tool imperative to 
            run an efficient production process.The only remaining question for CPS is how to adjust the approach andcreate 
            a system that runs fluidly with EMS companies.</p>
            <p><span className="bold"> CUBE Solution 1: Dynamic Production Capacity Scheduling & Tracking (DST)</span> <br/>
            Dynamic Production Capacity Scheduling and Tracking (DST) applies the benefits of CPS directly to the EMS industry.
            CUBE has a tailored, AI-based approach that has the ability to make last-minute manual adjustments by work center 
            for work orders. DST is designed to create automated work center scheduling as the WO is generated and is easy 
            to use for all users throughout the production process.</p>  
            <p>CUBE’s DST system is specifically engineered for work order-based EMS with small to mid-sized production volumes.</p> 
            <ol>
            <li>When a WO is created, DST automatically adds that WO to the existing schedule and coordinates a schedule 
                with other WOs to meet on-time delivery
                <ul className="dash">
                    <br/>
                <li> All hot orders are automatically scheduled as top priority. Users can manually change the priority level for 
                a work center with a drag and drop feature for any last-minute changes
                </li>
                </ul>
                </li> 
            <li>When top priority jobs are completed, jobs will then be rearranged tothe standard priority list
            <ul className="dash">
                <br />
                <li>users are notified if hot spots are found during production </li>
                </ul>
                </li>  
            <li>DST automatically reschedules work centers to meet their deliverydates as jobs are completed
                </li>     
            </ol> 
            <p>CUBE takes a practical and realistic approach to CPS that is proven and usedin the real world -by taking 
                the core concept of CPS and customizing it forthe EMS industry. CUBE’s DST uses an artificial intelligence’s 
                (AI) algorithmicsetup combined with WO variables to automatically provide scheduling andtracking. 
                This feature also shows capacity over or under so the planner caneasily smooth out requirements while 
                provisioning for equipment andproduction labor.</p>
            <p>Traditional CPS lacks the dynamic capabilities to support the productionprocess of EMS companies; 
                    it simply shows the plan set in that moment ofthe planning process, frozen in time. CUBE offers 
                    sophisticated processsetup and planning and scheduling capabilities to aid with the endlessvariety 
                    of settings to configure in real time. DST provides EMS companieswith a reliable tool to increase 
                    efficiency and decrease expenses.
            </p>
            <img src={itar} alt="International Traffic in Arms Regulations​ (​ITAR​) " style={{ marginLeft:"0px", width:"6%"}} />
            <p> <span className="bold"> International Traffic in Arms Regulations​ (​ITAR​) </span> is a  <a href="https://en.wikipedia.org/wiki/United_States">United States</a>​ ​regulatory regime to restrict and control 
                the ​export​ of defense and militaryrelated  ​technologies​ to safeguard ​U.S. national security​ and further 
                ​U.S.foreign policy​ objectives. 
            </p>
            <p>ITAR regulations dictate that information and material pertaining to defenseand military related technologies 
                (items listed on the U.S. Munitions List)may only be shared with U.S. Persons unless authorization from the 
                Department of State is received or a special exemption is used. 
            </p>
            <p>ITAR applies to items identified under the Invention Secrecy Act. ITAR doesnot apply to information related 
                to general scientific, mathematical orengineering principles that are commonly taught in schools and colleges 
                orinformation that is in the public domain. 
            </p>
            <p>
            All U.S. manufacturers, exporters, and brokers of defense articles, defenseservices, or related technical data, 
            as defined on the USML, are required toregister with the U.S. Department of State. Registration is primarily a 
            meansto provide the U.S. Government with necessary information on who isinvolved in certain manufacturing and 
            exporting activities. Registration doesnot confer any export rights or privileges, but is a precondition for the 
            issuance of any license or other approval for export. 
            </p>
            <p>
            In 2020, the regulations were updated by the Trump Administration to nolonger require non-exporting businesses 
            to register with U.S. StateDepartment annually at a cost of $2,250, allowing residents to freely publishtechnical 
            arms information. It is no longer required to have a registration ofarms when temporarily traveling internationally, 
            and fees are lowered fornon-military exports by businesses.  
            </p>
            <p>
            CUBE has an ITAR checkbox for Parts, which is marked in an OEM’s PartMaster/Bill of Material. Non-Citizens or 
            Non-Permanent Residents areblocked from viewing ITAR items in the CUBE. EMS Senior managementshould be registered 
            with the U.S. Department of State, which is the ITARauthority. The following link will assist EMS in its Registration 
            process at theDirectorate of Defense Trade Controls (DDTC): <a href="https://deccs.pmddtc.state.gov/deccs​">
                https://deccs.pmddtc.state.gov/deccs​ </a>
            </p>
            <p>
            <span className="bold">Even though EMS does not Export material, it is still required to register.​</span> A manual Form DS-2032 Statement of 
            Registration is available inthe EFC but an e-file is also possible at the DDTC website.  
            </p>
            <p>
            CUBE allows a U.S. person who is a lawful permanent resident to interactwith ITAR designated Parts. A Record of Manufacture 
            for each ITAR designated Part should be retained for at least 5 years. Personnel who donot check this block have no access 
            to ITAR designated Parts, Product, orSystems. 
            This should include any associated Part Drawing, Schematic, Bill ofMaterial, or other CUBE areas containing ITAR. 
            This restriction has no impacton Export Administration Regulations (EAR), which is a separate regulationfor Commercial 
            Part Controls. The following diagrams show “ITAR Controls”. 
            </p>
            <p>
            <span className="bold"> EQS>HR​ </span>is the area to input personnel data into CUBE and designate ITAR authorized individuals. When the “Citizen (ITAR)” 
            box is Checked as shown,that individual is authorized to view ITAR established Parts.  
            </p> 
            <img src={img} alt="EQS>HR​" />
            <p>
            Parts should be designated as ITAR at the Bill of Material Import. When anyone Line Item is designated as ITAR, 
            the entire Assembly or PCB becomesITAR. ITAR is Not a Security Classification and several countries haveexemption 
            status. 
            </p>
            <p>
            The following screenshots show where ITAR might be designated in the PartMaster ​ENG>PM​. Once designated, an 
            “ITAR RESTRICTED” warning wouldshow for any ​SCM>WMS> ​module having ITAR Parts. Again, only personnelwith “Citizen 
            (ITAR)” checked has access to ITAR designated Parts. 
            </p>
            <img src={pm} alt="EQS>HR​"/>
            <p>
            <span className="bold">
            ​CMMC/NIST800 </span>
            </p>
            <p> 
            The ​
            <span className="bold">
            Cybersecurity Maturity Model Certification (CMMC)​</span> is acertification and compliance process developed 
            by the Department ofDefense (DoD). It is designed to certify that contractors have the controls inplace to protect 
            sensitive data. These data include Federal ContractInformation and Controlled Unclassified Information (CUI).
            </p>
            <p>
            The CMMC framework was released in January 2020. The framework makesuse of a “maturity” model, in which audits 
            will be conducted by third-partyassessors, and firms will be assigned a “level” that represents thecybersecurity 
            protections in place. 
            </p>
            <p>
            The CMMC merged a number of previously discrete compliance processesinto one framework. These include NIST SP 
            800-171, NIST SP 800-53, ISO27001, ISO 27032, and AIA NAS9933. It has also taken best practices fromthose contained 
            in FISMA. 
            </p>
            <p>
            Based on ​version 1.02​ of the CMMC, there are 5 levels and each has its ownspecific set of controls that will be in scope for a CMMC audit: 
            </p>
            <ul className="disc">
                <li>CMMC Level 1: 17 Controls </li>
                <li>CMMC Level 2: 72 Controls (includes Level 1 controls)</li>
                <li>CMMC Level 3: 130 Controls (includes Level 2 controls)</li>
                <li>CMMC Level 4: 156 Controls (includes Level 3 controls)</li>
                <li>CMMC Level 5: 171 Controls (includes Level 4 controls)</li>
            </ul>
            <p>
            Compliance with <span className="bold">NIST 800-171</span> ​​ is required for any contractor orsubcontractor that stores, transmits or processes 
            Controlled UnclassifiedInformation (CUI). This has been a requirement since 1 January 2018 and itis still a 
            requirement under the ​Defense Federal Acquisition RegulationSupplement (DFARS) 252.204-7012​. Compliance efforts 
            consisted of"self-attestation" vs. a more traditional third-party auditor evaluation andthis partially led to 
            a low rate of compliance across the Defense IndustrialBase (DIB). manex support service is provided by U.S. 
            citizens andpermanent residents who support customer data. manex does not downloadany customer data for analysis.
            </p>
            <p>
            CUBE system has group and user access control in the  security controlsettings controlled by the customer 
            to meet the cybersecurity provisions.
            </p>
            <p>
            <span className="bold">Moisture Sensitivity Level (MSL)</span> 
            ​​</p>
            <p>Moisture Sensitivity Level (MSL) relates to packaging and handlingprecautions for certain semiconductors. 
                The MSL is an ​electronic​ standard forthe time period in which a moisture sensitive device can be exposed 
                to ambient room conditions (30 °C/85%RH at Level 1; 30 °C/60%RH at allother levels).
            </p>
            <p>S​emiconductor​ parts are manufactured in smaller package sizes. As a result,components such as thin fine-pitch 
            devices and ​ball grid arrays​ can bedamaged during ​SMT​ reflow when moisture trapped inside the componentexpands.
            </p>
            <p>
            The expansion of trapped moisture can result in internal separation(​delamination​) of the plastic from the die or 
            lead-frame, wire bond damage,die damage, and internal cracks. Most of this damage is not visible on the component 
            surface.
            </p>
            <p>
            Moisture sensitive devices are packaged in a moisture barrier ​antistatic bagwith a ​desiccant​ and a moisture 
            indicator card which is sealed.
            </p>
            <p>
            IPC-M-109 includes seven documents. Moisture/reflow sensitivityclassification for plastic​​Integrated circuit (IC) SMDs,
             there are eight levels ofmoisture sensitivity. Components must be mounted and reflowed within theallowable period of 
             time (floor life out of the bag).
            </p>
            <ul className="disc">
            <li>MSL 6     Mandatory Bake before use</li>
            <li>MSL 5A    24 hours</li>
            <li>MSL 5     48 hours</li>
            <li>MSL 4     72 hours</li>
            <li>MSL 3     168 hours</li>
            <li>MSL 2A    4 weeks</li>
            <li>MSL 2     1 year</li>
            <li>MSL 1     Unlimited</li>
            </ul>
            <p>
            The moisture-sensitive device (MSD) level is displayed in the WarehouseManagement (WHM) and MOC modules as status 
            information for partsrequiring MSL tracking. MSL Levels are displayed in the MOC module to trackthe MSL level 
            for parts requiring tracking to ensure they are not exposed tothe atmosphere beyond the allocated time.
            </p>
            <h3 className="sub-heading-1">Section 4     Conformance & Compliance</h3>
            <span className="bold">ISO and Compliance Document Scope</span> ​​
            <p>
            For many businesses, ISO is essentially a separate island within a company,integrated within all business operations; 
            but it may sometimes not be usedto its full potential. EMS companies create SOPs for their manufacturingoperations 
            to be in compliance with ISO Standards.
            </p>
            <p> Currently, ISO SOPs are usually the responsibility of the Quality Department.However, optimal SOPs would be 
            created with the knowledge of eachdepartment head. They would work with top management to establish theoverall 
            policies and goals for their specialised areas and receive finalapproval of each ISO SOP from the business owner. 
            The Quality Departmentcan then integrate and manage these SOPs into daily business operations toproduce quality 
            products on time.
            </p>
            <p>
            CUBE is designed with three ISO standards criteria and requirements tocomply with:
            </p>
            <ul className="disc">
            <li>ISO9001 - Commercial Electronics</li>
            <li>ISO13485 - ​Medical Devices</li>
            <li>AS9100 - ​Aerospace & Defense​ Regulations</li>
            </ul>
            <p>
            <span className="bold" style={{color: "#13A0FE"}}> CUBEs built in module capabilities for actionable SOP plus tracks 
            and maintains allchanges and archived records.</span> </p>
            <p>
            ​​<span className="bold">The following three agency listings are information only:</span> 
            </p>
            <p>
            ​​<span className="bold">Federal Communications Commission​ (​FCC​)</span> ​​​​</p>
            <p>
            An independent agency of the United States government that regulatescommunications by radio, television, wire, 
            satellite, and cable across theUnited States. The FCC maintains jurisdiction over the areas of broadbandaccess, 
            fair competition, radio frequency use, media responsibility, publicsafety, and homeland security.
            </p>
            <p>
            The act furthermore provides that the FCC was created "for the purpose ofthe national defense" and 
            "for the purpose of promoting safety of life andproperty through the use of wire and radio communications."
            </p>
            <p>
            Consistent with the objectives of the act, as well as the 1999 ​GovernmentPerformance and Results Act​ (GPRA), 
            the FCC has identified four goals in its2018–22 Strategic Plan. They are: Closing the Digital Divide, 
            Promoting Innovation, Protecting Consumers & Public Safety, and Reforming the FCC's Processes.
            </p>
            <p>
            For electronics manufacturers, the Federal Communications Commissionmandates a law for electronics containing 
            active components. Regardless oftheir input voltage or power ratings, products that enter the U.S. must meetthe 
            emissions requirement.
            </p>
            <p>
            ​​<span className="bold">Federal Aviation Administration​ (​FAA​)</span> ​​​​
            </p>
            <p>
            A ​governmental body​ of the ​United States​ with powers to regulate allaspects of ​civil aviation​ in the nation and over its surrounding internationalwaters.28
            Its powers include the construction and operation of airports, ​air trafficmanagement​, the certification of personnel and aircraft, and the protectionof U.S. 
            assets during the launch or ​re-entry​ of commercial space vehicles.
            </p>
            <p>
            ​​<span className="bold">Food and Drug Administration​ (​FDA​)</span> ​​​​
            </p>
            <p>
            A ​federal agency​ of the ​Department of Health and Human Services​. The FDAis responsible for protecting and 
            promoting ​public health​ through the controland supervision of ​food safety​. In reference to the EMS, ​medical 
            devicesapply. This is covered in ISO-13485.
            </p>
            <p>
            ​​<span className="bold">Relationship to QMS for ISO and SAE</span> ​​​​
            </p>
            <p>
            QMS Standards for ISO and SAE must be created for these 3 businesssectors in the EMS industry:
            </p>
            <ol>
                <li>ISO 9001 - Commercial Electronics</li>
                <li>AS 9100 - Aerospace & Defense</li>
                <li>ISO 13485 - Medical Devices</li>
            </ol>
           <p> <span className="bold" style={{color: "#13A0FE"}}> CUBE’s ​ERP​ and MES are designed with foundational 
            characteristics of anEnterprise Quality System (EQS) for quality control integration.</span> </p>
            <p> <span className="bold"> Comparison of primary QMS Elements for EMS</span> </p> 
            <div>
      <img src= {img1} alt= "QMS Elements for EMS" />
      </div>
            <p style={{marginLeft:"180px"}}>The following as defined by ISO & SAE:</p>
            <div>
      <img src= {img2} alt= "ISO & SAE" style={{width:"44%"}}/>
      </div>
      <p>
            ​​<span className="bold">EMS - OEM QMS Determination</span> ​​​​
            </p>
        <p>
        A QMS Scope is a required statement that defines a company’s organizational structure and operational constraints. 
        QMS Elements provide the foundational criteria for EMS operations. CUBE’s QMS was created based on the International 
        Aerospace Quality Group (IAQG) and EMS companies already certified with ISO 9001.
        </p>
        <p>
            ​​<span className="bold">EMS</span> ​​​​
            - QMS Element 8 Operations (Measurement, Analysis, Improvement)
            </p>
        <p>Applies to EMS - <br/>
8.4 - externally provided processes, products, and services</p>
  
        <G32 />
        <p>8.5 - production and service provision</p>
        <G33 />
        <p>8.6 - release of products and services</p>
        <G34 />
        <p>8.7 - control of conforming product</p>
        <img src={G35} alt="control of conforming product" style={{marginLeft:"0px"}} />
        <br/>
        <G32 />
        <br/>
        <img src={G2} alt="control of conforming product" style={{marginLeft:"0px"}} />
        <br/>
        <p>Partially Applies to EMS - <br/>
        8.1 - operational planning and control
        </p>
        <br/><img src={img14} alt="control of conforming product" style={{marginLeft:"0px"}} />
        <p>
        8.2 - requirements for product and service
        </p>
        <img src={G25} alt="requirements for product and service" style={{marginLeft:"0px"}}  />
        <p>Does not apply to EMS - <br/>
        8.3 - design and development of products and services
        </p>
        <p>
            ​​<span className="bold" style={{marginRight:"50px"}}>CUBE:</span> ​​​- QMS ​Element 8 Operations (Measurement, Analysis, Improvement) 
            <br/>
            Production & Service -
            </p>
        <img src={G24} alt="requirements for product and service" style={{marginLeft:"0px"}}  />
        <p>
        External Providers - 
        <br/>
        From Customer:
        </p>
        <img src={G235} alt="requirements for product and service" style={{marginLeft:"0px"}}  />
        <p>
        From Suppliers:
        </p>
        <img src={G6} alt="requirements for product and service" style={{marginLeft:"0px"}}  />
        <p>
        Nonconformance Output -
        </p>
        <img src={G27} alt="requirements for product and service" style={{marginLeft:"0px"}}  />
        <br/>
        <img src={G5} alt="requirements for product and service" style={{ marginLeft:"0px"}}  />
        <br/>
        <img src= {imgMenu} alt= "CUBE’s main menu" style={{ marginLeft:"0px", width:"45%"}} />
          <p>
            ​​<span className="bold" style={{marginRight:"50px"}}>CUBE:</span> ​​​​     “SYSTEM SETTINGS” (Implementation and Customization)
            </p>
            <p>
            ​​<span className="bold" style={{marginRight:"60px"}}>SCM​:</span> ​​​​     Control BOM, Purchase Orders, and MRP (Inventory) 
            <br/>
            ​​<span style={{marginLeft:"150px"}}>Reduce quantity of:</span> ​​​​  
            <br/>
            ​​<span style={{marginLeft:"150px"}}>POs issued for same Manufacturer’s Parts</span> ​​​​  
            <br/>
            ​​<span style={{marginLeft:"150px"}}>Part Receipts and Inspections</span> ​​​​  
            <br/>
            ​​<span style={{marginLeft:"200px"}}>Records Non-Conformances to inspected BOM Parts</span> ​​​​  
            <br/>
            ​​<span style={{marginLeft:"200px"}}>Records Non-Conformances to an RMA</span> ​​​​  
            <br/>
            <span style={{marginLeft:"150px"}}> Warehouse (Raw Material)</span> ​​​​  
            <br/>

        </p>
        <p>
            ​​<span className="bold" style={{marginRight:"60px"}}>MES​:</span> ​​​​    Parts are Moved to Work-In-Progress (WIP)/MRP
            <br/>
            <span style={{marginLeft:"150px"}}>Work Orders, Electronic Work Instructions</span> ​​​​  
            <br/>
            <span style={{marginLeft:"150px"}}>e-Traveler, Routing, Production Controls</span> ​​​​  
            <br/>
            </p>
            <p>
            ​​<span className="bold">ISO/SAE Certification Requirements</span> 
            ​​​​</p> 
            <p>There are 7 major quality principles​ ​from QMS which are common among all three ISO standards:</p>
            <ol style={{fontWeight:"bold"}}>
                <li>Customer</li>
                <li>Leadership</li>
                <li>Engagement of People</li>
                <li>Process Approach</li>
                <li>Improvement</li>
                <li>Evidence Based Decisions</li>
                <li> Relationship Management</li>
            </ol>
            <p>EMS companies entertain all classes of product and operate by all three QMS. 
                This means an EMS needs to certify for three different QMS, which requires three separate audits.
                <br/>
                ISO/SAE Publication “Shall Statements” are the Criteria to meet when a Certification by a Certifying Body (CB) 
                is undertaken by EMS.</p>
            <p>
            ISO has requirements which consist of two parts:
            </p>
            <ol>
                <li>A ​​<span className="bold">Standard Operating Procedure (SOP)</span>​ is a set of instructions
            compiled by an organization to help workers carry out complex routine
            operations. An SOPs aim is to achieve efficiency, quality output, and uniformity of performance while reducing miscommunication and failure to comply with industry regulations.
            <br/>
            <br/>
            SOPs can also give employees a reference to common business practices, activities, or tasks. New employees use an SOP to answer questions without having to ask supervisors how an operation is performed. 
            The international quality standard <a href="https://en.wikipedia.org/wiki/ISO_9000#Contents_of_ISO_9001">​ISO-9001​</a>   essentially requires the determination of processes (documented as SOPs) used in any manufacturing process that could affect the quality of the product.
            <br/>
            <br/>
            The goal of every SOP is to help employees carry out tasks correctly every time. A well-written SOP will facilitate training.
            </li>
            <li>
            Approximately 80% of the <span className="bold">Actionable Part</span>​ ​​ can be done in CUBE. ​The remaining 20% is still a work of progress as of November 2020. The system is being continually updated until all known actions are completed.
            <br/>
            <br/>
            Items in the process of development or in design are listed below.
            <br/>
            <br/>
            <ol>
                <li>Training records - designed and in development</li>
                <li>Calibration and equipment maintenance - in the design process</li>
                <li>ITAR - Informational part complete; Action part in process</li>
                <li>Data storage for customer SOP - in process</li>
            </ol>
            The CUBE SOP is driven by ASD QMS Elements for two reasons:
            <br/>
            <br/>
            <ol>
                <li>  ASD QMS has ISO-9001 QMS embedded in its publication</li>
                <li>  ISO-13485 emulates ISO-9001 principle elements</li>
            </ol>
            </li>
            </ol>
            <p>
            ​​<span className="bold">SOP QMS Scope - Familiarization & Audit</span> ​​​​
            <br/>
            As a dynamic and strategic ​EMS​ business package, CUBE and its Enterprise Quality System (EQS) 
            relieves the majority of labor required to prepare for audits
            </p> 
            <p>
            EMS​’s SOP and CUBE merge at implementation, which is when a “Gap Analysis” or a pre-assessment 
            of CUBE’s Modules against Quality Management System (QMS) Elements should occur.
            </p>
            <p>
            An ​EMS​ must state and document its QMS Scope. Elements determined as not applicable should not affect 
            an ​EMS​’s responsibility to ensure conformance. ​EMS​ audits will vary based on product class, such as 
            Medical Devices (MD), Aviation, Space & Defense (ACD), or Commercial.
            </p>
            <p>
            EMS​ QMS Scope: “Assembles, and Manufactures Electronic Assemblies for Medical, Military, and Commercial Industries”.
            </p>
            <p>In CUBE, auditors can verify that:</p>
            <ul className="disc">
                <li>SOPs are maintained and performed properly</li>
                <li>historical records are maintained properly</li>
            </ul>
            <p>
            EMS has positional responsibility, authority, and employee accountability structure. CUBE’s component navigation 
            (SCM-MFG-ENG-SGA) has similar departmental responsibility once management is assigned from “User Access”.
            </p>
            < UserElements className="part" style={{marginLeft: "150px", marginTop: "-20px",marginBottom: "-20px", width:"55%"}} /> 
            <p>The following compares each listing of Elements as written in ISO-9001:2015, AS-9100:2016, and ISO-13485:2016:</p>
        <p>
        ISO - 9100 Element 8
        <br/>
        <span className="bold">8 Operations</span>
        <br/>
        <span style={{marginLeft:"50px"}}> 8.1 Operational planning and control</span> ​​​​  
        <br/>  
        <span className="bold" style={{fontStyle:"italic", marginLeft:"85px"}} >8.1.1 Operational Risk Management</span> 
        <br/>  
        <span className="bold" style={{fontStyle:"italic", marginLeft:"85px"}} >8.1.2 Configuration Management</span> 
        <br/>  
        <span className="bold" style={{fontStyle:"italic", marginLeft:"85px"}} >8.1.3 Product Safety</span> 
        <br/>  
        <span className="bold" style={{fontStyle:"italic", marginLeft:"85px"}} >8.1.4 Prevention of Counterfeit Parts</span> 
        <br/>
        <span style={{marginLeft:"50px"}}> 8.2 Requirements for products and services</span> 
        <br/>  
        <span style={{ marginLeft:"85px"}} >8.2.1 Customer communication</span> 
        <br/>  
        <span  style={{marginLeft:"85px"}} >8.2.2 Determining the requirements for products and services</span> 
        <br/>  
        <span style={{ marginLeft:"85px"}} >8.2.3 Review of the requirements for products and services</span> 
        <br/>  
        <span  style={{ marginLeft:"85px"}} >8.2.4 Changes to requirements for products and services</span> 
        <br/>
        <span style={{textDecoration:"line-through", marginLeft:"50px"}}> 8.3 Design & Development of products and Services</span> 
        <br/>  
        <span style={{textDecoration:"line-through", marginLeft:"85px"}} >8.3.1 General</span> 
        <br/>  
        <span  style={{textDecoration:"line-through", marginLeft:"85px"}} >8.3.2 Design & Development Planning</span> 
        <br/>  
        <span style={{textDecoration:"line-through", marginLeft:"85px"}} >8.3.3 Design & Development Inputs</span> 
        <br/>  
        <span style={{textDecoration:"line-through", marginLeft:"85px"}} >8.3.4 Design & Development Controls</span> 
        <br/>
        <span className="bold" style={{fontStyle:"italic", textDecoration:"line-through", marginLeft:"125px"}} >8.3.4.1 When tests are necessary for verification...</span> 
        <br/>
        <span style={{textDecoration:"line-through", marginLeft:"85px"}} >8.3.5 Design & Development Outputs</span> 
        <br/>  
        <span style={{textDecoration:"line-through", marginLeft:"85px"}} >8.3.6 Design & Development Changes</span> 
        <br/>
        <span style={{ marginLeft:"50px"}}> 8.4 Control of externally provided processes, products and services</span> 
        <br/> 
        <span style={{ marginLeft:"85px"}} >8.4.1 General</span> 
        <br/>
        <span style={{ marginLeft:"125px"}}> 8.4.1.1 The Organization Shall</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.4.2 Type and extent of control</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.4.3 Information for external providers</span> 
        <br/>
        <span style={{ marginLeft:"50px"}}> 8.5 Production and service provision</span> 
        <br/> 
        <span style={{ marginLeft:"85px"}} >8.5.1 Control of production and service provision</span> 
        <br/>
        <span className="bold" style={{fontStyle:"italic", marginLeft:"125px"}} >8.5.1.1 ControlofEquipment,Tools,andSoftwarePrograms</span> 
        <br/>
        <span className="bold" style={{fontStyle:"italic", marginLeft:"125px"}} >8.5.1.2 Validation and Control of Special Processes</span> 
        <br/>
        <span className="bold" style={{fontStyle:"italic", marginLeft:"125px"}} >8.5.1.3 Production Process Verification</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.5.2 Identification and traceability</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.5.3 Property belonging to customers or external providers</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.5.4 Preservation</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.5.5 Post-delivery activities</span> 
        <br/>
        <span style={{ marginLeft:"85px"}}> 8.5.6 Control of changes </span> 
        <br/>
        <span style={{ marginLeft:"50px"}}> Release of Products and Services</span> 
        <br/>
        <span style={{ marginLeft:"50px"}}> Control of nonconforming outputs </span> 
        <br/>
        </p>
        <p>ISO 13485​​Element 8
            <br/>
        <span className="bold">8 Measurement, Analysis, and Improvement</span>  
        <br/>
        <span style={{ marginLeft:"50px"}}> 8.1 General</span> 
        <br/> 
        <span style={{ marginLeft:"50px"}}> 8.2 Monitoring and measurement</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.2.1 Feedback</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.2.2 Complaint handling</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.2.3 Reporting to regulatory authorities</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.2.4 Internal audit</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.2.5 Monitoring and measurement of processes</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.2.6 Monitoring and measurement of product</span> 
        <br/>
        <span style={{ marginLeft:"50px"}}> 8.3 Control of nonconforming product </span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.3.1 General</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.3.2 Actions in response to nonconforming product detected before delivery</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.3.3 Actions in response to nonconforming product detected after delivery</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.3.4 Rework</span> 
        <br/>
        <span style={{ marginLeft:"50px"}}> 8.4 Analysis of data </span> 
        <br/>
        <span style={{ marginLeft:"50px"}}> 8.5 Improvement </span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.5.1 General</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.5.2 Corrective action</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >8.5.3 Preventive action</span> 
        <br/>
        </p>
        <p>ISO 9100 Element 9
            <br/>
        <span className="bold">9 Performance evaluation</span>  
        <br/>
        <span style={{ marginLeft:"50px"}}> 9.1 Monitoring, measurement, analysis and evaluation</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >9.1.1 General</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >9.1.2 Customer satisfaction</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >9.1.3 Analysis and evaluation</span> 
        <br/>
        <span style={{ marginLeft:"50px"}}>9.2 Internal audit</span> 
        <br/>
        <span style={{ marginLeft:"50px"}}>9.3 Management review</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >9.3.1 General</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >9.3.2 Management review inputs</span> 
        <br/>
        <span style={{ marginLeft:"85px"}} >9.3.3 Management review outputs</span> 
        <br/>
        </p>
        <p>
        ISO 9100 Element 10
        <br/>
        <span className="bold">10 Improvement</span>  
        <br/>
        <span style={{ marginLeft:"50px"}} >10.1 General</span> 
        <br/>
        <span style={{ marginLeft:"50px"}} >10.2 Nonconformity and corrective action</span> 
        <br/>
        <span style={{ marginLeft:"50px"}} >10.3 Continual improvement</span> 
        <br/>
        </p>
        <p>
        <span className="bold">10 Improvement</span>  
        <br/>
        Major differences between ISO 9001, ISO 13485, and AS 9100 Elements areusually regulatory requirements presented 
        by the FCC, FDA, and FAA. WhileQMS acknowledges these legalities, it doesn’t depict the specificrequirements 
        other than generic “record-keeping” or “documentation”efforts. These regulatory requirements are mostly 
        documentation complianceefforts or “certifications” of work performed on the Product.
        </p>
        <p> <span className="bold" style={{color: "#13A0FE"}}> CUBE covers the actionable part of SOPs.</span> </p>
        <p>The table below is a summary of all three QMS.</p>
        <p>Aviation, Space & Defense (ASD) - ISO 9001; 
            <br/>
            4-10Medical Devices (MD) - 2008 ISO 9001; 4-8
            </p>
        <p>
        A general interpretation can be made for all QMS: 4 through 6 govern an EMS’s Administrative processes 
        in a quality program while 7 through 10 canbe viewed as the Operative SOPs in manufacturing.
        </p>
        <div>
      <img src= {img3} alt= "QMS" />
      <img src= {img4} alt= "QMS" />
      </div>
      <p>
        <span className="bold">Detailed Equivalents in ASD and MD</span>  
        <br/>
        Note:​ since CUBE’s navigation is an SOP or “Quality Manual”, a User shouldunderstand that ISO 13485 
        sub-elements (yellow column) are aligned withthe sub-elements in ISO 9100 or AS 9001 (blue column). 
        An Audit trail mayfollow either.
        </p>
        <p>
        <span className="bold">8.1 Operational Planning and Control</span>  
        <br/>
        Aerospace added “Risk Management”, “Configuration Management”, “ProductSafety”, and “Counterfeit Parts” to the 
        QMS as individual line items.  Theseemphasize the importance of identifying Parts and Products through the 
        manufacturing process. The traceability of Parts used in the Product ispossible with CUBE’s Material Tracking Control 
        (MTC). ISO 13485 does nothave these requirements but its Element 7.1, Product Realization, is anequivalent.
        </p>
        <div>
      <img src= {img5} alt= "Risk Management" />
      <img src= {img6} alt= "Configuration Management" />
      </div>
      <p>
        <span className="bold">8.2 Requirements for Products and Service</span>  
        <br/>
        This area sets the criteria an EMS would use for Customer Products, such as the Sales Contract phase where 
        customers provide Bill of Material (BOM), Drawings, and any changes to a Product along the manufacturing path. 
        ISO 13485 correlates with its Element 7.2, Customer-Related Processes.
     </p>
     <img src= {img7} alt= "Requirements for Products and Service" />
     <p> <span className="bold" style={{color: "#13A0FE"}}> CUBE’s SGA is primarily designed for this purpose</span> </p>
     <p>
        <span className="bold">8.4 Control of Externally Provided Processes, Products and Services</span>  
        <br/>
        “Externally Provided” are the more recent terms to describe a Supplier or EMS.
     </p>
     <img src= {img8} alt= "Control of Externally Provided Processes" />
     <p>
        <span className="bold">8.5 Production and Service Provision</span>  
        <br/>
        This area is the heart of manufacturing and is also key to understanding QMS. An EMS’ SOP determines how 
        a product should be processed. An EMS Internal Auditing program is required for certification.
    </p>
    <img src= {img9} alt= "Production and Service Provision" />
    <img src= {img10} alt= "EMS Internal Auditing program" />
    <p>
    A department manager is responsible for their established area of expertise and its personnel. 
    A table in CUBE’s “User Access” shows these EMS characteristics.
    </p>
    <p>
    A major difference in a Standard’s utilization is its regulatory requirement, which is generally presented by FCC, FDA, 
    and FAA. Other legal mandates, but common to all QMS are RoHS, Counterfeit Parts, ITAR, HazMat, Electrical Safety, 
    Electro-Static Damage (ESD), and Foreign Object Damage (FOD). QMS Principle Conditions remain the same for 
    all three standards: Clauses and Elements for Customer Focus, Leadership, Engagement of People, Process Approach, 
    Improvement, Relationship Management, and Evidence-Based decision making. A “Quality Manual” or Departmental Standard
    Operating Procedure (SOP), and mandatory Records are derived from those Principle conditions.
    </p>
    <p>
    Auditors review an EMS’s SOPs. For example, a company’s HR manual (Rules & Regulations) relates to QMS Elements 
    4 through 10. Based on an EMS Scope, a clear Audit Path is defined:
    </p>
    <ol>
        <li>Elements pertaining to an OEM but not an EMS may be excluded from Audits</li>
        <li>ISO 9001 is entirely embedded with the ​SAE​ AS9100 publication. Elements for ISO 9001 are identical to 
            the AS9100 Elements. Elements in ISO 13485 are ISO 9001 equivalents</li>
        <li> Aviation, Space & Defense (ASD) has more detailed requirements in its Operation Elements</li>
        <li>QMS Unification is one of the ultimate goals of many SAE-ISO harmonization efforts</li>
    </ol>
              <p>
        <span className="bold">EMS Audit Introduction</span>  
        <br/>
        EMS companies must operate in accordance with management system requirements, which are continually updated. 
        The purpose of EQS is to support QMS and provide operations feedback loop. CUBE determines the necessity or 
        extent of some quality elements and implements specific procedures tailored to EMS Processes, Devices, or Product. 
        An EMS must declare which QMS prior to an Audit for Certification and it must hire an “accredited registrar” or 
        Certifying Body (CB).
     </p>
     <p>
     QMS Elements (requirements) and CUBE. ISO 9001 is already embedded in AS9100, which is akin to ISO 13485 being embedded. 
     AS9100 conformance would also certify to ISO 9001. An AS9100 certification would also mean compliance to ISO 13485 since 
     its Elements have a direct match-up to ISO 9001. The primary differentiators in QMS are its Regulatory commitments: 
     Medical (FDA), Aerospace (FAA), and Commercial (FCC).
     </p>
    <p>
    Below is an excerpt from the International Aerospace Quality Group (IAQG), which establishes and maintains Aviation, 
    Space & Defense (ASD) QMS Standards. The results and status of any EMS “Certification to AS9100” is maintained by IAQG. 
    A Company can request access to this audit data to familiarize itself with EMS audit processes (best practices), which 
    excludes QMS Element 8.3. Note the “Non-Applicable Clause(s) (Exclusions)” below.
    </p>
    <div>
      <img src= {img11} alt= "International Aerospace Quality Group (IAQG)" />
      </div>
      <p>
        <span className="bold">Audit Purpose</span>  
        <br/>
        A purpose in any audit is for EMS to provide evidence of an effective QMS implementation, which includes 
        Legal obligations. This Evidence may be obtained through observation, measurement, or test and may be conducted 
        on-site, remotely, or a hybrid. This document explains the CUBE’s role in QMS audits. An Audit Plan has been 
        developed for CUBE-EMS, which can also serve as an Internal Audit template.
     </p>
     <p>
        <span className="bold">Automated: ​</span>  
        ​EMS is audited in concert with CUBE. While CUBE mimics an EMS Organization, its most important characteristics 
        are its intelligent Purchase Orders, Documentation, Records, Traceability, and Change Control functions.
     </p>
     <p>
        <span className="bold">Manual:​</span>  
        The flow diagram below presents an audit methodology. Auditors must possess the necessary training, knowledge, competence, and impartiality to conduct inspections. 
        Just as a Receiving Inspector might examine purchased Parts by referring to the Part’s Purchase Order (PO), 
        Bill of Material (BOM), and Drawing; an Auditor would review a similar process by referring to the ISO or 
        SAE published Audit Criteria. An Inspection or Audit by people must have the Criteria from which to measure 
        compliance or conformance. CUBE has purchased SAE’s AS9100 publication for this purpose. 
    </p>
    <div>
        <p>
    <span className="bold" style={{marginLeft:"450px"}}>ON-SITE or REMOTE</span> 
    </p>
      <img src= {img12} alt= "audit methodology" />
      </div>
      <p>
    <span className="bold">Audit Preliminary</span> 
    <br/>
    The following rules may apply before a remote audit:
    <ul className="disc">
        <li>check and record whether a person’s presence is necessary</li>
        <li>coordinate which elements, staff, and Subject Matter Experts (SME)
        will work with the auditor</li>
        <li>obtain, record, and review any access rights or restrictions to
        document access</li>
        <li>encourage the use of International Aerospace Quality Group (IAQG)
        training material and CUBE’s Matrix as a continuous conformance
        Check.</li>
    </ul>
    CUBE utilizes the IAQG to capture EMS Certification trends, accredited CBs (Registrars), audit forms, 
    and general quality management training
    <br/>
    <a href="​https://www.sae.org/iaqg/​">​https://www.sae.org/iaqg/​</a>
    </p>
    <p>
    <span className="bold">Audits Defined in Color</span> 
    <br/>
    CUBE’s main menu has color coded tabs (modules) which represents a department in EMS:
    </p>
    <div>
      <img src= {imgMenu} alt= "CUBE’s main menu" />
      </div>
      <p>SCM (Supply) - Orange</p>
      <img src= {menu1} alt= "SCM (Supply)" />
      <p>MFG (Manufacturing) - Green</p>
      <img src= {menu2} alt= "MFG (Manufacturing)" />

      <p>ENG (Engineering) - Purple</p>
      <img src= {menu3} alt= "ENG (Engineering) - Purple" />

      <p>SGA (Sales) - Blue</p>
      <img src= {menu4} alt= "SGA (Sales) - Blue" />

      <p>EQS (Quality) - Yellow</p>
      <img src= {menu5} alt= "EQS (Quality) - Yellow"/>
    <p>
    An EMS organization chart and personnel assigned in CUBE would be the first glimpse of CUBE for an Auditor. 
    From CUBE’s Navigation bar a User-Auditor may use a mouse to hover over each tab to reveal a dropdown menu of 
    additional CUBE elements and get a quick feel for the Organization and Operations in that EMS company.
    </p>
    <img src= {imgMenu1} alt= "EMS organization chart"/>
    <p>
    As seen in the above gif, CUBE’s Navigation Bar is an EMS Organizational Chart as seen below:
    </p>
      <img src= {menu1} alt= "SCM (Supply)" style={{width:"40%"}} />
      <img src= {menu2} alt= "MFG (Manufacturing)" style={{width:"40%"}} />
      <p>
    <span className="bold" style={{marginLeft:"350px"}}>CUBE NAVIGATION</span> 
    <br/>
    <span className="bold" style={{marginLeft:"300px"}}>Each module is mapped to a typical</span> 
    <br/>
    <span className="bold" style={{marginLeft:"350px"}}>EMS DEPARTMENT</span> 
    </p>
    <ScmMfg style={{marginLeft: "100px", marginTop: "-60px", width:"60%"}} />
    <p>
    <span className="bold">Primary Departments</span> 
    </p>
    <p>
    <span className="bold" style={{color:"#F77F00"}} >ORANGE:</span> 
<br/>
    <span className="bold">Supply or Materials Department​</span> manages Receiving, Inventory, Planning, Purchase Orders, Inspections, Warehouses, Rejects & Buyers.
EMS’s Supply or Materials SOP would merge with CUBE’s <span style={{color:"#F77F00"}} >​SCM</span> .
    </p>
    <p>
    <span className="bold" style={{color:"#18A40E"}}> GREEN:</span> 
<br/>
    <span className="bold">Operations Department</span> ​manages all area of the Product & Service in Work Orders, Transfers, Work Centers, Parts, and Routing.
EMS’s Operations/Production SOP would merge with CUBE’s  <span style={{color:"#18A40E"}} >​MFG</span> .
    </p>
    <p>
    <span className="bold" style={{color:"#FFEF00"}}> YELLOW::</span> 
<br/>
    <span className="bold">Quality Department​</span>manages Quality Control, Quality Assurance, and Certifications to SAE-ISO.
EMS’s Quality SOP is CUBE <span style={{color:"#FFEF00"}} >​EQS</span> .
    </p>
    <p>
    <span className="bold" style={{color:"#13A0FE"}}> BLUE:</span> 
<br/>
    <span className="bold">Sales Department​</span>manages Customers and Contacts, Sales, General Ledger, and Human Resources.
EMS’s Quality SOP is CUBE <span style={{color:"#13A0FE"}} >​SGA</span> .
    </p>
    <p>
    <span className="bold"> Audit Initialization </span> 
    <div>
      <img src= {img13} alt= "Audit Initialization" />
      </div>
    </p>
    <p>
    <span className="bold"> EQS > Human Resources (HR) > Personnel </span> 
    <div>
    <img src={G23} alt="Human Resources" style={{marginLeft: "180px"}} />
    </div>
    These snapshots represent areas where auditors (internal and external) must become familiar. 
    EMS’s Quality Management System begins in this module and auditors should be introduced to CUBE here.
    </p>
    <p>
    <span className="bold" style={{textDecoration:"underline"}} >Note:​</span> All external Audits that may result in certification 
    will ask for a previous EMS audit. That audit should be one conducted by EMS internally, which is an ISO requirement.
    </p>
    <p>
    The image below shows where QMS initialization occurs. CUBE supports not only EMS personnel 
    but also its Customers and Suppliers.
    </p>
    <img src= {img15} alt= "QMS initialization"/>
    <img src= {img16} alt= "Customers and Suppliers"/>
    <img src= {img17} alt= "Customers and Suppliers"/>
    <p>EQS hosts an Audit Plan and a Quality Information Assessment matrix (a partial shown below), which monitors and 
        scores an EMS participation in Quality throughout daily activity.
    </p>
    <p><span className="bold"> Potential Audit Plan</span> </p>
    <p>
    The table below represents planned upgrades in CUBE functionality.
    </p>
    <div>
    <span className="bold" > Status Table for Top Level ISO Clauses/Gap Analysis</span>
    <br/>
    <img src= {img18} alt= "Customers and Suppliers"/>
    </div>
    <span className="bold" > Status Table for Top Level ISO Clauses/Gap Analysis</span>
    <br/>
    <img src= {img19} alt= "Customers and Suppliers"/>
    <p>
    <span className="bold" > EMS QUALITY DEPARTMENT - EQS</span>
    </p>
    <p>
    The Quality Information Assessment (QAI) Matrix above is an editable flat-file (xlsx), which is stored in the 
    Electronic File Cabinet (EFC). This file generally works behind the scenes, but it also has a generic Audit Schedule/Plan 
    and an EMS QMS Self-Assessment Form, which utilizes CUBE’s fields.
    </p>
    <p>

ISO Clause/Elements are monitored automatically in a more detailed matrix behind the scenes. An explanation for 
this automation resides in the EQS > SQC module, which is available from EQS dropdown:
<br/>
<img src= {img20} alt= "Customers and Suppliers"/>
    </p>
    <img src= {img21} alt= "Manual & Automatic Assessments of EMS QMS"/>
    <p>
    <span className="bold" style={{marginLeft: "400px"}} > Sample Scorecard</span>

    <br/>
    <span style={{marginLeft: "300px"}}> Manual & Automatic Assessments of EMS QMS</span>
    <br/>
    <span style={{marginLeft: "350px"}}> (Explanation is available in Help)</span>
    </p>
    <p>
    <span className="bold"> Summary </span>
    <br/>
    External audits from a Certifying Body (CB) are intended to ensure the adequacy and effectiveness of plans, programs, 
    and processes. A periodic quality management review is required for an EMS Registration and is a core management 
    function to maintain conformance to ISO/SAE and compliance with lawful regulations. It assigns corrective actions, 
    determines root causes, closes out actions, or analyzes trends with the report. Management would use the EQS for 
    continuous improvement in QMS while the remaining modules (SCM, MFG, ENG, SGA) sustain the operational records as 
    evidence for that improvement.
    </p>
    <p>
    <span className="bold"> Mandatory Records </span>
    <br/>
    <ul className="dash">
        <li>Maintenance and Calibration of Monitoring and Measuring Competence Records</li>
        <li>Produce & Service Requirements Review</li>
        <li>New Requirements for Product & Service</li>
        <li>Product & Service Characteristics</li>
        <li>Results of Production Process Validation</li>
        <li>Enable Traceability</li>
        <li>Lost, Damaged, or Unuseable Customer Property</li>
        <li>Changes in Product & Service Provision</li>
        <li>Product & Service Conformity and Release</li>
        <li>Nonconformity</li>
        <li>Monitoring Performance</li>
        <li>Internal Audit Program</li>
        <li>Management Review</li>
        <li>N/C Corrective Action System</li>
    </ul>
    </p>
    <p>
    <span className="bold" >QMS Elements Defined </span>
    <br/>
    <span className="bold"> Section 4: Context of the Organization </span> – EMS interested parties are its
Customers (OEMs) and Suppliers (Electronic Parts) and what they demand from their BOM and Drawing. It’s here where an 
EMS Scope statement is required. A Company’s determination of its Scope is a determination of its Audit.
    </p>
    <p>
    <span className="bold"> Section 5: Leadership </span>​ – QMS encourages EMS senior leadership to establish and 
    communicate the EMC Quality Policy and to document their business activities. Their mission is to make Quality (QMS) 
    a high priority in day-to-day business operations.
    </p>
    <p>
    <span className="bold"> Section 6: Planning​ </span>​ – A Plan of Action & Milestones is common for all walks 
    of manufacturing. CUBE not only handles Manufacturing Resource Planning (MRP), it maintains an active Notification system.

    </p>
    <p>
    <span className="bold"> Section 7: Support​  </span>​ – HR Rules & Regulations is all about EMS personnel and 
    a safe work environment: Humidity controls, ESD, Facility Equipment and Machines; along with e-Training, e-comms, 
    and Program Documented information.
    </p>
    <p>
    <span className="bold"> Section 8: Operation </span>​ – All of the requirements to identify, create, preserve, and deliver 
    ECM services are here. CUBE includes aerospace and medical regulatory obligations as well as Program Risk Management, 
    Configuration Management, and Product Safety.
    </p>
    <p>
    <span className="bold"> Section 9: Performance Evaluation </span>​ – EQS has the capability of automated internal 
    audits and presenting information for management review. Processes must be checked for Output as well as Input and by Who.
    </p>
    <p>
    <span className="bold"> Section 10: Improvement​</span>​ – EQS CAPA or Corrective Action System is utilized as an 
    SOP as are the many CUBE Utility functions.
    </p>
    <p>QMS Element 8 (Operations) becomes the manufacturing master manual for 
        EMS in accordance with its SOP and Certification to ISO.
    </p>
    <div>
    <p>
    <span className="bold"> Sample Audit Report / Audit Plan </span>​ 
    </p>
    <img src= {img22} alt= "Audit Plan"/>
    <br/>
    <img src= {img23} alt= "Audit Plan"/>
    <br/>
    <a href="https://www.nsf.org/"> https://www.nsf.org/ </a>
    <br/>
    <img src= {img24} alt= "Audit Plan"/>
     </div>
     <p>
    <span className="bold"> Common Auditee Questions </span>​ 
    </p>
    <ol>
        <li>What are your responsibilities?</li>
        <li>How do you know how to carry them out?</li>
        <li>What kind of training is given to new employees?</li>
        <li>How is the effectiveness of the training evaluated?</li>
        <li>Are training records maintained?</li>
        <li>What are the objectives of your processes?</li>
        <li>What is the quality policy and where is it found?</li>
        <li>Which documents do you use and are they correct?</li>
        <li>What outputs does your process create?</li>
        <li>How are your records maintained?</li>
        <li>How do you ensure that products meet the stated requirements?</li>
        <li>Is customer satisfaction data analyzed?</li>
        <li>How do you ensure that products meet the stated requirements?</li>
        <li>What happens when changes are made to product requirements?</li>
        <li>What are the responsibilities/authorities for dealing with
            non-conformances?
        </li>
        <li>Are there trends in non-conforming products and what's being done about it?</li>
        <li>Is the non-conformance procedure linked to the corrective action process?</li>
        <li>Are employees made aware of the quality policy and objectives?</li>
        <li>Are policies and objectives available and relevant?</li>
        <li>How are quality objectives determined?</li>
        <li>Is there a clear link between the policies and objectives?</li>
        <li>How is progress towards objectives measured and communicated?</li>
        <li>Has the number of customer complaints changed over time?</li>
        <li>What tools are used to identify the causes of complaints?</li>
        <li>How are improvement efforts and successes communicated to
            employees?</li>
    </ol>
    <p>
    <span className="bold"> Audit Checklist </span>​ 
    <br/>
    To see the ISO QMS Audit Checklist, please click on the link below:
    </p>
    <p>
    <a href="https://cubeerp.sharepoint.com/:w:/r/sites/ISO2/_layouts/15/Doc.aspx?sou rcedoc=%7BF17397A5-82CA-4904-99A3-E1197EA70601%7D&file=4.%20IS O_SAE%20Audit%20Checklist.docx&action=default&mobileredirect=true"> 
    https://cubeerp.sharepoint.com/:w:/r/sites/ISO2/_layouts/15/Doc.aspx?sou rcedoc=%7BF17397A5-82CA-4904-99A3-E1197EA70601%7D&file=4.%20IS O_SAE%20Audit%20Checklist.docx&action=default&mobileredirect=true
     </a>
    </p>
    <p>
    <span className="bold"> Audit Checklist </span>​ 
    <br/>
    A substantial cost of EMS Operations comes from the vast number of labor, environmental, 
    and product quality regulations around the globe. Most of this cost is seen in making and maintaining 
    records for an assembly because parts manufactured to any assembly require records of that assembly.
    </p>
    <p>
    CUBE’s application accounts for international laws and shows where EMS management would have responsibility 
    in maintaining its regulatory commitments. For EMS, the most common of all the regulatory scenarios is the 
    application of ITAR, RoHS, Counterfeit Parts, and Conflict Material.
    </p>
    <p>
    “IPC (<a href="http://www.ipc.org/​">http://www.ipc.org/​</a>) has been guiding the electronic interconnection industry through dramatic changes. 
    IPC is the only trade association that brings together all of the players in this industry: designers, 
    board manufacturers, assembly companies, suppliers, and original equipment manufacturers ... IPC supports programs...” 
    CUBE utilizes IPC for its knowledge base, tools, and training. An “IPC Standards Tree” for Electronics Assembly, 
    is shown on the last page of this document.
    </p>
    <p>
    Several government agencies in the Americas, Asia, and Europe are responsible for regulations about 
    the manufacture of electrical and electronic products. Two pipelines exist: Voluntary & Government. 
    This document provides an interactive environment for EMS personnel to understand their unique obligations 
    to their Customers (OEMs). CUBE is the resident information house for EMS Regulatory compliance and ISO 
    conformance as described in the following Block Flow Diagram:
    </p>

    <img src= {img25} alt= "Audit Plan" />
    <br/>
    <img src= {img26} alt= "Audit Plan" />
  
    </div>

  );
}