function getElementWidth(content, padding, border) {
    const getContentWidth = Number.parseFloat(content);
    const getPaddingWidth = Number.parseFloat(padding);
    const getBorderWidth = Number.parseFloat(border);
    const totalWidth = getContentWidth + (getPaddingWidth * 2) + (getBorderWidth * 2)
    return totalWidth
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

