import React from "react";
import "./Docs.css";
import { ReactComponent as CubeLogo } from '../pics/cube_logo.svg';
export default function SystemDataSecurity() {
  return (
    <div className="main-block">
      <h2 className="heading-1" > System User and Data Security </h2> 
      <p>
      The new age of connected technology brings new opportunities - but at the same time, it
can also bring peril with potentially compromised data within a company. For EMS,
customers are more sensitive to what kind of data and how their suppliers protect
confidential information in their ERP and MES systems. To this end, OEM customers
demand and want proof of how EMS secures their data, who’s allowed access to their data,
and how they protect and prevent data leakage, theft, or alteration. </p>
<p><span className="bold" style={{color: "#13A0FE"}}> Who sets the stage and govern information cyber-security?   </span> </p>
 <p>The definition, framework, and process are offered by two primary industry oversight agencies. 
     They are National Institute of Standards and Technology (NIST) and the International Organization 
     for Standardization (ISO) - they provide the framework for information security. Most commonly, the NIST
      Cybersecurity Framework is compared to ISO 27001: specification for an information security management system (ISMS). 
</p>
NIST 800-171 / CMMC is more security-control-driven with a variety of groups to facilitate 
best practices working with the DoD. ISO 27001, on the other hand, is less technical but more risk-focused for businesses.
 A common misconception is that an EMS must choose between NIST or ISO, or that one is better than the other. 
 In reality, they can both be used in by EMS as they are synergistic -both are good for data security, risk assessments,
  and security programs.  
<p>Many organizations are turning to Control Objectives for Information and Related Technology (COBIT) as a means 
    of managing the multiple frameworks. COBIT helps EMS bring standards, governance, and process to cybersecurity. 
    The ultimate goal is to provide actionable risk management to an EMS’s critical infrastructure. 
</p>
<p><span className="bold" style={{color: "#13A0FE"}}> NIST 800-171 / CMMC  </span> </p>
<p>The NIST 800-171 is a set of documents that describe computer security policies, procedures, and guidelines. 
    NIST (National Institute of Standards and Technology) is a unit of the Commerce Department. NIST 800 
    Series publications are methods for optimizing IT security and networks in a proactive manner. 
    The publications cover all NIST-recommended procedures and criteria for assessing and documenting threats 
    and vulnerabilities and for implementing security measures to minimize risk. The publications can be useful 
    as guidelines for enforcement of security rules and as legal references in case of litigation involving security issues. 
    </p>
    <p>NIST 800-171 (not linked to federal networks) is a subset of NIST 800-53 (linked to a federal system) and 
        intended to be simpler to implement than NIST 800-53.  The only requirement is the Basic section. DFARS
         has added criteria for the NIST 800-171 / CMMC. The process of becoming NIST 800-171 “compliant” 
         is to validate that controls are in place and operational. Gap assessment can identify gaps and 
         remediation effort will get an EMS to “compliant.” If EMS needs to “prove” it more formally, a 
         first-party or third-party audit may be necessary.  
         </p>
         <p>
         For ISO 27001 certified EMS, the above process should be familiar -do a Gap Assessment, 
         Gap Remediate, and then validate the effectiveness of the 800-171 implementation during 
         the Internal ISMS Audit. During the next ISO 27001 Surveillance Audit, the Registrar will in 
         effect be “certifying” the NIST 800-171 implementation. 
         </p>
         <p><span className="bold"> Understanding the Framework of NIST 800-171  </span> </p>
<p>A checklist is important in the process to compliant/certification and maintaining the NIST 800-171. 
    The new standards encompass 14 categories of data security requirements, and each of those categories
     includes a series of sub-standards. In total, it contains 110 practices or controls, all of which require compliance. 
     </p>
<p>The 14 categories are: </p>
<ul>
    <li>Access Control </li> <br/>
    <li>Audit and Accountability </li><br/>
    <li>Awareness and Training </li><br/>
    <li>Configuration Management </li><br/>
    <li>Identification and Authentication </li><br/>
    <li>Incident Response </li><br/>
    <li>Maintenance </li><br/>
    <li>Media Protection </li><br/>
    <li>Physical Protection </li><br/>
    <li>Personnel Security </li><br/>
    <li>Risk Assessment </li><br/>
    <li>Security Assessment </li><br/>
    <li>System and Communications Protection </li><br/>
    <li>System and Information Integrity </li><br/>
</ul>
<p><span className="bold"> Follow NIST 800-171 Compliance Checklist </span> </p>
<p>To develop and maintain compliance, experts suggest following a NIST 800-171 checklist 
    to ensure a thorough review for implementation of the standard, and they are as follows: </p>
    <ol>
        <li> <span className="bold" style={{fontStyle:"italic"}}> Identify the relevant data</span>
            <p>Start the process by identifying the relevant CUI data held by the company.
                 Not all company data is CUI so clarify which is truly ‘CUI’ and where it lives within the system. 
                 Finding CUI can be challenging because it requires a whole system analysis, including all hardware 
                 (especially employee devices), all systems, including those of third-party contractors that have access 
                 to company’s CUI, and all formats of data, including voice, email, imagery, etc. Separate CUI from other
                  enterprise data to avoid confusion. </p> </li>
        <li><span className="bold" style={{fontStyle:"italic"}}> Classify data</span> <p>Once identified, classify data into the relevant NIST 800-171 categories. 
        When the information sorted, look to the standards set out in each category to guide compliance activities.</p>
         </li>
        <li><span className="bold" style={{fontStyle:"italic"}}>Develop baseline controls</span>
        <p>The company should set controls over how it uses its data and prevents inadvertent or intentional intrusions. 
        Double authentication practices, for example, are access controls that limit who can see and use data. 
        Clarify which baselines currently exist regarding each category and build toward compliance.</p>
         </li>
        <li><span className="bold" style={{fontStyle:"italic"}}>  Test baseline controls</span><p> Regular testing of each incremental step can help clarify the relative success of data security measures. The vulnerabilities revealed by those tests will guide to better practices. </p></li>
        <li><span className="bold"style={{fontStyle:"italic"}} >  Assess for risk control </span> <p>The NIST standards accept, as a given, that new and 
        threatening risks arise daily. Therefore, continually review systems for new risks arising inside and outside 
        the company. Security controls should routinely scan for functional, operational, or organizational threats 
        and have systems in place to detect, deter, or prevent intrusions.</p> </li>
        <li><span className="bold" style={{fontStyle:"italic"}}> Generate a written security plan based on newly devised controls</span> <p> Written security plans guide EMS towards 
        compliance and provide evidence of its effort to be compliant. When written with the NIST standards as its guide, 
        the security plan and its underlying policies should lead the company toward compliance activities across 
        the departments that are consistent and reliable. </p> </li>
        <li><span className="bold" style={{fontStyle:"italic"}}> Roll out the plan across the company </span><p> Implementing the policies for NIST 800-171 can be 
        more of a challenge than developing them. Personnel may interpret rules differently, so a clear understanding 
        by each employee is critical to the project’s success. Flexibility is essential, even when compliance is mandated. 
        </p> </li>
        <li><span className="bold" style={{fontStyle:"italic"}}> Monitor outputs</span> <p> The NIST 800-171 compliance checklist’s success is seen if the company reduces its risks and incidents 
            of security breaches. When all of the NIST standards are in place and implemented, then the user should be receiving 
            the data needed to assess the full capacity of its data security practices. Periodic assessments of corporate functions, 
            systems, environments, and information exchanges will keep the company apprised of the adequacy of your NIST 800-171 
            compliance. </p></li>
    </ol>
    <p><span className="bold" style={{color: "#13A0FE"}}> ISO 27001: The 14 control sets of Annex A </span> </p>
<p><span style={{color: "#13A0FE"}}> ISO 27001 </span> is the international standard that describes best practices for an <span style={{color: "#13A0FE"}}> ISMS (information security management system) </span>. 
    The Standard takes a risk-based approach to information security. This requires EMS to identify information security risks 
    and select appropriate controls actions. Controls are outlined in Annex A of the Standard. There are 114 ISO 27001 Annex 
    A controls, divided into 14 categories. </p>
    <p><span className="bold"> ISO 27001 controls list: 14 control sets of Annex A </span> </p>
    <p><span className="bold" style={{fontStyle:"italic"}}>Annex A.5 – Information security policies </span> (2 controls) - Security policies are written and reviewed in line with the overall 
    direction of the EMS’s information security practices. </p>
    <p><span className="bold" style={{fontStyle:"italic"}}>Annex A.6 – Organization of information security</span> (7 controls) - The assignment of responsibilities for specific tasks. 
    Ensure that the EMS has established a framework that can adequately implement and 
    maintain information security practices within the company, mobile devices, and remote working.  </p>
    <p><span className="bold" style={{fontStyle:"italic"}}>Annex A.7 – Human resource security </span> (6 controls) - Employees and contractors understand their responsibilities. 
    Addresses: 1) individuals’ responsibilities prior to employment, 2) responsibilities during employment, 
    and 3) responsibilities when they no longer hold that role – termination or position change.</p>
    <p><span className="bold" style={{fontStyle:"italic"}}>Annex A.8 – Asset management</span> (10 controls) - 1) identify information assets and define appropriate protection responsibilities, 
    2) information classification. This process ensures that information assets are subject to an appropriate level of defense, 
    3) media handling and sensitive data aren't subject to unauthorized disclosure, modification, removal or destruction. </p>
    <p><span className="bold" style={{fontStyle:"italic"}}>Annex A.9 – Access control </span> (14 controls) - Employees allowed to view information that’s relevant to their job. 
    It’s divided into four sections, addressing the business requirements of access controls, user access management, user responsibilities, and system and application access controls. </p>
    <p><span className="bold" style={{fontStyle:"italic"}}>Annex A.10 – Cryptography </span> (2 controls) - Data encryption and the management of sensitive information. 
    Two controls to ensure cryptography is used properly and effectively 
    to protect the confidentiality, integrity, and availability of data. </p>
    <p><span className="bold" style={{fontStyle:"italic"}}>Annex A.11 – Physical and environmental security </span>15 controls) - A company’s physical and environmental security.
     The objective is to prevent unauthorized physical access, damage, or interference to a company’s premises or their sensitive data. 
     Also deals with equipment to prevent the loss, damage, or theft of a company’s information asset containers – hardware, 
     software or physical files.  </p>
    <p><span className="bold" style={{fontStyle:"italic"}}>Annex A.12 – Operations security </span> (14 controls) - Facilities are secure and 1) operational procedures, responsibilities, 
    and correct operations are in place, 2) malware, ensuring the company has the necessary defenses to mitigate 
    the risk of infection, 3) backing up systems to prevent data loss, 4) logging and monitoring to ensure that the company documented evidence when security events occur, 
    5) to protect the integrity of operational software, 6) technical vulnerability management and to ensure unauthorized people don’t exploit system weaknesses, and 
    7) information systems audit to minimize the disruption of systems.  </p>
    <p><span className="bold" style={{fontStyle:"italic"}}>Annex A.13 – Communications security </span> (7 controls) - 1) protect information 
    in networks and ensure that the confidentiality, integrity and availability of information in those networks remains intact,
     2) security of information in transit - different parts of the company, third parties, customers, or other organizations. </p>
    <p><span className="bold" style={{fontStyle:"italic"}}>Annex A.14 – System acquisition, development, and maintenance</span> (13 controls) - Information security is a central part of the company’s processes across the entire lifecycle and security requirements for internal systems + those providing services over public networks. </p>
    <p><span className="bold" style={{fontStyle:"italic"}}>Annex A.15 – Supplier relationships </span>(5 controls) - contractual agreements company has with third parties to 1) protect company’s assets that are accessible to, or affected by, suppliers and 2) ensure that both parties maintain agreed level of information security and service delivery.  </p>
    <p><span className="bold" style={{fontStyle:"italic"}}>Annex A.16 – Information security incident management </span>(7 controls) - manage and report security incidents. To identify which employee/s should take responsibility for certain actions to ensure consistent and effective approach to the incidents and response. </p>
    <p><span className="bold" style={{fontStyle:"italic"}}>Annex A.17 – Information security aspects of business continuity management </span>(4 controls) - to manage business disruptions. 1) information security continuity is embedded in the business management system, 2) ensuring the availability of information processing through redundancies.  </p>
    <p><span className="bold" style={{fontStyle:"italic"}}>Annex A.18 – Compliance</span>  (8 controls) - identify relevant laws and regulations and contractual requirements, mitigating the risk of non-compliance.</p>
    <p><span className="bold"> Who is responsible for implementing Annex A controls? </span> </p>
    <p>Standard addresses each of the three pillars of information security: people, processes and technology. </p>
    <p>The IT department will play a role in risk management and in developing the processes and policies ensuring those 
        technologies are used properly. Most controls will require the expertise of all departments for the <span style={{color: "#13A0FE"}}> ISO 27001 
        implementation process </span>. EMS isn’t required to implement all 114 of ISO 27001’s controls. It’s a list of possibilities 
        that should be considered based on company’s requirements based on ISO 27001 gap analysis and risk assessment. 
        These processes identify the risks and controls to implement the ISO 27001. Annex A provides a brief overview of each 
        control. Therefore ISO 27002, a supplementary is used for a detailed overview of information security controls for 
        implementation. </p>
       <CubeLogo style={{width: "48px", height:"28px", paddingRight:"8px",paddingTop:"4px"}} /> <span className="bold" style={{color: "#13A0FE"}}> CUBE contribution toward the NIST 800-171 / CMMC and ISO 27001  </span> 
       <br/>
       <br/>
        <p><span className="bold"> User Access and Control Use of the CUBE System  </span> </p>
        <p>CUBE offers 4 levels of controls for users and they are:  </p>
        <ul className="no-style">
            <li>User Group Access Setup </li>
            <li>User Access Setup </li>
            <li>ITAR Controls </li>
            <li>SOX Controls </li>
        </ul>
        <p><span className="bold"> CUBE created Data Security  </span> </p>
        <p>Categorize data and information that need protection - data sources for the CUBE system are 1) user data input; 
            2) partner data exchange through API, and 3) machine to CUBE ERP and MES data exchange through CFX or API. 
            CUBE provides data validation for all data entries and reads for security purposes. <br/>
            Develop a baseline for the minimum controls required to protect that information - 
            CUBE system uses Microsoft SQL Server for storing and maintain all data. Customer can use its vast resources provided 
            by Microsoft for setting up and securing their data.
        </p>

</div>

)
}