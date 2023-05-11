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
        returnType: "keix.widget",
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
        name: "get_progress",
        uri: "keix.get_progress",
        code: `
def get_progress(_in, column, **kwargs):
  value = _in[column].iloc[-1]
  return { "value": value, **kwargs }`,
        style: {
            bg: { color: "green", opacity: 500 },
            icon: "segmented-control",
        },
        returnType: "keix.widget",
        arguments: [
            {
                name: "in",
                type: "pandas.dataframe",
                isPort: true,
            },
            {
                name: "column",
                type: "python.string",
                description: "The columns where to pick data from",
                isPort: false,
            },
            {
                name: "max",
                type: "python.float",
                description: "The maximum value.",
                isPort: false,
            },
            {
                name: "min",
                type: "python.float",
                description: "The minimum value.",
                isPort: false,
            },
            {
                name: "title",
                type: "python.string",
                description: "The title to display on the widget.",
                isPort: false,
            },
            {
                name: "icon",
                type: "python.string",
                description: "The icon to display on the widget.",
                isPort: false,
            },
            {
                name: "style",
                type: "python.string",
                description: "The progress bar style to display.",
                options: [
                    "horizontal-progress",
                    "circular-progress",
                    "circular-progress-filled",
                ],
                isPort: false,
            },
        ],
    },
    {
        name: "get_progress_table",
        uri: "keix.get_progress_table",
        code: `
def get_progress_table(_in, column, **kwargs):
  value = _in[column].iloc[-1]
  return { "value": value, **kwargs }`,
        style: {
            bg: { color: "green", opacity: 500 },
            icon: "segmented-control",
        },
        returnType: "keix.widget",
        arguments: [
            {
                name: "in",
                type: "pandas.dataframe",
                isPort: true,
            },
            {
                name: "column",
                type: "python.string",
                description: "The columns where to pick data from",
                isPort: false,
            },
            {
                name: "target_column",
                type: "python.string",
                description: "The columns where to pick target data from",
                isPort: false,
            },
            {
                name: "title",
                type: "python.string",
                description: "The title to display on the widget.",
                isPort: false,
            },
            {
                name: "icon",
                type: "python.string",
                description: "The icon to display on the widget.",
                isPort: false,
            },
            {
                name: "style",
                type: "python.string",
                description: "The progress bar style to display.",
                options: ["horizontal-progress-table"],
                isPort: false,
            },
        ],
    },
];
export default library;
