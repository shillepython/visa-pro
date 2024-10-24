<template>
    <div class="font-sans text-gray-900">
        <!-- Хедер -->
        <header :class="['fixed w-full z-50 transition-colors duration-300', isScrolled ? 'bg-white shadow' : 'bg-transparent']">
            <div class="container mx-auto flex justify-between items-center py-4 px-6">
                <div class="text-2xl font-bold">
                    <a href="#home" :class="isScrolled ? 'text-indigo-600' : 'text-white'">VisaPro</a>
                </div>

                <!-- Навигационные ссылки для больших экранов -->
                <nav class="hidden md:flex space-x-4">
                    <a href="#home" :class="isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-gray-100 hover:text-gray-300'">Главная</a>
                    <a href="#about" :class="isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-gray-100 hover:text-gray-300'">О нас</a>
                    <a href="#services" :class="isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-gray-100 hover:text-gray-300'">Услуги</a>
                    <a href="#advantages" :class="isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-gray-100 hover:text-gray-300'">Преимущества</a>
                    <a href="#partners" :class="isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-gray-100 hover:text-gray-300'">Партнёры</a>
                    <a href="#testimonials" :class="isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-gray-100 hover:text-gray-300'">Отзывы</a>
                    <a href="#contact" :class="isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-gray-100 hover:text-gray-300'">Контакты</a>
                </nav>

                <!-- Контактные ссылки для больших экранов -->
                <div class="hidden md:flex space-x-2 items-center">
                    <a href="https://wa.me/1234567890" :class="['', isScrolled ? 'text-indigo-600 hover:text-blue-800' : 'text-white hover:text-gray-200']">
                        <font-awesome-icon icon="comments" class="h-5 w-5 mr-1" />
                        WhatsApp
                    </a>
                    <a href="https://wa.me/0987654321" :class="['', isScrolled ? 'text-indigo-600 hover:text-blue-800' : 'text-white hover:text-gray-200']">
                        <font-awesome-icon icon="phone" class="h-5 w-5 mr-1" />
                        +1 234 567 890
                    </a>
                </div>

                <!-- Бургер-иконка для мобильных экранов -->
                <div class="md:hidden flex items-center">
                    <button @click="toggleMobileMenu" :class="isScrolled ? 'text-indigo-600 hover:text-indigo-700 focus:outline-none' : 'text-white hover:text-gray-300 focus:outline-none'">
                        <font-awesome-icon :icon="isMobileMenuOpen ? 'times' : 'bars'" class="h-6 w-6" />
                    </button>
                </div>
            </div>

            <!-- Мобильное меню -->
            <div v-if="isMobileMenuOpen" class="md:hidden bg-white shadow-lg">
                <nav class="flex flex-col space-y-2 p-4">
                    <a href="#home" @click="toggleMobileMenu" class="text-gray-800 hover:text-indigo-600">Главная</a>
                    <a href="#about" @click="toggleMobileMenu" class="text-gray-800 hover:text-indigo-600">О нас</a>
                    <a href="#services" @click="toggleMobileMenu" class="text-gray-800 hover:text-indigo-600">Услуги</a>
                    <a href="#advantages" @click="toggleMobileMenu" class="text-gray-800 hover:text-indigo-600">Преимущества</a>
                    <a href="#partners" @click="toggleMobileMenu" class="text-gray-800 hover:text-indigo-600">Партнёры</a>
                    <a href="#testimonials" @click="toggleMobileMenu" class="text-gray-800 hover:text-indigo-600">Отзывы</a>
                    <a href="#contact" @click="toggleMobileMenu" class="text-gray-800 hover:text-indigo-600">Контакты</a>
                </nav>
                <div class="flex flex-col space-y-2 p-4 border-t">
                    <a href="https://wa.me/1234567890" @click="toggleMobileMenu" class="text-indigo-600 hover:text-blue-800 flex items-center">
                        <font-awesome-icon icon="comments" class="h-5 w-5 mr-1" />
                        WhatsApp
                    </a>
                    <a href="https://wa.me/0987654321" @click="toggleMobileMenu" class="text-indigo-600 hover:text-blue-800 flex items-center">
                        <font-awesome-icon icon="phone" class="h-5 w-5 mr-1" />
                        +1 234 567 890
                    </a>
                </div>
            </div>
        </header>

        <!-- Главный экран -->
        <section id="home" class="h-screen bg-cover bg-center relative" style="background-image: url('/images/background-header.jpeg');">
            <!-- Затемнённый слой с z-10 -->
            <div class="absolute inset-0 bg-black opacity-60 z-10"></div>
            <!-- Содержимое с z-20 -->
            <div class="container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4 relative z-20">
                <h1 class="lg:text-8xl text-4xl font-bold mb-4">Получите визу легко с VisaPro</h1>
                <p class="lg:text-2xl text-xl mb-8">Мы облегчаем процесс получения визы для путешествий по всему миру</p>
                <a href="#application" class="lg:text-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded shadow-lg transition transform hover:scale-105">
                    Оставить заявку
                </a>
            </div>
        </section>

        <!-- О нас -->
        <section id="about" class="py-20 bg-gray-100">
            <div class="bg-gray-50 w-full rounded-lg font-sans overflow-hidden max-w-5xl mx-auto">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 items-center">
                    <div class="lg:col-span-2 p-10">
                        <h1 class="lg:text-3xl md:text-2xl text-xl text-2xl font-bold text-gray-800">Мы работаем с более чем 30 странами, обеспечивая индивидуальный подход к каждому клиенту и гарантируя высокий уровень обслуживания!</h1>
                        <p class="mt-4 text-sm text-gray-500 leading-relaxed">В VisaPro мы стремимся сделать процесс получения визы максимально простым и удобным для наших клиентов. Наша команда опытных специалистов предоставляет полный спектр услуг, начиная от консультаций и заканчивая оформлением всех необходимых документов.</p>

                        <button type="button"
                                class="px-6 py-3 mt-8 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700">Get
                            the Free Guide</button>
                    </div>
                    <img :src="'/images/visa-approved.png'" class="w-full h-full object-cover shrink-0" />
                </div>
            </div>
        </section>

        <!-- Услуги -->
        <section id="services" class="py-20">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center mb-8">Наши услуги</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Услуга 1 -->
                    <div @click="openModal('Консультации', 'Подробное описание услуги Консультации...', '/images/consultation.jpg')" class="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
                        <div class="relative">
                            <img :src="'/images/consultation.jpg'" alt="Консультации" class="w-full h-48 object-cover">
                            <div class="absolute inset-0 bg-indigo-600 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span class="text-white text-lg">Подробнее</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <font-awesome-icon icon="file-alt" class="text-indigo-600 text-4xl mb-4" />
                            <h3 class="text-xl font-semibold mb-2">Консультации</h3>
                            <p>Получите профессиональные консультации по всем вопросам, связанным с получением визы.</p>
                        </div>
                    </div>
                    <!-- Услуга 2 -->
                    <div @click="openModal('Оформление документов', 'Подробное описание услуги Оформление документов...', '/images/contract.jpg')" class="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
                        <div class="relative">
                            <img :src="'/images/contract.jpg'" alt="Оформление документов" class="w-full h-48 object-cover">
                            <div class="absolute inset-0 bg-indigo-600 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span class="text-white text-lg">Подробнее</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <font-awesome-icon icon="file-alt" class="text-indigo-600 text-4xl mb-4" />
                            <h3 class="text-xl font-semibold mb-2">Оформление документов</h3>
                            <p>Мы поможем собрать и оформить все необходимые документы для успешного получения визы.</p>
                        </div>
                    </div>
                    <!-- Услуга 3 -->
                    <div @click="openModal('Сопровождение', 'Подробное описание услуги Сопровождение...', '/images/soprovozhdenie.jpg')" class="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
                        <div class="relative">
                            <img :src="'/images/soprovozhdenie.jpg'" alt="Сопровождение" class="w-full h-48 object-cover">
                            <div class="absolute inset-0 bg-indigo-600 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span class="text-white text-lg">Подробнее</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <font-awesome-icon icon="calendar-alt" class="text-indigo-600 text-4xl mb-4" />
                            <h3 class="text-xl font-semibold mb-2">Сопровождение</h3>
                            <p>Наши специалисты сопровождают вас на каждом этапе процесса получения визы.</p>
                        </div>
                    </div>
                    <!-- Услуга 4 -->
                    <div @click="openModal('Бизнес-визы', 'Подробное описание услуги Бизнес-визы...', '/images/busines-visa.jpg')" class="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
                        <div class="relative">
                            <img :src="'/images/busines-visa.jpg'" alt="Бизнес-визы" class="w-full h-48 object-cover">
                            <div class="absolute inset-0 bg-indigo-600 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span class="text-white text-lg">Подробнее</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <font-awesome-icon icon="briefcase" class="text-indigo-600 text-4xl mb-4" />
                            <h3 class="text-xl font-semibold mb-2">Бизнес-визы</h3>
                            <p>Специализированные услуги для получения бизнес-виз с учётом всех требований.</p>
                        </div>
                    </div>
                    <!-- Услуга 5 -->
                    <div @click="openModal('Глобальное покрытие', 'Подробное описание услуги Глобальное покрытие...', '/images/exchange-travel-transportation.avif')" class="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
                        <div class="relative">
                            <img :src="'/images/exchange-travel-transportation.avif'" alt="Глобальное покрытие" class="w-full h-48 object-cover">
                            <div class="absolute inset-0 bg-indigo-600 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span class="text-white text-lg">Подробнее</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <font-awesome-icon icon="globe" class="text-indigo-600 text-4xl mb-4" />
                            <h3 class="text-xl font-semibold mb-2">Глобальное покрытие</h3>
                            <p>Мы работаем с более чем 30 странами, обеспечивая широкий выбор направлений.</p>
                        </div>
                    </div>
                    <!-- Услуга 6 -->
                    <div @click="openModal('Конфиденциальность', 'Подробное описание услуги Конфиденциальность...', '/images/general-data-protection-regulation.jpg')" class="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
                        <div class="relative">
                            <img :src="'/images/general-data-protection-regulation.jpg'" alt="Конфиденциальность" class="w-full h-48 object-cover">
                            <div class="absolute inset-0 bg-indigo-600 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span class="text-white text-lg">Подробнее</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <font-awesome-icon icon="lock" class="text-indigo-600 text-4xl mb-4" />
                            <h3 class="text-xl font-semibold mb-2">Конфиденциальность</h3>
                            <p>Ваши данные находятся в безопасности. Мы соблюдаем все стандарты конфиденциальности.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="relative bg-black py-16 font-[sans-serif]">
            <div class="absolute inset-0">
                <img :src="'/images/hero-visa.jpg'" alt="Background Image" class="w-full h-full object-cover opacity-50" />
            </div>

            <div class="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
                <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">Оставь заявку и получи визу!</h1>
                <p class="text-lg md:text-xl mb-12">Уже через месяц вы будете в стране своей мечты</p>

                <a href="#application" class="bg-indigo-600 hover:bg-indigo-700 text-white text-base tracking-wide px-6 py-3 rounded transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
                    Оставить заявку
                </a>
            </div>
        </div>

        <!-- Преимущества -->
        <section id="advantages" class="py-20 bg-gray-100">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center mb-8">Наши преимущества</h2>
                <div class="flex flex-wrap">
                    <!-- Преимущество 1 -->
                    <div class="w-full md:w-1/3 text-center mb-8">
                        <font-awesome-icon icon="lock" class="text-indigo-600 text-4xl mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Надёжность</h3>
                        <p>Мы гарантируем высокое качество услуг и безопасность на каждом этапе процесса.</p>
                    </div>
                    <!-- Преимущество 2 -->
                    <div class="w-full md:w-1/3 text-center mb-8">
                        <font-awesome-icon icon="globe" class="text-indigo-600 text-4xl mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Глобальное покрытие</h3>
                        <p>Наши услуги доступны в более чем 30 странах по всему миру.</p>
                    </div>
                    <!-- Преимущество 3 -->
                    <div class="w-full md:w-1/3 text-center mb-8">
                        <font-awesome-icon icon="briefcase" class="text-indigo-600 text-4xl mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Профессиональная команда</h3>
                        <p>Наши специалисты всегда готовы помочь вам в любой ситуации.</p>
                    </div>
                    <!-- Преимущество 4 -->
                    <div class="w-full md:w-1/3 text-center mb-8">
                        <font-awesome-icon icon="bolt" class="text-indigo-600 text-4xl mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Быстрое оформление</h3>
                        <p>Мы стремимся минимизировать время ожидания и ускорить процесс получения визы.</p>
                    </div>
                    <!-- Преимущество 5 -->
                    <div class="w-full md:w-1/3 text-center mb-8">
                        <font-awesome-icon icon="lock" class="text-indigo-600 text-4xl mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Конфиденциальность</h3>
                        <p>Ваши данные защищены и не передаются третьим лицам.</p>
                    </div>
                    <!-- Преимущество 6 -->
                    <div class="w-full md:w-1/3 text-center mb-8">
                        <font-awesome-icon icon="quote-left" class="text-indigo-600 text-4xl mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Круглосуточная поддержка</h3>
                        <p>Наши специалисты доступны 24/7 для ответов на ваши вопросы.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Партнёры -->
        <section id="partners" class="py-20">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center mb-8">Наши партнёры</h2>
                <div class="flex flex-wrap justify-center items-center">
                    <!-- Партнёр 1: Pegas Touristik -->
                    <a href="https://www.pegastouristik.ru" target="_blank" rel="noopener noreferrer" class="m-4 transition transform hover:scale-105">
                        <div class="w-44 h-20 relative overflow-hidden bg-gray-200 rounded-md">
                            <img :src="'/images/pegas-touristik.jpg'" alt="Pegas Touristik" class="absolute inset-0 w-full h-full object-fill grayscale hover:grayscale-0 transition duration-300">
                        </div>
                    </a>

                    <!-- Партнёр 2 -->
                    <a href="https://www.aeroflot.ru" target="_blank" rel="noopener noreferrer" class="m-4 transition transform hover:scale-105">
                        <div class="w-44 h-20 relative overflow-hidden bg-gray-200 rounded-md">
                            <img :src="'/images/aeroflot.webp'" alt="Aeroflot" class="absolute inset-0 w-full h-full object-fill grayscale hover:grayscale-0 transition duration-300">
                        </div>
                    </a>

                    <!-- Партнёр 3 -->
                    <a href="https://www.tui.ru" target="_blank" rel="noopener noreferrer" class="m-4 transition transform hover:scale-105">
                        <div class="w-44 h-20 relative overflow-hidden bg-gray-200 rounded-md">
                            <img :src="'/images/tui.webp'" alt="TUI Russia" class="absolute inset-0 w-full h-full object-fill grayscale hover:grayscale-0 transition duration-300">
                        </div>
                    </a>

                    <!-- Партнёр 4 -->
                    <a href="https://www.sberbank.ru" target="_blank" rel="noopener noreferrer" class="m-4 transition transform hover:scale-105">
                        <div class="w-44 h-20 relative overflow-hidden bg-gray-200 rounded-md">
                            <img :src="'/images/sber.png'" alt="Сбербанк" class="absolute inset-0 w-full h-full object-fill grayscale hover:grayscale-0 transition duration-300">
                        </div>
                    </a>

                    <!-- Партнёр 5 -->
                    <a href="https://www.rostelecom.ru" target="_blank" rel="noopener noreferrer" class="m-4 transition transform hover:scale-105">
                        <div class="w-44 h-20 relative overflow-hidden bg-gray-200 rounded-md">
                            <img :src="'/images/rostelecom.png'" alt="Rostelecom" class="absolute inset-0 w-full h-full object-fill grayscale hover:grayscale-0 transition duration-300">
                        </div>
                    </a>

                    <!-- Партнёр 6: Booking.com Россия -->
                    <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="m-4 transition transform hover:scale-105">
                        <div class="w-44 h-20 relative overflow-hidden bg-gray-200 rounded-md">
                            <img :src="'/images/booking.png'" alt="Booking.com Россия" class="absolute inset-0 w-full h-full object-fill grayscale hover:grayscale-0 transition duration-300">
                        </div>
                    </a>
                </div>
            </div>
        </section>



        <section id="project-metrics">
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 p-14 font-sans">
                <div class="grid md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
                    <div>
                        <h1 class="lg:text-5xl text-3xl font-bold text-emerald-500">Лучший сервис в офромлении виз</h1>
                        <p class="mt-6 text-sm text-gray-300 leading-relaxed">Мы предлагаем профессиональный подход к каждому клиенту, обеспечивая быстрое и эффективное оформление виз для более чем 30 стран. Наша команда опытных специалистов сопровождает вас на всех этапах процесса, гарантируя точность и своевременность подачи документов. Мы заботимся о вашей конфиденциальности и предоставляем индивидуальные решения, чтобы сделать ваше путешествие максимально комфортным. Доверьтесь нам и получите визу без лишних хлопот!</p>
                    </div>
                    <div class="grid sm:grid-cols-2 gap-6">
                        <div class="bg-gradient-to-b from-gray-700 to-gray-800 flex flex-col items-center text-center rounded-md md:p-8 p-6">
                            <h3 class="lg:text-4xl text-3xl font-extrabold text-emerald-500">32</h3>
                            <div class="mt-4">
                                <p class="text-sm text-gray-300">Количесвто стран</p>
                            </div>
                        </div>
                        <div class="bg-gradient-to-b from-gray-700 to-gray-800 flex flex-col items-center text-center rounded-md md:p-8 p-6">
                            <h3 class="lg:text-4xl text-3xl font-extrabold text-emerald-500">98%</h3>
                            <div class="mt-4">
                                <p class="text-sm text-gray-300">Успешных заявок</p>
                            </div>
                        </div>
                        <div class="bg-gradient-to-b from-gray-700 to-gray-800 flex flex-col items-center text-center rounded-md md:p-8 p-6">
                            <h3 class="lg:text-4xl text-3xl font-extrabold text-emerald-500">10,000+</h3>
                            <div class="mt-4">
                                <p class="text-sm text-gray-300">Довольных клиентов</p>
                            </div>
                        </div>
                        <div class="bg-gradient-to-b from-gray-700 to-gray-800 flex flex-col items-center text-center rounded-md md:p-8 p-6">
                            <h3 class="lg:text-4xl text-3xl font-extrabold text-emerald-500">5 дней</h3>
                            <div class="mt-4">
                                <p class="text-sm text-gray-300">Среднее время оформления</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Отзывы -->
        <section id="testimonials" class="py-20 bg-gray-100">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center mb-8">Отзывы клиентов</h2>
                <div class="space-y-8">
                    <!-- Отзыв 1 -->
                    <div class="bg-white p-6 rounded-2xl shadow-lg">
                        <p class="text-lg italic mb-4">"Благодаря VisaPro я получил визу в США за рекордно короткое время. Отличный сервис и поддержка!"</p>
                        <div class="flex items-center">
                            <img :src="'/images/otziv-1.avif'" alt="Клиент 1" class="h-10 w-10 object-cover rounded-full mr-4">
                            <div>
                                <p class="font-semibold">Михаил Соколов</p>
                                <p class="text-sm text-gray-600">Москва, Россия</p>
                            </div>
                        </div>
                    </div>
                    <!-- Отзыв 2 -->
                    <div class="bg-white p-6 rounded-2xl shadow-lg">
                        <p class="text-lg italic mb-4">"Профессиональная команда и внимательное отношение. Рекомендую всем, кто планирует путешествие!"</p>
                        <div class="flex items-center">
                            <img :src="'/images/otziv-2.avif'" alt="Клиент 2" class="h-10 w-10 object-cover rounded-full mr-4">
                            <div>
                                <p class="font-semibold">Анна Щербакова</p>
                                <p class="text-sm text-gray-600">Санкт-Петербург, Россия</p>
                            </div>
                        </div>
                    </div>
                    <!-- Отзыв 3 -->
                    <div class="bg-white p-6 rounded-2xl shadow-lg">
                        <p class="text-lg italic mb-4">"VisaPro помогла мне оформить бизнес-визу без лишних хлопот. Отличная работа!"</p>
                        <div class="flex items-center">
                            <img :src="'/images/otziv-3.jpg'" alt="Клиент 3" class="h-10 w-10 object-cover rounded-full mr-4">
                            <div>
                                <p class="font-semibold">Мария Блинова</p>
                                <p class="text-sm text-gray-600">Казань, Россия</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Заявка -->
        <section id="application" class="py-20 m-2">
            <div class="font-sans max-w-6xl mx-auto relative bg-white shadow-lg rounded-3xl overflow-hidden mt-4">
                <div class="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-indigo-400"></div>
                <div class="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-indigo-400"></div>

                <div class="grid md:grid-cols-2 gap-8 py-8 px-6">
                    <div class="text-center flex flex-col items-center justify-center">
                        <img :src="'/images/visa-passport.webp'" class="shrink-0 w-5/6" />
                    </div>
                    <form @submit.prevent="submitForm" class="rounded-tl-3xl rounded-bl-3xl">
                        <h2 class="text-2xl text-indigo-600 font-bold text-center mb-6">Оставьте заявку на визу</h2>
                        <div class="max-w-md mx-auto space-y-3 relative">
                            <input type='text' placeholder='Имя' v-model="form.name"
                                   class="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-indigo-60 focus-within:bg-transparent" />
                            <div v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</div>

                            <input type='email' placeholder='Email' v-model="form.email"
                                   class="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-indigo-60 focus-within:bg-transparent" />
                            <div v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</div>

                            <input type='tel' placeholder='Телефон' v-model="form.phone"
                                   class="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-indigo-60 focus-within:bg-transparent" />
                            <div v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</div>

                            <input type='text' placeholder='Страна назначения' v-model="form.country"
                                   class="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-indigo-60 focus-within:bg-transparent" />
                            <div v-if="errors.country" class="text-red-500 text-sm">{{ errors.country }}</div>

                            <textarea placeholder='Сообщение' rows="6" v-model="form.message"
                                      class="w-full bg-gray-100 rounded-md px-4 text-sm pt-3 outline-indigo-60 focus-within:bg-transparent"></textarea>
                            <div v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</div>

                            <button type='submit'
                                    class="text-white w-full relative bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm px-6 py-3 mt-6 transition duration-300 ease-in-out shadow-lg hover:shadow-xl flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' class="mr-2 inline" viewBox="0 0 548.244 548.244">
                                    <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                                </svg>
                                Отправить заявку
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <!-- Футер -->
        <footer class="bg-gray-800 text-white py-8">
            <div class="container mx-auto px-6">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="mb-4 md:mb-0">
                        <h3 class="text-xl font-bold">VisaPro</h3>
                        <p class="text-sm">Мы предоставляем лучшие услуги по оформлению виз для путешествий и бизнеса по всему миру.</p>
                    </div>
                    <div class="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" class="hover:text-gray-400">
                            <font-awesome-icon icon="facebook" />
                        </a>
                        <a href="https://twitter.com" target="_blank" class="hover:text-gray-400">
                            <font-awesome-icon icon="twitter" />
                        </a>
                        <a href="https://instagram.com" target="_blank" class="hover:text-gray-400">
                            <font-awesome-icon icon="instagram" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" class="hover:text-gray-400">
                            <font-awesome-icon icon="linkedin" />
                        </a>
                    </div>
                </div>
                <div class="mt-4 text-center text-sm">
                    © 2024 VisaPro. Все права защищены.
                </div>
            </div>
        </footer>

        <!-- Модальное окно -->
        <Modal
            :show="modalShow"
            :title="modalTitle"
            :content="modalContent"
            :image="modalImage"
            @close="closeModal"
        />
    </div>
</template>

<script>
import Modal from '../Components/Modal.vue';
import { ref } from 'vue';
import { router } from '@inertiajs/vue3'

export default {
    components: {
        Modal
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                country: '',
                message: '',
                errors: {}
            },
            isScrolled: false,
            modalShow: false,
            modalTitle: '',
            modalContent: '',
            modalImage: '',
            isMobileMenuOpen: false // Добавляем состояние для мобильного меню
        }
    },
    props: {
        errors: Object
    },
    methods: {
        submitForm() {
            // Отправка формы через Inertia
            router.post('/submit-application', this.form, {
                preserveScroll: true,
                onSuccess: () => {

                    // Очистка формы
                    this.form.name = '';
                    this.form.email = '';
                    this.form.phone = '';
                    this.form.country = '';
                    this.form.message = '';

                    this.openModal('Заявка', 'Спасибо что оставили заявку на консультацию! Мы свяжемся с Вами в течении 5 минут.')
                },
                onError: (errors) => {}
            });
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        },
        openModal(title, content, image) {
            this.modalTitle = title;
            this.modalContent = content;
            this.modalImage = image;
            this.modalShow = true;
        },
        closeModal() {
            this.modalShow = false;
        },
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style>
/* Дополнительные стили при необходимости */
body {
    scroll-behavior: smooth;
}
</style>
