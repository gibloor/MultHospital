import React, { Suspense } from 'react'
import { MemoryRouter } from "react-router-dom"

import App from 'App'

interface Options {
  route: string
}

interface Props {
  options: Options
}

const Router = (props: Props) => {

  const { options } = props

  return (
    <Suspense fallback="Time to fix i18next">
      <MemoryRouter initialEntries={[options.route]}>
        <App />
      </MemoryRouter>
    </Suspense>
  )
}

export default Router