#!/bin/bash

echo *-*-*-*-*-*-*-*
echo *- DEPLOYING -*
echo *-*-*-*-*-*-*-*

export REGISTRY="gcr.io"
export PROJECT="datacenter-tecnologia-296718"
export IMAGE="simuladormission_aden_org_stage"
export BUILD_TAG=$(sed -n '1p' /tmp/.simuladormission_aden_org)

# LOGUEAMOS EL SERVER AL REGISTRY

# DESCARGAMOS LA ULTIMA IMAGEN
docker pull $REGISTRY/$PROJECT/$IMAGE:$BUILD_TAG

# LEVANTAMOS NUEVAMENTE
cd /home/jenkins/project/simuladormission_aden_org && docker-compose -f docker-compose-stage.yml up -d
