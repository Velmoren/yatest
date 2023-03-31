



var share = Ya.share2('my-share', {
    content: {
        url: 'https://отчетыдемо.президентскиегранты.рф/award/project/1825FE4C-3AA5-4319-B135-A2C7867439D2/about',
        title: 'отчетыдемо',
        description: 'отчетыдемо отчетыдемо отчетыдемо отчетыдемо отчетыдемо отчетыдемо',
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
            url: `https://minfin-myrtex.ru`,
            title: 'asdasdas',
            description: 'отчетыдемо отчетыдемо отчетыдемо отчетыдемо отчетыдемо отчетыдемо',
        }
    }
    // здесь вы можете указать и другие параметры
});


const shareToVk = () => {
     
    // var tltl = document.title
    // var desc = "Наш проект участвует в оценке. Перейдите на портал http://xn--80ajpld2c.xn--80af5akm8c.xn--p1ai/ , авторизуйтесь, поставьте оценку и отзыв"
    // var link = 'https://xn--d1abb2agexb7b3b.xn--80afcdbalict6afooklqi5o.xn--p1ai/award/project/1825FE4C-3AA5-4319-B135-A2C7867439D2/about'
    // var width = 550
    // var height = 268
    // var w_top = (window.screen.height - height)/2
    // var w_left = (window.screen.width - width)/2
    // window.open('http://vk.com/share.php?url=%27+link+%27&title=%27+tltl+%27&description=%27+desc+%27&cmg=1', 'shareSite','width=550px,height=268px,resizable=yes,scrollbars=yes,left='+w_left+',top='+w_top);
}

document.getElementById('my-btn').innerHTML = VK.Share.button('https://отчетыдемо.президентскиегранты.рф/award/project/1825FE4C-3AA5-4319-B135-A2C7867439D2/about', {
    url: 'xn--https://-97gjb8fwae9cb7frd.xn--80afcdbalict6afooklqi5o.xn--p1ai/award/project/1825FE4C-3AA5-4319-B135-A2C7867439D2/about',
    title: 'Заголовок страницы',
    description: 'asjdnaslkj a;slda фывфывфы вукпеук 67ш67ш',
    noparse: false,
    type: 'button_nocount'
});