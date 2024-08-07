#!/bin/bash

rm -rf ./wwwroot

cd ../frontend
npm run build

cp -r ./dist ../backend-dotnet/wwwroot
