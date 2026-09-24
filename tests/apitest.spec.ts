import { test, expect } from '@playwright/test';

test('API CRUD Test', async ({ request }) => {

    // GET
    const getResponse = await request.get(
        'https://jsonplaceholder.typicode.com/users/10'
    );

    expect(getResponse.status()).toBe(200);

    const getBody = await getResponse.json();

    console.log('GET:', getBody);

    expect(getBody.id).toBe(10);


    // POST
    const postResponse = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data: {
                title: 'foo',
                body: 'bar',
                userId: 1
            }
        }
    );

    expect(postResponse.status()).toBe(201);

    const postBody = await postResponse.json();

    console.log('POST:', postBody);

    expect(postBody.title).toBe('foo');
    expect(postBody.body).toBe('bar');
    expect(postBody.userId).toBe(1);


    // PUT
    const putResponse = await request.put(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            data: {
                id: 1,
                title: 'foot',
                body: 'ball',
                userId: 1
            }
        }
    );

    expect(putResponse.status()).toBe(200);

    const putBody = await putResponse.json();

    console.log('PUT:', putBody);

    expect(putBody.title).toBe('foot');
    expect(putBody.body).toBe('ball');


    // DELETE
    const deleteResponse = await request.delete(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect(deleteResponse.status()).toBe(200);

    console.log('DELETE Status:', deleteResponse.status());

});