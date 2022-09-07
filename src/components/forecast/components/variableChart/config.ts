import { xAxisData2 } from '../../common/config';

const splitLineStyle = {
    show: true,
    lineStyle: {
        color: '#555'
    }
};
const data = [
    [-2.201360778, 0.463540104, -1.206843174],
    [-2.273468536, 0.735614615, -1.43163205],
    [-1.615939308, 0.201604866, -1.5846221],
    [-1.815384568, -0.126435974, -1.560238198],
    [-1.855669099, -0.147574637, -1.320608269],
    [-1.854967636, 0.172275195, -1.423126613],
    [-1.957044807, 0.716313486, -1.444901266],
    [-1.909835258, 0.390095661, -1.436224699],
    [-2.150256489, 0.510660514, 1.426731191],
    [-1.685801902, -0.163367753, -1.354247076],
    [-1.97601681, 0.596244179, -1.413797025],
    [-2.349158069, 1.184267341, -1.188935885],
    [-1.726680896, 0.00509948, -1.433871972],
    [-1.435885262, -0.221374604, -1.406754179],
    [-1.81871403, 0.658584489, -1.673695903],
    [-2.291851121, 1.138885821, -1.415423885],
    [-2.51901422, 1.559534848, -1.282442858],
    [-2.221515969, 1.026684615, -1.465936618],
    [-1.901539269, 0.002773358, -1.472839131],
    [-2.118148571, 0.977027531, -1.448938112],
    [-1.667134844, -0.159014306, -1.725051156],
    [-1.928207337, 0.116282094, -1.400896249],
    [-1.734695634, -0.151907046, -1.593152783],
    [-2.052909152, 0.069478086, -1.410657202]
];
export const option = {
    visualMap: [
        {
            show: false,
            type: 'continuous',
            seriesIndex: 0
        },
        {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0
        },
        {
            show: false,
            type: 'continuous',
            seriesIndex: 2,
            dimension: 0
        }
    ],
    title: [
        {
            left: 'center',
            text: '相关信号1',
            top: -4
        },
        {
            top: '29%',
            left: 'center',
            text: '相关信号2'
        },
        {
            top: '59%',
            left: 'center',
            text: '相关信号3'
        }
    ],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [
        {
            data: xAxisData2
        },
        {
            data: xAxisData2,
            gridIndex: 1
        },
        {
            data: xAxisData2,
            gridIndex: 2
        }
    ],
    yAxis: [
        {
            // min: 0,
            // max: 100
            splitLine: splitLineStyle
        },
        {
            gridIndex: 1,
            splitLine: splitLineStyle
            // min: 0,
            // max: 100
        },
        {
            gridIndex: 2,
            splitLine: splitLineStyle
        }
    ],
    grid: [
        {
            top: 20,
            bottom: '76%',
            show: false
        },
        {
            top: '35%',
            bottom: '47%',
            show: false
        },
        {
            top: '65%',
            bottom: '18%',
            show: false
        }
    ],
    series: [
        {
            type: 'line',
            name: '相关信号1',
            showSymbol: false,
            data: data.map((item) => item[0])
        },
        {
            type: 'line',
            name: '相关信号2',
            showSymbol: false,
            data: data.map((item) => item[1]),
            xAxisIndex: 1,
            yAxisIndex: 1
        },
        {
            type: 'line',
            name: '相关信号3',
            showSymbol: false,
            data: data.map((item) => item[2]),
            xAxisIndex: 2,
            yAxisIndex: 2
        }
    ]
};
