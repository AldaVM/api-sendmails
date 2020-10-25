class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async toRegister(entity) {
    try {
      const record = new this.model(entity);
      await record.save();

      return {
        data: record,
        message: "Nuevo registro insertado",
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        message: `error al registrar ${entity}`,
        error,
      };
    }
  }
}

module.exports = BaseRepository;
