export function useNumberFormatter() {
  return (num: number): string => {
    if (num >= 1_000_000_000_000)
      return (num / 1_000_000_000_000).toFixed(1) + "T";
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };
}
