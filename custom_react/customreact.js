function customRender(element, container) {
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    for (const [key, value] of Object.entries(element.props)) {
        domElement.setAttribute(key, value)
    }
    container.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click here to visit example.com',
}

const mainContainer = document.body.querySelector("#root")

customRender(reactElement, mainContainer)