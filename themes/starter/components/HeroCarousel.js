/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useCallback } from 'react'

/**
 * Hero 轮播图组件
 * 淡入淡出 + Ken Burns 微缩放效果
 * 纯 CSS + React 实现，零第三方依赖
 */
export const HeroCarousel = ({ images = [], interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  // 用于重置进度条动画的 key
  const [progressKey, setProgressKey] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % images.length)
    setProgressKey(prev => prev + 1)
  }, [images.length])

  // 自动切换
  useEffect(() => {
    if (isPaused || images.length <= 1) return
    const timer = setInterval(goToNext, interval)
    return () => clearInterval(timer)
  }, [isPaused, images.length, interval, goToNext])

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
              transform: isActive ? 'scale(1.08)' : 'scale(1)',
              transition: 'opacity 1.2s ease-in-out, transform 5s ease-out',
              zIndex: isActive ? 1 : 0
            }}>
            <img
              src={src}
              alt=''
              className='h-full w-full object-cover'
              loading={index === 0 ? 'eager' : 'lazy'}
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
