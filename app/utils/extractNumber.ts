export function extractNumber(text: string): number {
  return parseInt(text.match(/\d+/)?.[0] || "0", 10);
}
