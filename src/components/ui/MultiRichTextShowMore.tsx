"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { MultiRichText } from "@/data/projects";
import { RichText } from "@/components/ui/RichText";
import { ShowMoreToggle } from "@/components/ui/ShowMoreToggle";
import { StaggeredReveal, staggerItem } from "@/components/ui/StaggeredReveal";
import { Divider } from "@/components/ui/Divider";

interface MultiRichTextShowMoreProps {
  lines: MultiRichText;
  previewCount?: number;
  variant?: "light" | "dark";
  className?: string;
  // Surrounding section dividers only make sense while the hidden lines are
  // actually showing — collapsed, the ShowMoreToggle's own flanking lines
  // already provide enough separation, and a divider around empty space
  // reads as a layout glitch.
  topDivider?: boolean;
  bottomDivider?: boolean;
}

export function MultiRichTextShowMore({
  lines,
  previewCount = 0,
  variant = "light",
  className = "",
  topDivider = false,
  bottomDivider = false,
}: MultiRichTextShowMoreProps) {
  const [expanded, setExpanded] = useState(false);

  if (lines.length === 0) return null;

  const preview = lines.slice(0, previewCount);
  const rest = lines.slice(previewCount);

  return (
    <div className={className}>
      {expanded && topDivider && <Divider />}

      <div className="space-y-2">
        {preview.map((line, i) => (
          <p
            key={i}
            className="text-card-body leading-relaxed text-primary-700 sm:text-sm"
          >
            <RichText value={line} />
          </p>
        ))}

        {rest.length > 0 && (
          <StaggeredReveal show={expanded} className="space-y-2">
            {rest.map((line, i) => (
              <motion.p
                key={i}
                variants={staggerItem}
                className="text-card-body leading-relaxed text-primary-700 sm:text-sm"
              >
                <RichText value={line} />
              </motion.p>
            ))}
          </StaggeredReveal>
        )}
      </div>

      {rest.length > 0 && !expanded && (
        <ShowMoreToggle
          expanded={false}
          onToggle={() => setExpanded(true)}
          variant={variant}
          className="my-3"
        />
      )}

      {expanded && bottomDivider && <Divider />}
    </div>
  );
}
