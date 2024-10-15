"use client";
import { useEffect, useState } from "react";

// Import images
import htmlIcon from '../html.png';
import cssIcon from '../css.svg';
import jsIcon from '../js.png';
import reactIcon from '../react.png';
import nextjsIcon from '../nextjs.svg';
import svelteIcon from '../svelte.png';

const skillsData = [
  { name: "HTML", icon: htmlIcon, percentage: 90 },
  { name: "CSS", icon: cssIcon, percentage: 85 },
  { name: "JavaScript", icon: jsIcon, percentage: 80 },
  { name: "React", icon: reactIcon, percentage: 75 },
  { name: "Next.js", icon: nextjsIcon, percentage: 70 },
  { name: "Svelte", icon: svelteIcon, percentage: 65 },
];

export default function Skills() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20">
      {skillsData.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
}

function SkillCard({ skill }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const fillPercent = setTimeout(() => {
      setPercent(skill.percentage);
    }, 100); // Delay for animation effect
    return () => clearTimeout(fillPercent);
  }, [skill.percentage]);

  // Calculate the stroke dash offset based on percentage
  const radius = 50; // Circle radius
  const circumference = 2 * Math.PI * radius; // Calculate circumference
  const strokeDashoffset = circumference - (percent / 100) * circumference; // Calculate offset

  return (
    <div className="flex flex-col items-center p-6 border rounded-lg shadow-lg bg-white">
      <img src={skill.icon.src} alt={skill.name} className="w-16 h-16 mb-4" />
      <h3 className="text-lg font-semibold">{skill.name}</h3>
      <div className="relative w-32 h-32">
        <svg className="absolute inset-0 w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#e0e0e0"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#3b82f6" // Change to your desired color
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: "stroke-dashoffset 1s ease-in-out",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
          {percent}%
        </div>
      </div>
    </div>
  );
}
