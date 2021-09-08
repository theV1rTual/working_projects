import React from "react";
import "./Docs.css";
export default function DynamicProductionScheduling() {
  return (
    <div className="main-block">
      <h2 className="heading-1"> Dynamic Production Scheduling & Tracking for Electronics Manufacturing Service (EMS) Industry  </h2>

      <br/>
      <p> 
      The Capacity Planning and Scheduling (CPS) system is a powerful tool for many types of manufacturing, but can be immensely complex, 
      and even unrealistic, for some specialty manufacturing sectors. Capacity planning can be defined as the process of determining the 
      production capacity needed by a manufacturer to meet their sales forecast. The effective use of this tool produces the maximum work 
      that a manufacturer can complete within a period of time, with available capacity. This feature in the manufacturing world, and its 
      role, will be explored through process manufacturing, dedicated-line manufacturing, and work order-based electronics manufacturing. 
      </p>

      <br/>
      <p><span className="bold"> Process or Dedicated Fixed Line Manufacturing  </span> </p>
      <p>
      This type of manufacturing has an operating process that excels with traditional capacity planning and scheduling. The ideal environment
       for CPS has a dedicated production line setup with high-volume production and minimal changes during the production process. This allows 
       manufacturers to plan for raw material in advance and typically have suppliers in proximity, readily supplying material for a smooth and 
       consistent production schedule and delivery. However, each change can cause the entire process, or part of the process, to shut down to 
       accommodate the change, and this may take time to set up for a high-volume and repetitive production process. Therefore, once planning and 
       scheduling is implemented, there are only minor schedule deviations from the set plan and production runs smoothly to create the specified 
       product, using dedicated line of machines, labor, raw material, or parts that are always available just in time.  Examples of process manufacturing
       include plastic or metal injection molding of the same part, manufacturing screwdrivers, food and drink products, smartphones, automobile, etc. 
       The production of these products accommodates the ideal environment for capacity planning to thrive.
      </p>
      <br/>
      <p><span className="bold"> Electronics Manufacturing (OEM, ODM & JDM)     </span> </p>
      <p>For electronic products, OEMs usually have their own Work Orders (WOs) with single to indented complex BOMs and separate processes and work 
          centers. Separate WOs and BOMs reduce the effectiveness of traditional CPS, but it can still work as a helpful tool. Effectiveness decreases 
          in this environment because OEMs use non-dedicated and shared resources for equipment and labor, requiring process setup changes for building 
          various products. OEMs also have to deal with shortages and ECOs, for example. CPS is still commonly used by OEMS with changes made manually during production. 
     </p>
     <br/>
      <p><span className="bold"> Electronics Manufacturing Services (EMS, ECM, CEM)</span> </p>
      <p>EMS companies work with a variety of BOMs and Approved Manufacturers Lists (AMLs) for each assembly and customer with different manufacturing 
          specifications and compliance/conformance requirements, by customer. There is a substantial number of variables present from concurrently serving 
          many customers. The intricacy in the EMS industry exponentially increases as each customer also has their own set of unique Part Numbers and AML, 
          BOMs, ECOs, methods, quantity changes, and requirements that cause constant schedule adjustments. The overwhelming complexity that is involved in the 
          production process makes traditional CPS an extremely difficult tool to implement, and even more difficult to keep, as the schedule changes many times 
          throughout the day. This can quickly become unbearable for EMS companies. These factors are some of the many reasons why CPS cannot be used as an effective
           tool by EMS companies as they are designed, while buying material based on each assembly for each customer by AML.  
      </p>
    <p>
    This brings the dilemma of successfully applying CPS as an effective tool in the EMS industry. Traditional CPS has proven to work well in high volumes that require
     dedicated machines that perform the same daily tasks with little to no change in the process, or even a BOM. However, it is difficult to implement for EMS who do 
     production runs in various volumes, all with different processes and demand schedules.    
    </p>
    <br/>
    <p><span className="bold"> Capacity Planning & Scheduling in EMS    </span> </p>
      <p> CPS, in many ways, has been an elusive tool in the EMS industry. The concept seems simple based on its performance with process and dedicated-line manufacturing, 
          but becomes complex when implementing in non-dedicated line production. Companies such as SAP, Epicor, and manex, have struggled for decades to match the effectiveness
           of CPS in small to mid-sized manufacturing that requires constant changes during the WIP process. However, even after setting up each parameter, production soon meets 
           slight timing differences between the assembly of various parts at various quantities and conditions. This massive amount of data and variables still makes it difficult,
            or impossible, to create a functioning, fully-automatic CPS system for EMS companies.   
      </p>
      <p>Most experts in the EMS industry agree that CPS rapidly becomes more convoluted with every detail, simply from the sheer number of variables that can change at any point during
           production. If a work order-based electronics manufacturer were to try to use CPS like a process manufacturer, it would require dedicated positions with the sole responsibility
            of changing the plan for each variable throughout the day, then notifying all the affected work center stakeholders. This soon becomes counterproductive, as it causes the use of 
            excess resources instead of increasing efficiency. Nevertheless, CPS is unanimously thought of as a tremendous tool for almost all manufacturing environments.   </p>

        <p> The “devil is in the details” when trying to implement a traditional CPS. However, in intricate environments like electronics contracts manufacturing, CPS has the potential to 
            become one of the most useful tools that is imperative to run an efficient production process. The only remaining question about CPS is how to adjust the approach and create a 
            system that runs fluidly with EMS companies.   
            </p>
        <br/>
            <p><span className="bold"> CUBE's Solution: Dynamic Production Scheduling & Tracking   </span> </p>
            <p>Created for the EMS industry, CUBE’s Dynamic Production Scheduling & Tracking (DST) system is specifically engineered to apply the benefits of CPS to order-based EMS industry. 
                Its purpose is to achieve continuous shop floor line balancing using AI automation to reduce slack time and increase high shop floor productivity, and the concept is simple – 
                jobs are prioritized by WO due date at each work center. 
            </p>

            <p> Typically, in the shop floor, machines will remain idle more than in WCs where physical labor is required. DST’s goal is to automatically recognize when machines will be idle
                 and maintain a schedule so machines are constantly producing a product. With standard scheduling (also available in CUBE), schedules are often created in sequence so jobs are 
                 prioritized to meet the due date. However, DST uses additional information, such as setup time for which equipment the assembly is programmed to run, run time, and other variables, 
                 to optimize run time between jobs in all WCs.  
            </p>
            
            
            <p>When a WO is created, DST automatically schedules the first WC accordingly with other WOs to meet on-time delivery. All hot orders are automatically scheduled at the top of the priority 
                list, and users can manually change the priority level for a work center (drag and drop) for any last-minute changes that occur throughout the day. Every time a job is completed in a work
                 center, DST automatically reprioritizes all jobs to ensure that all jobs stay on schedule as they are built. Users with permissions, such as supervisors/leads, can also manually make any 
                 adjustments at this stage and are notified in real-time whenever DST identifies hot spots needing attention.   
            </p>
             
            <p>In addition to scheduling, DST’s other purpose is to reduce material job setup time as much as possible. CUBE contains all information needed to know which jobs use the same assembly, so a 
                supervisor or scheduling manager can easily group those same assemblies to set up machines only once for multiple jobs. When multiple WOs are run together to save setup time, they are transferred 
                to the next work center as a group and reprioritized as jobs are transferred. 
                </p>
  
                <p>This and other modified approaches to CPS through the DST system lays the foundation needed to systematically accommodate the EMS industry. CUBE takes a practical and realistic approach that is 
                    proven and used in the real world - by taking the core concept of CPS and customizing it for the EMS industry. DST uses an intelligent algorithm using WO variables to automatically provide
                     scheduling and tracking. This feature also shows capacity over or under, so the planner can easily meet requirements while provisioning for equipment and production labor, to ensure smooth production scheduling in advance.  
                </p>
                
                <p>Traditional CPS lacks the dynamic capabilities to support the production process of EMS companies; it simply shows the plan set in that moment of the planning process, frozen in time. CUBE offers 
                    sophisticated process setup, planning, and scheduling capabilities to deal with the endless number of variables that are present in daily work. DST enables EMS companies to take advantage
                     of a reliable tool to increase efficiency and decrease expenses.  </p>
    
      </div>
  );
}