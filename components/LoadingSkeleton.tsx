'use client'

import React from 'react'

interface LoadingSkeletonProps {
  height?: string
  width?: string
  className?: string
}

export function LoadingSkeleton({ 
  height = '200px', 
  width = '100%',
  className = '' 
}: LoadingSkeletonProps) {
  return (
    <div 
      className={`skeleton ${className}`}
      style={{ 
        height, 
        width,
        minHeight: height 
      }}
      aria-label="Loading..."
    />
  )
}

interface ContentPlaceholderProps {
  children: React.ReactNode
  loading?: boolean
  height?: string
}

export function ContentPlaceholder({ 
  children, 
  loading = false,
  height = '200px' 
}: ContentPlaceholderProps) {
  if (loading) {
    return <LoadingSkeleton height={height} />
  }
  
  return <>{children}</>
}

export function SectionSkeleton() {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30 space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 skeleton rounded-lg" />
        <div className="flex-1">
          <div className="h-8 skeleton rounded w-3/4 mb-2" />
          <div className="h-4 skeleton rounded w-1/2" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-4 skeleton rounded w-full" />
        <div className="h-4 skeleton rounded w-5/6" />
        <div className="h-4 skeleton rounded w-4/6" />
      </div>
    </div>
  )
}

export function FAQSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="border-b border-border/60 pb-5">
          <div className="h-6 skeleton rounded w-3/4 mb-3" />
          <div className="space-y-2">
            <div className="h-4 skeleton rounded w-full" />
            <div className="h-4 skeleton rounded w-5/6" />
          </div>
        </div>
      ))}
    </div>
  )
}
