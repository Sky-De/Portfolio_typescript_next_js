// 
// setupTests.ts
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Mock addListener method
    removeListener: jest.fn(), // Mock removeListener method
    dispatchEvent: jest.fn(),
  })),
});
