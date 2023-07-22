import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const packages = [
  {
    title: 'BRONZE PACK',
    color: 'bg-amber-700',
    label: 'STARTER',
    numberOfMonths: '1 MOIS',
    avantages: [
      '+17 000 Chaines en Direct',
      '+80 000 Films et Series VOD',
      'Qualite Ultra SD,HD,FHD,4K,8K',
      'Disponible sur tous les appareils',
      'Plateformes (Netflix, Disney, Amazon...)',
      'Chaines de sport (Bein, Canal+, Sky...)',
      '+250 chaines adultes',
      '24/7 Services Assistance',
      '10$/Mois',
    ]
  },
  {
    title: 'SILVER PACK',
    color: 'bg-sky-50',
    label: 'MEDIUM',
    numberOfMonths: '3 MOIS',
    avantages: [
      '+17 000 Chaines en Direct',
      '+80 000 Films et Series VOD',
      'Qualite Ultra SD,HD,FHD,4K,8K',
      'Disponible sur tous les appareils',
      'Plateformes (Netflix, Disney, Amazon...)',
      'Chaines de sport (Bein, Canal+, Sky...)',
      '+250 chaines adultes',
      '24/7 Services Assistance',
      '25$/3 Mois',
    ]
  },
  {
    title: 'GOLDEN PACK',
    color: 'bg-amber-400',
    label: 'PREMIUM',
    numberOfMonths: '6 MOIS',
    avantages: [
      '+17 000 Chaines en Direct',
      '+80 000 Films et Series VOD',
      'Qualite Ultra SD,HD,FHD,4K,8K',
      'Disponible sur tous les appareils',
      'Plateformes (Netflix, Disney, Amazon...)',
      'Chaines de sport (Bein, Canal+, Sky...)',
      '+250 chaines adultes',
      '24/7 Services Assistance',
      '40$/6 Mois',
    ]
  },
  {
    title: 'PLATINUM PACK',
    color: 'bg-slate-300',
    label: 'VIP',
    numberOfMonths: '12 MOIS',
    avantages: [
      '+17 000 Chaines en Direct',
      '+80 000 Films et Series VOD',
      'Qualite Ultra SD,HD,FHD,4K,8K',
      'Disponible sur tous les appareils',
      'Plateformes (Netflix, Disney, Amazon...)',
      'Chaines de sport (Bein, Canal+, Sky...)',
      '+250 chaines adultes',
      '24/7 Services Assistance',
      '50$/12 Mois',
    ]
  }
]

const testimonies = [
  {
    testimony: 'une grande différence dans la recherche d un fournisseur IPTV. J apprécie votre soutien et je suis très satisfait de la qualité de votre IPTV. Merci beaucoup pour votre réacticité et votre aide précieuse.',
    customerName: 'Christian KISIMBA',
  },
  {
    testimony: 'Votre IPTV ne m a pas seulement permis d économiser de l argent, elle m a aussi permis de passer des moments agréables avec mes proches... passer une soirée à regarder des films avec ma copine ou profiter d un match intense avec mes amis... c est vraiment génial',
    customerName: 'Desanges VAKE',

  },
  {
    testimony: 'Ma facture mensuelle était trop élevée.. entre Netflix, HBO, Amazon Prime et les chaines de sport chères.. maintenant, j,,ai tout ce que je veux avec une énorme réduction de 90%, et pour longtemps<< Mon seul regret est de ne pas m..être inscrit plus tôt et d..avoir gaspillé autant d..argent ',
    customerName: 'Jerry IKULULA',
  }
]

// const A propos de nous = [
//   {
//     'Localisé à Lubumbashi, nous sommes un fournisseur IPTV depuis 2020, utilisant les serveurs basés en France afin de vous présenter un service de qualité, sans coupure ni tracas, avec une disponibilité de nos services assistance 24H/7, tout en garantissant à nos clients une garantie annuel sur l..achat de leurs abonnements. ',
//   }
// ] 

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

        <div className='flex-col space-y-8 md:columns-2 lg:columns-4 sm:justify-center mt-8'>
          {packages.map((abonnement) => (
            <div key={abonnement.title} className='flex-1 border-2 border-gray-100 pb-4'>
              <div className={`flex p-4 justify-center ${abonnement.color}`}>
                <h2 className='text-2xl font-bold'>{abonnement.title}</h2>
              </div>

              <div className='px-4'>
                <h2 className='text-2xl font-bold text-center mt-4'>{abonnement.label}</h2>
                <p className='text-center'>Sans engagements</p>
                <p className='text-2xl font-semibold text-red-500 text-center mt-4'>{abonnement.numberOfMonths}</p>

                <div className='mt-4'>
                  {abonnement.avantages.map((avantage, key) => (
                    <div key={key} className="flex items-center space-x-2 mt-4">
                      <span className='w-4 h-4 rounded-full bg-gray-100'></span>
                      <p className='text-xs text-gray-500'>
                        {avantage}
                      </p>
                    </div>
                  ))}
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
          <div className='flex-col items-center space-y-8 md:columns-2 lg:columns-4 mt-8'>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((bouquet) => (
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

        <div className='flex-row space-y-8 md:columns-2 lg:columns-4 mt-8'>
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
          <div className='flex-col items-center md:columns-2 lg:columns-4 mt-4'>
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
          <p className='text-center text-gray-500 mt-4'>
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
        <div className='flex-col items-center md:space-x-4 md:flex md:flex-row mt-4'>
          {testimonies.map((testimony) => (
            <div className='flex-1 mt-8'>
              <p className='text-center text-gray-500'>{testimony.testimony}</p>
              <p className='text-center text-xs mt-3'>
                {testimony.customerName}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className='mt-24'>
          <div className='flex-col space-y-8 md:flex md:flex-row md:space-x-4'>
            <div className='mx-4 md:basis-1/2'>
              <h2 className='text-3xl'>Qui sommes nous?</h2>
              <p className='text-gray-500 mt-4'>
                Localisé à Lubumbashi, nous somme un fournisseur IPTV depuis 2020, utilisant les
                serveurs basés en France afin de vous présenter un service de qualité, sans coupure ni
                tracas, avec une disponibilité de nos services assistance H24/7, tout en garantissant à
                nos clients une garantie annuel sur l’achat de leurs abonnements.
              </p>
            </div>

            <div className='mx-4'>
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

            <div className='mx-4'>
              <h2 className='text-3xl'>DISPONIBILITE</h2>
              <h3 className='mt-4'>Assistance 24/7</h3>
              <h3 className='mt-4'>VIP Support</h3>
              <p className='text-xs text-gray-500'>contact@ddnb.com</p>
            </div>
          </div>

          <div className='p-4 bg-red-500 mt-16'>
            <p className='text-center text-white'>© 2022 All Rights Reserved - Ddnb.com</p>
          </div>
      </footer>
    </main>
  )
}
