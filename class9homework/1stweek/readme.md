

if this file is not clear , follow this link 
https://universal-hook-f78.notion.site/Assingment-9-1st-week-473a8e0ef9084178ad012e436e216767?pvs=4

# Assingment 9 1st week

**A**fter Researching 3 public api we see that:

# Spotify

- best practise implement
    - 1.specific versioning
    - 2.resource naming convention
    - 3.resource name plural
    - 4.resource name then id like artists/id
    - caching response
    - if res not change send 304 not modified
    - offset
    - limit
    - pagination
    - different size img

- URL structure
    - redable
    - separate for use underscore
    - keeps url simple
    - use lowercase
    - one track get    /albums/{id}/tracks
    - Get Artist's Related Artists /arrtists/{id}/releted-artists
    - Get Single Browse Category  /browse/categories/{category_id}
    - response object
        
        ```jsx
        1.album type
        		2.total track
        		3.external url
        		4.href
        		5.imege difference format and size
        		6.name
        		7.release date
        		8.release d
        		9.uri
        		10.copyright
        		11.label
        		12.popularity
        		13.artist
        			1.follwers
        			2.genres
        			3.href
        			4.imge
        			5.name
        		14.track
        			1.href
        			2.limit
        			3.next
        			4.prev
        			5.tota
        ```
        
    - Naming convention
        - resource naming convention
        - use nouns
        - avoid verbs
        - use plurals
    
    ```jsx
    Get Artist  /artists/{id}
    Get Several Artists  /artists
    Get Artist's Albums  /artists/{id}/albums
    Get Artist's Top Tracks /artists/{id}/top-tracks
    Get Artist's Related Artists /arrtists/{id}/releted-artists
    ```
    
- HTTP methods
    - get- Retrieve Resources
    - post -Creates resources
    - put -Changes and/or replaces resources
    - delete -Deletes resources
    - patch method use korte deki ni.
- HTTP status code
    - 200	OK - The request has succeeded.Not create any resources.
    - 201	Created -  new resource being created.
    - 202	Accepted - request accepted not completed.still processing.
    - 204	No Content -succeeded but returns no message body.
    - 304	Not Modified. See Conditional requests.
    - 400	Bad Request -  malformed syntax.schemaless req.
    - 401	Unauthorized -  included authorization credential but refused for those credentials.
    - 403	Forbidden -  understood request, but refusing to fulfill it
    - 404	Not Found - resource could not be found.
    - 429	Too Many Requests - Rate limiting has been applied.
    - 500	Internal Server Error. if any reasons for server.
    - 503	Service Unavailable - The server is currently unable to handle the request due to a temporary condition
- Error Handling
    - for error use tow error obj
        
        ```jsx
        **Authentication Error Object
        		{
            "error": "invalid_client",
            "error_description": "Invalid client secret"
        		}
        	Regular Error Object**
        
        	{
            "error": {
                "status": 400,
                "message": "invalid id"
            }
        	}
        ```
        
- Authentication mechanism
    - after create account you get some credential like api token, client id , client secret
    - 2.for geting login token
        
        ```jsx
        
        	1.pass api token POST "https://accounts.spotify.com/api/token"
        	2.header e pass "Content-Type: application/x-www-form-urlencoded" \
        	3.body "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"
        ```
        
    - 3.then you get access token
    - Requires Secret Key (Server-Side)
    - 2.Access Token Refresh
    - 3.auth2.0 uses
    - Barrer access token send in headers

# stipe

- best practise implement
    - Use API versioning
    - Implement secure communication like https
    - used webhooks
    - human readable message
    - response send metadata object
    - Idempotent Requests
- URL structure
    - redable
    - separate for use underscore
    - keeps url simple
    - use lowercase
    - balance url - /v1/balance
    - transection url -v1/balance_transactions/:id
    - customer id  url - /v1/customers/:id
    - Naming convention
        - noun-varb convention
        - nouns plural
        - resource name then id like  /customers/id
    
    ```jsx
    15.GET /v1/customers/search
    16.GET /v1/disputes/:id
    18.POST /v1/disputes/:id/close
    ```
    
- HTTP methods
    - get  **`[/v1/identity/verification_reports/:id](https://stripe.com/docs/api/versioning#retrieve_identity_verification_report)`**
    - post    **`/v1/tax/transactions/create_from_calculation`**
    - delete   **`[/v1/accounts/:id/persons](https://stripe.com/docs/api/identity/verification_reports#delete_person)/:id`**
- HTTP status code
    - 200 - OK	Everything worked as expected.
    - 400 - Bad Request	The request was unacceptable, often due to missing a required parameter.
    - 401 - Unauthorized	No valid API key provided.
    - 402 - Request Failed	The parameters were valid but the request failed.
    - 403 - Forbidden	The API key doesn't have permissions to perform the request.
    - 404 - Not Found	The requested resource doesn't exist.
    - 409 - Conflict	The request conflicts with another request (perhaps due to using the same idempotent key).
    - 429 - Too Many Requests	Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.
    - 500, 502, 503, 504 - Server Errors	Something went wrong on Stripe's end. (These are rare.)
- Error Handling
    - strapi used 4 types of error
    - api error
        - api_error	API errors cover any other type of problem (e.g., a temporary problem with Stripe's servers), and are extremely uncommon.
    - card error
        - Card errors are the most common type of error you should expect to handle. They result when the user enters a card that can't be charged for some reason.
    - idempotency error
        - Idempotency errors occur when an Idempotency-Key is re-used on a request that does not match the first request's API endpoint and parameters.
    - invalid req error
        - Invalid request errors arise when your request has invalid parameters.
- Authentication mechanism
    - API Key based authentication
    - H "Authorization: Bearer  {api token}"

# github

- best practise implement
    - The name is not case sensitive.
    - per page (max 100).
    - emal private rakte username diye akta id nicce
    - pagination
    - sroting
    - rate limit
- URL structure
    - /repos/{owner}/{repo}/hooks
    - /users
    - /repos/{owner}/{repo}/forks
    - Naming convention
        - human redable
        - simple and short
        - plural naming
        - lowercase
        - avoid verb
        - use nouns
- HTTP methods
- get  for get
- post
- delete  for delete
- patch for update
- HTTP status code
    - 200	OK kno data back disse nah
    204	No Content
    304	Not modified
    401	Requires authentication
    403	Forbidden
    404	Resource not found
    422	Validation failed, or the endpoint has been spammed.
- Error Handling
    - 
- Authentication mechanism
    - SSH Keys system
    - personal access token
    - OAuth app token
    - acces barrer token
    
    ```jsx
    1.https://api.github.com/user
    	-H "Accept: application/vnd.github+json" \
      -H "Authorization: Bearer <YOUR-TOKEN>"\
      -H "X-GitHub-Api-Version: 2022-11-28" \
    ```