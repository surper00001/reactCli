import * as Cesium from 'cesium'

// Cesium配置
export const cesiumConfig = {
  // 设置默认的Cesium Ion访问令牌
  defaultAccessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YzZmNjY0MS0yNmNjLTRkMDQtOTk2ZS04ZjM2NDUzNzc1NDAiLCJpZCI6Mjc1MzYzLCJpYXQiOjE3MzkzNTE0NTl9.OKBa5UnL_esutACrX6Q_UBTB9GQV5XmDD4V4Qyt5atQ',
  // 默认视角设置
  defaultView: {
    destination: Cesium.Cartesian3.fromDegrees(116.4, 39.9, 10000000), // 北京上空
    orientation: {
      heading: 0.0,
      pitch: -Cesium.Math.PI_OVER_TWO,
      roll: 0.0,
    },
  },
}

// 初始化Cesium
export const initializeCesium = () => {
  // 设置默认的Cesium Ion访问令牌
  Cesium.Ion.defaultAccessToken = cesiumConfig.defaultAccessToken
  
  return cesiumConfig
}
