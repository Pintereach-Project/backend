# USER ENDPOINTS:
### [**POST**] **- Register endpoint**
```
/api/auth/register
```
#### - Required Values
```
{
  username: STRING,
  email: STRING,
  password: STRING
}
```

### [**POST**] **- Login endpoint**
```
/api/auth/login
```
#### - Required Values
```
{
  username: STRING,
  password: STRING
}
```
-------------------------------------------
# ARTICLE ENDPOINTS:
### [**GET**] **- Get all articles**
```
/api/articles
```

### [**GET**] **- Get article by id**
```
/api/articles/:id
```

### [**POST**] **- Save an article to read later**
```
/api/articles/:id
```
#### - Required Values
```
{
  userId: STRING // Can be saved upon login
}
```

### [**PUT**] **- Update an article's category or rank**
```
/api/articles/:id
```
#### - Required Values
```
{
  category: STRING ---or--- rank: INTEGER
  
  // The value will change to whatever is sent so make sure to 
  // send the desired value for either category or rank.
  // Ex: Sending a rank of 8 will change the rank to 8, not
  // add 8 to the current rank. I'd recommend creating an axios 
  // request to get the initial value first, adding one, then 
  // sending back the new value.
}
```
-------------------------------------------
# READ LATER ENDPOINTS:
### [**GET**] **- Get all saved articles**
```
/api/saved-articles/:username
```
