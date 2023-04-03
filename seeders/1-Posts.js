'use strict';

var date = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', 
    [
      {
       thread: "homosexuality",
       normValence: 0,
       composition: 0,
       minutesAgo: 46,
       title: "Homo’s verdienen GEEN respect ",
       text: "Acceptatie van homo’s, wat is dit voor onzin! Allah de Verhevene heeft de man voor de vrouw geschapen en de vrouw voor de man. Kijk maar naar wat er in de Edele Koran  staat over het volk van Lut AS. ",
       websiteName: "www.rtlnieuws.nl",
       websiteText: "Homoacceptatie in Nederland: 'LHBTI'ers kunnen fijn leven zolang ze 'normaal' doen'",
       websiteImage: "../../images/homosexuality.jpg",
       websiteLink: "https://www.rtlnieuws.nl/editienl/artikel/5090106/coc-homoacceptatie-dunner-dan-we-denken-discriminatie-lhbti-homoseksuelen",
       createdAt: date,
       updatedAt: date,
       authorId: 5
      },
      {
       thread: "homosexuality",
       normValence: 1,
       composition: 0,
       minutesAgo: 46,
       title: "Hoe denken jullie over homoseksualiteit?",
       text: "Ik vind homoseksualiteit een heel moeilijk onderwerp om naar te kijken. Allah swt heeft mensen met deze gevoelens op aarde gezet maar tegelijkerijd zeggen anderen dat homoseksualiteit verboden is in islam want je kan je niet voortplanten. Gaat het nou samen of niet?",
       websiteName: "www.rtlnieuws.nl",
       websiteText: "Homoacceptatie in Nederland: 'LHBTI'ers kunnen fijn leven zolang ze 'normaal' doen'",
       websiteImage: "../../images/homosexuality.jpg",
       websiteLink: "https://www.rtlnieuws.nl/editienl/artikel/5090106/coc-homoacceptatie-dunner-dan-we-denken-discriminatie-lhbti-homoseksuelen",
       createdAt: date,
       updatedAt: date,
       authorId: 31
      },
      {
       thread: "homosexuality",
       normValence: 2,
       composition: 0,
       minutesAgo: 46,
       title: "Homo's verdienen meer respect",
       text: "Wat jammer om dit te lezen! Mensen hebben altijd hun ordeel klaar over homo's. Allah swt is onze rechter en niet andere moslims. Dus prima dat je homo bent, elke schepsel is van Allah swt.",
       websiteName: "www.rtlnieuws.nl",
       websiteText: "Homoacceptatie in Nederland: 'LHBTI'ers kunnen fijn leven zolang ze 'normaal' doen'",
       websiteImage: "../../images/homosexuality.jpg",
       websiteLink: "https://www.rtlnieuws.nl/editienl/artikel/5090106/coc-homoacceptatie-dunner-dan-we-denken-discriminatie-lhbti-homoseksuelen",
       createdAt: date,
       updatedAt: date,
       authorId: 29
      },
      {
       thread: "homosexuality",
       normValence: 0,
       composition: 1,
       minutesAgo: 46,
       title: "Ik accepteer homoseksualiteit ook niet",
       text: "Ik snap wel dat veel mensen homoseksualiteit niet accepteren. Veel mensen zeggen dat als mensen van elkaar houden dan moet het kunnen, maar dit vind ik niet. Vullen mannen en vrouwen elkaar niet beter aan? Dit is gewoon hoe het is.",
       websiteName: "www.rtlnieuws.nl",
       websiteText: "Homoacceptatie in Nederland: 'LHBTI'ers kunnen fijn leven zolang ze 'normaal' doen'",
       websiteImage: "../../images/homosexuality.jpg",
       websiteLink: "https://www.rtlnieuws.nl/editienl/artikel/5090106/coc-homoacceptatie-dunner-dan-we-denken-discriminatie-lhbti-homoseksuelen",
       createdAt: date,
       updatedAt: date,
       authorId: 40
      },
      {
       thread: "homosexuality",
       normValence: 1,
       composition: 1,
       minutesAgo: 46,
       title: "Hoe denken jullie over homoseksualiteit?",
       text: "Veel mensen zeggen dat als mensen van elkaar houden dan moet het kunnen. Anderen zeggen dat mannen en vrouwen elkaar beter aanvullen, en homoseksualiteit dus niet goed is. Ik weet het niet… Wat vinden jullie? ",
       websiteName: "www.rtlnieuws.nl",
       websiteText: "Homoacceptatie in Nederland: 'LHBTI'ers kunnen fijn leven zolang ze 'normaal' doen'",
       websiteImage: "../../images/homosexuality.jpg",
       websiteLink: "https://www.rtlnieuws.nl/editienl/artikel/5090106/coc-homoacceptatie-dunner-dan-we-denken-discriminatie-lhbti-homoseksuelen",
       createdAt: date,
       updatedAt: date,
       authorId: 66
      },
      {
       thread: "homosexuality",
       normValence: 2,
       composition: 1,
       minutesAgo: 46,
       title: "Mensen moeten homoseksualiteit accepteren!",
       text: "Wat jammer dat veel mensen homoseksualiteit niet accepteren zeg! Als we nu eens met ons allen accepteren dat we allemaal mens zijn. Ongeacht geloof, kleur, geaardheid. Laten we met meer respect naar elkaar toe beleven.",
       websiteName: "www.rtlnieuws.nl",
       websiteText: "Homoacceptatie in Nederland: 'LHBTI'ers kunnen fijn leven zolang ze 'normaal' doen'",
       websiteImage: "../../images/homosexuality.jpg",
       websiteLink: "https://www.rtlnieuws.nl/editienl/artikel/5090106/coc-homoacceptatie-dunner-dan-we-denken-discriminatie-lhbti-homoseksuelen",
       createdAt: date,
       updatedAt: date,
       authorId: 64
      },

      {
       thread: "abortion",
       normValence: 0,
       composition: 0,
       minutesAgo: 30,
       title: "Abortus is moord",
       text: "Goed dat deze discussie word gevoerd! Ik snap niet dat zo veel mensen abortus laten plegen, ook moslims!! Een kind krijgen is het mooiste wat er is, en als je het weg laat halen wil zeggen dat je tegen de wensen van de islam gaat. Je vermoord het, ik krijg er de rillingen van.",
       websiteName: "www.rtlnieuws.nl",
       websiteText: "Discussie over abortuswet laait weer op, 36 jaar na de invoering ervan",
       websiteImage: "../../images/abortion.jpg",
       websiteLink: "https://www.nrc.nl/nieuws/2022/05/17/scp-acceptatie-nederlanders-voor-lhbti-gemeenschap-stagneert-a4124616",
       createdAt: date,
       updatedAt: date,
       authorId: 7
      },
      {
       thread: "abortion",
       normValence: 1,
       composition: 0,
       minutesAgo: 30,
       title: "Moslims die abortus plegen",
       text: "Er is weer discussie in Nederland over toestaan van abortussen of niet. Hoe zit dat in de Islam? Ik weet dat er Islamitische regels mbt een abortus plegen zijn, naar wat ik weet\/heb gehoord is het in sommige gevallen toegestaan en dus geen zonde.",
       websiteName: "www.rtlnieuws.nl",
       websiteText: "Discussie over abortuswet laait weer op, 36 jaar na de invoering ervan",
       websiteImage: "../../images/abortion.jpg",
       websiteLink: "https:\/\/www.rtlnieuws.nl\/nieuws\/nederland\/artikel\/5195019\/abortuswet-afbreking-zwangerschap-abortus-week-van-het-leven",
       createdAt: date,
       updatedAt: date,
       authorId: 32
      },
      {
       thread: "abortion",
       normValence: 2,
       composition: 0,
       minutesAgo: 30,
       title: "Abortus moet kunnen onder bepaalde voorwaarden",
       text: "Ik hoor vaak moslims zeggen dat abortus nooit oke is, maar dit is niet zo! Pas als dit gebeurt NA honderdtwintig dagen dan wordt dit beschouwd als doding van een mens. Dit omdat de Profeet (vrede zij met hem) ons heeft meegedeeld dat na honderdtwintig dagen de ziel in het lichaam van een foetus wordt ingeblazen, zoals vermeld in al-Boechari en Moeslim.",
       websiteName: "www.rtlnieuws.nl",
       websiteText: "Discussie over abortuswet laait weer op, 36 jaar na de invoering ervan",
       websiteImage: "../../images/abortion.jpg",
       websiteLink: "https:\/\/www.rtlnieuws.nl\/nieuws\/nederland\/artikel\/5195019\/abortuswet-afbreking-zwangerschap-abortus-week-van-het-leven",
       createdAt: date,
       updatedAt: date,
       authorId: 17
      },
      {
       thread: "abortion",
       normValence: 0,
       composition: 1,
       minutesAgo: 30,
       title: "Abortus is moord",
       text: "Ik walg echt van abortus. Mensen moeten eerst eens gaan nadenken voordat ze met elkaar het bed in duiken. Medische redenen en verkrachting vind ik ook de enige reden voor abortus. Dan is de kans op het nemen van een verkeerde besllssing minimaal.",
       websiteName: "www.rtlnieuws.nl",
       websiteText: "Discussie over abortuswet laait weer op, 36 jaar na de invoering ervan",
       websiteImage: "../../images/abortion.jpg",
       websiteLink: "https:\/\/www.rtlnieuws.nl\/nieuws\/nederland\/artikel\/5195019\/abortuswet-afbreking-zwangerschap-abortus-week-van-het-leven",
       createdAt: date,
       updatedAt: date,
       authorId: 42
      },
      {
       thread: "abortion",
       normValence: 1,
       composition: 1,
       minutesAgo: 30,
       title: "Ik vind abortus een moeilijke discussie",
       text: "Er is een hoop weerstand tegen de versoepelingen van de regels rondom abortus. Sommige mensen willen het zelfs afschaffen omdat het moord is. Anderen zeggen juist dat iedereen zelf mag beslissen wat ze zelf willen. Ik weet het niet, wat denken jullie?",
       websiteName: "www.rtlnieuws.nl",
       websiteText: "Discussie over abortuswet laait weer op, 36 jaar na de invoering ervan",
       websiteImage: "../../images/abortion.jpg",
       websiteLink: "https:\/\/www.rtlnieuws.nl\/nieuws\/nederland\/artikel\/5195019\/abortuswet-afbreking-zwangerschap-abortus-week-van-het-leven",
       createdAt: date,
       updatedAt: date,
       authorId: 67
      },
      {
       thread: "abortion",
       normValence: 2,
       composition: 1,
       minutesAgo: 30,
       title: "Iedereen moet recht hebben op abortus",
       text: "Ik snap niet dat mensen tegen abortus zijn. Er gaat geen enkele vrouw voor haar lol een abortus laten doen. Hier zit vaak een dramatisch verhaal achter. Dit gaat niet over anticonceptie. Vrouwen moeten ALTIJD het recht hebben op abortus.",
       websiteName: "www.rtlnieuws.nl",
       websiteText: "Discussie over abortuswet laait weer op, 36 jaar na de invoering ervan",
       websiteImage: "../../images/abortion.jpg",
       websiteLink: "https:\/\/www.rtlnieuws.nl\/nieuws\/nederland\/artikel\/5195019\/abortuswet-afbreking-zwangerschap-abortus-week-van-het-leven",
       createdAt: date,
       updatedAt: date,
       authorId: 52
      }
     ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
