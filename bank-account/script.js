// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function (contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function (id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function (id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
};

// User Interface Logic ---------
let addressBook = new AddressBook();

$(document).ready(function () {
  $('form#new-contact').submit(function (event) {
    event.preventDefault();
    const inputtedFirstName = $('input#new-first-name').val();
    const inputtedLastName = $('input#new-last-name').val();
    const inputtedPhoneNumber = $('input#new-phone-number').val();
    let newContact = new Contact(
      inputtedFirstName,
      inputtedLastName,
      inputtedPhoneNumber
    );
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);
  });
});
// function Account(name, balance) {
//   this.name = name;
//   this.balance = balance;
// }

// Account.prototype.deposit = function (amount) {
//   if (this._isPositive(amount)) {
//     this.balance += amount;
//     console.info(`Deposit: ${this.name} new balance is ${this.balance}`);
//     return true;
//   }
//   return false;
// };

// Account.prototype.withdraw = function (amount) {
//   if (this._isAllowed(amount)) {
//     this.balance -= amount;
//     console.info(`Withdraw: ${this.name} new balance is ${this.balance}`);
//     return true;
//   }
//   return false;
// };

// Account.prototype.transfer = function (amount, account) {
//   if (this.withdraw(amount) && account.deposit(amount)) {
//     console.info(
//       `Transfer: ${amount} has been moved from ${this.name} to ${account.name}`
//     );
//     return true;
//   }
//   return false;
// };

// Account.prototype._isPositive = function (amount) {
//   const isPositive = amount > 0;
//   if (!isPositive) {
//     console.error('Amount must be positive!');
//     return false;
//   }
//   return true;
// };

// Account.prototype._isAllowed = function (amount) {
//   if (!this._isPositive(amount)) return false;

//   const isAllowed = this.balance - amount >= 0;
//   if (!isAllowed) {
//     console.error('You have insufficent funds!');
//     return false;
//   }
//   return true;
// };

// const a = new Account('a', 100);
// const b = new Account('b', 0);

// output.innerText += `before:  a: ${a.balance}, b: ${b.balance}\n`;

// a.transfer(100, b);

// output.innerText += `after:  a: ${a.balance}, b: ${b.balance}\n`;
