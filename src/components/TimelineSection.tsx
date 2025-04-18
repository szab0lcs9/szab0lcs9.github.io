import React from "react";
import { TimelineItem } from "./TimelineItem";
import { ResumeItem } from "../types/ResumeItem";

export const TimelineSection = ({
  title,
  items,
  isWork = false
}: {
  title: string;
  items: ResumeItem[];
  isWork?: boolean;
}) => (
  <section>
    <h2 className="text-xl md:text-2xl font-bold mb-8">{title}</h2>
    <div className="relative border-l border-blue-500 ml-4 pl-6 space-y-12">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} isWork={isWork} />
      ))}
    </div>
  </section>
);
