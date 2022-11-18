function ListaPorEspecificacao (BaseName) {
  const processosVisualizados = document.querySelectorAll('.processoVisualizado')
  const processosNaoVisualizados = document.querySelectorAll('.processoNaoVisualizado')

  let i1 = 0 // variável para indexar qual classe de visualizados que o querySelectorAll deve pegar
  let i2 = 0 // variável para indexar qual classe de nãoVisualizados que o querySelectorAll deve pegar
  function visualizados (item1) {
    // pega informações do título do processo
    const info1 = item1.getAttribute('onmouseover')
    const titulo1 = info1.split("'")

    // pega o espaço onde está o número e substitui pelo título
    const processoVisualizado = document.querySelectorAll('.processoVisualizado')[i1]    
    const numProcesso = processoVisualizado.innerHTML
    let complemento = ' (sem especificação)'
    if (titulo1[1] !== '') {
      complemento = ' ' + titulo1[1]
    }
    processoVisualizado.innerHTML += '<br/>' + complemento



    processoVisualizado.parentElement.appendChild(document.createElement('br'))

    let i = document.createElement('a');
    i.setAttribute('href', 'javascript:void(0);');
    i.setAttribute('title', 'Copiar número do processo para a área de transferência');
    i.setAttribute('style', 'color:#0000ff');
    i.textContent = "(copiar núm.)"
    i.setAttribute('onclick', "copyToClipboard(event, '" + numProcesso + "')");
    processoVisualizado.parentElement.appendChild(i)

    i1++
  }

  function naovisualizados (item2) {
    // pega informações do título do processo
    const info2 = item2.getAttribute('onmouseover')
    const titulo2 = info2.split("'")

    // pega o espaço onde está o número e substitui pelo título
    const processoNaoVisualizado = document.querySelectorAll('.processoNaoVisualizado')[i2]    
    const numProcesso = processoNaoVisualizado.innerHTML
    let complemento = ' (sem especificação)'
    if (titulo2[1] !== '') {
      complemento = ' ' + titulo2[1]      
    }
    processoNaoVisualizado.innerHTML += '<br/>' + complemento    

    processoNaoVisualizado.parentElement.appendChild(document.createElement('br'))

    let i = document.createElement('a');
    i.setAttribute('href', 'javascript:void(0);');
    i.setAttribute('title', 'Copiar número do processo para a área de transferência');
    i.setAttribute('style', 'color:#0000ff');
    i.textContent = "(copiar núm.)"
    i.setAttribute('onclick', "copyToClipboard(event, '" + numProcesso + "')");
    processoNaoVisualizado.parentElement.appendChild(i)


    i2++
  }
  processosVisualizados.forEach(visualizados)
  processosNaoVisualizados.forEach(naovisualizados)
}



