import React from 'react';
import cs from 'classnames';
import heroImgUrl from 'images/seattlejs-hero.png';
import pikePlaceUrl from 'images/pike-place.jpg';
import locationImgUrl from 'images/fremont-foundry.jpg';
import styles from './styles.css';
import formidableLogoSvg from 'images/formidable-logo.svg';

const Container = ({ tagName="section", children, className, wrapperClassName, ...restProps }) => (
  React.createElement(tagName, { ...restProps, className: cs(styles.container, wrapperClassName) }, 
    React.createElement('div', { className }, children)
  )
);

const Tagline = (props) => <Container wrapperClassName={styles.tagline} {...props}/>
const Copy    = (props) => <Container className={styles.copy} {...props } />
const CTA     = (props) => <Container className={styles.cta} {...props } />
const Footer  = (props) => <Container tagName="footer" className={styles.innerFooter} {...props } />

export const App = () => (
  <main>
    <nav className={styles.container}>
      <div className={styles.navList}>
        <a href="#about">About</a>
        <a href="#location">Location</a>
        <a href="https://www.papercall.io/sjs">Call for Proposals</a>
      </div>
      <div className={styles.navCtaButton}>
        <a href="https://seattlejs2017.eventbrite.com" className="btn">Register</a>
      </div>
    </nav>
    <div className={styles.navPlaceholder} />

    <section id="hero" className={styles.hero}>
      <img src={heroImgUrl}></img>
    </section>

    <Tagline>
      <p>Minima voluptatibus nobis eum numquam similique veritatis doloribus. Assumenda quos molestiae sint odit sunt quidem et recusandae. Nam eaque aut.</p>
    </Tagline>

    <Container
      wrapperClassName={styles.formidableBanner_outer}
      className={styles.formidableBanner}>
      <div className={styles.sponsoredBy}>Sponsored by</div>
      <div
        className={styles.svgContainer}
        dangerouslySetInnerHTML={{ __html: formidableLogoSvg }}
      />
    </Container>

    <CTA id="cta-proposals">
      <h2 className={styles.ctaText}>{"The call for proposals is now open!"}</h2>
      <i className="material-icons">arrow_forward</i>
      <a className="btn" href="https://www.papercall.io/sjs">Submit a Talk</a>
    </CTA>

    <Copy id="about">
      <div className={styles.copyText}>
        <h3>About SeattleJS Conference</h3>
        <p>SeattleJS Conference is a two day, single track conference covering the depth and breadth of JavaScript. Put on by one of the largest JavaScript user groups in the country (and the world!), SeattleJS Conference is a convergence of the top talent in JavaScript from the Pacific Northwest and beyond. An urban conference, SeattleJS Conference is located in the heart of the Fremont neighborhood.</p>
      </div>
      <div className={styles.copyImg}>
        <img src={pikePlaceUrl} />
      </div>
    </Copy>

    <CTA id="cta-sponsor">
      <h2 className={styles.ctaText}>{"Interested in Sponsoring?"}</h2>
      <i className="material-icons">arrow_forward</i>
      <a className="btn" href="mailto:conference@seattlejs.com">Contact Us</a>
    </CTA>

    <Copy id="location">
      <div className={styles.copyImg}>
        <img src={locationImgUrl} />
      </div>
      <div className={styles.copyText}>
        <h3>The Details</h3>
        <h4>When: August 10 - 11. 2017, with training days August 8-9)</h4>
        <p></p>
        <h4>Where: Fremont Foundry</h4>
        <p>SeattleJS's inaugural annual conference will be located at the beautiful and unique Fremont Foundry, located at 154 North 35th Street, Seattle, WA 98103.</p>
      </div>
    </Copy>

    <CTA id="cta-register">
      <h2 className={styles.ctaText}>{"Limited Early Bird Tickets Available"}</h2>
      <i className="material-icons">arrow_forward</i>
      <a className="btn" href="https://seattlejs2017.eventbrite.com">Buy Now</a>
    </CTA>

    <Footer>
      <div className={styles.navList}>
        <a href="https://github.com/seattlejs/seattlejs/blob/master/code-of-conduct.md">Code of Conduct</a>
        <a href="https://twitter.com/seattlejs">Twitter</a>
      </div>
      <div className={styles.navContactUs}>
        <a href="mailto:conference@seattlejs.com">conference@seattlejs.com</a>
      </div>
    </Footer>
  </main>
);

export default App;
