<a id="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Technologies</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<div>
    <h1>Image Uploader with S3</h1>
</div>

## About The Project

![image](https://github.com/Pablo-man/MicServiceUploadImages/assets/96446700/01193dd0-7ea0-4d17-86e6-fe215fa26d77)

Simple application that uses the AWS s3 service to upload images

Project focused:
* Upload of images
* Secure storage
* High availability

### Technologies

- nodejs
- express
- @aws-sdk/client-s3
- @aws-sdk/s3-request-presigner


## Getting Started

To start running this project we will perform the following steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Retrofiyer/LoginJs.git](https://github.com/Pablo-man/MicServiceUploadImages.git
   ```
1.1 Switch to each microservice 
   ```sh
   cd CLI
   cd UPLOAD  #Open terminal for each microservice
   cd LIST
   ```
2. Install NPM packages
   ```sh
   npm install   #For each microservice
   ```
3. Create .env in root project
   ```js
   AWS_BUCKET_NAME=bucketname
   AWS_BUCKET_REGION=region
   AWS_PUBLIC_KEY=publickey
   AWS_SECRET_KEY=secretkey
   ```
4. Run project
   ```sh
   npm start
   ```
