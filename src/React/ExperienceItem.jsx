import { useState } from "react";

export default function ExperienceItem({
  year,
  role,
  company,
  companyLink,
  location,
  summary,
  responsibilities,
  tech,
}) {
  const [expandedSummary, setExpandedSummary] = useState(false);
  const [expandedResponsibilities, setExpandedResponsibilities] = useState(false);

  // Show first 250 characters of summary if not expanded
  const summaryPreview = summary.length > 250 ? summary.slice(0, 250) + "..." : summary;

  // Show only first responsibility if not expanded
  const visibleResponsibilities = expandedResponsibilities ? responsibilities : responsibilities.slice(0, 1);

  return (
    <div className="relative pl-12 mb-12" style={{ color: "var(--white)" }}>
      {/* Timeline dot */}
      <span
        className="absolute top-2 w-4 h-4 rounded-full border-2 z-20"
        style={{
          backgroundColor: "var(--sec)",
          borderColor: "var(--background)",
          left: "12px",
          boxSizing: "content-box",
        }}
      ></span>

      {/* Year */}
      <p className="text-sm" style={{ color: "var(--white-icon)" }}>
        {year}
      </p>

      {/* Role + Company */}
      <h3 className="text-xl font-semibold mt-1" style={{ color: "var(--white)" }}>
        {role} @{" "}
        {companyLink ? (
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "var(--sec)" }}
            title={`${role} at ${company}`}
          >
            {company}
          </a>
        ) : (
          <span style={{ color: "var(--sec)" }}>{company}</span>
        )}
      </h3>

      {/* Location */}
      <p className="text-sm" style={{ color: "var(--white-icon)" }}>
        {location}
      </p>

      {/* Summary */}
      <div className="mt-4">
        <p className="font-semibold mb-2" style={{ color: "var(--white)" }}>
          Summary:
        </p>
        <p className="text-white-icon text-justify leading-relaxed">
          {expandedSummary ? summary : summaryPreview}
        </p>
        {summary.length > 250 && (
          <button
            className="mt-1 text-sm hover:underline"
            style={{ color: "var(--sec)", cursor: "pointer" }}
            aria-expanded={expandedSummary}
            onClick={() => setExpandedSummary(!expandedSummary)}
          >
            {expandedSummary ? "Show less ▲" : "Show more ▼"}
          </button>
        )}
      </div>

      {/* Responsibilities */}
      <div className="mt-4">
        <p className="font-semibold mb-2" style={{ color: "var(--white)" }}>
          Responsibilities:
        </p>
        <ul className="list-disc list-inside">
          {visibleResponsibilities.map((res, idx) => (
            <li key={idx} className="text-white-icon">
              {res}
            </li>
          ))}
        </ul>
        {responsibilities.length > 1 && (
          <button
            className="mt-1 text-sm hover:underline"
            style={{ color: "var(--sec)", cursor: "pointer" }}
            aria-expanded={expandedResponsibilities}
            onClick={() => setExpandedResponsibilities(!expandedResponsibilities)}
          >
            {expandedResponsibilities ? "Show less ▲" : "Show more ▼"}
          </button>
        )}
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-6">
        {tech.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm rounded-full border"
            style={{
              borderColor: "var(--white-icon)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "var(--white-icon)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
