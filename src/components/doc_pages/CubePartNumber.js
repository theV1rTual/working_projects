import React from "react";
import "./Docs.css";
import { ReactComponent as PartNoDesc } from '../pics/PartNoDesc.svg';
import { ReactComponent as Customer } from '../pics/customer.svg';
import { ReactComponent as Part } from '../pics/part.svg';
import { ReactComponent as StdERP } from '../pics/stdERP.svg';
import { ReactComponent as PartConfig } from '../pics/partConfig.svg';
import { ReactComponent as Pic1 } from '../pics/190.svg';
import { ReactComponent as Pic2 } from '../pics/abc.svg';
import { ReactComponent as Pic3 } from '../pics/multi.svg';
import { ReactComponent as Pic4 } from '../pics/buyMake.svg';
import { ReactComponent as Pic5 } from '../pics/Ex.svg';
import { ReactComponent as Pic6 } from '../pics/internal.svg';
import { ReactComponent as Pic7 } from '../pics/mrp.svg';
import { ReactComponent as Pic8 } from '../pics/so.svg';
import { ReactComponent as Pic9 } from '../pics/contract.svg';
import { ReactComponent as Pic10 } from '../pics/RecIns.svg';
import { ReactComponent as Pic11 } from '../pics/Kitting.svg';
import partNumber from '../pics/partNumber.png';


export default function CubePartNumber() {
    
  return (
    <div className="main-block">
      <h2 className="heading-1">Standard ERP Part Numbering System for the EMS Industry</h2>
      <h3 className="sub-heading-1">Introduction</h3>
      <p>
        <br />
        For decades, EMS companies have used standard ERP systems to manage their
manufacturing and procurement needs.  Manufacturing ERP providers help manage
material and business operations for various manufacturing industries. These industries
include EMS companies who use an ERP system for material planning, material acquisition,
inventory control, and work order kits. manex offers an ERP system specifically tailored to
cater to the unique needs of the EMS industry in electronic manufacturing.  This document
will demonstrate the current method of part numbering used by OEMs and EMS companies
using a standard manufacturing ERP system.
      </p>
      <br />
      <h3 className="sub-heading-1">OEM & EMS In Electronic Manufacturing</h3>
      <p>
      <br />
      In order to identify what makes the EMS industry unique, we must first define the roles and
relationship between Electronics Original Equipment Manufacturers (OEMs) and Electronics
Manufacturing Service (EMS) companies in electronic manufacturing.
      </p>
      <p>
      While OEMs and EMS companies both provide electronic products for their customers,
their roles are clearly defined – OEMs design a product through Research & Development
(R&D) and EMS companies assemble or manufacture the product designed by the OEM. In
short, if an OEM needs to produce an electronic product, then an EMS company will fulfill
their manufacturing needs.
      </p>
      <p>
      The image below shows the business flows and relationship between an OEM and EMS
company.
      </p>
      <div>
      <img src= {partNumber} alt= "Part Number System" />
      </div>
          <p>
            Because the actual assembly of the product is the responsibility of the EMS, these
companies require further detailed and concentrated solutions for their complex
manufacturing processes in the ERP system to serve multiple OEMs. While an OEM
primarily designs and sells a final product, EMS companies primarily deal with
Semiconductor Packaging, Components, Cables, PCBA Assemblies, and Mechanical
Assembly - with each EMS customer having their own part number system for the same
parts used by other customers. An EMS’s planning, purchasing, receipts, inventory, and WO
kitting become extraordinary tasks for management. EMS companies need a modified ERP
system for Supply Chain Management (SCM) systems to effectively conduct their business
operations.
      </p> 
      <br />
      <h3 className="sub-heading-1">Standard ERP Part System</h3>
      <p> 
      Standard ERP providers use a part numbering system that consists of a Part Number (PN)
and a Part Description. These two methods (part number and description) are designed so
both machines and people are able to identify a part:
      </p> 
      <div >
      < PartNoDesc className="part" />
      </div>
      <p>
      This part identification method is used
by both OEM and EMS companies and
will be examined in the sections below.
      </p>
      <p>
      <span className="bold"> Part Number </span>
      </p>
      <p>
      Since EMS companies work multiple
jobs for various OEMs, they require a method to ensure that parts are always unique and
identifiable by each customer. Standard ERP providers usually use a customer prefix in
front of the part number to associate them to each customer - this method is the current
standard to manage part numbering for both OEM and EMS companies. 
      </p>
      <p>
      The examples below show how an EMS company creates their part numbers for each
customer using this current standard method. 
      </p>
      <div >
      < Customer className="part" />
      </div>
      <p>
      <span className="bold"> Part Description  </span>
      </p>
      <p>
      A standard ERP system identifies the Part Description as a free text field. 
      Users are free to enter the description in any particular order - with no specific structure or templates to keep a consistent method. 
      This method is used for all parts that are received and put into inventory for manufacturing or distribution. 
      </p>
      <p>
      A standard ERP part description is displayed below using the example of a Surface Mount Resistor. 
      </p>
      <div >
      < Part className="part" />
      </div>
      <p>
      Typically, a part description will hold information such as the class or type of the part, tolerance, 
      packaging, etc. With a free text field, the descriptions for one part could be different based on the user or 
      the information that is available when entering the part. 
      </p>
      <p>The example below shows how part descriptions for one part could be defined differently using this method. </p>
      <div >
      < StdERP className="part" />
      </div>
      <p>
      The Part Number and Description are the two main pieces of information that are used in the majority of 
      ERP systems to identify part records. A limited number of ERP providers may also include Manufacturer and 
      Manufacturer Part Number (MPN) in the Bill of Material (BOM) as reference. 
      </p>
      <p>
      Because an OEM designs and sells their own products, they only require one part number to identify parts and 
      one stock location to manage their inventory. EMS companies, however, build electronic products for their customers (OEM). 
      If an EMS only has one OEM customer, the standard method using Part Number and 
      Description satisfies their manufacturing needs. However, for every new customer an EMS company acquires, 
      all parts used for that customer are entered into a standard ERP system as a new part, with new warehouse 
      locations assigned to each of those parts. Using the standard part identification method, an EMS can easily 
      be overwhelmed by the number of parts in their database and increased warehouse space.      
      </p>
      <p>
      manex provides an ERP system exclusively for EMS companies and specializes in providing software 
      for the electronic contract manufacturing industry. Based on the current standard, we have identified 
      five major areas that can be optimized for EMS companies to maximize efficiency and profit margins.      
      </p>
      <ol>
            <li><span className="bold">  Part Number Database </span> – Adding a set of new part numbers for each customer causes many 
            EMS companies to have a vastly oversized parts database within their system. 
            Obsolete parts are frequently unnoticed and remain in the database while the same parts are entered 
            into the system multiple times, each using a different part number based on different customers. 
            EMS companies with 30 or more customers could easily have over 200,000-part numbers in their 
            system using the standard part numbering method. Maintaining a part number database while preventing errors 
            and preserving customer data security is a significant daily challenge for EMS companies.  </li>
            <li><span className="bold">  Consolidate Purchase Requirements </span> – Consolidating purchases using the standard part numbering method 
            becomes a difficult and often distant reality for EMS companies working multiple jobs for multiple customers.
             Purchasers are subjected to purchasing many of the same parts separately and in smaller quantities. 
             This results in constant strain for the EMS company managing their finances  </li>
            <li><span className="bold">  Purchase Order </span> – For every customer, an EMS is obligated to fulfill 
            specific customer requirements for their product. Purchasers routinely create multiple Purchase Orders (POs) 
            in order to satisfy the specifications for each customer’s order. The creation of more POs demands extended time 
            and labor from purchasers attempting to meet all customer requirements and increases the risk of human error. </li>
            <li><span className="bold">  Receiving and Inspection  </span> – The challenges in merging all customer purchase requirements 
            directly affect the receiving and inspection stage. Parts are inspected and received multiple times in smaller packages, 
            increasing labor time and the risk of human error. By optimizing part numbers and therefore reducing the number of POs,
             receiving and inspection is naturally simplified and more efficient.  </li>
            <li><span className="bold">  Warehouse/Inventory Control </span> – Warehousing and Inventory Control is the final area of 
            Supply Chain Management that is affected by part numbering. EMS companies experience the need for larger warehouse spaces 
            for two reasons: 
            <ul className="none">
                  <li> <span className="bold">1) </span> Parts are inspected and received in smaller amounts and at separate times, meaning 	
                        they are also stored in different locations at separate times  </li>
                  <li> <span className="bold">2) </span>  Same parts may use different part numbers, making it seem as though they are different parts. 
                        This also means that same parts are often stored in separate warehouse 	locations.  </li>
            </ul>
              </li>
      </ol>
      <p>
      Optimizing an EMS company’s part numbering method results in reduced warehouse space and the labor required to maintain a warehouse. 
      </p>
      <p>
      EMS companies today operate with the existing challenges of using standard ERP systems designed for the general manufacturing 
      industry. With the right tools and an ERP software that caters to their specific needs, EMS companies can greatly increase 
      their profit margin by reducing labor costs, warehouse space, and material acquisition costs. 
      CUBE was designed explicitly for the EMS industry - with the goals of automating various tasks to relieve the daily stress 
      involved with electronics contract manufacturing and to maximize profit margin and customer satisfaction for EMS companies. The next document will explore the variety of ways CUBE helps to accomplish this goal. 
      </p>
      <h2 className="heading-1">CUBE ERP Part Number System </h2>
      <p>
      The CUBE ERP Part Number system is designed to help EMS companies optimize in the areas from Material Planning, 
      Procurement to Finished Goods. Material Supply Chain goal is to significantly improve buying power, reduce labor 
      in each step of the process, reduce warehouse space, and to free up financial resources' redeployment for stability 
      and growth. This document will demonstrate how this is achieved by use of the CUBE Part Number System. 
      </p>
      <p> CUBE uses a unique but simple part schema for Part Number and Part Description to help EMS companies merge all like parts 
            for all customers and requirements for each customer. The diagram below shows how the CUBE Part Numbering System is organized. 
            </p>
            <div >
      < PartConfig className="part" style={{marginLeft: "250px"}}/>
      </div>
      <p>
      The following sections will examine the CUBE part schema and the reasonings behind its design. 
      </p>
      <p>
      <span className="bold"> CUBE Part Number  </span>  </p>
      <p>
      CUBEs Part Number Method utilizes <span className="bold">Part Class</span> and <span className="bold">Part Type </span>  to automatically configure and maintain the 
      Internal Inventory Part Numbers in the Part Master.  The class and type classifications allow users to 
      section large inventories into groups and sub-groups to sort and identify parts. Categorizing class and 
      types into smaller groups makes it easier to locate an item, identify a part, and to view by classes. 
      CUBE guides users to use a consistent format when populating descriptions for parts by providing default 
      information and/or templates. CUBE also uses automatic part number generation so users only have to select 
      a part class and type with a dropdown menu. This method significantly simplifies the process for users while 
      maintaining a part number system that makes it easy for users to find and recognize parts. 
      </p>
      <p>Users have the ability to automatically assign part numbers to all new items added to the Part Master (PM) - 
            eliminating the need of a separate logbook of assigned numbers. Each part class is assigned a prefix to the 
            part number, based on the part class and type information established in the setup section. CUBE’s pre-loaded 
            configuration and prefixes provides end users with specific and concise information in a compact and simple 
            part number for ease of use. </p>
            <p>This Class/Type Library is based on EMS industry best practices and contains preloaded default information 
                  (unit of measure, warehouse location, order policy, etc.) that is automatically populated into a new inventory 
                  part once the user specifies the Class and Type. An example of how BUY parts are created in CUBE’s part numbering 
                  system is shown below.  </p>
            <p>Common parts like Surface Mount CAPS are set to Auto Number: </p>
            <div>
      < Pic1 className="part" style={{marginLeft: "150px"}} />
      </div>
      <p>
      BUY parts use a three-character Class Prefix at the front of the part number while the last six digits are 
      auto generated by the system. This ensures that parts are always uniform and easily identifiable within the system. 
      Common parts like surface mount resistors, capacitors, diodes, etc. are preloaded into the system (Part Master database) 
      with the installation of CUBE. This parts database was created by manex to help EMS companies bypass the months to more 
      than a year of time and labor required to create these parts within the system. 
      </p>
      <p>For all customer MAKE, PHANTOM, fabricated, or custom parts like PCBs, the Customer Part or Product Number (CPN) is used 
            as the Internal Part Number (IPN), with a Customer Prefix at the front of the part number.  
            </p>
            < Pic2 className="part" style={{marginLeft: "150px"}} /> 
       <p>Using this approach allows EMS companies to use the same number that their OEM customer uses to identify the 
             part being built. Each of these parts are also assigned a Class and Type, but use a Customer Prefix instead of a 
             Class Prefix to group these types of parts by customer. The three-character Customer Prefix is placed 
             in front of the product number (customer prefix code is loaded from the customer information module), 
             then this code is automatically removed in the Packing List (shipping)/invoice when the product is shipped. 
              </p> 
              <p>CUBE’s Part Numbering system is customized for EMS companies to gain these benefits: </p>   
              <ul className="disc">
                    <li>
                    Each part is defined with a class (group) and type (sub-group),
                     which produces part records that are substantially more uniform and easily identifiable within the database 
                    </li>
                    <li>
                    Part numbering is automated to ensure that all parts created within the inventory database are unique and 
                    have consistent structure (can be changed in settings to use manual method) 
                    </li>
                    <li>
                    Common parts like resistors, surface mount caps, ICs, etc. 
                    are preloaded into the inventory database, eliminating a considerable amount of manual labor 
                    </li>
                    <li>MAKE, PHANTOM, fabricated, and customer custom parts use a customer prefix in the part number, 
                          making it easy to maintain because each part is grouped by customer </li>
              </ul>
              <p>
      <span className="bold"> CUBE Part Description   </span>  </p>
      <p>
      CUBE’s Multi-Description field is defined by three parts:  
      </p>
      <ol>
            <li>Part Class </li>
            <li>Part Type </li>
            <li>Free text field for description  </li>
      </ol>
      <p>
      The free-text description field used in CUBE works differently than a standard ERP system as it provides a 
      format/template for users to follow when populating the free-text description. 
      </p>
      <p>
      An example of CUBE’s Part Description is shown below: 
      </p>
      < Pic3 className="part" style={{marginLeft: "150px"}} /> 
      <p>
      Formatting the free-text description field in addition to the Class and Type template allows users to 
      create parts in a uniform and consistent way while making it easier to sort and find parts within the database. 
      The creation of a new part can be broken down into three steps: 
      </p>
      <ol>
            <li>User selects a Part Class from a dropdown menu  </li>
            <li>User selects a Part Type from a dropdown menu  </li>
            <li>Based on the Class/Type selected, CUBE displays a Description Format for users to follow when entering description information in the free text field  </li>
      </ol>
      <p>CUBE’s Part Description was designed to help automate the process while making it easier for users to create and find parts. 
      </p>
      <p>Shown below are some examples of how BUY part descriptions and MAKE part descriptions can be loaded using CUBE’s Description template: 
      </p>
      < Pic4 className="part" style={{marginLeft: "150px"}} /> 
      <p>
      CUBE’s Part Description fields are intended to offer the following advantages for EMS companies: 
      </p>
      <ul className="disc">
            <li>Part Description is split into three parts; Part Class, Part Type, and a third description field so people can easily recognize parts within the inventory database </li>
            <li>Data Entry is simplified for users with dropdown menus to select Part Class and Part Type </li>
            <li>Sort inventory part records by Class and/or Type to view all related category of parts together  </li>
            <li>Makes part numbering easier to use for both people and machines through intelligence </li>
      </ul>
      <p>
      <span className="bold"> Approved Manufacturer List (AML) </span> 
       </p>
      <p>
      The CUBE Part Number and Description are important pieces of the part numbering schema, 
      but this method is only valuable if used properly for the EMS industry. Arguably the biggest challenge 
      EMS companies face is the aggregation of purchasing requirements for all customers, followed by ability 
      to scrub the Approved Manufacturer Lists (AMLs) for the highest optimum quantity purchase. EMS companies 
      typically require a tremendous amount of manual labor to ensure that the correct AML components are purchased 
      determined by their OEM customers.  
      </p>
      <p>To help overcome this challenge, CUBE has implemented Manufacturer and Manufacturer Part Number (MPN) fields into the foundation of the CUBE Part Numbering System. 
            The image below displays how manufacturer information is defined under a surface mount capacitor. </p>
            < Pic5 className="part" style={{marginLeft: "150px"}} /> 
            <p>
            Each part record that is added to a Bill of Material (BOM) can be sorted by approved AML for each customer and/or assembly. When CUBE’s MRP runs through its calculations, it gives suggestions based on the requirements from each customer down to the manufacturers and manufacturer part numbers that are approved.  MRP checks each approved manufacturer and gives the EMS the best options to satisfy the total purchasing requirements for each of their customers. 
            EMS companies have accurate visibility for all customer requirements by AML and offers a high level of parts aggregation. 
            </p>
            <p>
            The AML within the CUBE Part Numbering system provides the following advantages: 
            </p>
            <ul className="disc">
            <li>All approved manufacturers and manufacturer part numbers are listed under each CUBE Part Number</li>
            <li>All Common parts like resistors, capacitors, ICs, diodes, and others have the manufacturer list pre-established upon installation of the CUBE system   </li>
            <li>EMS companies have visibility over which manufacturers are approved on a BOM based on each customer’s AML   </li>
            <li>MRP provides purchase requirements by Manufacturers and Manufacturer Part Numbers that are optimized for highest quantities </li>
            <li>Purchasing departments can order parts by the manufacturer when creating the PO, automatically saving an 
                  EMS significant amounts of labor in tracking down AMLs used by customers in each assembly </li>
      </ul> 
      <p>
      <span className="bold"> Customer Part Number  </span> 
       </p>
       <p>When an OEM customer defines specific parts for their product, the OEM will use their Internal Part Number (IPN) to help the EMS identify the part. For EMS companies who work with multiple OEM customers, CUBE implements a Customer Part Number (CPN) into the part numbering schema. CPNs from each customer are grouped under a common IPN for EMS companies to simplify and organize their part records.
            CPNs are used only as a reference to communicate with each OEM customer for Customer Consigned Inventory and the BOM. 
            </p>
            <p>The diagram below shows an example of how a customer part number is identified in the CUBE part numbering system. </p>
            < Pic6 className="part" style={{marginLeft: "150px"}} /> 
      <p>Under the CUBE IPN, an EMS can see all AML defined by the OEM customer. When the part is used on a BOM, CUBE shows each approved manufacturer under the BOM, ensuring that the correct manufacturers are used when ordering components. </p>
      <p>Customer Part Numbers within the CUBE Part Numbering system provides the following advantages: </p>
      <ul className="disc">
            <li>CUBE groups customer parts for each OEM under the CUBE IPN to use as reference when communicating with the OEM customer </li>
            <li>Internal parts lists are easier to maintain to keep track of all customer requirements </li>
            <li>Approved manufacturers are displayed on the BOM based on the OEM’s requirements, reducing the amount of labor involved for EMS companies to keep track of this information </li>
            <li>Identify which customers are using the same part for cross referencing and acquisition </li>
            </ul>
            <p>With CUBE, EMS companies can consolidate purchasing requirements from their customers to maximize profit margin and 
                  improve buying power, reduce manual labor involved from purchasing to receiving and inspection, reduce warehouse 
                  space and labor required to maintain warehouse space, and free up bank line of credit for other growth and to automate 
                  their business. The next section of the document will demonstrate how each of the areas of opportunity 
                  can be optimized through CUBE’s part numbering system as a business case study. 
                  </p>
                  <ol>
                        <li>Part Number Database </li>
                        <li>Consolidating Purchase Requirements </li>
                        <li>Purchase Orders </li>
                        <li>Receiving and Inspection </li>
                        <li>Warehouse/Inventory Control </li>
                  </ol>
                  <h3 className="sub-heading-1">Part Number Database</h3> 
        <div className="section-3-1">  
        <p>On average, it takes about:</p>
        <ul className="no-style">
       <li> 2-3 months for an EMS company to create a Part Class/Type database </li>
       <li> Up to 1 year to create a Part Number database for electronic and mechanical parts </li>
       <br/>
       <li>We found this was overwhelming for an average EMS company and made it difficult for them to take advantage of CUBE’s ability to comsolidate material
       </li>
       <br/>
       <li>manex took on this endeavor to create the entire part class and type structure along with a commonly used part number database</li>
       <br/>
       <li>This database is now included as a part of the CUBE system implementation</li>
       <br/><li>To fully take advantage of the Part Class/Type and Part Number database, CUBE also provides a BOM import module to load and scrub customer BOMs</li>
       <br/><li>It typically takes hours to days for an EMS to create a BOM. By using the CUBE BOM Import module, a new BOM can be created within 2-3 hours</li>
       
       </ul>
       </div>
       <br/>
       <h3 className="sub-heading-1">Planning for Procurement</h3> 
       <p><span className="bold"> Sales Orders by Customer </span></p>
       < Pic8 className="part" /> 
       <br/>
       < Pic7 className="part" /> 
       <h3 className="sub-heading-1">Procurement</h3> 
       <p><span className="bold"> Contract Management</span></p>
       <div className="section-3-3"> 
       < Pic9 className="part" /> 
       </div>
       <br/>
       <h3 className="sub-heading-1">Inventory Management</h3> 
       <div className="section-3-4"> 
       < Pic10 style={{paddingLeft:"20px"}}/> 
       < Pic11  style={{paddingLeft:"20px"}}/> 
       </div>
      </div>
  );
}