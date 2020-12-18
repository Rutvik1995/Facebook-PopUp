# gf-efs-phoenix-otr-wexauth-rsdemo
This project is a demo for authorizing and authenticating the client or client API's request to our project API endpoint. This project uses the [WEX auth library](https://github.com/wexinc/gf-efs-phoenix-otr-wexauth) for authenticating the token, which is being passed in the request.

<b>Step 1: Creating the Demo app on Wex Development Portal</b>

[Wex Development Portal](https://portal.wexapps.com/) provides the interface for a client to create the token and assign different roles to it. The client can be able to access different API endpoints of different roles assigned to them.

<table align="center"  >
  <tr>
    <th>
      <p align="center">
        <img height="400" src="https://user-images.githubusercontent.com/26616966/102420400-ac7f5580-3fc7-11eb-9b90-74adcb4e9a41.png">
      </p>
    </th>
    <th>
      <p align="center">
        <img height="400" src="https://user-images.githubusercontent.com/26616966/102562379-92fc0d80-409c-11eb-9d24-ea7807174f1a.png">
      </p>
    </th>
  </tr>
</table>

<b>Step 2: Copying the credential</b>


Once the app is created on the Wex Developer portal, copy the Client ID and Client Secret from under the local session.
<p>
  <img src="https://user-images.githubusercontent.com/26616966/102566535-5e408400-40a5-11eb-88fe-42ba16289106.png">
</p>

<b>Step 3: Setting up the Post request in Postman to generate token</b>

Set the method to Post and enter URL to https://auth.wexapps.com/v2/token. Paste the Client ID, Client Secret and Grant Type in the body of the request.


<p>
  <img src="https://user-images.githubusercontent.com/26616966/102566284-d5c1e380-40a4-11eb-9d7f-b581ecfaabb2.png">
</p>

Once the request is passed successfully, a token is created in the response body.

<p>
  <img src="https://user-images.githubusercontent.com/26616966/102536277-025b0880-406f-11eb-9739-8dc9106c5fae.png">
</p>


<b>Step 4: Starting the project</b>

To clone and run this application, you'll need Git and Java 11 installed on your computer. Once the project is cloned, run the project from your IDE. The project will start running on port number 8080.


To check the project is running correctly, you can call the GET health check API endpoint (http://localhost:8080/health) in Postman. 



<p>
  <img src="https://user-images.githubusercontent.com/26616966/102540972-6ed90600-4075-11eb-90be-6c0685a2ff66.png">
</p>

If the response comes as shown below, then the project is running correctly.


<p>
  <img src="https://user-images.githubusercontent.com/26616966/102541750-67fec300-4076-11eb-8166-2589b6236dbb.png">
</p>


<b>Step 5: Testing the API endpoint </b>

* After the project is running correctly, the project can be tested by calling the different API endpoints and passing tokens in the request.

* When any request is called,  firstly role assigned to the token is checked whether the particular role assigned has access to API endpoint.

* Secondly, the token is passed to the WEX auth library, which runs different tests for authenticating the token and checks that the weather token is not expired.


<b>1. Create Product</b>

* In order to create a new product, a Post request needs to execute. The token generated in step 3 is pasted inside the bearer token under Authorization. The product description is passed inside the request body, as shown below. Set the URL to http://localhost:8080/products.

<p align="center">
  <img src="https://user-images.githubusercontent.com/26616966/102551122-98e5f480-4084-11eb-97f6-3bcf5347a280.png">
  </p>
<p>
  <img src="https://user-images.githubusercontent.com/26616966/102551404-0560f380-4085-11eb-8689-249c917a185b.png"
 </p>

* If all the tests are passed, then a new product is added. A success message appeared in the Postman response section. 

<p>
  <img src="https://user-images.githubusercontent.com/26616966/102552628-24608500-4087-11eb-9cf2-43438153aeba.png">
</p>  

<b> 2. Get Product </b>
* Any product's information can be obtained by calling GET API Endpont http://localhost:8080/products/{productID}.

<p align="center">
  <img src="https://user-images.githubusercontent.com/26616966/102556263-1a8e5000-408e-11eb-90fe-5e2ca252905e.png">
</p>
<p>
  <img src="https://user-images.githubusercontent.com/26616966/102556317-3a257880-408e-11eb-891a-5293a0d22f36.png">
</p>

<b> 3. Delete Product </b>

* The product can be deleted by calling http://localhost:8080/products/{productID} API and setting the method to Delete.

<p>
<img src="https://user-images.githubusercontent.com/26616966/102565420-099c0980-40a3-11eb-917a-5f6e03a2dcca.png">
</p>

* The token which is passed in the request does not have the delete role assigned to it. So the request can not be complete and it gives 401 unauthorized error.

<p>
  <img src="https://user-images.githubusercontent.com/26616966/102565426-0e60bd80-40a3-11eb-9041-51c6cacf6110.png">
  </p>
