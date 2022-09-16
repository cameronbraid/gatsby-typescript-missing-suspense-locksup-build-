import * as React from "react"

import { ErrorBoundary } from "react-error-boundary"

const Lazy = React.lazy(()=>import("../Lazy"))

export function Client({ children }: any) {
  return children
}

const IndexPage = () => {
  return (
    <div>
      <div>Index</div>
      <ErrorBoundary fallback={<div>Oops</div>}>
        <Client>
          <Lazy/>
        </Client>
      </ErrorBoundary>
    </div>
  )
}

export default IndexPage
