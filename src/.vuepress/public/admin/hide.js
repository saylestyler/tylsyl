const hideElements = () => {
  // hide some pointless embellishments
  document.getElementsByTagName('header')[0].style.display = 'none'
  document.getElementsByTagName('aside')[0].style.display = 'none'
  document.getElementsByTagName('main')[0].style.paddingLeft = '0px'
  document.getElementsByClassName(
    'css-rtapgf-CollectionTopHeading-cardTopHeading enajvhy2'
  )[0].style.display = 'none'
  document.getElementsByClassName(
    'css-6gyc3k-ViewControls enajvhy5'
  )[0].style.display = 'none'

  // make the list of posts not be so bulky
  var cards = Array.from(
    document.getElementsByClassName('css-hstwmc-ListCard-dropMain-card')
  )
  cards.forEach(x => (x.style.margin = '0px'))

  // hide background of "new post" bar
  document.getElementsByClassName(
    'css-1ujh71h-CollectionTopNewButton-button-dropDeep-default-gray'
  )[0].style.backgroundColor = 'green'
  document.getElementsByClassName(
    'css-1ujh71h-CollectionTopNewButton-button-dropDeep-default-gray'
  )[0].innerText = 'n'

  // change post list links typography
  var posts = Array.from(
    document.getElementsByClassName('css-6ud6h6-ListCardTitle')
  )
  posts.forEach(x => (x.style.color = 'blue'))
  posts.forEach(x => (x.style.fontFamily = 'Times'))
}
