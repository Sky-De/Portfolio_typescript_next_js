// import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
// In your test setup file (e.g., setupTests.ts)
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  configurable: true,
  value: ResizeObserver,
});
