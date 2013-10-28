#!/bin/bash

VERSION=1.2.1
REPO=/cygdrive/d/CodeGIT/obullxl.github.io/mvnrepo/org/apache/hadoop

if [ -d $REPO ];then
        echo '$REPO'
        mkdir $REPO
fi

for jar in ant
do
        echo 'Start to package hadoop-$jar-$VERSION.jar'
        cd src/$jar
        tar -cf hadoop-$jar-$VERSION-sources.jar *
        cd ../../
        mv src/$jar/hadoop-$jar-$VERSION-sources.jar ./

        if [ -d $REPO/hadoop-$jar/$VERSION ];then
                mkdir $REPO/hadoop-$jar/$VERSION
        fi

        mv src/$jar/hadoop-$jar-$VERSION.jar $REPO/hadoop-$jar/$VERSION/
        mv src/$jar/hadoop-$jar-$VERSION-sources.jar $REPO/hadoop-$jar/$VERSION/

        echo 'Done to package hadoop-$jar-$VERSION.jar'
        echo ''
done

