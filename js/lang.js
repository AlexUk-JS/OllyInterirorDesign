//https://www.youtube.com/watch?v=MKx31x5u_SQ

const langArr = {
    "unit": {
        "ru": "Дизайн интерьеров Ольги Ля",
        "en": "Olga Lya Interior design",
        "it": "Olga Lya Interior design",
    },
    "portfolio": {
        "ru": "Портфолио",
        "en": "Portfolio",
        "it": "Portfolio",
    },
    "myapproach": {
        "ru": "Обо мне",
        "en": "About Me",
        "it": "Di me",
    },
    "sketches": {
        "ru": "Скетчи",
        "en": "Scetches",
        "it": "Sketches",
    },
    "contacts": {
        "ru": "Контакты",
        "en": "Contacts",
        "it": "Contatti",
    },
    "portfolio-1": {
        "ru": "Частный дом",
        "en": "Private house",
        "it": "Сasa privata",
    },
    "portfolio-2": {
        "ru": "Модульный дом",
        "en": "Modular house",
        "it": "Сasa modulare",
    },
    "portfolio-3": {
        "ru": "Ванная комната",
        "en": "Bathroom",
        "it": "Stanza da bagno",
    },
    "portfolio-4": {
        "ru": "Кухня-столовая",
        "en": "Kitchen-dining room",
        "it": "Cucina-sala da pranzo",
    },
    "portfolio-5": {
        "ru": "Выставочное пространство",
        "en": "Exhibition Space",
        "it": "Spazio espositivo",
    },
    "portfolio-6": {
        "ru": "Спальня",
        "en": "Bedroom",
        "it": "Camera da letto",
    },
    "portfolio-7": {
        "ru": 'Коллекция "Олли"',
        "en": 'Collection "OLLY"',
        "it": 'Collezione "Ollie"',
    },
    "portfolio-8": {
        "ru": "Проект 20",
        "en": "Project 20",
        "it": "Progetto 20",
    },
    "myapproach-1": {
        "ru": "Меня зовут Ольга. И я создаю дизайн интерьеров.",
        "en": "My name is Olga. And I create interior design.",
        "it": "Mi chiamo Olga. E creo interior design.",
    },
    "myapproach-2": {
        "ru": "На протяжении последних нескольких лет я выстраиваю концепции дизайна для самых разнообразных пространств. Моя цель - формировать систему баланса, функциональности и красоты, в контексте запросов и пожеланий клиента.",
        "en": "Over the past few years, I have been building design concepts for a wide variety of spaces. My goal is to form a system of balance, functionality and beauty, in the context of the client's requests and wishes.",
        "it": "Negli ultimi anni ho costruito concetti di design per un'ampia varietà di spazi. Il mio obiettivo è quello di formare un sistema di equilibrio, funzionalità e bellezza, nel contesto delle richieste e dei desideri del cliente.",
    },
    "myapproach-3": {
        "ru": "Мой путь в сфере дизайна начался более 5 лет назад. Будучи по образованию геммологом, в определенный момент, я осознала, что в первую очередь в минералах меня привлекает их эстетическая красота и сбалансированность. Каждый из них создан под влияниям конкретных природных процессов, различных для каждого минерала. Какие-то из этих процессов создают графит. Другие - алмазы. И каждый минерал имеет свое применение - свое конкретное место, где идеален он и только он. Графит - в промышленном производстве, алмазы - в ювелирной промышленности.",
        "en": "My path in the field of design began more than 5 years ago. Being a gemologist by education, at a certain moment, I realized that first of all in minerals I am attracted by their aesthetic beauty and balance. Each of them is created under the influence of specific natural processes, different for each mineral. Some of these processes create graphite. Others are diamonds. And each mineral has its own application - its own specific place, where it and only it is ideal. Graphite - in industrial production, diamonds - in the jewelry industry.",
        "it": "Il mio percorso nel campo del design è iniziato più di 5 anni fa. Essendo un gemmologo di formazione, ad un certo punto, mi sono reso conto che prima di tutto, nei minerali, sono attratto dalla loro bellezza estetica ed equilibrio. Ognuno è creato sotto le influenze di specifici processi naturali, diversi per ogni minerale. Alcuni di questi processi creano grafite. Altri sono diamanti. E ogni minerale ha il suo uso - il suo luogo specifico, dove è perfetto e solo lui. Grafite - nella produzione industriale, diamanti - nell'industria della gioielleria.",
    },
    "myapproach-4": {
        "ru": "Эту концепцию я постаралась перенести в дизайн. Каждый элемент интерьера создан длякакой-то конкретной цели и идеален для какого-то конкретного пространства. Собранные вместе, они образуют цельную, красивую и функциональную систему для жизни, работы и отдыха.",
        "en": "I tried to transfer this concept to the design. Each element of the interior is created for a specific purpose and is ideal for a specific space. Put together, they form a whole, beautiful and functional system for life, work and leisure.",
        "it": "Ho cercato di portare questo concetto nel design. Ogni elemento degli interni è stato creato per qualche scopo specifico ed è ideale per uno spazio specifico. Messi insieme, formano un sistema coerente, bello e funzionale per vivere, lavorare e rilassarsi.",
    },
    "myapproach-5": {
        "ru": "И моя цель - создавать такие пространства.",
        "en": "And my goal is to create such spaces.",
        "it": "E il mio obiettivo è creare tali spazi.",
    },
    "sketches-1": {
        "ru": "Гостиная",
        "en": "Living room",
        "it": "Soggiorno",
    },
    "sketches-2": {
        "ru": "Витрина",
        "en": "Showcase",
        "it": "Vetrina",
    },
    "sketches-3": {
        "ru": "Виньетка",
        "en": "Vignette",
        "it": "Vignetta",
    },
    "sketches-4": {
        "ru": "Балкон",
        "en": "Balcony",
        "it": "Balcone",
    },
    "sketches-5": {
        "ru": "Горы",
        "en": "Mountains",
        "it": "Montagne",
    },
    "sketches-6": {
        "ru": "Кресло",
        "en": "Armchair",
        "it": "Poltrona",
    },
    "sketches-7": {
        "ru": "Стул",
        "en": "Chair",
        "it": "Sedia",
    },
    "sketches-8": {
        "ru": "Диван",
        "en": "Sofa",
        "it": "Sivano",
    },
    "sketches-9": {
        "ru": "Кот",
        "en": "Cat",
        "it": "Gatto",
    },
    "sketches-10": {
        "ru": "Город",
        "en": "City",
        "it": "Città",
    },
    "sketches-11": {
        "ru": "Камин",
        "en": "Fireplace",
        "it": "Camino",
    },
    "sketches-12": {
        "ru": "Кафе",
        "en": "Cafe",
        "it": "Caffè",
    },
    "contactsHeader": {
        "ru": "Контакты",
        "en": "Contacts",
        "it": "Contatti",
    },
    "contactsText": {
        "ru": "По общим вопросам, пожалуйста, напишите нам по электронной почте:",
        "en": "For general questions, please email us:",
        "it": "Per domande generali, vi preghiamo di inviarci una E-mail:",
    },
    "project-1-1": {
        "ru": "Частный дом R6",
        "en": "Private house R6",
        "it": "Casa privata R6",
    },
    "project-1-2": {
        "ru": "Каменск-уральский, Россия",
        "en": "Kamensk-Uralsky, Russia",
        "it": "Kamensk-Uralsky, Russia",
    },
    "project-2-1": {
        "ru": "Модульный дом",
        "en": "Modular house",
        "it": "Casa modulare",
    },
    "project-2-2": {
        "ru": "Московская область, Россия",
        "en": "Moscow region, Russia",
        "it": "regione di Mosca, Russia",
    },
    "project-3-1": {
        "ru": "Ванная комната",
        "en": "Bathroom",
        "it": "Bagno",
    },
    "project-3-2": {
        "ru": "Свердловская область, Россия",
        "en": "Sverdlovsk region, Russia",
        "it": "Regione di Sverdlovsk, Russia",
    },
    "project-4-1": {
        "ru": "Кухня-столовая",
        "en": "Kitchen-dining room",
        "it": "Cucina-sala da pranzo",
    },
    "project-4-2": {
        "ru": "Московская область, Россия",
        "en": "Moscow region, Russia",
        "it": "Regione di Mosca, Russia",
    },
    "project-5-1": {
        "ru": "Выставочное пространство",
        "en": "Exhibition Space",
        "it": "Spazio espositivo",
    },
    "project-5-2": {
        "ru": "Концепция проекта",
        "en": "Project concept",
        "it": "Concetto di progetto",
    },
    "project-6-1": {
        "ru": "Спальня",
        "en": "Bedroom",
        "it": "Camera da letto",
    },
    "project-6-2": {
        "ru": "Концепция",
        "en": "Concept",
        "it": "Concetto",
    },
    "project-7-1": {
        "ru": 'Коллекция "Олли"',
        "en": 'Collection "OLLY"',
        "it": 'Collezione "Ollie"',
    },
    "project-7-2": {
        "ru": "Коллекция мебели для дома, концепция",
        "en": "Home furniture collection, concept",
        "it": "Collezione di mobili per la casa, concetto",
    },
    "project-8-1": {
        "ru": "Проект 20",
        "en": "Project 20",
        "it": "Progetto 20",
    },
    "project-8-2": {
        "ru": "Каменск-Уральский, Россия",
        "en": "Kamensk-Uralsky, Russia",
        "it": "Kamensk-Uralsky, Russia",
    },
    "footer": {
        "ru": "2022 olga lya interiors",
        "en": "2022 olga lya interiors",
        "it": "2022 olga lya interiors",
    },
    "": {
        "ru": "",
        "en": "",
        "it": "",
    },
    


}