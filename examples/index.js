document.addEventListener("DOMContentLoaded", () => {

  let titles = ['JavaScript', 'CSS', 'HTML', 'HTML5', 'SVG', 'PHP', 'Python', 'Shell', 'WebGL', 'JavaScript']
  let words = []
  for(let i = 0; i < titles.length; i++) {
    words[i] = {
      'title' : titles[i],
      'url' : ''
    }
  }
  let colors1 = ['#F46779', '#045DA4']    
  let colors2 = ['#D59A3E', '#C58B59']    
  let colors3 = ['#4B5563', '#DC2626', '#D97706', '#059669', '#2563EB', '#4F46E5', '#7C3AED', '#DB2777', '#F66A0A', '#795548', '#00ACC1']


  let wb1 = new dodoroy.WordBox('#box-responsive-left', {
    isLead: true,
    words: words,
    colors: colors3,
    borderWidth: 2,
    isFixedWidth: false
  })
  let wb2 = new dodoroy.WordBox('#box-responsive-right', {
    isLead: true,
    words: words,
    colors: colors3,
    borderWidth: 2,
    isFixedWidth: false
  })
  
});

