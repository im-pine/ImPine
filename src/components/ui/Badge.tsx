interface BadgeProps {
  children: string;
  variant?: "default" | "primary";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "primary"
      ? "bg-primary/10 text-primary"
      : "bg-border/60 text-muted";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${styles}`}
    >
      {children}
    </span>
  );
}
