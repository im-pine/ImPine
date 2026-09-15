interface ShowMoreToggleProps {
  expanded: boolean;
  onToggle: () => void;
  variant?: "light" | "dark";
  className?: string;
}

const VARIANT_STYLES = {
  light: {
    text: "text-primary-600 hover:text-primary-900",
    line: "bg-primary-300",
  },
  dark: {
    text: "text-primary-300 hover:text-white",
    line: "bg-primary-600",
  },
};

export function ShowMoreToggle({
  expanded,
  onToggle,
  variant = "dark",
  className = "",
}: ShowMoreToggleProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex w-full items-center gap-4 text-sm font-medium transition-colors ${styles.text} ${className}`}
    >
      <span className={`h-px flex-1 ${styles.line}`} />
      <span>{expanded ? "Show Less" : "Show More"}</span>
      <span className={`h-px flex-1 ${styles.line}`} />
    </button>
  );
}
