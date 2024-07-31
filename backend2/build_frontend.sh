#!/bin/bash

rm -rf ./frontend_build/dist

cd ../frontend
npm run build

cp -r ./dist ../backend2/frontend_build/dist
