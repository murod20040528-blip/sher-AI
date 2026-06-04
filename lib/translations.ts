export type Language = "uz" | "ru" | "en"

export const translations = {
  uz: {
    // Header
    gallery: "Galereya",
    about: "Haqida",
    contact: "Aloqa",
    history: "Tarix", // Added history navigation

    // Main page
    title: "AI She'riyat",
    subtitle:
      "O'z fikrlaringizni sun'iy intellekt yordamida go'zal she'rlarga aylantiring. Mavzu, his-tuyg'u yoki g'oyani kiriting va uni she'rga aylanishini tomosha qiling.",

    // Input section
    inputLabel: "Bugun sizni nima ilhomlantiradi?",
    inputPlaceholder:
      "Mavzu, his-tuyg'u, xotira yoki har qanday ilhom kiriting... (masalan: 'tog'lar ustidagi quyosh botishi', 'bolalik xotiralari', 'yomg'ir ovozi')",
    generateButton: "She'r yaratish",
    generating: "She'r yaratilmoqda...",

    // Generated poetry
    yourPoetry: "Sizning she'ringiz",
    copy: "Nusxalash",
    save: "Saqlash",
    like: "Yoqtirish",

    // Features
    aiPowered: "AI-ga asoslangan",
    aiDescription: "Ilg'or AI sizning so'rovlaringizni tushunadi va mazmunli she'rlar yaratadi",
    emotionalDepth: "Hissiy chuqurlik",
    emotionalDescription: "Har bir she'r sizning ilhomingizning mohiyatini hissiy rezonans bilan ifodalaydi",
    saveShare: "Saqlash va ulashish",
    saveDescription: "Yaratilgan she'rlaringizni nusxalang, yuklab oling yoki dunyo bilan ulashing",

    // History page
    historyTitle: "She'rlar tarixi",
    historySubtitle: "Siz yaratgan barcha she'rlaringiz",
    noPoems: "Hali she'rlar yaratilmagan",
    noPomsDescription: "Birinchi she'ringizni yaratish uchun bosh sahifaga qayting",
    backToGenerator: "She'r yaratishga qaytish",
    createdOn: "Yaratilgan:",
    deletePoem: "O'chirish",
    confirmDelete: "Rostdan ham bu she'rni o'chirmoqchimisiz?",
    clearAll: "Hammasini tozalash",
    confirmClearAll: "Rostdan ham barcha she'rlarni o'chirmoqchimisiz?",
    cancel: "Bekor qilish",
    delete: "O'chirish",
    liked: "Yoqtirilgan",
    searchPlaceholder: "She'rlarni qidirish...",

    // Image generation translations
    generateImage: "Rasm yaratish",
    generatingImage: "Rasm yaratilmoqda...",
    imageGenerated: "Rasm yaratildi",
    downloadImage: "Rasmni yuklab olish",
  },

  ru: {
    // Header
    gallery: "Галерея",
    about: "О нас",
    contact: "Контакты",
    history: "История", // Added history navigation

    // Main page
    title: "AI Поэзия",
    subtitle:
      "Превратите свои мысли в прекрасную поэзию с помощью искусственного интеллекта. Введите тему, эмоцию или идею и наблюдайте, как она расцветает в стихах.",

    // Input section
    inputLabel: "Что вдохновляет вашу поэзию сегодня?",
    inputPlaceholder:
      "Введите тему, эмоцию, воспоминание или любое вдохновение... (например: 'закат над горами', 'детские воспоминания', 'звук дождя')",
    generateButton: "Создать поэзию",
    generating: "Создание поэзии...",

    // Generated poetry
    yourPoetry: "Ваша поэзия",
    copy: "Копировать",
    save: "Сохранить",
    like: "Нравится",

    // Features
    aiPowered: "На основе ИИ",
    aiDescription: "Продвинутый ИИ понимает ваши запросы и создает осмысленную поэзию",
    emotionalDepth: "Эмоциональная глубина",
    emotionalDescription: "Каждое стихотворение передает суть вашего вдохновения с эмоциональным резонансом",
    saveShare: "Сохранить и поделиться",
    saveDescription: "Копируйте, загружайте или делитесь своей созданной поэзией с миром",

    // History page
    historyTitle: "История поэзии",
    historySubtitle: "Все ваши созданные стихотворения",
    noPoems: "Стихотворения еще не созданы",
    noPomsDescription: "Вернитесь на главную страницу, чтобы создать свое первое стихотворение",
    backToGenerator: "Вернуться к генератору",
    createdOn: "Создано:",
    deletePoem: "Удалить",
    confirmDelete: "Вы действительно хотите удалить это стихотворение?",
    clearAll: "Очистить все",
    confirmClearAll: "Вы действительно хотите удалить все стихотворения?",
    cancel: "Отмена",
    delete: "Удалить",
    liked: "Понравилось",
    searchPlaceholder: "Поиск стихотворений...",

    // Image generation translations
    generateImage: "Создать изображение",
    generatingImage: "Создание изображения...",
    imageGenerated: "Изображение создано",
    downloadImage: "Скачать изображение",
  },

  en: {
    // Header
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
    history: "History", // Added history navigation

    // Main page
    title: "AI Poetry",
    subtitle:
      "Transform your thoughts into beautiful poetry with the power of artificial intelligence. Enter a theme, emotion, or idea and watch it bloom into verse.",

    // Input section
    inputLabel: "What inspires your poetry today?",
    inputPlaceholder:
      "Enter a theme, emotion, memory, or any inspiration... (e.g., 'sunset over mountains', 'childhood memories', 'the sound of rain')",
    generateButton: "Generate Poetry",
    generating: "Crafting Poetry...",

    // Generated poetry
    yourPoetry: "Your Poetry",
    copy: "Copy",
    save: "Save",
    like: "Like",

    // Features
    aiPowered: "AI-Powered",
    aiDescription: "Advanced AI understands your prompts and creates meaningful poetry",
    emotionalDepth: "Emotional Depth",
    emotionalDescription: "Each poem captures the essence of your inspiration with emotional resonance",
    saveShare: "Save & Share",
    saveDescription: "Copy, download, or share your generated poetry with the world",

    // History page
    historyTitle: "Poetry History",
    historySubtitle: "All your created poems",
    noPoems: "No poems created yet",
    noPomsDescription: "Return to the main page to create your first poem",
    backToGenerator: "Back to Generator",
    createdOn: "Created on:",
    deletePoem: "Delete",
    confirmDelete: "Are you sure you want to delete this poem?",
    clearAll: "Clear All",
    confirmClearAll: "Are you sure you want to delete all poems?",
    cancel: "Cancel",
    delete: "Delete",
    liked: "Liked",
    searchPlaceholder: "Search poems...",

    // Image generation translations
    generateImage: "Generate Image",
    generatingImage: "Generating Image...",
    imageGenerated: "Image Generated",
    downloadImage: "Download Image",
  },
}

export const poetryTemplates = {
  uz: [
    `Tong nurining shivirlashida,\nSoyalar raqsga tushgan xursandlikda,\n{prompt} yorqin qo'shiqqa aylanadi,\nAbadiy tunda aks-sado beradi.\n\nHar nafas bilan hikoya aytiladi,\nYaltirab turgan orzular haqida,\nYurak izlagan narsasini topadi,\nTilla kabi sof yozilgan misralarda.`,

    `Muloyim porlayotgan yulduzlar ostida,\n{prompt} tinch oqim kabi oqadi,\nEng vahshiy orzularimiz vodiylarida,\nHech narsa ko'rinadigan kabi emas.\n\nShamol aytilmagan ertaklarni olib yuradi,\nMuhabbat va yo'qotish, yosh va qari haqida,\nHar so'z - ko'rish uchun xazina,\nEng yaxshi oltindan ham qimmatroq.`,

    `{prompt} tong shabnamiga uchraganda,\nDunyoni ko'k ranglar bilan bo'yaganda,\nHayot she'riyati yorib chiqadi,\nHar lahzada, yangi va toza.\n\nOsmondan tushayotgan gulbarglar kabi,\nHar misra nima uchun deb so'rash sababi,\nGo'zallik ruhni uchishga majbur qiladi,\nHech qachon xayr demagan qanotlarda.`,
  ],

  ru: [
    `В шёпоте утреннего света,\nГде тени танцуют с чистой радостью,\n{prompt} становится песней яркой,\nЧто эхом звучит в бесконечной ночи.\n\nС каждым вдохом рассказана история,\nО мечтах, что shimmer, brave and bold,\nThe heart finds what it seeks to hold,\nIn verses written, pure as gold.`,

    `Под звёздами, что мягко светят,\n{prompt} течёт как нежный ручей,\nЧерез долины наших самых диких грёз,\nГде ничто не является тем, чем кажется.\n\nВетер несёт tales untold,\nО любви и потере, о молодых и старых,\nКаждое слово - сокровище для созерцания,\nДороже самого прекрасного золота.`,

    `Когда {prompt} встречает утреннюю росу,\nИ красит мир в оттенки синего,\nПоэзия жизни прорывается,\nВ каждом моменте, свежем и новом.\n\nКак лепестки, падающие с неба,\nКаждый стих - причина спросить почему,\nКрасота заставляет дух летать,\nНа крыльях, что никогда не говорят прощай.`,
  ],

  en: [
    `In whispers of the morning light,\nWhere shadows dance with pure delight,\n{prompt} becomes a song so bright,\nThat echoes through the endless night.\n\nWith every breath, a story told,\nOf dreams that shimmer, brave and bold,\nThe heart finds what it seeks to hold,\nIn verses written, pure as gold.`,

    `Beneath the stars that softly gleam,\n{prompt} flows like a gentle stream,\nThrough valleys of our wildest dream,\nWhere nothing is quite what they seem.\n\nThe wind carries tales untold,\nOf love and loss, of young and old,\nEach word a treasure to behold,\nMore precious than the finest gold.`,

    `When {prompt} meets the morning dew,\nAnd paints the world in shades of blue,\nThe poetry of life breaks through,\nIn every moment, fresh and new.\n\nLike petals falling from the sky,\nEach verse a reason to ask why,\nThe beauty makes the spirit fly,\nOn wings that never say goodbye.`,
  ],
}
