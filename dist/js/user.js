"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = // CONSTRUCTOR
function User(_ref) {
  var id = _ref.id,
      firstName = _ref.firstName,
      lastName = _ref.lastName,
      email = _ref.email,
      password = _ref.password,
      birthdate = _ref.birthdate;

  _classCallCheck(this, User);

  this.#id = id || 0;
  this.#firstName = firstName;
  this.#lastName = lastName;
  this.#email = email;
  this.#password = password;
  this.#birthdate = birthdate;
} // SETTERS/GETTERS (aka 'properties' in C#)
// METHODS
;