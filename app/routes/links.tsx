import {ArrowExternal} from '~/components/icons/arrow-external'
import {Layout} from '~/components/layout'
import links from '~/content/links.json'

export default function Links() {
  return (
    <Layout>
      <main className="Links">
        <section className="Links__intro">
          <img
            className="Links__profile"
            src="me-2.png"
            alt="hello! My name is Jon Major Condon"
          />
          <span>@jonmajorc</span>
        </section>
        <section>
          <ul className="Links__list">
            {links.map(({title, href, icon, alt}) => {
              return (
                <a href={href} className="Links__list-item">
                  <img src={icon} height="35px" width="35px" alt={alt} />
                  <span className="Links__title">{title}</span>
                  <ArrowExternal />
                </a>
              )
            })}
          </ul>
        </section>
      </main>
    </Layout>
  )
}
