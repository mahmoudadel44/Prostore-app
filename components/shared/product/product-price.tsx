import { cn } from "@/lib/utils";

export default function ProductPrice({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const [intPart, decimalPart] = value.toFixed(2).toString().split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <sup>$</sup>
      {intPart}
      <sup>{decimalPart}</sup>
    </p>
  );
}
