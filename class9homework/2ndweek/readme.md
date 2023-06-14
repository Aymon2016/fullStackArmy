
if this file is not clear ,follow this notion link

https://universal-hook-f78.notion.site/Assignment-2nd-week-42b444e9def542d48fcd297c1218c35a?pvs=4

# Assignment 2nd week

**domain or topic of**

BACHELOR FLAT MANAGEMENT

**Entitis/schema/model**

1. user
    1. id - int
    2. name - string
    3. email - string
    4. password - string (hashed)
    5. role - enum [user, admin] default 
2. products
    - id - int
    - name- string
    - price - number
    - userid - relation with user
    - timestamp
3. mill
- id - int
- date - date
- quatity -number
- userName - name
- userId  -relation with user
- timestamp

[4.news](http://4.news)

- title - string
- date - date
- body - text

Api Endpoint

**User Auth (page)**

1.login -POST-{{baseurl}}/api/v1/auth/

2.register-POST - {{baseurl}}/api/v1/auth/register

3.logout-GET- {{baseurl}}/api/v1/auth/logout

Notice

1.GET - {{baseurl}}/api/v1/notices   get all notice

2.GET - {{baseurl}}/api/v1/notices/id   get one notice

3.POST -{{baseurl}}/api/v1/create    create one notice

4.DELETE - {{baseurl}}/api/v1/notices/id        delete one notice

product

1.POST - {{baseurl}}/api/v1/products/create    create one products

1. GET -{{baseurl}}/api/v1/products   get all producs

2. GET - {{baseurl}}/api/v1/products/id  get one product

1. DELTE - {{baseurl}}/api/v1/products/id        delete one products

mill

1. GET - {{baseurl}}/api/v1/mills    get all mills
2. GET - {{baseurl}}/api/v1/mills/userId get one user mill
3. POST -{{baseurl}}/api/v1/mills/create   create one user mill

IF I HAVE ENOUGH TIME 

1. PATCH - {{baseurl}}/api/v1/mills/id   patch one  mill

**pagination, filtering, sorting, and other relevant features**

leter i add this features

        ```jsx
        Notice

        1.GET - {{baseurl}}/api/v1/notices?sort=name&order=asc&key=value&filter=active&limit=10&page=1  get all notice

        product

        1. GET -{{baseurl}}/api/v1/products?sort=name&order=asc&key=value&filter=active&limit=10&page=1  get all producs

        mill

        1. GET - {{baseurl}}/api/v1/mills?sort=timestamp&key=value&filter=category&start_date=2023-05-01&end_date=2023-05-31&page=1&limit=10  get all mills
```

**proper error handling and responses, including HTTP status codes and error messages.** 

	200	OK - The request has succeeded.Not create any resources.
	201	Created -  new resource being created.
	202	Accepted - request accepted not completed.still processing.
	204	No Content -succeeded but returns no message body.
	304	Not Modified. See Conditional requests.
	400	Bad Request -  malformed syntax.schemaless req.
	401	Unauthorized -  included authorization credential but refused for those credentials.

        402 - Request Failed	The parameters were valid but the request failed.
	403	Forbidden - The API key doesn't have permissions to perform the request.
	404	Not Found - resource could not be found. 

        409 - Conflict	The request conflicts with another request (perhaps due to using the same     Idempotent key).

        422	Validation failed, or the endpoint has been spammed
	429	Too Many Requests - Rate limiting has been applied.
	500	Internal Server Error. if any reasons for server.
	503	Service Unavailable - The server is currently unable to handle the request

**define an authentication mechanism**

1.use api token like json web token

2.when user login ,user get one token .

3.each req user provide barrer token

4.use https:// not http

  Get the authenticated user
    1.https://{{baseurl}}/api/auth/local
	-H "Accept: application/JSON"
    -H "Authorization: Bearer <YOUR-TOKEN>"