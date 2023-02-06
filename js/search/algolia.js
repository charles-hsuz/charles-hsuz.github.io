window.addEventListener('load', () => {
  const openSearch = () => {
    document.getElementById('search-bg').classList.remove('hide')
    document.querySelector('#algolia-search .ais-SearchBox-input').placeholder = GLOBAL_CONFIG.algolia.languages.input_placeholder
    document.querySelector('#algolia-search #search-bg:not(.phone)').style.width = '600px'

    setTimeout(() => { document.querySelector('#algolia-search .ais-SearchBox-input').focus() }, 100)

    // shortcut: ESC
    document.addEventListener('keydown', function f (event) {
      if (event.code === 'Escape') {
        closeSearch()
        document.removeEventListener('keydown', f)
      }
    })
  }

  hsu.KCadd('Shift', 'K', openSearch)

  const closeSearch = () => {
    document.querySelector('#algolia-search .ais-SearchBox-input').placeholder = 'ctrl K'
    document.querySelector('#algolia-search #search-bg:not(.phone)').style.width = ''
    document.getElementById('search-bg').classList.add('hide')
    const bodyStyle = document.body.style
    bodyStyle.width = ''
    bodyStyle.overflow = ''
    btf.animateOut(document.getElementById('search-mask'), 'to_hide 0.5s')
  }

  const searchClickFn = () => {
    document.querySelector('#algolia-search .ais-SearchBox').addEventListener('click', openSearch)
  }

  const searchLocate = () => {
    let searchBG = document.querySelector('#algolia-search #search-bg')
    let leftWid = document.querySelector('#blog-info a').offsetWidth
    let rightWid = document.querySelector('#nav #menus').offsetWidth
    let extra = parseInt(window.getComputedStyle(document.getElementById('nav'), null).getPropertyValue('padding-left'))
    let mWidth = innerWidth - leftWid - rightWid - extra*2 - 30
    if(innerWidth > 860) {
      searchBG.style.right = (rightWid + extra) + 'px'
      searchBG.style.maxWidth = mWidth + 'px'
    } else {
      searchBG.classList.add('phone')
    }
  }

  const searchInit = () => {
    // document.getElementById('search-bg').classList.add('hide')
  }

  const cutContent = content => {
    if (content === '') return ''

    const firstOccur = content.indexOf('<mark>')

    let start = firstOccur - 30
    let end = firstOccur + 120
    let pre = ''
    let post = ''

    if (start <= 0) {
      start = 0
      end = 140
    } else {
      pre = '...'
    }

    if (end > content.length) {
      end = content.length
    } else {
      post = '...'
    }

    let matchContent = pre + content.substring(start, end) + post
    return matchContent
  }

  const algolia = GLOBAL_CONFIG.algolia
  const isAlgoliaValid = algolia.appId && algolia.apiKey && algolia.indexName
  if (!isAlgoliaValid) {
    return console.error('Algolia setting is invalid!')
  }

  const search = instantsearch({
    indexName: algolia.indexName,
    searchClient: algoliasearch(algolia.appId, algolia.apiKey),
    searchParameters: {
      hitsPerPage: algolia.hits.per_page || 10
    },
    searchFunction(helper) {
      helper.state.query && helper.search()
    },
  })

  const searchBox = instantsearch.widgets.searchBox({
    container: '#algolia-search-input',
    showReset: false,
    showSubmit: false,
    placeholder: 'ctrl K',
    showLoadingIndicator: true
  })

  const hits = instantsearch.widgets.hits({
    container: '#algolia-hits',
    templates: {
      item: function (data) {
        const link = data.permalink ? data.permalink : (GLOBAL_CONFIG.root + data.path)
        return (
          '<a href="' + link + '" class="algolia-hit-item-link">' +
          data._highlightResult.title.value +
          '</a>'
        )
      },
      empty: function (data) {
        return (
          '<div id="algolia-hits-empty">' +
          GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/, data.query) +
          '</div>'
        )
      }
    }
  })

  const stats = instantsearch.widgets.stats({
    container: '#algolia-info > .algolia-stats',
    templates: {
      text: function (data) {
        const stats = GLOBAL_CONFIG.algolia.languages.hits_stats
          .replace(/\$\{hits}/, data.nbHits)
          .replace(/\$\{time}/, data.processingTimeMS)
        return (
          `<hr>${stats}`
        )
      }
    }
  })

  const pagination = instantsearch.widgets.pagination({
    container: '#algolia-pagination',
    scrollTo: false,
    showFirstLast: false,
    labels: {
      first: '<i class="fas fa-angle-double-left"></i>',
      last: '<i class="fas fa-angle-double-right"></i>',
      previous: '<i class="fas fa-angle-left"></i>',
      next: '<i class="fas fa-angle-right"></i>'
    }
  })

  search.addWidgets([searchBox,hits,stats,pagination]) // add the widgets to the instantsearch instance

  search.start()
  searchLocate()
  searchInit()
  searchClickFn()

  

  window.addEventListener('pjax:complete', () => {
    getComputedStyle(document.querySelector('#algolia-search .search-dialog')).display === 'block' && closeSearch()
    searchClickFn()
  })

  window.pjax && search.on('render', () => {
    window.pjax.refresh(document.getElementById('algolia-hits'))
  })
})
