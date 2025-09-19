import React, { useRef } from 'react'
import { CesiumViewer } from '@/components/Cesium'
import * as Cesium from 'cesium'

const CesiumPage: React.FC = () => {
  const viewerRef = useRef<Cesium.Viewer | null>(null)

  const handleViewerReady = (viewer: Cesium.Viewer) => {
    viewerRef.current = viewer
    console.log('Cesium Viewer 已准备就绪')
  }

  const addRandomEntity = () => {
    if (!viewerRef.current) return

    const longitude = 116.4 + (Math.random() - 0.5) * 0.2
    const latitude = 39.9 + (Math.random() - 0.5) * 0.2

    viewerRef.current.entities.add({
      position: Cesium.Cartesian3.fromDegrees(longitude, latitude, 0),
      point: {
        pixelSize: 15,
        color: Cesium.Color.fromRandom({ alpha: 1.0 }),
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
      },
      label: {
        text: `随机点 ${Math.round(Math.random() * 100)}`,
        font: '12pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        pixelOffset: new Cesium.Cartesian2(0, -40),
      },
    })
  }

  const clearEntities = () => {
    if (!viewerRef.current) return
    viewerRef.current.entities.removeAll()
  }

  const flyToBeijing = () => {
    if (!viewerRef.current) return
    viewerRef.current.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(116.4, 39.9, 10000),
      duration: 2.0,
    })
  }

  return (
    <div className="h-screen flex flex-col">
      {/* 控制面板 */}
      <div className="bg-gray-800 text-white p-4 flex gap-4 items-center">
        <h1 className="text-xl font-bold">Cesium 3D 地球</h1>
        <button
          onClick={addRandomEntity}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
        >
          添加随机点
        </button>
        <button
          onClick={clearEntities}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors"
        >
          清除所有实体
        </button>
        <button
          onClick={flyToBeijing}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition-colors"
        >
          飞到北京
        </button>
      </div>

      {/* Cesium 容器 */}
      <div className="flex-1">
        <CesiumViewer 
          onViewerReady={handleViewerReady}
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default CesiumPage
