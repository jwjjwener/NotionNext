/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from 'react'

/**
 * Hero 轮播图组件
 * 淡入淡出 + Ken Burns 微缩放效果
 * 纯 CSS + React 实现，零第三方依赖
 */
export const HeroCarousel = ({ images = [], interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progressKey, setProgressKey] = useState(0)
  const timerRef = useRef(null)

  // 预加载所有图片，避免首次切换时卡顿
  useEffect(() => {
    images.forEach(src => {
      const img = new window.Image()
      img.src = src
    })
  }, [images])

  // 自动切换 — 用 ref 保存 currentIndex 避免 useEffect 依赖变化导致 interval 重建
  const currentIndexRef = useRef(currentIndex)
  currentIndexRef.current = currentIndex

  useEffect(() => {
    if (isPaused || images.length <= 1) return

    timerRef.current = setInterval(() => {
      const next = (currentIndexRef.current + 1) % images.length
      setCurrentIndex(next)
      setProgressKey(prev => prev + 1)
    }, interval)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, images.length, interval])

  if (!images.length) return null

  return (
    <div
      className='relative w-full overflow-hidden rounded-2xl'
      style={{ aspectRatio: '4/3' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      {/* 图片层 */}
      {images.map((src, index) => {
        const isActive = index === currentIndex
        return (
          <div
            key={index}
            className='absolute inset-0'
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'scale(1.06)' : 'scale(1)',
              transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 6s cubic-bezier(0.25, 0.1, 0.25, 1)',
              willChange: 'opacity, transform',
              zIndex: isActive ? 1 : 0
            }}>
            <img
              src={src}
              alt=''
              className='h-full w-full object-cover'
              
            />
          </div>
        )
      })}

      {/* 进度条指示器 */}
      {images.length > 1 && (
        <div className='absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setProgressKey(prev => prev + 1)
                // 重置自动切换计时器
                if (timerRef.current) {
                  clearInterval(timerRef.current)
                  timerRef.current = setInterval(() => {
                    const next = (currentIndexRef.current + 1) % images.length
                    setCurrentIndex(next)
                    setProgressKey(prev => prev + 1)
                  }, interval)
                }
              }}
              className='group relative h-1 w-10 overflow-hidden rounded-full bg-white/30 transition-all hover:bg-white/50'
              aria-label={`Slide ${index + 1}`}>
              {index === currentIndex && (
                <span
                  key={progressKey}
                  className='absolute inset-y-0 left-0 rounded-full bg-primary'
                  style={{
                    animation: `heroProgressFill ${interval}ms linear forwards`
                  }}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
