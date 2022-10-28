# Grouphouse

## Development 

`yarn start` to run locally. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`yarn build` to create executable.

## Infra Setup
1. Set up s3 bucket
2. Create policy for only s3 bucket 
3. Make user that uses policy, generate key pair
4. Set up cloudfront distribution for s3 bucket 
5. Make TLS cert for berkeley.grouphouse.io, whatis.grouphouse.io 
6. Point cloudfront at s3 bucket, attach TLS cert to cloudfront
7. Make Github Action for re-building changes, pushing changes to s3 bucket

Manual Pushing: 
- `yarn build`
- `aws s3 sync build/ s3://berkeley.grouphouse.io`
