#!/bin/bash

if [[ $1 = "prod" || $1 = "dev" ]]; then
    if [ $2 = "up" ]; then
        cd api && ./vendor/bin/sail up -d
        cd ..
        cd ui && ./deploy.sh ${1} ${2}
        cd ..
    elif [ $2 = 'down' ]; then
         cd api && ./vendor/bin/sail stop
         cd ..
         cd ui && ./deploy.sh ${1} ${2}
         cd ..
    else
        echo 'Need to follow format ./start prod|dev down|up'
    fi
else
    echo 'Need to follow format ./start prod|dev down|up'
fi
