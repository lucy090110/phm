import SimplexNoise from 'simplex-noise';
import 'echarts-gl';
// eslint-disable-next-line no-undef
const noise = new SimplexNoise(Math.random);

function generateData(number: number, number1: number, number2: number) {
    const data = [];
    for (let i = 0; i <= 20; i++) {
        for (let j = 0; j <= 20; j++) {
            for (let k = 0; k <= 20; k++) {
                const value = noise.noise3D(i / 10, j / 10, k / 10);
                valMax = Math.max(valMax, value);
                valMin = Math.min(valMin, value);
                data.push([i, j, k, value * 2 + 4]);
            }
        }
    }
    return data;
}

let valMin = Infinity;
let valMax = -Infinity;
const data = generateData(2, -5, 5);
const option = {
    backgroundColor: 'transparent',
    visualMap: {
        show: false,
        min: 2,
        max: 6,
        inRange: {
            symbolSize: [0.5, 25],
            color: [
                '#313695',
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
            ],
            colorAlpha: [0.2, 1]
        }
    },
    xAxis3D: {
        type: 'value'
    },
    yAxis3D: {
        type: 'value'
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        axisLine: {
            lineStyle: { color: '#fff' }
        },
        axisPointer: {
            lineStyle: { color: '#fff' }
        },
        viewControl: {
            // autoRotate: true
        }
    },
    series: [
        {
            type: 'scatter3D',
            data: data
        }
    ]
};

export const dotsData = { option };
