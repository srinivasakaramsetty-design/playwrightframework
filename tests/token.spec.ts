import { test, expect } from '@playwright/test';

test('Login and Get User Details', async ({ request }) => {

    // 1. Login API
    const loginResponse = await request.post(
        'https://dummyjson.com/auth/login',
        {
            data: {
                username: 'emilys',
                password: 'emilyspass'
            }
        }
    );

    expect(loginResponse.status()).toBe(200);

    // 2. Get response body
    const loginBody = await loginResponse.json();

    // 3. Dynamically extract token
    const token = loginBody.accessToken;

    console.log('Generated Token:', token);

    // 4. Pass dynamically generated token to another API
    const userResponse = await request.get(
        'https://dummyjson.com/user/me',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    // 5. Validate response
    expect(userResponse.status()).toBe(200);

    const userBody = await userResponse.json();

    console.log('User Details:', userBody);

    expect(userBody.username).toBe('emilys');

    console.log('Test completed successfully.');

});