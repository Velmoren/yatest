var share = Ya.share2('my-share', {
    content: {
        title: 'Yandex',
        description: 'All about Yandex',
        image: 'https://yastatic.net/morda-logo/i/logo.svg'           
    },
    theme: {
        services: 'vkontakte,telegram',
        lang: 'ru',
        limit: 3,
        size: 'm',
        bare: false
    },
    contentByService: {
        vkontakte: {
            url: 'https://ya.ru',
            title: 'Яндекс',
            description: 'All about Yandex'
        }
    }
    // здесь вы можете указать и другие параметры
});