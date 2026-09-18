import type { RichText as RichTextValue, TextSegment } from "@/data/projects";

interface RichTextProps {
  value: RichTextValue;
}

function renderSegment(segment: string | TextSegment, key: number) {
  if (typeof segment === "string") return segment;

  switch (segment.type) {
    case "bold":
      return (
        <strong key={key} className="font-semibold text-primary-900">
          {segment.contents}
        </strong>
      );
    case "highlight":
      return (
        <mark
          key={key}
          className="rounded bg-secondary-300 px-1 font-semibold text-primary-900"
        >
          {segment.contents}
        </mark>
      );
    default: {
      const _exhaustive: never = segment;
      return _exhaustive;
    }
  }
}

export function RichText({ value }: RichTextProps) {
  if (typeof value === "string") return <>{value}</>;
  return <>{value.map(renderSegment)}</>;
}
