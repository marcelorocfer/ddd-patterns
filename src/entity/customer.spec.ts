import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {

  it("should throw error when id is empty", () => {
    expect(() => {
      new Customer("", "John");
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new Customer("123", "");
    }).toThrowError("Name is required");
  });

  it("should change name", () => {
    expect(() => {
      const customer = new Customer("123", "John");
      customer.changeName("Jane");
      expect(customer.name).toBe("Jane");
    });
  });

  it("should activate customer", () => {
    expect(() => {
      const customer = new Customer("1", "Customer 1");
      const address = new Address("Street 1", 123, "12345-678", "City 1");
      customer.Address = address;

      customer.activate();

      expect(customer.isActive()).toBe(true);
    });
  });

  it("should throw error when address is undefined when you activate a customer", () => {
    expect(() => {
      const customer = new Customer("1", "Customer 1");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });

  it("should deactivate customer", () => {
    expect(() => {
      const customer = new Customer("1", "Customer 1");

      customer.deactivate();
      
      expect(customer.isActive()).toBe(false);
    });
  });

});