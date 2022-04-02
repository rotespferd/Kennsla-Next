import { Link, routes } from '@redwoodjs/router'

type FrontendLayoutProps = {
  children?: React.ReactNode
}

const FrontendLayout = ({ children }: FrontendLayoutProps) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Kennsla</Link>
        </h1>
      </header>
      {children}
    </>
  )
}

export default FrontendLayout
