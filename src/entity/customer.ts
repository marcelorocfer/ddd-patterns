class Customer {

  _id: string;
  _name: string = "";
  _address: string = "";
  _active: boolean = false;


  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error("Name is required");      
    }
    if (this._id.length === 0) {
      throw new Error("Id is required");      
    }
  }
  
  changeName(name: string): void {
    this._name = name;
    this.validate();
  }

  changeAddress(address: string): void {
    this._address = address;
  }

  activate() {
    if (this._address.length === 0) {
      throw new Error("Address is mandatory to activate a customer");      
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }
}