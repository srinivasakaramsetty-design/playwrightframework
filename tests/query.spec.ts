import { test, expect } from '@playwright/test';

test('Query Parameters', async ({ request }) => {

    const response = await request.get('https://dummyjson.com/users', {
        params: {
            limit: 2,
            skip: 0
        }
    });

    expect(response.status()).toBe(200);

    console.log(await response.json());
});