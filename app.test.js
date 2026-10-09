
const request = require('supertest');
const app = require('./index');

test('GET /api/health returns status code 200', async () => {
    const response = await request(app).get('/api/health');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        status: 'ok',
        message: 'Server is running'
    });
});