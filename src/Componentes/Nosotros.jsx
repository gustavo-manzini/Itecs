import GoogleReviews from "../GoogleReviews";

const Nosotros = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="title">Nosotros</h1>
          <img src="/local/local.jpg" alt="local" className="hero-img" />
        </div>
      </section>

      <section className="mensaje">
        <p>
          No dejes que tu dispositivo roto <br />
          te haga pasar un mal día
        </p>
      </section>
      <section className="estadisticas">
        <div className="stat">
          <h2>100+</h2>
          <p>REPARACIONES POR MES</p>
        </div>
        <div className="stat">
          <h2>3.000+</h2>
          <p>CLIENTES FELICES</p>
        </div>
        <div className="stat">
          <h2>100%</h2>
          <p>
            ⭐⭐⭐⭐⭐ <br />
          </p>
        </div>
      </section>

      <section className="descripcion">
        <div className="descripcion-container">
          <p>
            Todo el mundo piensa que cuando un dispositivo que usamos día a día
            se rompe es el fin del mundo.
            <br />
            En cambio nosotros pensamos que es sólo un inconveniente temporal.
            Hace más de 10 años que nos apasiona la tecnología y que nos
            dedicamos a dar una segunda (o tercera) oportunidad a cada
            dispositivo.
            <br />
            <br />
            Esto que empezó como un sueño tomó cada vez más fuerza. Es todo un
            reto para nosotros, no hace mucho reparábamos los dispositivos de
            nuestros familiares, amigos y allegados. Con los años nos hemos
            profesionalizado hasta llegar a un punto que somos los mejores en lo
            que hacemos.
            <br />A nuestras espaldas quedan más de tres mil reparaciones
            satisfactorias. Cada trabajo que nos llega es un reto nuevo, lo
            vemos como un rompecabezas a resolver.
          </p>
        </div>
      </section>

      <h2 className="titulo-testimonios">Lo que dicen nuestros clientes</h2>
      <GoogleReviews />
    </>
  );
  s;
};

export default Nosotros;
