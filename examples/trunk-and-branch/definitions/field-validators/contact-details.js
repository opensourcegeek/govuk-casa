const Validation = require('@dwp/govuk-casa/lib/Validation');
const r = Validation.rules;
const sf = Validation.SimpleField;

const fieldValidators = {
  tel: sf([
    r.optional,
  ]),
  email: sf([
    r.optional,
    r.email
  ])
};

module.exports = fieldValidators;
