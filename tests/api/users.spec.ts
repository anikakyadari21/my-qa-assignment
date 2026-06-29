import { test, expect } from '@playwright/test';

test.describe('ReqRes API Tests', () => {

  test('GET Users', async ({ request }) => {

    const response = await request.get(
      'https://reqres.in/api/users?page=2',{headers:{'x-api-key':'free_user_3FoTcYYcr8R0jrNW0fXdrFuSMkP'}}
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(Array.isArray(body.data)).toBeTruthy();

    for (const user of body.data) {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('first_name');
      expect(user).toHaveProperty('last_name');
    }

  });

  test('POST User', async ({ request }) => {

    const payload = {
      name: 'morpheus',
      job: 'leader'
    };

    const response = await request.post(
      'https://reqres.in/api/users',{headers:{
        'x-api-key':'free_user_3FoTcYYcr8R0jrNW0fXdrFuSMkP'
        ,'Content-Type':'application/json'
      },
      
        data: payload
      }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.name).toBe(payload.name);
    expect(body.job).toBe(payload.job);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('createdAt');

  });

  test('Create Then Verify (Bonus)', async ({ request }) => {

    const payload = {
      name: 'morpheus',
      job: 'leader'
    };

    const response = await request.post(
      'https://reqres.in/api/users',{headers:{'x-api-key':'free_user_3FoTcYYcr8R0jrNW0fXdrFuSMkP'
        ,'Content-Type':'application/json'},
     
        data: payload
      }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.name).toBe(payload.name);
    expect(body.job).toBe(payload.job);
    expect(body.id).toBeDefined();
    expect(body.createdAt).toBeDefined();

    // ReqRes is a mock API, so data isn't persisted.
    // This test demonstrates how a create-and-verify flow would be structured.
  });

});