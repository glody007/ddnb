import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const aboonnements = [
  {
    id: 1,
    image: '',
    title: '100% Compatibilité',
    body: 'Nos abonnements IPTV sont Compatible avec toutes les Appareils et Applications, les Smart TV ainsi que les Boitiers Tv, Ordinateur, Téléphone et Tablette…'
  },
  {
    id: 2,
    image: '',
    title: '99,99% Disponibilité',
    body: 'Nous Proposons à nos Clients un Serveur Basé en France Sans Coupure Ni Tracas avec un Choix de + 15 000 Chaines ainsi Que Des Films et Séries en Illimité.'
  },
  {
    id: 3,
    image: '',
    title: 'Offre Promotionnelle',
    body: 'Profitez d’une Offre Promotionnelle Avec notre Abonnement IPTV pour une Durée de 12 Mois à Seulement 49,99€ au lieu de 60.00€.'
  },
  {
    id: 4,
    image: '',
    title: 'Support 24h/7',
    body: 'On est toujours là pour vous. Notre support client est disponible 24h/7j pour vous assister et répondre à vos questions.'
  },
]

export default function Home() {
  return (
    <main>
      <header className='flex justify-between p-8'>
        <h1 className='text-2xl font-bold text-red-500'>DDN BOX</h1>
        <div className='h-8 w-8 bg-red-500 rounded-lg'></div>
      </header>
      <section className='relative w-full h-[100vh] justify-center items-center p-4'>
        <Image 
          src={'https://www.generationcable.net/wp-content/uploads/2017/03/Netflix-Background.jpg'}
          alt="Background"
          fill
          objectFit='cover'
        />
      </section>

      {/* ABONNEMENTS  */}
      <section className='px-4 mt-24'>
        <h1 className='text-4xl text-center font-extrabold'>
          NOS ABONNEMENTS IPTV
        </h1>
        <h1 className='text-red-500 text-center mt-8'>
          Livraison en 30 minutes Garantie
        </h1>
        <h1 className='text-center mt-8'>
          Processus 100% en ligne, commandez, payez et recevez vos identifiants par mail.
        </h1>

        <div className='flex-row space-y-8 mt-8'>
          {[1, 2, 3, 4].map((abonnement) => (
            <div key={abonnement} className='flex-1 border-2 border-gray-100 pb-4'>
              <div className='flex p-4 justify-center bg-yellow-500'>
                <h2 className='text-2xl font-bold'>BRONZE PACK</h2>
              </div>

              <div className='px-4'>
                <h2 className='text-2xl font-bold text-center mt-4'>STARTER</h2>
                <p className='text-center'>Sans engagements</p>
                <p className='text-2xl font-semibold text-red-500 text-center mt-4'>1 MOIS</p>

                <div>
                  <p className='text-xs text-gray-500'>+15 000 Chaines en Direct</p>
                </div>
                <div>
                  <p className='text-xs text-gray-500'>+15 000 Chaines en Direct</p>
                </div>
                <div>
                  <p className='text-xs text-gray-500'>+15 000 Chaines en Direct</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* BOUQUETS INCLUS */}
        <div className='mt-16'>
          <h2 className='text-3xl text-center font-bold'>
            BOUQUETS INCLUS
          </h2>
          <div className='flex-col items-center space-y-8 mt-8'>
            {[1, 2, 3, 4, 5, 6].map((bouquet) => (
                <Image 
                  key={bouquet}
                  src={'https://warehouse.canal-overseas.com/content/0001/33/24a98094c54854ddaa91e9c8652369bb1b15c674.png'}
                  alt="logo"
                  width={200}
                  height={120}
                  objectFit='cover'
                  className='m-auto'
                />
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICES  */}
      <section className='px-4 mt-24'>
        <h1 className='text-4xl text-center font-extrabold'>
          IPTV N°1 en RDC
        </h1>
        <h1 className='text-center mt-4'>
          Processus de commande 100% en ligne Assistance et conseil d'installation + 1200 clients satisfaits en France
        </h1>

        <div className='flex-row space-y-8 mt-8'>
          {aboonnements.map((abonnement) => (
            <div key={abonnement.id} className='flex-1 bg-gray-100 pb-4'>
              <div className='flex pt-4 justify-center'>
                <h2 className='text-2xl text-red-500 font-bold'>
                  {abonnement.title}
                </h2>
              </div>

              <div className='px-4 mt-4'>
                <p className='text-center text-xs text-gray-500'>
                  {abonnement.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* APPLICATIONS COMPATIBLES */}
        <div className='mt-16'>
          <h2 className='text-3xl text-center font-semibold'>
            APPLICATIONS COMPATIBLES
          </h2>
          <div className='flex-col items-center mt-4'>
            {[1, 2].map((bouquet) => (
                <Image 
                  key={bouquet}
                  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreqUezvYcBfaFX-1XmB1iLUFZv-B3Uf9FAvnBNiuY0ShQHtZurqJ5v1XHp9MlS-1QadM&usqp=CAU'}
                  alt="logo"
                  width={100}
                  height={30}
                  objectFit='cover'
                  className='m-auto'
                />
            ))}
          </div>
        </div>

        {/* CHAINES */}
        <div className='mt-16'>
          <h2 className='text-3xl text-center font-semibold'>
            + 17000 CHAINES DE TELEVISION + FILMS ET SERIES EN ILLIMITE
          </h2>
          <p className='text-xs text-center text-gray-500 mt-4'>
            Abonnement IPTV N°1 en RDC. Accédez à l’intégralité de la bibliothèque de diffusion en
            continu smart IPTV, plus de 80.000 films et séries disponibles, ainsi que vos sports
            préférés, les dernières nouvelles à ne pas manquer et aux émissions en cours.
          </p>
        </div>
      </section>

      {/* Testimonies */}
      <section className='mt-24 mx-4'>
        <h2 className='text-3xl text-center font-semibold'>
          NOS CLIENTS TEMOIGNENT:
        </h2>
        {[1, 2, 3, 4].map((testimony) => (
          <div className='flex-col spaxe-y-4 mt-8'>
            <p className='text-center text-gray-500'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia culpa tenetur iure dolorem et cupiditate laudantium ipsum, consequuntur consectetur eveniet pariatur itaque laboriosam quasi nesciunt, repellendus porro amet. Earum, non?"</p>
            <p className='text-center text-xs mt-3'>
              Dolor sit amet
            </p>
          </div>
        ))}
      </section>

      <footer className='flex-col space-y-8'>
          <div className='mt-24 mx-4'>
            <h2 className='text-3xl'>Qui sommes nous?</h2>
            <p className='text-xs text-gray-500 mt-4'>
              Localisé à Lubumbashi, nous somme un fournisseur IPTV depuis 2020, utilisant les
              serveurs basés en France afin de vous présenter un service de qualité, sans coupure ni
              tracas, avec une disponibilité de nos services assistance H24/7, tout en garantissant à
              nos clients une garantie annuel sur l’achat de leurs abonnements.
            </p>
          </div>

          <div className='mt-24 mx-4'>
            <h2 className='text-3xl'>ABONNEMENT IPTV</h2>
            {[
                'Livraison en 30 minutes garantie',
                'Compatible tout appareils',
                'Qualite Ultra HD et 4K',
                'Support technique 24/7',
                'Satisfait ou rembourse'
              ].map((text) => (
                <div className='flex items-center space-x-2 mt-4'>
                  <span className='w-4 h-4 rounded-full bg-gray-100'></span>
                  <p className='text-xs text-gray-500'>
                    {text}
                  </p>
                </div>
            ))}
          </div>

          <div className='mt-24 mx-4'>
            <h2 className='text-3xl'>DISPONIBILITE</h2>
            <h3 className='mt-4'>Assistance 24/7</h3>
            <h3 className='mt-4'>VIP Support</h3>
            <p className='text-xs text-gray-500'>contact@ddnb.com</p>
          </div>

          <div className='p-4 bg-red-500'>
            <p className='text-center text-white'>© 2022 All Rights Reserved - Ddnb.com</p>
          </div>
      </footer>
    </main>
  )
}
