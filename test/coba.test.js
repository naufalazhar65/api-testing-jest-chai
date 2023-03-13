require('dotenv').config();
const request = require('supertest');
const expect = require('chai').expect;


const apiUrl = process.env.BASE_URL;

describe('API Test', () => {
    it('should return a list of users', async () => {
    const response = await request(apiUrl).get('/users');
    expect(response.status).to.equal(200);
    expect(response.body.data).to.be.an('array');
    // expect(response.status).toBe(200);
    // expect(response.body.data).toBeInstanceOf(Array);
    // expect(response.body.data.length).toBeGreaterThan(0);

    // expect(response.body.data.length).toBeGreaterThan(0);
    });
});