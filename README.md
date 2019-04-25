# React Starter Kit
Based on [Webpack 4 tutorial](https://www.valentinog.com/blog/webpack/). <-- many thanks to
Valentino Gagliardi for this, great tutorial.

Includes:
- React
- Webpack
- SCSS
- Basic nav
- React Bootstrap
- Deployment to S3 (compiled assets)

## Prerequisites
- Node, npm
- An s3 bucket set up for web hosting

## Setup
- S3: Create a file in root directory called `s3bucketname`, with the s3 bucket name for deployment (content should be just a single string). This file will be gitignored.

## Build and deploy
Run the prod_deploy.sh script: `sh prod_deploy.sh`
