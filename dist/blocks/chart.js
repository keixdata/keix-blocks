const defaultChartOptions = `
function getOptions(data) {
  return {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      }
    ]
  }
}
`;
const defaultPieChartOptions = `
function getOptions(data) {
  return {
    legend: {
      bottom: 'bottom',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: data.map(d => ({ value: d.data , name: d.index }))
      }
    ]
  }
}
`;
const defaultBarChartOptions = `
function getOptions(data) {
  return {
    xAxis: {
      type: 'category',
      data: data.map(d => d.index),
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: data.map(d => d.data),
        type: 'bar'
      }
    ]
  }
}
`;
const defaultDoughnutChartOptions = `
function getOptions(data) {
  return {
    legend: {
      bottom: 'bottom',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        data: data.map(d => ({ value: d.data , name: d.index }))
      }
    ]
  }
}
`;
const defaultLineChartOptions = `
function getOptions(data) {
  const columns = Object.keys(data[0]);
  const [xColumn, ...yColumns] = columns;
  const xData = data.map(d => d[xColumn]);
  const ySeries = yColumns.map(y => data.map(d => d[y]));
  return {
    xAxis: {
      type: 'category',
      data: xData
    },
    yAxis: {
      type: 'value'
    },
    series: ySeries.map(yData => (
      {
        data: yData,
        type: 'line'
      })
    ),
  }
}
`;
const defaulTimelineChartOptions = `
function getOptions(data) {
  const columns = Object.keys(data[0]);
  const [xColumn, ...yColumns] = columns;
  const xData = data.map(d => new Date(d[xColumn]));
  const ySeries = yColumns.map(y => data.map((d,i) => [xData[i], d[y]]));
  return {
    xAxis: {
      type: 'time',
    },
    yAxis: {
      type: 'value'
    },
    series: ySeries.map(yData => (
      {
        data: yData,
        type: 'line'
      })
    ),
  }
}

`;
export const library = [
    {
        name: "chart",
        style: {
            bg: { color: "green", opacity: 500 },
            icon: "chart",
        },
        uri: "keix.chart",
        noop: true,
        code: "",
        returnType: "keix.chart",
        arguments: [
            {
                name: "in",
                type: "pandas.dataframe",
                isPort: true,
            },
            {
                name: "code",
                type: "keix.echartCode",
                defaultValue: defaultChartOptions,
                isPort: false,
            },
        ],
    },
    {
        name: "pie_chart",
        style: {
            bg: { color: "green", opacity: 500 },
            icon: "pie-chart",
        },
        uri: "keix.pie_chart",
        noop: true,
        code: "",
        returnType: "keix.chart",
        arguments: [
            {
                name: "in",
                type: "pandas.dataframe",
                isPort: true,
            },
            {
                name: "code",
                type: "keix.echartCode",
                defaultValue: defaultPieChartOptions,
                isPort: false,
            },
        ],
    },
    {
        name: "bar_chart",
        style: {
            bg: { color: "green", opacity: 500 },
            icon: "timeline-bar-chart",
        },
        uri: "keix.bar_chart",
        noop: true,
        code: "",
        returnType: "keix.chart",
        arguments: [
            {
                name: "in",
                type: "pandas.dataframe",
                isPort: true,
            },
            {
                name: "code",
                type: "keix.echartCode",
                defaultValue: defaultBarChartOptions,
                isPort: false,
            },
        ],
    },
    {
        name: "doughnut_chart",
        style: {
            bg: { color: "green", opacity: 500 },
            icon: "pie-chart",
        },
        uri: "keix.doughnut",
        noop: true,
        code: "",
        returnType: "keix.chart",
        arguments: [
            {
                name: "in",
                type: "pandas.dataframe",
                isPort: true,
            },
            {
                name: "code",
                type: "keix.echartCode",
                defaultValue: defaultDoughnutChartOptions,
                isPort: false,
            },
        ],
    },
    {
        name: "line_chart",
        style: {
            bg: { color: "green", opacity: 500 },
            icon: "timeline-line-chart",
        },
        uri: "keix.line_chart",
        noop: true,
        code: "",
        returnType: "keix.chart",
        arguments: [
            {
                name: "in",
                type: "pandas.dataframe",
                isPort: true,
            },
            {
                name: "code",
                type: "keix.echartCode",
                defaultValue: defaultLineChartOptions,
                isPort: false,
            },
        ],
    },
    {
        name: "timeline_chart",
        style: {
            bg: { color: "green", opacity: 500 },
            icon: "timeline-line-chart",
        },
        uri: "keix.timeline_chart",
        noop: true,
        code: "",
        returnType: "keix.chart",
        arguments: [
            {
                name: "in",
                type: "pandas.dataframe",
                isPort: true,
            },
            {
                name: "code",
                type: "keix.echartCode",
                defaultValue: defaulTimelineChartOptions,
                isPort: false,
            },
        ],
    },
];
export default library;
