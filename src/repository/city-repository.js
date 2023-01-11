const { City } = require("../models/index");

class CityRepository {
  async createCity({ cityName }) {
    try {
      const city = await City.create({ cityName });
    } catch (err) {
      throw err;
    }
  }

  async deleteCity({ cityId }) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = CityRepository;
