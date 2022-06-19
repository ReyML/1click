const btns = document.querySelectorAll("button")

btns.forEach(btn => {
    btn.addEventListener('click', () => {
      //const copy = mca.textContent
      const copp = btn.previousElementSibling?.textContent
      // @ts-ignore
      navigator.clipboard.writeText(copp)
    })
    
})

