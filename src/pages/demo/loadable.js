import React from 'react'
import Loadable from 'react-loadable'
import loadable from '@loadable/component'

// const LoadableComponent = Loadable({
//   loader: () => import('./'),
//   loading() {
//       return <div>Loading...</div>
//   }
// })

const LoadableComponent = loadable(() => import('./'), {
  fallback: <div>Loading...</div>
})

export default () => <LoadableComponent/>