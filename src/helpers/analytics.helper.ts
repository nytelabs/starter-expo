// Capture Event
export const captureEvent = (...args: unknown[]): void => {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.log("[EVENT_CAPTURED]", ...args);
  }
};

// Capture Error
export const captureError = (...args: unknown[]): void => {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.log("[ERROR_CAPTURED]", ...args);
  }
};
