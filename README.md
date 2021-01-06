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

### [**PUT**] **- Update an article's category or rank**
```
/api/articles/:id
```
#### - Required Values
```
{
  id: STRING,
  category OR rank: STRING
}
```
