      const container = document.querySelector('.grid-section');
      var img_source = [
        'img_source/1.jpg',
        'img_source/2.jpg',
        'img_source/3.jpg',
        'img_source/4.jpg',
        'img_source/5.jpg',
        'img_source/6.jpg',
        'img_source/7.jpg',
        'img_source/8.jpg',
        'img_source/9.jpg',
        'img_source/10.jpg',
        'img_source/11.jpg',
        'img_source/12.jpg',
        'img_source/13.jpg',
        'img_source/14.jpg',
        'img_source/15.jpg',
        'img_source/16.jpg',
        'img_source/17.jpg',
        'img_source/18.jpg',
        'img_source/19.jpg',
        'img_source/20.jpg',
        'img_source/21.jpg',
        'img_source/22.jpg',
        'img_source/23.jpg',
        'img_source/24.jpg',
        'img_source/25.jpg'
      ];
      // insert 25 divs with same width, but random height
      for (var i = 0; i < 25; i++) {
        const div = document.createElement('div')
        div.classList.add('box')
        div.style.backgroundImage = 'url(' + img_source[i] + ')'
        div.style.backgroundRepeat = 'no-repeat'
        div.style.backgroundSize = 'contain'
        div.style.backgroundPosition = '50% 50%'
        div.style.backgroundColor = 'whitesmoke'
        div.style.width = '200px'
        div.style.height = Math.floor(Math.random() * 500) + 'px'
        container.appendChild(div)
      }
      const instance = Bricks({
        container: '.grid-section',
        packed: 'data-packed',
        position:  true,
        sizes: [
          { columns: 2, gutter: 10 },
          { mq: '768px', columns: 3, gutter: 25 },
          { mq: '1024px', columns: 4, gutter: 50 }
        ]
      })
        .resize(true)
        .pack()