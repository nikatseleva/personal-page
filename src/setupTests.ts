import '@testing-library/jest-dom';

class IntersectionObserverMock {
    constructor(private readonly callback: IntersectionObserverCallback) {
    }

    observe = jest.fn((target: Element) => {
        this.callback([{isIntersecting: true, target} as IntersectionObserverEntry], this as unknown as IntersectionObserver);
    });
    unobserve = jest.fn();
    disconnect = jest.fn();
    takeRecords = jest.fn(() => []);
}

Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserverMock,
});

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }),
});
