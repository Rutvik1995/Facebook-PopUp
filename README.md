# gf-efs-phoenix-otr-wexauth-rsdemo
This project is a demo for authorizing and authenticating the request to API Endpoint by the client or client API. This project uses the [WEX auth library](https://github.com/wexinc/gf-efs-phoenix-otr-wexauth) for authenticating the token, which is being passed in the request.

<b>Step 1: Creating the Demo app on Wex Development Portal</b>

[Wex Development portal](https://portal.wexapps.com/) provides the interface for a client to create the token and assign different roles to it. The client can be able to access different API endpoints of different roles assigned to them.

<table align="center"  >
  <tr>
    <th>
      <p align="center">
        <img height="400" src="https://user-images.githubusercontent.com/26616966/102420400-ac7f5580-3fc7-11eb-9b90-74adcb4e9a41.png">
      </p>
    </th>
    <th>
      <p align="center">
        <img height="400" src="https://user-images.githubusercontent.com/26616966/102509867-a4b5c480-404c-11eb-875a-e3aa2e152a47.png">
      </p>
    </th>
  </tr>
</table>

<b>Step 2: Copying the credential</b>


Once the app is created on the Wex Developer portal, copy the Client ID  and Client Secret from under the local session.
<p>
  <img src="https://user-images.githubusercontent.com/26616966/102522591-0fbac780-405c-11eb-9326-7509e573afce.png">
</p>

<b>Step 3: Setting up the Post request in Postman to generate token</b>

Create the POST request and enter https://auth.wexapps.com/v2/token in the URL. Paste the Client ID, Client Secret and Grant Type in the body of the request.


<p>
  <img src="https://user-images.githubusercontent.com/26616966/102526654-99b95f00-4061-11eb-9784-3249c7b7e2f9.png">
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
