/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Hero 轮播图组件
 * 淡入淡出 + Ken Burns 微缩放效果
 * 纯 CSS + React 实现，零第三方依赖
 *
 * 使用 setTimeout + visibilitychange 确保：
 * - 切换标签页后回来能立即恢复轮播
 * - 窗口操作（最大化、移动等）不会中断轮播
 */
export const HeroCarousel = ({ images = [], interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progressKey, setProgressKey] = useState(0)
  const timerRef = useRef(null)
  const currentIndexRef = useRef(0)

  // 预加载所有图片，避免首次切换时卡顿
  useEffect(() => {
    images.forEach(src => {
      const img = new window.Image()
      img.src = src
    })
  }, [images])

  const advance = useCallback(() => {
    const next = (currentIndexRef.current + 1) % images.length
    currentIndexRef.current = next
    setCurrentIndex(next)
    setProgressKey(prev => prev + 1)
  }, [images.length])

  const startTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(function tick () {
      advance()
      timerRef.current = setTimeout(tick, interval)
    }, interval)
  }, [advance, interval])

  // 自动轮播 — 始终运行，不受鼠标悬停影响
  useEffect(() => {
    if (images.length <= 1) return
    startTimer()
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [images.length, startTimer])

  // 切换标签页回来时立即恢复轮播
  useEffect(() => {
    if (images.length <= 1) return
    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        advance()
        startTimer()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [images.length, advance, startTimer])

  if (!images.length) return null

  return (
    <div
      className='relative w-full overflow-hidden rounded-2xl'
      style={{ aspectRatio: '4/3' }}>
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
              {...(index === 0 ? { fetchpriority: 'high' } : { loading: 'lazy' })}
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
                currentIndexRef.current = index
                setCurrentIndex(index)
                setProgressKey(prev => prev + 1)
                startTimer()
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
