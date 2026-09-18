// Values from Tailwind's default spacing scale. Listed explicitly (rather
// than built from a template string) because Tailwind's class scanner only
// picks up literal, complete class names in source.
const MARGIN_Y_CLASSES = {
  0: "my-0",
  1: "my-1",
  2: "my-2",
  3: "my-3",
  4: "my-4",
  5: "my-5",
  6: "my-6",
  8: "my-8",
  10: "my-10",
  12: "my-12",
  16: "my-16",
  20: "my-20",
  24: "my-24",
} as const;

type DividerMargin = keyof typeof MARGIN_Y_CLASSES;

interface DividerProps {
  margin?: DividerMargin;
  classname?: "";
}

export function Divider({ margin = 4, classname = "" }: DividerProps) {
  return (
    <hr
      className={`${MARGIN_Y_CLASSES[margin]} border-t border-border ${classname}`}
    />
  );
}
