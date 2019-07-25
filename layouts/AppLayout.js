import Meta from './shared/Meta'
import Footer from './shared/Footer'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const AppLayout = props => (
  <div style={layoutStyle}>
    <Meta />
    <header>
      <nav></nav>
    </header>
    {props.children}
    <Footer />
  </div>
)

export default AppLayout
