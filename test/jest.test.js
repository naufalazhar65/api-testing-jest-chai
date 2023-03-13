const request = require('supertest');
const expect = require('chai').expect;
require('dotenv').config();

const apiUrl = process.env.BASE_URL;

describe('GET /users', () => {
  it('should return an array of users', async () => {
    const response = await request(apiUrl)
    .get('/users?page=2');
    expect(response.status).to.equal(200);
    expect(response.body.data).to.be.an('array');
  });
});

describe('POST /users', () => {
  it('should add a new user', async () => {
    const response = await request(apiUrl)
      .post('/users')
      .send({
        name: 'John Doe',
        job: 'Software Engineer'
      });
    expect(response.status).to.equal(201);
    expect(response.body.name).to.equal('John Doe');
    expect(response.body.job).to.equal('Software Engineer');
  });
});

describe('PUT /users/:id', () => {
  it('should update an existing user', async () => {
    const response1 = await request(apiUrl).get('/users');
    const userId = response1.body.data[0].id;

    const response2 = await request(apiUrl)
      .put(`/users/${userId}`)
      .send({
        name: 'Jane Doe',
        job: 'Web Developer'
      });
    expect(response2.status).to.equal(200);
    expect(response2.body.name).to.equal('Jane Doe');
    expect(response2.body.job).to.equal('Web Developer');
  });
});

describe('DELETE /users/:id', () => {
  it('should delete an existing user', async () => {
    const response1 = await request(apiUrl).get('/users');
    const userId = response1.body.data[0].id;

    const response2 = await request(apiUrl).delete(`/users/${userId}`);
    expect(response2.status).to.equal(204);

    const response3 = await request(apiUrl).get(`/users/${userId}`);
    expect(response3.status).to.equal(200);
  });
});
