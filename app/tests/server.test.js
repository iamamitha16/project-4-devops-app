
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const app = require('../server');

let server;
let baseUrl;

before(async () => {
    server = app.listen(0, '127.0.0.1');

    await new Promise(resolve => server.once('listening', resolve));

    baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
    await new Promise((resolve, reject) => {
        server.close(err => err ? reject(err) : resolve());
    });
});

test('Homepage should return welcome message', async () => {
    const response = await fetch(baseUrl);

    assert.equal(response.status, 200);

    const body = await response.text();

    assert.equal(body, 'Welcome to Project 4 - DevOps Application!');
});

test('Health endpoint should return UP status', async () => {
    const response = await fetch(`${baseUrl}/health`);

    assert.equal(response.status, 200);

    const body = await response.json();

    assert.equal(body.status, 'UP');
    assert.equal(body.message, 'Application is running successfully');
});
