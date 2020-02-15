#!/bin/bash
cd ../home/ 

mkdir loops
cd loops
mkdir exercises
cd exercises

npm init --yes

echo "exercise directory created"

echo "installing jest"

npm install --save-dev jest 

echo "jest installed"
