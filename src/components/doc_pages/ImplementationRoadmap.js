import React from "react";
import "./Docs.css";
import { ReactComponent as Roadmap } from '../icons/roadmap.svg';
export default function ImplementationRoadmap() {
  return (
    <div className="main-block">
      <h2 className="heading">Implementation Roadmap Overview</h2>
      <div>
          <Roadmap className="pic"/>
      </div>
</div>
  );
}