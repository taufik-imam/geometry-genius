function calculateTriangleArea(){
    const baseValue =getInputFiledValue('traingle-base');
    const heightValue = getInputFiledValue('traingle-height');
    const area = 0.5 *baseValue *heightValue;
    setInnerText('triangle-area',area);
    
}
function calculateRectangleArea(){
    const width = getInputFiledValue('rectangle -width');
    const length =getInputFiledValue('rectangle -length');
    const area = width * length;
    setInnerText('rectangle-area',area);
}