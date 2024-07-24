# Episode 2 - Iginiting out app

## -> First thing we do is to connect our code to a github repo and push all of it on it.

## -> To make our app production ready we need to do the following tasks -

 - Task 1 -> Minify our file(Remove console logs and budle things up.)

- Task 2 -> Need a server to run things.

 ## -> The process looks something like this 

 Minify --> Optimization --> Clean console --> Bundle

 ## -> "npm" does not stand for node package manager, npm does not have a full form.

 ## -> "package.json" is configuration for npm.

 ## -> "Most important package in our project is bundler like webpack, parcel, veet.

 ## -> If we use Caret(^) then minor versions will be upgraded automatically and if we use tilde(~) then major version will be updated automatically too.

 ## -> All the file we don't want on our github(files that can be reproduced should be putted inside .gitignore). Example are node modules.

 ## -> Running "npx parcel index.html" will build a production for our index.html file and will host it onto localhost:1234

 ## -> Fetching react by using cdn calls is not a good practice instead we should use node modules to use react.

 ## -> Parcel is helping us with
  - Developer build
  - It is hosting our page on local server
  - It is also handling HMR == Hot Module Replacement
  - This HMR is being implemented by using File watching algorithms which are written in C++
  - It gives faster builds because it is caching the build files under parcel cache folder.
  - It will also do image optimisation for us.
  - It will also minify, bundle and compress the code.
  - It also does consistent hashing, code splitting.
  - It gives abality of differential bundeling to ensure smooth experience along older version of browsers as well.
  - It does Tree shaking as well which means removal of unwanted code which is not currently being used.

 ## -> When we build using this parcel it will compress everything into 3 main files css, js and html file which will have all our code but in processed manner which is highly optimised to be pushed to production and that all will be contained inside dist.

 ## -> As parcel cache and dist can be regenerated again hence they will not be pushed to github.

 ------------------XXX-----------------------