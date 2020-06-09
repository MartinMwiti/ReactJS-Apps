## Setup
1. Create an empty folder.
2. Create ``package.json`` by running ```npm init```.
3. Install JSON Server by running ```npm install json-server```.
4. Run through the steps. NB: you can skip all to create the default .
5. Create the file to store json, say ``db.json`` and fill it with data.
* Start JSON Server by 

    [Running] ```json-server --watch db.json```

    [ALTERNATIVELY] In the **package.json** change ``scripts`` to 
    
        "scripts": {
        "json:server": "json-server --watch db.json"},
           
        NB: **json:server** is a placeholder name, you can change to something else.

        [Run] npm run json:server

* Using/adding jsonplaceholder data add to the ``scripts``

        "json:server:remote": "json-server http://jsonplaceholder.typicode.com/db" 
            // incase you wish to also use jsonplaceholder data/resources

## Using Postman
* update a value
    [PATCH] -> Header -> click Key placeholder -> add 'Content-type' -> click value placeholder -> add 'application/json' -> Body -> raw (JSON) -> { *VALUE BEING CHANGED* } -> Send

## Working with the API
* ```http://localhost:3000/db``` to view entire database.

* GET ALL USERS
```http://localhost:3000/users```

* GET SINGLE USER
```http://localhost:3000/users/1```

* GET ALL COMPANIES
```http://localhost:3000/companies```

* GET SINGLE COMPANY
```http://localhost:3000/companies/1```

* GET ALL USERS OF A COMPANY
```http://localhost:3000/companies/1/users```

* FILTER COMPANIES BY NAME
```http://localhost:3000/companies?name=Microsoft```
```http://localhost:3000/companies?name=Microsoft&name=Apple```

* PAGINATION & LIMIT
```http://localhost:3000/companies?_page=1&_limit=2```

* SORTING
```http://localhost:3000/companies?_sort=name&_order=asc```

* USERS AGE RANGE
```http://localhost:3000/users?age_gte=30```
```http://localhost:3000/users?age_gte=30&age_lte=40```

* FULL TEXT SEARCH
```http://localhost:3000/users?q=John```

[Reference](https://github.com/typicode/json-server)