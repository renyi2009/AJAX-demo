console.log('我是main.js')

getCSS.onclick = () => { // 用 AJAX 加载 CSS
  // 1。
  // 1. 创建 XMLHttpRequest 对象
  const request = new XMLHttpRequest()
  // 2. 调用对象的 open 方法
  request.open('GET', 'style.css')
  request.onreadystatechange = () => {
    if (request.readyState === 4) { // 下载完
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.append(style)
      } else {
        alert('加载 CSS 失败')
      }
    }

  }
  request.onerror = () => {
    console.log('失败')
  }
  // send 出去
  request.send()
}

getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '2.js')
  request.onload = () => {
    const script = document.createElement('script')
    script.innerHTML = request.response
    document.body.append(script)
  }
  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", '3.html')
  request.onload = () => {
    const div = document.createElement('html')
    div.innerHTML = request.response
    document.body.append(div)
  }
  request.send()
}
getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", "4.xml")
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML
        const text = dom.getElementsByTagName('warning')[0].textContent
        console.log(text.trim())
      }
    }
  }
  request.send()
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", '5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const object = JSON.parse(request.response)
        myName.textContent = object.name
        console.log(object)
      }
    }
  }
  request.send()
}

let n = 1
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", `page${n+1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response)
      array.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = item.id
        xxx.appendChild(li)
      })
      n += 1
    }
  }
  request.send()
}