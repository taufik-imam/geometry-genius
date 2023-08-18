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
function calculateParallelogramArea(){
    const base = getInputFiledValue('parallelogram-base');
    const height = getInputFiledValue('parallelogram-height');
    const area = base * height;
    setInnerText('parallelogram-area',area);

}
function calculateRhombusArea(){
    const d1 = getInputFiledValue('rhombus-d1');
    const d2 = getInputFiledValue('rhombus-d2');
    const area = 0.5*d1*d2;
    setInnerText('rhombus-area',area);
    

}
function calculatePentagonArea(){
    const p = getInputFiledValue('pentagon-p');
    const b = getInputFiledValue('pentagon-b');
    const area = 0.5*p*b;
    setInnerText('pentagon-area',area);

}