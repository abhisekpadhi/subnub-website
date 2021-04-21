export function clipText(text: string, maxLen: number): string {
    return text.length > maxLen ? text.substring(0, maxLen - 3) + '...' : text;
}
