describe("Domain events tests", () => {
  it("should register an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);

    expect(eventDispatcher.getHandlers("ProductCreatedEvent")).toBeDefined();
    expect(eventDispatcher.getHandlers("ProductCreatedEvent").length).toBe(1);
  });
});