import { test, expect } from '@playwright/test';

test('Headers Test', async ({ request }) => {

    const response = await request.get
    (
        'https://jsonplaceholder.typicode.com/users/1',
        {
            headers:
           {
                'Accept': 'application/json'
            }
        }
    );

    expect(response.status()).toBe(200);

    console.log(await response.json());
});