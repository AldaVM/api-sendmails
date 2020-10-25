const BaseRepository = require("./base.repository");
const { ContactModel } = require("../models");

class ContactRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }
}

module.exports = new ContactRepository(ContactModel);
