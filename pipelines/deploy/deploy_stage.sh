#!/bin/bash

echo *-*-*-*-*-*-*-*-*-*-*
echo *- DEPLOYING STAGE -*
echo *-*-*-*-*-*-*-*-*-*-*

echo $BUILD_NUMBER > /tmp/.simuladormission_aden_org

# COPIAMOS VARIABLES A SERVIDOR REMOTO
scp /tmp/.simuladormission_aden_org jenkins@35.247.253.13:/tmp/.simuladormission_aden_org

# COPIAMOS CODIGO ACTUALIZADO A SERVIDOR REMOTO
ssh jenkins@35.247.253.13 mkdir -p /home/jenkins/project/simuladormission_aden_org
scp /var/jenkins_home/workspace/simuladormission_aden_org/deploy-stage.sh /var/jenkins_home/workspace/simuladormission_aden_org/*.yml jenkins@35.247.253.13:/home/jenkins/project/simuladormission_aden_org/

# EJECUCION DE SCRIPT DE DEPLOY EN SERVIDOR REMOTO
ssh jenkins@35.247.253.13 /home/jenkins/project/simuladormission_aden_org/deploy-stage.sh

