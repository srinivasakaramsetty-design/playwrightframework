import { test, expect } from '@playwright/test';

test('Path Parameter', async ({ request }) => {

    const userId = 1;

    const response = await request.get(
        `https://dummyjson.com/users/${userId}`
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.id).toBe(userId);
});