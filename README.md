# backend-fitXchange
Backend includes MySQL Server and Rest Api Webservice. Database is managed by the Rest Api. 

## MySQL Server for Database
MySQL Server is deployed in Google Cloud Platform and it has one database called `fit_db`.

Here is the Entity Relationship Diagramm of the database:

!<img width=600 src="https://user-images.githubusercontent.com/36050790/198861289-46b32e70-6f0f-4716-acf4-6137100273f3.png">


## Rest Api Service
Rest Api Service is implemented with `Express` framework for `Node.js`. It is deployed in Firebase as a function. \
API Endpoint is https://us-central1-metapumpkin.cloudfunctions.net/express.

### Available Services

<img width=500 src="https://user-images.githubusercontent.com/36050790/198861612-01e3f822-fd0d-45d5-8459-a342eaeb5877.png">

### Use Case Diagramm
<img width=450 src="https://user-images.githubusercontent.com/36050790/198861706-c0a72bdd-c351-4a89-8811-a3cffe6f0fe4.png"> <img width=450 src="https://user-images.githubusercontent.com/36050790/198861759-184c6eee-855e-4bc8-a42b-c649ab7c4fcc.png">

