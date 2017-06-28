// @flow
export default function isElectron(): boolean {
  if (
    typeof window !== "undefined" &&
    window.process &&
    window.process.type === "renderer"
  ) {
    return true;
  }

  return !!(
    typeof process !== "undefined" &&
    process.versions &&
    !!process.versions.electron
  );
}
