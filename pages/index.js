import Head from 'next/head';
import Link from 'next/link';

import { useThemes } from '../components/articleLayout';
import Footer from '../components/footer';
import HeadData from '../components/HeadData';
import Header from '../components/header';
import Noscript from '../components/Noscript';
import TimeLine from '../components/timeline/timeline';
import { getAllArticlesMetadata, getHomePageData } from '../lib/posts';
import style from './index.module.css';

export function getStaticProps() {
  const { pageMetadata, pageContent } = getHomePageData();
  return {
    props: {
      metadata: pageMetadata,
      data: pageContent,
      formationsMetadata: getAllArticlesMetadata(),
      navigation: {
        prev: '/#',
        next: '/articles',
      },
    },
  };
}

export default function LandPage({ metadata, data, formationsMetadata }) {
  useThemes();
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <HeadData metadata={metadata} />
      <Header metadata={metadata} />
      <div className="root" id="app">
        <main className={`app-content main-content ${style.homepage} flex`}>
          <div className={`${style.home_content_wrapper}`}>
            <span id="top"></span>
            <HomePageRow1 metadata={metadata} />
            <HomePageRow2 />
            <HomePageRow3 data={formationsMetadata} />
            <HomePageRow4 data={data} />
          </div>
        </main>
        <Noscript />
      </div>
    </>
  );
}

function HomePageRow1({ metadata }) {
  return (
    <div className={`${style.landpage_row_1} landpage_row_1`}>
      <div className={`${style.row_1_container}`}>
        <section className={`${style.row_1_data}`}>
          <header className={`${style.main_header}`}>
            <h1 className={`${style.main_title}`}>{metadata.pageTitle}</h1>
            <p className={`${style.main_sub_title}`}>{metadata.pageSubtitle}</p>
          </header>
          <section className={`${style.home_top_section}`}>
            <p className={`${style.home_top_content}`}>
              Formation web: HTML, CSS et Javascript. Formation réalisé à
              domicile et menez principalement par Faouzi Mohamed.
            </p>
            <p>
              Ci-dessous vous trouverez l&apos;emploi du temps de la formation
              que nous allons essayer de suivre. Cliquez sur le bouton
              ci-dessous pour avoir plus de détails sur les chapitres proposés
            </p>

            <div className={`${style.home_top_links_container}`}>
              <ul className={`${style.home_top_links_list}`}>
                <li className={`${style.home_top_link_item}`}>
                  <Link href="/articles">
                    <a className={`${style.home_top_link}`}>Formations</a>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

function HomePageRow2() {
  return <CovidAlerte />;
}

function HomePageRow3({ data }) {
  return (
    <div className={`${style.timeline_wrapper}`}>
      <TimeLine content={data} />
    </div>
  );
}
function HomePageRow4(/* { data } */) {
  return (
    <>
      <Footer />
      <a className="to-top" alt="Monter en haut de la page" href="#top">
        {''}
      </a>
    </>
  );
}

function CovidAlerte() {
  return (
    <section className={`${style.covid_alerte_section}`}>
      <h2 className={`${style.covid_alerte_title}`}>
        <i
          className={`fad fa-virus-slash ${style.covid_alerte_title_icon}`}></i>
        <span className={`${style.covid_alerte_title_text}`}>
          Protegez-vous contre le Corona Virus (Covid 19), mettez un masque,
          sauvez des vies
        </span>
      </h2>
      <div className={`${style.covid_alerte_list_item_container}`}>
        <div className={`${style.covid_alerte_list_item_container_pos}`}>
          <ul className={`${style.covid_alerte_list_item}`}>
            <li className={`${style.covid_alerte_item}`}>
              <i
                className={`fad fa-head-side-mask ${style.covid_alerte_item_text}`}></i>
              <span className={`${style.covid_alerte_item_text}`}>
                Mettez un masque
              </span>
            </li>
            <li className={`${style.covid_alerte_item}`}>
              <i
                className={`fad fa-hands-wash ${style.covid_alerte_item_text}`}></i>
              <span className={`${style.covid_alerte_item_text}`}>
                Lavez régulièrement vos mains
              </span>
            </li>
            <li className={`${style.covid_alerte_item}`}>
              <i
                className={`fad fa-people-arrows ${style.covid_alerte_item_text}`}></i>
              <span className={`${style.covid_alerte_item_text}`}>
                Garder une distance de sécurité
              </span>
            </li>
          </ul>
          <a
            href="https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub"
            className={`${style.covid_more_info_btn}`}>
            <i
              className={`fas fa-info-circle ${style.covid_more_info_btn_icon}`}></i>
            <span className={`${style.covid_more_info_btn_text}`}>
              Plus d&apos; informations
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
