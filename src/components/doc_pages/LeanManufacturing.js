import React from "react";
import "./Docs.css";
import { ReactComponent as LeanPic } from '../icons/lean.svg';
export default function LeanManufacturing() {
  return (
    <div className="main-block">
      <h2 className="heading">Lean Manufacturing Achieved
        with CUBE</h2>
      <h3 className="sub-heading-1">Introduction</h3>
      <p>
        Lean manufacturing is a production methodology with the goal of minimizing waste and
        maximizing productivity to consistently deliver high quality products on-time. Lean
        manufacturing advocates continuous improvement and total control of the production
        process. The core concepts of Lean Manufacturing focus on value and efficiency, rejecting
        all waste (time, labor, materials, space, etc.) to increase quality and maintain made-to-order
        (MTO) production for repeatable on-time delivery. This practice can also be known as Just-
        In-Time (JIT) Inventory.
      </p>
      <p>
        Manufacturers using JIT can benefit from smaller physical warehouse space, lower inventory
        holding costs, and inventory turn rate. This simultaneously improves cash flow and reduces
        dead or obsolete stock. The reduction of waste is an imperative practice for the successful
        application of Lean Manufacturing. Defects, overproduction, excess inventory, and extra
        processing (time/manual labor, purchasing/price, etc.) can all be considered types of waste.
      </p>
      <p>
        With all the benefits that come with JIT, there are certain requirements for Lean
        Manufacturing to work properly. As a machine only runs when all gears are moving in
        unison, all departments must coordinate and cooperate to maintain efficiency throughout
        the entire manufacturing process. EMS company must have total inventory visibility and
        control, and purchasers must have reliable suppliers and a stable supply of parts. Finally,
        EMS companies need a software system to properly execute Lean Manufacturing.
      </p>
      <p>
      CUBE is designed to offer 4 main benefits: 
      </p>
      <ol>
           <li>Maximize purchasing power for lower parts cost </li>
           <li>Reduce the number of POs and manual labor required for purchasers </li>
           <li>Reduce warehouse space and labor in stockroom </li>
           <li>Reduce processes steps and labor time to ensure JIT activities </li>
            </ol>
            <p>
            CUBE has the tools to enable EMS companies to operate with the best practices for Lean Manufacturing.
            Each part of our system has been specifically designed to optimize performance and financial operations for the business.  
            Here, we will define how EMS companies can achieve 
            Lean Manufacturing throughout the entire manufacturing process by using the CUBE system. 
      </p> 
      <p> 
           <span className="bold"> CUBE’s Lean Manufacturing Process Flow </span> (below) features the main areas 
            where CUBE was designed to boost performance for EMS companies.  
      </p> 
      <div >
      < LeanPic className="pic" />
      </div>
      <h3 className="sub-heading-1">Procurement</h3>  
      <p>
        The most common challenge that EMS companies face in procurement is the labor, part cost,
        and part availability required to handle multiple purchasing requirements from customers.
        The current process of purchasing requires immense amounts of manual labor to fulfill the 
        requirements of each customer - an EMS company often places multiple orders to fulfill customer demands.  
        Each customer has different requirements, which leads to the same parts often being purchased hundreds of different times. 
        The cost of labor and increased pricing for ordering 
        the same part in small quantities causes higher pricing for customers and reduced gross margin.  
      </p>
      <p>
        CUBE solves this problem with its customized <span className="bold"> Material Requirements Planning (MRP) </span>
        and a unique <span className="bold"> Part Number consolidation method </span> for like parts for all customers.  
        CUBE’s distinct part number merging system consolidates all like parts into one common part number, 
        allowing the MRP to consolidate purchasing requirements from customer orders (Sales Orders). 
        MRP can merge multiple jobs with the same parts to optimize order quantity and increase buying power for purchasers. 
        This cuts down the amount of Purchase Orders (POs) issued, saving purchasers immense amounts of labor and cost.   
      </p>
      <p>
        Consolidating material and purchase requirements isn’t the only purpose of CUBE’s MRP. 
        Purchasers can also boost their purchasing power by establishing <span className="bold">  Supplier Contracts. </span>
        The MRP recognizes patterns of components used throughout multiple jobs and recommends possible contracts for those parts. 
        For materials under contract, the buyer is able verify and automatically issue a 
        PO allowing purchasers to save time and labor on parts frequently used. For all other orders, 
        MRP suggests POs that purchasers can review, edit, and approve with the built-in PO Approval Workflow.     
        CUBE’s MRP drives Lean Manufacturing practices to ensure that purchases are made to reduce overall costs, reduce manual labor, and reduce handling of components in each order. 
      </p>
      <p>
        CUBE’s MRP drives Lean Manufacturing practices to ensure that purchases are made to reduce overall costs, 
        reduce manual labor, and reduce handling of components in each order. 
      </p> 
      <br/>
      <p>      
      <span className="bold"> MRP and PO Breakdown </span>
      </p>
      <ul className="disc">
           <li>CUBE’s exclusive part numbering system merges all customer component requirements to 
             gain purchasing power and reduce time required to acquire parts </li>
           <li>MRP creates one PO to consolidate requirements for multiple orders and multiple customer</li>
           <li>Recommends adding frequently purchased parts to Supplier Contracts, which allows CUBE to automatically issue POs when parts are needed  </li>
           <li>Recognizes both Customer Consigned (request parts from customer) and Buy-to-Consigned (buying service) components and takes appropriate actions </li>
           <li>Has the ability to aggregate requirements by Work Order (WO) for JIT movement of material </li>
            </ul>

            <h3 className="sub-heading-1">Inventory Control Management </h3>
      <p>
       Inventory Control can make or break an EMS company as this part account for seventy percent or more of the total cost. 
       Between inventory turns, use of financial credit lines, and the management of warehouse space and labor, 
       optimizing this area can undoubtedly strengthen the entire business. CUBE allows for the standard 
       material management practices currently used – receiving and inspecting parts, storing the parts in a warehouse, 
       and then kitting and consuming the parts. But the real benefit CUBE offers EMS companies is the targeted but 
       simple approach designed to truly carry out JIT inventory. 
      </p>
      <p>
      The ability to merge and purchase like parts sets the stage for inventory control, 
      beginning at the time of receiving - <span className="bold">parts can be pegged directly to the associated WO </span> with the creation of the PO. 
      This simple solution allows parts to be kitted immediately after they are inspected and received, 
      completely bypassing the warehouse and going straight to the production floor. 
      The <span className="bold"> WO Kitting </span> module can accommodate single or multiple kits for a part as well as assigning a reel to multiple WO’s. 
      </p>
      <p>       
      But inventory control encompasses more than receiving, storing, and kitting. 
      EMS companies often work with mission critical products, which makes material tracking and control 
      an imperative part of the process. CUBE introduces a <span className="bold">  Material Tracking & Control (MTC) </span>feature, 
      which assigns a unique MTC code to each individual part that is received. The MTC code is a placeholder 
      that stores all historical information about that specific part, such as lot code, date code, 
      supplier information and purchasing details, etc. MTC is a powerful tool that gives EMS companies 
      total visibility of all part info and history within each WO. 
      </p>
      <p>
      CUBE promotes Lean Manufacturing at first contact between material and manufacturer, 
      eliminating the need for a large warehouse space and physical inventory for faster delivery time and reduced handling. 
      </p>
      <br />  
      <p>      
      <span className="bold"> Receiving/Inspection, Inventory Warehouse, and WO Kitting </span>
      </p>
      <ul className="disc">
           <li>Using CUBE’s material consolidation method, like parts are received and inspected once instead of multiple times  </li>
           <li>Parts can be pegged (from the PO) directly to a WO once they are received, greatly reducing the need for physical inventory and warehouse storage </li>
           <li>Each part received into CUBE can be assigned a unique Material Tracking & Control (MTC) code that follows and records the full history of a part throughout its life within the system  </li>
            </ul>
            <br />
            <h3 className="sub-heading-1">Production </h3>
      <p>
        The steady flow of product on the shop floor is essential to carry out JIT practices throughout the production process. 
        EMS companies find themselves in a unique position, unable to implement traditional capacity planning 
        that OEM manufacturers often use. 
        CUBE presents a tailored approach of production scheduling to explicitly accommodate the EMS industry.  
      </p>
      <p>
      CUBE’s <span className="bold"> Dynamic Production Scheduling (DST) </span> continues the JIT flow established as products hit the production floor. 
      DST is designed to adapt quickly to the sudden changes which frequently occur in electronics contract manufacturing, 
      and the concept is simple – each job is prioritized based on the WO due date. As a WO is created, 
      DST automatically prioritizes jobs and schedules Work Centers (WC) to satisfy the due date, 
      and users can manually reprioritize jobs at the WC to adapt to any sudden changes such as unplanned shortage or 
      ECO or hot orders that are created. To maximize its performance, DST also uses information such as WC run and setup times, 
      Job Status, and SO shipping schedule in addition to the WO due date to constantly calculate the priority of each job and 
      maintain steady production flow and consistent delivery of orders.  
      </p>
      <p>       
      With dynamic scheduling achieved through the DST, 
      CUBE then presents the <span className="bold"> Manufacturing Operations Control (MOC) </span>module, 
      which allows individual users to be assigned to a specific WC. 
      Through the MOC, users can also directly communicate across WCs, 
      transfer jobs, and share/update all relevant information and electronic documentation. 
      The MTC code assigned to each part during the receiving stage yields total and accurate 
      visibility of material consumption with barcode scanning - parts are consumed immediately and inventory adjusted as 
      they are being used on the shop floor. Parts can be scanned in each WC until the product is completed and moved to FGI, 
      ready to be shipped to the customer. CUBE persists the practice of Lean Manufacturing on the production floor until the product is completed and shipped. 
      </p>
       <br />
      <p>      
      <span className="bold"> Dynamic Production Scheduling (DST) & WO Production  </span>
      </p>
      <ul className="disc">
           <li>Each job is scheduled based on prioritization by the demand of each customer. Priority of jobs can be automatically assigned or manually adjusted for sudden production changes   </li>
           <li>Track material consumption on the Shop Floor in real-time with the MTC code to persist JIT practices  </li>
           <li>Barcode scanning allow components to be scanned and instantly consumed while they are moving through each Work Center (WC)  </li>
           <li>Creates and maintains a steady production flow and ensures consistent deliver of orders on time </li>
            </ul>
            <p>
            Overall, Lean Manufacturing has proved over decades that it can greatly benefit 
            manufacturers to be more efficient, producing more high-quality products on time. 
            The four most important requirements for any manufacturer to successfully practice JIT inventory are: 
      </p>
      <ol>
           <li> <span className="bold"> Commitment </span>from entire management team to enforce JIT throughout every process  </li>
           <li> <span className="bold">Coordination</span> and <span className="bold">Cooperation </span>of all departments to work for overall efficiency and best practices </li>
           <li>Acceptance of <span className="bold">Change</span> to adopt new and better ways of performing. Willingness to think differently, and to unlock sustained value by moving on from the “Legacy ERP of the Future” </li>
           <li>Tools to support and enable the company to implement and practice JIT. To see how this can be accomplished in CUBE, please review the supporting documents and training videos in the CUBE system.   </li>
            </ol>
            <p>
            CUBE provides the tools and support necessary for an EMS company to make <span className="bold">Lean Manufacturing</span> a reality. 
      </p>
      <ol>
           <li>CUBE Part Number System  </li>
           <li>MTC for EMS Industry </li>
           </ol>  
    </div>
  );
}