/**
 * 动态载入script脚本
 * @param url script地址 string
 */
function loadScript(url) {
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    document.body.appendChild(script)
}

/**
 * 动态载入script （行内方式）
 * @param code string
 */
function loadScriptString(code) {
    var script = document.createElement('script')
    script.type = 'text/javascript'
    try {
        script.appendChild(document.createTextNode(code))
    } catch (ex) {
        script.text = code // IE兼容性处理
    }
    document.body.appendChild(script)
}

/**
 * 动态加载样式
 * @param url
 */
function loadStyles(url) {
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = url
    var head = document.getElementsByTagName('head')[0]
    head.appendChild(link)
}

/**
 * 动态加载样式（行内样式）
 * @param css
 */
function loadStyleString(css) {
    var style = document.createElement('style')
    style.type = 'text/css'
    try {
        style.appendChild(document.createTextNode(css))
    } catch (ex) {
        style.styleSheet.cssText = css
    }
    var head = document.getElementsByTagName('head')[0]
    head.appendChild(style)
}