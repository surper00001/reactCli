import React, { useEffect, useRef } from 'react'
import * as Cesium from 'cesium'
import { initializeCesium } from '@/config/cesium'

interface CesiumViewerProps {
  className?: string
  onViewerReady?: (viewer: Cesium.Viewer) => void
}

const CesiumViewer: React.FC<CesiumViewerProps> = ({ 
  className = '', 
  onViewerReady 
}) => {
  const viewerRef = useRef<Cesium.Viewer | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // 初始化Cesium配置
    const config = initializeCesium()

    // 创建Cesium Viewer
    const viewer = new Cesium.Viewer(containerRef.current, {
      
      // 界面配置
      animation: false, // 关闭动画控件
      baseLayerPicker: true, // 显示底图选择器
      fullscreenButton: true, // 显示全屏按钮
      geocoder: true, // 显示地理编码器
      homeButton: true, // 显示主页按钮
      infoBox: true, // 显示信息框
      sceneModePicker: true, // 显示场景模式选择器
      selectionIndicator: true, // 显示选择指示器
      timeline: false, // 关闭时间轴
      navigationHelpButton: true, // 显示导航帮助按钮
      navigationInstructionsInitiallyVisible: false,
      
      // 性能配置
      requestRenderMode: true, // 启用按需渲染
      maximumRenderTimeChange: Infinity,
      
      // 其他配置
      shouldAnimate: false,
      shadows: true, // 启用阴影
      terrainShadows: Cesium.ShadowMode.ENABLED,
    })

    // 设置初始视角
    viewer.camera.setView(config.defaultView)

    // 添加一些示例实体
    addSampleEntities(viewer)

    // 保存viewer引用
    viewerRef.current = viewer

    // 通知父组件viewer已准备就绪
    if (onViewerReady) {
      onViewerReady(viewer)
    }

    // 清理函数
    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy()
        viewerRef.current = null
      }
    }
  }, [onViewerReady])

  // 添加示例实体
  const addSampleEntities = (viewer: Cesium.Viewer) => {
    // 添加一个点
    viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(116.4, 39.9, 0),
      point: {
        pixelSize: 10,
        color: Cesium.Color.YELLOW,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
      },
      label: {
        text: '北京',
        font: '12pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        pixelOffset: new Cesium.Cartesian2(0, -40),
      },
    })

    // 添加一个多边形
    viewer.entities.add({
      polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray([
          116.3, 39.8,
          116.5, 39.8,
          116.5, 40.0,
          116.3, 40.0,
        ]),
        material: Cesium.Color.BLUE.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.BLUE,
      },
    })
  }

  return (
    <div 
      ref={containerRef} 
      className={`cesium-viewer ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  )
}

export default CesiumViewer
