var viewer = new Cesium.Viewer('cesiumContainer');



//kml�ǂݍ���
viewer.dataSources.add(Cesium.KmlDataSource.load('http://naisd0128.github.io/cesium-tokyo/cesium-starter-app-master/Source/travel.kml'));