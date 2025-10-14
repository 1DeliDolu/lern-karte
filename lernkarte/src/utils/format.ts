// Format label for display: replace dashes with spaces and capitalize first letter of each word
export function formatLabel(text: string): string {
  return text
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Format label for Lernfeld display: replace dashes and underscores with spaces, remove markdown suffix, and capitalize first letter of each word
export function formatLabelFeld(text: string): string {
  return text
    .replace(/_markdown$/, "") // Remove "_markdown" suffix if present
    .replace(/[-_]/g, " ") // Replace both dashes and underscores with spaces
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Truncate text to first 3 words and add "..." if longer
export function truncateToThreeWords(text: string): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= 3) {
    return text;
  }
  return words.slice(0, 3).join(" ") + "...";
}

// Format label for Lernfeld and truncate to 3 words
export function formatLabelFeldTruncated(text: string): string {
  const formatted = formatLabelFeld(text);
  return truncateToThreeWords(formatted);
}

// Natural sort comparison for alphanumeric strings
// This ensures "02-item" comes before "10-item" (numeric sorting)
export function naturalSort(a: string, b: string): number {
  const regex = /(\d+)|(\D+)/g;
  const aParts = a.match(regex) || [];
  const bParts = b.match(regex) || [];

  for (let i = 0; i < Math.min(aParts.length, bParts.length); i++) {
    const aPart = aParts[i];
    const bPart = bParts[i];

    const aIsNum = /^\d+$/.test(aPart);
    const bIsNum = /^\d+$/.test(bPart);

    if (aIsNum && bIsNum) {
      const diff = parseInt(aPart, 10) - parseInt(bPart, 10);
      if (diff !== 0) return diff;
    } else {
      const cmp = aPart.localeCompare(bPart);
      if (cmp !== 0) return cmp;
    }
  }

  return aParts.length - bParts.length;
}
