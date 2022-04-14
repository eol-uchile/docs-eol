import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Educación Online para Pregrado y Postgrado',
    Svg: require('@site/static/img/services_1_1.svg').default,
    description: (
      <>
        La Oficina EOL entrega capacitación y acompañamiento a los curso de Pre y Post grado.
      </>
    ),
  },
  {
    title: 'Educación Continua',
    Svg: require('@site/static/img/services_1_2.svg').default,
    description: (
      <>
        La oficina EOL entrega asesoría y soporte de plataforma para las unidades académicas en la ejecución de sus cursos.
      </>
    ),
  },
  {
    title: 'Proyectos de apoyo a la docencia',
    Svg: require('@site/static/img/services_1_3.svg').default,
    description: (
      <>
        La oficina EOL trabaja proyectos conjuntos con entidades educativas y pone a disposición la plataforma y asesora en la creación de cursos.
      </>
    ),
  },
  // {
  //   title: 'Cursos MOOC',
  //   Svg: require('@site/static/img/services_1_4.svg').default,
  //   description: (
  //     <>
  //       La Oficina EOL entrega soporte administrativo y técnico a UAbierta, plataforma de cursos abiertos y en línea de la Universidad de Chile.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
          <h2>Servicios Ofrecidos</h2>
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
