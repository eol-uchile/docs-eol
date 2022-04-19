import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ruta Digital, SERCOTEC',
    Svg: require('@site/static/img/services_2_1.svg').default,
    description: (
      <>
        Puesta en marcha de la plataforma de capacitación Ruta Digital.
      </>
    ),
  },
  {
    title: 'DocDigital, SEGPRES',
    Svg: require('@site/static/img/services_2_2.svg').default,
    description: (
      <>
        Puesta en marcha de una plataforma de capacitación para la División de Gobierno Digital de la Secretaría General de la Presidencia (SEGPRES).
      </>
    ),
  },
  {
    title: 'Programa Emprende Bien',
    Svg: require('@site/static/img/services_2_3.svg').default,
    description: (
      <>
        La Oficina EOL ha apoyado la creación de cursos en línea del programa Emprende Bien de la Corporación Construyendo Mis Sueños, financiado por CORFO.
      </>
    ),
  },
  {
    title: 'Convenio de colaboración con CTeC',
    Svg: require('@site/static/img/services_2_4.svg').default,
    description: (
      <>
        La Vicerrectoría de Tecnologías de la Información, a través de la Oficina EOL.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center">
          <h2 className={styles.services}>Servicios para terceros</h2>
          <h3 className={styles.servicesContent}>La oficina EOL, además presta servicios a terceros en el diseño, producción y ejecución de cursos online.En esta línea, EOL ha realizado diferentes proyectos, a continuación los más relevantes:</h3>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
