const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    //we will get {name:___,},destructuring to directly access name key
    try {
      const city = await City.create(name);
      return city;
    } catch (err) {
      console.log("Something went wrong in the repository layer");
      throw { err };
    }
  }

  async deleteCity(cityId) {
    //here we get only id thus no destructuring of object
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (err) {
      console.log("Something went wrong in the repository layer");
      throw { err };
    }
  }

  async updateCity(cityId, data) {
    // id to be deleted and {data to be updated}
    try {
      await City.update(
        { data },
        {
          where: {
            id: cityId,
          },
        }
      );
    } catch (err) {
      console.log("Something went wrong in the repository layer");
      throw { err };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId); //returns object if found else null
      return city;
    } catch (err) {
      console.log("Something went wrong in the repository layer");
      throw { err };
    }
  }
}

module.exports = CityRepository;
