#!/bin/bash
#
#echo "######################"
#echo "*** Building image ***"
#echo "######################"
#
# Exportamos el build tag con el numero de ejecucion del job de Jenkins
echo $BUILD_NUMBER > /tmp/.simuladormission_aden_org

scp /tmp/.simuladormission_aden_org 172.18.0.1:/tmp/.simuladormission_aden_org
ssh 172.18.0.1 sudo /home/jenkins/workspace/devops-jenkins/simuladormission_aden_org/pipelines/build/build.sh
