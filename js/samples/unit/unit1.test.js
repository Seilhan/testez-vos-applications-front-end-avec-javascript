import { sayHello } from "./unit1";

describe("Hello test", () => {
  it('should return "Hello, World"', () => {
    expect(sayHello()).toBe("Hello, World");
  });

  it('should be "Hello, Thomas"', () => {
    expect(sayHello("Thomas")).toBe("Hello, Thomas");
  });

  it('should be "Hello, Alexandra"', () => {
    expect(sayHello("Alexandra")).not.toBe("Hello Alexandra");
  });
});
