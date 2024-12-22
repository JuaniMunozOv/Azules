ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5344").setExtent([2395311.198461, 6531610.417963, 2413005.058395, 6543692.632999]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Mapasombraas_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Mapasombraas',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Mapasombraas_1.png",
                                attributions: ' ',
                                projection: 'EPSG:5344',
                                alwaysInRange: true,
                                imageExtent: [2352026.956300, 6508278.656500, 2473586.889200, 6578550.262300]
                            })
                        });
var lyr_DEM_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'DEM',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/DEM_2.png",
                                attributions: ' ',
                                projection: 'EPSG:5344',
                                alwaysInRange: true,
                                imageExtent: [2352026.956300, 6508278.656500, 2473586.889200, 6578550.262300]
                            })
                        });
var format_PuntosdeImgenes_3 = new ol.format.GeoJSON();
var features_PuntosdeImgenes_3 = format_PuntosdeImgenes_3.readFeatures(json_PuntosdeImgenes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5344'});
var jsonSource_PuntosdeImgenes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosdeImgenes_3.addFeatures(features_PuntosdeImgenes_3);
var lyr_PuntosdeImgenes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuntosdeImgenes_3, 
                style: style_PuntosdeImgenes_3,
                popuplayertitle: 'Puntos de Imágenes',
                interactive: true,
                title: '<img src="styles/legend/PuntosdeImgenes_3.png" /> Puntos de Imágenes'
            });
var format_TrazaV3_4 = new ol.format.GeoJSON();
var features_TrazaV3_4 = format_TrazaV3_4.readFeatures(json_TrazaV3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5344'});
var jsonSource_TrazaV3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrazaV3_4.addFeatures(features_TrazaV3_4);
var lyr_TrazaV3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrazaV3_4, 
                style: style_TrazaV3_4,
                popuplayertitle: 'Traza-V3',
                interactive: false,
                title: '<img src="styles/legend/TrazaV3_4.png" /> Traza-V3'
            });
var format_TrazaV2_5 = new ol.format.GeoJSON();
var features_TrazaV2_5 = format_TrazaV2_5.readFeatures(json_TrazaV2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5344'});
var jsonSource_TrazaV2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrazaV2_5.addFeatures(features_TrazaV2_5);
var lyr_TrazaV2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrazaV2_5, 
                style: style_TrazaV2_5,
                popuplayertitle: 'Traza-V2',
                interactive: false,
                title: '<img src="styles/legend/TrazaV2_5.png" /> Traza-V2'
            });
var format_TrazaV1_6 = new ol.format.GeoJSON();
var features_TrazaV1_6 = format_TrazaV1_6.readFeatures(json_TrazaV1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5344'});
var jsonSource_TrazaV1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrazaV1_6.addFeatures(features_TrazaV1_6);
var lyr_TrazaV1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrazaV1_6, 
                style: style_TrazaV1_6,
                popuplayertitle: 'Traza-V1',
                interactive: false,
                title: '<img src="styles/legend/TrazaV1_6.png" /> Traza-V1'
            });
var format_AOISanJuanIS_v4kmz_7 = new ol.format.GeoJSON();
var features_AOISanJuanIS_v4kmz_7 = format_AOISanJuanIS_v4kmz_7.readFeatures(json_AOISanJuanIS_v4kmz_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5344'});
var jsonSource_AOISanJuanIS_v4kmz_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOISanJuanIS_v4kmz_7.addFeatures(features_AOISanJuanIS_v4kmz_7);
var lyr_AOISanJuanIS_v4kmz_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOISanJuanIS_v4kmz_7, 
                style: style_AOISanJuanIS_v4kmz_7,
                popuplayertitle: 'AOI San Juan IS_v4.kmz',
                interactive: true,
                title: '<img src="styles/legend/AOISanJuanIS_v4kmz_7.png" /> AOI San Juan IS_v4.kmz'
            });
var format_Rios_8 = new ol.format.GeoJSON();
var features_Rios_8 = format_Rios_8.readFeatures(json_Rios_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5344'});
var jsonSource_Rios_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_8.addFeatures(features_Rios_8);
var lyr_Rios_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_8, 
                style: style_Rios_8,
                popuplayertitle: 'Rios',
                interactive: true,
                title: '<img src="styles/legend/Rios_8.png" /> Rios'
            });
var format_SanJuanVector_9 = new ol.format.GeoJSON();
var features_SanJuanVector_9 = format_SanJuanVector_9.readFeatures(json_SanJuanVector_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5344'});
var jsonSource_SanJuanVector_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanJuanVector_9.addFeatures(features_SanJuanVector_9);
var lyr_SanJuanVector_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanJuanVector_9, 
                style: style_SanJuanVector_9,
                popuplayertitle: 'San Juan-Vector',
                interactive: false,
                title: '<img src="styles/legend/SanJuanVector_9.png" /> San Juan-Vector'
            });
var group_Caminoacceso = new ol.layer.Group({
                                layers: [lyr_TrazaV3_4,lyr_TrazaV2_5,lyr_TrazaV1_6,],
                                fold: "open",
                                title: 'Camino acceso'});
var group_Imagenesderecorrido = new ol.layer.Group({
                                layers: [lyr_PuntosdeImgenes_3,],
                                fold: "open",
                                title: 'Imagenes de recorrido'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Mapasombraas_1.setVisible(true);lyr_DEM_2.setVisible(true);lyr_PuntosdeImgenes_3.setVisible(true);lyr_TrazaV3_4.setVisible(true);lyr_TrazaV2_5.setVisible(true);lyr_TrazaV1_6.setVisible(true);lyr_AOISanJuanIS_v4kmz_7.setVisible(true);lyr_Rios_8.setVisible(true);lyr_SanJuanVector_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Mapasombraas_1,lyr_DEM_2,group_Imagenesderecorrido,group_Caminoacceso,lyr_AOISanJuanIS_v4kmz_7,lyr_Rios_8,lyr_SanJuanVector_9];
lyr_PuntosdeImgenes_3.set('fieldAliases', {'fid': 'fid', 'image': 'image', 'altitude': 'altitude', });
lyr_TrazaV3_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TrazaV2_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TrazaV1_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AOISanJuanIS_v4kmz_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Rios_8.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'sag': 'sag', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', });
lyr_SanJuanVector_9.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', 'gid_2': 'gid_2', 'entidad_2': 'entidad_2', 'objeto': 'objeto', 'vlp': 'vlp', 'fdc_2': 'fdc_2', 'sag_2': 'sag_2', });
lyr_PuntosdeImgenes_3.set('fieldImages', {'fid': '', 'image': 'ExternalResource', 'altitude': 'TextEdit', });
lyr_TrazaV3_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_TrazaV2_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_TrazaV1_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AOISanJuanIS_v4kmz_7.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Rios_8.set('fieldImages', {'gid': 'Range', 'entidad': 'TextEdit', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'sag': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', 'auxiliary_storage_labeling_labelrotation': 'Hidden', });
lyr_SanJuanVector_9.set('fieldImages', {'gid': 'TextEdit', 'entidad': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', 'gid_2': 'TextEdit', 'entidad_2': 'TextEdit', 'objeto': 'TextEdit', 'vlp': 'TextEdit', 'fdc_2': 'TextEdit', 'sag_2': 'TextEdit', });
lyr_PuntosdeImgenes_3.set('fieldLabels', {'fid': 'no label', 'image': 'header label - visible with data', 'altitude': 'no label', });
lyr_TrazaV3_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TrazaV2_5.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TrazaV1_6.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AOISanJuanIS_v4kmz_7.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Rios_8.set('fieldLabels', {'gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'fna': 'hidden field', 'gna': 'no label', 'nam': 'no label', 'sag': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_SanJuanVector_9.set('fieldLabels', {'gid': 'no label', 'entidad': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', 'gid_2': 'no label', 'entidad_2': 'no label', 'objeto': 'no label', 'vlp': 'no label', 'fdc_2': 'no label', 'sag_2': 'no label', });
lyr_SanJuanVector_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});