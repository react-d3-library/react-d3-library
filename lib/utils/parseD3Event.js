module.exports = event => {
  const reactEvents = {
    '__onmouseover' : 'onMouseOver',
    '__onclick' : 'onClick',
    '__oncontextmenu':'onContextMenu',
    '__ondoubleclick':'onDoubleClick',
    '__ondrag':'onDrag',
    '__ondragend':'onDragEnd',
    '__ondragenter':'onDragEnter',
    '__ondragexit':'onDragExit',
    '__ondragleave':'onDragLeave',
    '__ondragover':'onDragOver',
    '__ondragstart':'onDragStart',
    '__ondrop':'onDrop',
    '__onmousedown':'onMouseDown',
    '__onmouseenter':'onMouseEnter',
    '__onmouseleave':'onMouseLeave',
    '__onmousemove':'onMouseMove',
    '__onmouseout':'onMouseOut',
    '__onmouseover':'onMouseOver',
    '__onmouseup' : 'onMouseUp'
  }

  return event = reactEvents[event];
}
