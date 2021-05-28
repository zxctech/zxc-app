#!/bin/bash
cd /home/ec2-user/server/app
npm install
npm run-script build
npm install pm2 -g