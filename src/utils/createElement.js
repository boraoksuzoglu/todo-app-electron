function createElement(element, parent, attributes, text) {
    const el = document.createElement(element)
    for (let att in attributes) {
        el.setAttribute(att, attributes[att])
    }
    
    if (text != undefined) el.innerText = text

    parent.appendChild(el)

    return el
}

export default createElement