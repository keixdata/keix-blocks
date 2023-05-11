export const library = [
    {
        name: "get_trend",
        uri: "keix.get_trend",
        code: `
  def get_trend(_in, column, show_trend, show_history, **kwargs):
    series = _in[column]
    value = series.iloc[-1]
    trend_length = min(7, series.size)
    previous_trend_value = series.iloc[-trend_length]
    if show_trend:
      trend = value / previous_trend_value - 1
    else:
      trend = None
    if show_history:
      history = series[-trend_length:].tolist()
    else: 
      history = None
    return { "value": value, "trend": trend, "history": history, **kwargs }`,
        style: {
            bg: { color: "green", opacity: 500 },
            icon: "trending-up",
        },
        returnType: "keix.trend",
        arguments: [
            {
                name: "style",
                type: "python.string",
                description: "The columns where to pick data from",
                options: ["vertical", "horizontal"],
                defaultValue: "vertical",
                isPort: false,
            },
            {
                name: "column",
                type: "python.string",
                description: "The columns where to pick data from",
                isPort: false,
            },
            {
                name: "title",
                type: "python.string",
                description: "If not empty, a title will be displayed",
                isPort: false,
            },
            {
                name: "icon",
                type: "python.string",
                description: "If not empty, an icon will be displayed",
                isPort: false,
            },
            {
                name: "description",
                type: "python.string",
                description: "If not empty, a description will be displayed",
                isPort: false,
            },
            {
                name: "show_trend",
                type: "python.bool",
                isPort: false,
                description: "If enabled, the percentage trend will be displayed",
                defaultValue: false,
            },
            {
                name: "show_history",
                type: "python.bool",
                description: "If enabled, the history chart will be displayed",
                isPort: false,
                defaultValue: false,
            },
            {
                name: "in",
                type: "pandas.dataframe",
                isPort: true,
            },
        ],
    },
    {
        code: ``,
        name: "get_progress",
        uri: "keix.get_progress",
        style: {
            bg: { color: "green", opacity: 500 },
            icon: "segmented-control",
        },
        returnType: "keix.trend",
    },
];
export default library;
