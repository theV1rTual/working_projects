import React from 'react'

import { ReactComponent as ERPIcon } from './../icons/erp.svg'
import { ReactComponent as MESIcon } from './../icons/mes.svg'
import { ReactComponent as EQSIcon } from './../icons/eqs.svg'

export default function Home() {
    return (
        <div>
            
            <div className="text">
                <div className="block b1">
                    <div className="left">
                        <div className="title">Industry 4.0 Electronics Manufacturing <span style={{fontWeight: "normal"}}> Software Ecosystem for the </span>  EMS Industry</div>
                        <p> <span style={{ fontWeight: "bold"}}>i4.0</span> – Integrated ERP & MES systems connect the entire supply chain with production machine data</p>
                        <p> <span style={{ fontWeight: "bold"}}>Lean Manufacturing</span> – Maximize efficiency throughout the entire manufacturing process</p>
                        <p> <span style={{ fontWeight: "bold"}}>EQS</span> – Enterprise Quality Management System increases quality and maintains compliances, regulations, and cybsecurity while delivering high-quality products on time </p>
                    </div>
                </div>


            <div className="bg-img">
            <div className="block b2">
                <div className="cardbox left">
                    <div className="icon">
                        <div className="svg-icon"> <ERPIcon/></div> 
                        <span>ERP</span> 
                    </div>
                    
                    <ul className="bullet">
                        <li>CUBE’s unique concept for consolidating all customer requirements to sort for all like parts creates higher purchasing power and reduced labor hours </li>
                        <li>Auto PO Release from MRP with WO Pegging for JIT Kitting of multiple WOs by WC </li>
                        <li>Material Tracking &amp; Control (MTC) contains detailed info about each part and is tracked until consumed in one assembly item in the WO </li>
                        <li>Internal, Customer, and Surplus Inventory efficiency to reduce Warehousing </li>
                        <li>With AI, CUBE removes time constraints to ensure on-time availability of WO materials while minimizing shortages</li>
                    </ul>
                </div>

                
                <div className="cardbox middle">
                    <div className="icon">
                        <div className="svg-icon"><MESIcon /> </div>
                        <span >MES</span>  
                    </div> 
                        <ul className="bullet">
                            <li>Automated WO Scheduling dashboard for production control and schedule management</li>
                            <li>Ability to re-schedule on the fly for ECO and many other unplanned events </li>
                            <li>Track which MTC part is added to which assembly within the WO and track moisture sensitive parts to produce higher quality products </li>
                            <li>Data Analytics continually tracks WC quality trends to prevent defects and increase first pass yield </li>
                            <li>CAPA for continuous manufacturing operations improvements</li>
                        </ul>
                </div>


                <div className="cardbox right">
                    <div className="icon">
                    <div className="svg-icon"><EQSIcon/> </div>
                        <span>EQS</span> 
                    </div>
                
                    <ul className="bullet">
                        <li>ISO-9001, ISO-13485, AS9100, RoHS, and others are integrated into CUBE to fulfill government, industry, and customer requirements </li>
                        <li>Data and User Security conforms to  NIST800-171/CMMC, ISO27001 and ITAR </li>
                        <li>Industrial Revolution 4.0 (i4.0) practices incorporated for real-time exchange of information between production machines and CUBE </li>
                        <li>Electronic Filing Cabinet (EFC) maintains scanned documents and electronic files for control and availability throughout all departments </li>
                    </ul>
                </div>
            </div>
            </div>
        

            <div className="block b3">
                <div className="slogan"> TRUST through TRUTH and PERFORMANCE </div>
            </div>

            </div>
        </div>
    )
}
