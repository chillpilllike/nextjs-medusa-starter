import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <div class="container relative"><carousel-slider class="carousel block relative" inactive="">
        <div class="slider-nav slide-nav--inline flex justify-between absolute top-0 h-full no-js-hidden">
          <button type="button" class="slider-nav__btn tap-target tap-target--left btn text-current has-ltr-icon" name="prev" aria-controls="slider-sections--21965478625572__icons-with-text">
            <span class="visually-hidden">Previous</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" role="presentation" class="icon"><path d="m6.797 11.625 8.03-8.03 1.06 1.06-6.97 6.97 6.97 6.97-1.06 1.06z"></path></svg>
          </button>
          <button type="button" class="slider-nav__btn tap-target tap-target--right btn text-current has-ltr-icon" name="next" aria-controls="slider-sections--21965478625572__icons-with-text">
            <span class="visually-hidden">Next</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation" class="icon"><path d="m9.693 4.5 7.5 7.5-7.5 7.5" stroke="currentColor" stroke-width="1.5" fill="none"></path></svg>
          </button>
        </div>

        <div class="slider slider--contained relative slider--no-scrollbar" id="slider-sections--21965478625572__icons-with-text">
          <ul class="slider__grid grid grid-flow-col gap-theme auto-cols-1 sm:auto-cols-2 md:auto-cols-3 lg:auto-cols-4"><li class="slider__item flex justify-center items-center cc-animate-init cc-animate-in" data-cc-animate="" data-cc-animate-delay="0.07s" style="animation-delay: 0.07s;">
                
<svg class="icon icon--chat_bubble" width="36" height="36" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="presentation"><path fill="currentColor" d="M11.3 13.02a6 6 0 111.72-1.72L14 14l-2.7-.98zm2.82-1.62a7 7 0 10-2.72 2.72l2.26.82a1 1 0 001.28-1.28l-.82-2.26z"></path>
        <path fill="currentColor" d="M4.9 9.16c.52 0 .86-.36.86-.85 0-.5-.34-.85-.87-.85-.52 0-.86.36-.86.85 0 .5.34.85.86.85zM7.88 9.16c.53 0 .87-.36.87-.85 0-.5-.34-.85-.87-.85-.52 0-.87.36-.87.85 0 .5.35.85.87.85zM10.87 9.16c.52 0 .87-.36.87-.85 0-.5-.35-.85-.87-.85s-.87.36-.87.85c0 .5.35.85.87.85z"></path></svg>

                  <div class="icons-with-text__text rte"><p class="m-0 icons-with-text__title text-body-medium"><strong>Visit our support center</strong></p><div class="rte text-body-medium">
                        <p>Expert help &amp; advice</p>
                      </div></div>
                

                
              </li><li class="slider__item flex justify-center items-center cc-animate-init cc-animate-in" data-cc-animate="" data-cc-animate-delay="0.14s" style="animation-delay: 0.14s;">
                
<svg class="icon icon--box" width="36" height="36" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="presentation"><path fill="currentColor" d="M14.41 3.37L8.27 1.41a1 1 0 00-.61 0L1.52 3.37a1 1 0 00-.7.95v7.86c0 .41.25.78.63.93l6.14 2.46c.24.1.5.1.75 0l6.14-2.46a1 1 0 00.62-.93V4.32a1 1 0 00-.69-.95zM7.96 2.36l6.05 1.93-2.7.9L5.35 3.2l2.63-.84zm-.46 12.1l-5.68-2.28V5.3L7.5 7.2v7.26zM8 6.3L1.96 4.28l2.58-.82 5.99 2L8 6.3zm6.1 5.89l-5.6 2.24V7.19l5.6-1.87v6.87z"></path></svg>

                  <div class="icons-with-text__text rte"><p class="m-0 icons-with-text__title text-body-medium"><strong>Check your order status</strong></p><div class="rte text-body-medium">
                        <p>Updates &amp; tracking</p>
                      </div></div>
                

                
              </li><li class="slider__item flex justify-center items-center cc-animate-init cc-animate-in" data-cc-animate="" data-cc-animate-delay="0.21s" style="animation-delay: 0.21s;">
                
<svg class="icon icon--return" width="36" height="36" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="presentation"><path fill="currentColor" d="M9 .5a.5.5 0 000 1h1a4.5 4.5 0 110 9H2.2l3.15-3.15a.5.5 0 10-.7-.7l-4 4a.5.5 0 000 .7l4 4a.5.5 0 00.7-.7L2.21 11.5H10a5.5 5.5 0 100-11H9z"></path></svg>

                  <div class="icons-with-text__text rte"><p class="m-0 icons-with-text__title text-body-medium"><strong>30 Days Returns</strong></p><div class="rte text-body-medium">
                        <p>All you need to know</p>
                      </div></div>
                

                
              </li><li class="slider__item flex justify-center items-center cc-animate-init cc-animate-in" data-cc-animate="" data-cc-animate-delay="0.28s" style="animation-delay: 0.28s;">
                
<svg class="icon icon--dollar_sign" width="36" height="36" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="presentation"><line stroke="currentColor" fill="none" x1="8.0021544" y1="1.1659812" x2="8.0021544" y2="15.017867"></line>
        <path stroke="currentColor" fill="none" d="M 11.15031,3.6845048 H 6.4280755 a 2.2037096,2.2037096 0 0 0 0,4.4074192 h 3.1481559 a 2.2037095,2.2037095 0 0 1 0,4.407417 H 4.224366"></path></svg>

                  <div class="icons-with-text__text rte"><p class="m-0 icons-with-text__title text-body-medium"><strong>100% Money Back</strong></p><div class="rte text-body-medium">
                        <p>Guarantee</p>
                      </div></div>
                

                
              </li></ul>
        </div>
      </carousel-slider>
    </div>
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Medusa Store
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Medusa Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
