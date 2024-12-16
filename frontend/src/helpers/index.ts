export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function toUpperCaseFirstLetter(str: string) {
  return str.replace(new RegExp(/^./), str.charAt(0).toUpperCase());
}
