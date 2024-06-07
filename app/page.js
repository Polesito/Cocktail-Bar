export default function Home() {
  return (
    <main>
      <section>
        <video
          className=" w-full h-full fixed left-0 top-0 -z-10 object-fill"
          src="https://carontestudio.com/img/f4.mp4"
          autoPlay={true}
          muted={true}
          loop={true}
          controls={false}
        />
      </section>
      <section className="bg-gray-200 text-center items-center lg:w-1/3 md:w-3/5 w-5/6 m-auto mt-10 bg-opacity-70">
        <h1 className="text-4xl font-bold text-center items-center text-slate-900 p-4">
        Guía de la Página
        </h1>
      </section>
      <section className="bg-gray-200 items-center lg:w-1/3 md:w-3/5 w-5/6 m-auto mt-10 bg-opacity-70">
        <article className="items-center text-slate-900 p-4">
          <h2 className="font-bold text-2xl">1. Inicio</h2>
          <p className="p-2">
            Pagina de inicio con descripcion de las demas paginas y su uso.
          </p>
          <h2 className="font-bold text-2xl mt-6">2. Cocktails</h2>
          <p className="p-2">
            En el apartado de cocktails se hace uso de la{" "}
            <b>API: 'CocktailsDB'</b>. En esta página, podremos encontrar un
            buscador para encontrar nuestros cocteles de preferencia. Al hacer
            clic en el coctel escogido, se nos mostrará información adicional de
            dicho coctel, incluyendo ingredientes utilizados y cómo se debe
            preparar. A recomendación del alumno, se sugiere buscar el coctel
            'Alexander', ya que este nos mostrará todas las características que
            la página puede ofrecer. Además, se recomienda compararlo con el
            coctel '410 Gone', ya que este no contiene tantas características
            como el anterior. En dicha página, donde se muestra la información,
            en la parte superior izquierda, se encuentra un botón para volver a
            la página anterior.
          </p>
          <h2 className="font-bold text-2xl mt-6">3. Usuarios</h2>
          <p className="p-2">
            En el apartado de usuarios se hace uso de la{" "}
            <b>API: 'Random User'</b>, explicada en clase, a la cual se ha hecho
            una modificación en cómo se muestran los usuarios.
          </p>
          <h2 className="font-bold text-2xl mt-6">4. Acerca de</h2>
          <p className="p-2">
            Esta página ha sido diseñada por: <b>Pol Raich Paul</b>, alumno de
            la asignatura de <b>Programación Web</b>.
          </p>
        </article>
      </section>
    </main>
  );
}
