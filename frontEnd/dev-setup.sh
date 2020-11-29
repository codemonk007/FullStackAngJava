allLibraries=("books" "cloths" "electronic" "footwear" "groceries")
if [ $# -gt 0 ] ; then
    allLibraries=("$@")
fi
BASE_DIR=`pwd`
TOTAL_COUNT=${#allLibraries[@]}
CURRENT_COUNT=1
mkdir -p ${BASE_DIR}/libdist/packages
for library in ${allLibraries[@]}
do
echo "+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+"
    echo "Starting with ${library} ... ($CURRENT_COUNT / $TOTAL_COUNT)"
    cd ${BASE_DIR}/projects/${library}
    npm install
    if [ "$?" -ne "0" ]; then exit 1; fi
    cd ${BASE_DIR}
    echo ${BASE_DIR}
    ng build ${library}
    if [ "$?" -ne "0" ]; then exit 1; fi
    cp -r ${BASE_DIR}/projects/${library}/public_assets ${BASE_DIR}/libdist/packages/${library}/
    # mkdir -p ${BASE_DIR}/libdist/${library}
    cp ${BASE_DIR}/dist/${library}/bundles/${library}*.min.js ${BASE_DIR}/libdist/packages/${library}/
    cp ${BASE_DIR}/dist/${library}/bundles/${library}*.min.js.map ${BASE_DIR}/libdist/packages/${library}/
    echo "Completed building ${library} !!! ($CURRENT_COUNT / $TOTAL_COUNT)"
    echo "+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+"
    CURRENT_COUNT=`expr $CURRENT_COUNT + 1`
done