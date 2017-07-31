      const container = document.querySelector('.grid-section')
      // insert 100 divs with same width, but random height
      for (var i = 0; i < 100; i++) {
        const div = document.createElement('div')
        div.classList.add('box')
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