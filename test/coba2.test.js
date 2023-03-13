const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;
require('dotenv').config();

const apiUrl = process.env.BASE_URL;

describe('API Tests', () => {
  describe('GET /users', () => {
    it('should return an array of users', async () => {
      const response = await axios.get(`${apiUrl}/users`);
      expect(response.status).to.equal(200);
      expect(response.data.data).to.be.an('array');
    });
  });
});
