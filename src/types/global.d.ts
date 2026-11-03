export {};

declare global {
  interface Window {
    __NEXT_LEGACY_BRIDGE__?: boolean;
    __NEXT_LEGACY_SCRIPT_PROMISES__?: Map<string, Promise<void>>;
  }
}
