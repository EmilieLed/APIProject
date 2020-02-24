# SwaggerStore.UserApi

All URIs are relative to *https://virtserver.swaggerhub.com/EmilieLed/SellPlatform/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProduct**](UserApi.md#addProduct) | **POST** /products | Add a new item to the store
[**createUser**](UserApi.md#createUser) | **POST** /user | Create user
[**deleteProduct**](UserApi.md#deleteProduct) | **DELETE** /product/{productId} | Deletes a product
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /user/{username} | Delete user
[**findProductsByTags**](UserApi.md#findProductsByTags) | **GET** /product/findByTags | Finds Products by tags
[**getProductById**](UserApi.md#getProductById) | **GET** /product/{productId} | Find product by ID
[**getUserByName**](UserApi.md#getUserByName) | **GET** /user/{username} | Get user by user name
[**loginUser**](UserApi.md#loginUser) | **GET** /user/login | Logs user into the system
[**logoutUser**](UserApi.md#logoutUser) | **GET** /user/logout | Logs out current logged in user session
[**updateProduct**](UserApi.md#updateProduct) | **PUT** /products | Update an existing product
[**updateProductWithForm**](UserApi.md#updateProductWithForm) | **POST** /product/{productId} | Updates a product in the store with form data
[**updateUser**](UserApi.md#updateUser) | **PUT** /user/{username} | Updated user
[**uploadFile**](UserApi.md#uploadFile) | **POST** /product/{productId}/uploadImage | uploads an image


<a name="addProduct"></a>
# **addProduct**
> addProduct(body)

Add a new item to the store

### Example
```javascript
var SwaggerStore = require('swagger_store');
var defaultClient = SwaggerStore.ApiClient.instance;

// Configure OAuth2 access token for authorization: productstore_auth
var productstore_auth = defaultClient.authentications['productstore_auth'];
productstore_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwaggerStore.UserApi();

var body = new SwaggerStore.Product(); // Product | Product object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProduct(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Product**](Product.md)| Product object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

[productstore_auth](../README.md#productstore_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="createUser"></a>
# **createUser**
> createUser(body)

Create user

This can only be done by the logged in user.

### Example
```javascript
var SwaggerStore = require('swagger_store');

var apiInstance = new SwaggerStore.UserApi();

var body = new SwaggerStore.User(); // User | Created user object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| Created user object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="deleteProduct"></a>
# **deleteProduct**
> deleteProduct(productId, opts)

Deletes a product

### Example
```javascript
var SwaggerStore = require('swagger_store');
var defaultClient = SwaggerStore.ApiClient.instance;

// Configure OAuth2 access token for authorization: productstore_auth
var productstore_auth = defaultClient.authentications['productstore_auth'];
productstore_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwaggerStore.UserApi();

var productId = 789; // Number | Product id to delete

var opts = { 
  'apiKey': "apiKey_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProduct(productId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| Product id to delete | 
 **apiKey** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[productstore_auth](../README.md#productstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(username)

Delete user

This can only be done by the logged in user.

### Example
```javascript
var SwaggerStore = require('swagger_store');

var apiInstance = new SwaggerStore.UserApi();

var username = "username_example"; // String | The name that needs to be deleted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUser(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The name that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="findProductsByTags"></a>
# **findProductsByTags**
> [Product] findProductsByTags(tags)

Finds Products by tags

Muliple tags can be provided with comma separated strings. Use\\ \\ tag1, tag2, tag3 for testing.

### Example
```javascript
var SwaggerStore = require('swagger_store');
var defaultClient = SwaggerStore.ApiClient.instance;

// Configure OAuth2 access token for authorization: productstore_auth
var productstore_auth = defaultClient.authentications['productstore_auth'];
productstore_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwaggerStore.UserApi();

var tags = ["tags_example"]; // [String] | Tags to filter by


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findProductsByTags(tags, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tags** | [**[String]**](String.md)| Tags to filter by | 

### Return type

[**[Product]**](Product.md)

### Authorization

[productstore_auth](../README.md#productstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getProductById"></a>
# **getProductById**
> Product getProductById(productId)

Find product by ID

Returns a single product

### Example
```javascript
var SwaggerStore = require('swagger_store');
var defaultClient = SwaggerStore.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerStore.UserApi();

var productId = 789; // Number | ID of product to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProductById(productId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| ID of product to return | 

### Return type

[**Product**](Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getUserByName"></a>
# **getUserByName**
> User getUserByName(username)

Get user by user name

### Example
```javascript
var SwaggerStore = require('swagger_store');

var apiInstance = new SwaggerStore.UserApi();

var username = "username_example"; // String | The name that needs to be fetched. Use user1 for testing.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserByName(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The name that needs to be fetched. Use user1 for testing. | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="loginUser"></a>
# **loginUser**
> 'String' loginUser(username, password)

Logs user into the system

### Example
```javascript
var SwaggerStore = require('swagger_store');

var apiInstance = new SwaggerStore.UserApi();

var username = "username_example"; // String | The user name for login

var password = "password_example"; // String | The password for login in clear text


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginUser(username, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The user name for login | 
 **password** | **String**| The password for login in clear text | 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="logoutUser"></a>
# **logoutUser**
> logoutUser()

Logs out current logged in user session

### Example
```javascript
var SwaggerStore = require('swagger_store');

var apiInstance = new SwaggerStore.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.logoutUser(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="updateProduct"></a>
# **updateProduct**
> updateProduct(body)

Update an existing product

### Example
```javascript
var SwaggerStore = require('swagger_store');
var defaultClient = SwaggerStore.ApiClient.instance;

// Configure OAuth2 access token for authorization: productstore_auth
var productstore_auth = defaultClient.authentications['productstore_auth'];
productstore_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwaggerStore.UserApi();

var body = new SwaggerStore.Product(); // Product | Product object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateProduct(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Product**](Product.md)| Product object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

[productstore_auth](../README.md#productstore_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="updateProductWithForm"></a>
# **updateProductWithForm**
> updateProductWithForm(productId, opts)

Updates a product in the store with form data

### Example
```javascript
var SwaggerStore = require('swagger_store');
var defaultClient = SwaggerStore.ApiClient.instance;

// Configure OAuth2 access token for authorization: productstore_auth
var productstore_auth = defaultClient.authentications['productstore_auth'];
productstore_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwaggerStore.UserApi();

var productId = 789; // Number | ID of product that needs to be updated

var opts = { 
  'name': "name_example", // String | Updated name of the product
  'status': "status_example" // String | Updated status of the product
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateProductWithForm(productId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| ID of product that needs to be updated | 
 **name** | **String**| Updated name of the product | [optional] 
 **status** | **String**| Updated status of the product | [optional] 

### Return type

null (empty response body)

### Authorization

[productstore_auth](../README.md#productstore_auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateUser"></a>
# **updateUser**
> updateUser(username, body)

Updated user

This can only be done by the logged in user.

### Example
```javascript
var SwaggerStore = require('swagger_store');

var apiInstance = new SwaggerStore.UserApi();

var username = "username_example"; // String | name that need to be updated

var body = new SwaggerStore.User(); // User | Updated user object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateUser(username, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| name that need to be updated | 
 **body** | [**User**](User.md)| Updated user object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="uploadFile"></a>
# **uploadFile**
> ApiResponse uploadFile(productId, opts)

uploads an image

### Example
```javascript
var SwaggerStore = require('swagger_store');
var defaultClient = SwaggerStore.ApiClient.instance;

// Configure OAuth2 access token for authorization: productstore_auth
var productstore_auth = defaultClient.authentications['productstore_auth'];
productstore_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwaggerStore.UserApi();

var productId = 789; // Number | ID of product to update

var opts = { 
  'additionalMetadata': "additionalMetadata_example", // String | Additional data to pass to server
  'file': "/path/to/file.txt" // File | file to upload
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadFile(productId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| ID of product to update | 
 **additionalMetadata** | **String**| Additional data to pass to server | [optional] 
 **file** | **File**| file to upload | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[productstore_auth](../README.md#productstore_auth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

