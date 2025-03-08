import clsx from 'clsx'
import React from 'react'
import logo from "../../../public/logo.svg"
import Image from 'next/image'
interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <Image
      alt="Hizitickets Logo"
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      src={logo}
      className='dark:stroke-white stroke-black'
    />
  )
}
