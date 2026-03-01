import posthog from "posthog-js";

const POSTHOG_KEY = "phc_9TMFjbNVTpD33mYuvU0NecgXuy2POIXmCenP8TRYj8Z";
const POSTHOG_HOST = "https://us.i.posthog.com";

export function captureEvent(
  event: string,
  properties?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.posthog) {
    window.posthog.capture(event, properties);
  }
}

export { posthog, POSTHOG_KEY, POSTHOG_HOST };

declare global {
  interface Window {
    posthog: typeof posthog;
  }
}
