import { LibraryBlock } from "@keix/workflow-types";

export const library: LibraryBlock[] = [
  {
    name: "load_dump",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "database",
    },
    uri: "keix.load_dump",
    code: 'print("Hello")',
  },
  {
    name: "array",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.array",
    arguments: [
      {
        name: "data",
        type: "any",
        defaultValue: [],
      },
      { name: "dtype", type: "", defaultValue: null }, //VEDERE TYPES
      { name: "copy", type: "bool", defaultValue: true },
    ],
    code: "",
  },
  {
    name: "bdate_range",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.bdate_range",
    arguments: [
      { name: "start", type: "python.string", defaultValue: null },
      { name: "end", type: "python.string", defaultValue: null },
      { name: "periods", type: "python.int", defaultValue: null },
      { name: "freq", type: "python.string", defaultValue: "B" },
      { name: "tz", type: "python.string", defaultValue: null }, //TYPE TIMEZONE
      { name: "normalize", type: "bool", defaultValue: false },
      { name: "name", type: "python.string", defaultValue: null },
      { name: "weekmask", type: "python.string", defaultValue: null },
      { name: "holidays", type: "_empty", defaultValue: null }, /////LIST LIKE TYPE
      { name: "closed", type: "python.string", defaultValue: null },
      { name: "kwargs", type: "_empty", defaultValue: "_empty" },
      {
        name: "inclusive",
        type: ["both", "neither", "left", "right"],
        defaultValue: "both",
      },
    ],
    code: "",
  },
  {
    name: "concat",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.concat",
    arguments: [
      {
        name: "objs",
        type: "pandas.dataframe_array", ///TYPE OF ARRAY OF DATAFRAMES
        defaultValue: "_empty",
      },
      { name: "axis", type: "python.int", defaultValue: 0 },
      { name: "join", type: ["inner", "outer"], defaultValue: "outer" },
      { name: "ignore_index", type: "bool", defaultValue: false },
      { name: "keys", type: "_empty", defaultValue: null }, //TYPE SEQUENCE
      { name: "levels", type: "_empty", defaultValue: null }, // TYPE LIST OF SEQUENCE
      { name: "names", type: "python.string_array", defaultValue: null },
      { name: "verify_integrity", type: "bool", defaultValue: false },
      { name: "sort", type: "bool", defaultValue: false },
      { name: "copy", type: "bool", defaultValue: true },
    ],
    code: "",
  },
  {
    name: "crosstab",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.crosstab",
    arguments: [
      { name: "index", type: "pandas.dataframe_array", defaultValue: null }, //TYPE ARRAY DATAFRAME | COMPATIBLITY OF OTHER TYPE
      {
        name: "columns",
        type: "pandas.dataframe_array", //TYPE ARRAY DATAFRAME | COMPATIBLITY OF OTHER TYPE
        defaultValue: "_empty",
      },
      { name: "values", type: "pandas.dataframe_array", defaultValue: null }, //TYPE ARRAY DATAFRAME | COMPATIBLITY OF OTHER TYPE
      { name: "rownames", type: "_empty", defaultValue: null }, //TYPE SEQUENCE
      { name: "colnames", type: "_empty", defaultValue: null }, //TYPE SEQUENCE
      { name: "aggfunc", type: "_empty", defaultValue: null }, //TYPE FUNCTION
      { name: "margins", type: "bool", defaultValue: false },
      { name: "margins_name", type: "python.string", defaultValue: "All" },
      { name: "dropna", type: "bool", defaultValue: true },
      { name: "normalize", type: "bool", defaultValue: false },
    ],
    code: "",
  },
  {
    name: "cut",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.cut",
    arguments: [
      { name: "x", type: "_empty", defaultValue: "_empty" }, //TYPE ARRAY LIKE
      { name: "bins", type: "python.int", defaultValue: null },
      { name: "right", type: "bool", defaultValue: true },
      { name: "labels", type: ["pandas.array", "bool"], defaultValue: null }, //TYPE ARRAY | FALSE
      { name: "retbins", type: "bool", defaultValue: false },
      { name: "precision", type: "python.int", defaultValue: 3 },
      { name: "include_lowest", type: "bool", defaultValue: false },
      {
        name: "duplicates",
        type: ["default", "raise", "drop"],
        defaultValue: null,
      },
      { name: "ordered", type: "bool", defaultValue: true },
    ],
    code: "",
  },
  {
    name: "date_range",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.date_range",
    arguments: [
      { name: "start", type: "python.string", defaultValue: null },
      { name: "end", type: "python.string", defaultValue: null },
      { name: "periods", type: "python.int", defaultValue: null },
      { name: "freq", type: "python.string", defaultValue: null },
      { name: "tz", type: "python.string", defaultValue: null }, //TYPE TIMEZONE
      { name: "normalize", type: "bool", defaultValue: false },
      { name: "name", type: "python.string", defaultValue: null },
      {
        name: "inclusive",
        type: ["both", "neither", "left", "right"],
        defaultValue: "both",
      },
      { name: "kwargs", type: "_empty", defaultValue: "_empty" }, //TYPE KWARGS
    ],
    code: "",
  },
  {
    name: "eval",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.eval",
    arguments: [
      { name: "expr", type: "python.string", defaultValue: "_empty" },
      { name: "parser", type: ["pandas", "python"], defaultValue: "pandas" },
      { name: "engine", type: ["pandas", "numexpr"], defaultValue: "numexpr" },
      { name: "truediv", type: "bool", defaultValue: null },
      { name: "local_dict", type: "_empty", defaultValue: null }, //TYPE DICT
      { name: "global_dict", type: "_empty", defaultValue: null }, //TYPE DICT
      { name: "resolvers", type: "_empty", defaultValue: [] }, //TYPE LIST OF FUNCTION A list of objects implementing the __getitem__ special method that you can use to inject an additional collection of namespaces to use for variable lookup.
      { name: "level", type: "python.int", defaultValue: null },
      { name: "target", type: "_empty", defaultValue: null }, //TYPE OBJECT
      { name: "inplace", type: "bool", defaultValue: false },
    ],
    code: "",
  },
  {
    name: "factorize",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.factorize",
    arguments: [
      { name: "values", type: "pandas.sequence", defaultValue: null }, //TYPE SEQUENCE
      { name: "sort", type: "bool", defaultValue: false },
      { name: "na_sentinel", type: "python.int", defaultValue: -1 },
      { name: "size_hint", type: "python.int", defaultValue: null },
    ],
    code: "",
  },
  {
    name: "get_dummies",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.get_dummies",
    arguments: [
      {
        name: "data",
        type: ["pandas.dataframe", "pandas.series", "pandas.array"], //TYPE array-like, Series, or DataFrame
        defaultValue: "_empty",
      },
      { name: "prefix", type: "python.string", defaultValue: null },
      { name: "prefix_sep", type: "python.string", defaultValue: "_" },
      { name: "dummy_na", type: "bool", defaultValue: false },
      { name: "columns", type: "_empty", defaultValue: null }, //TYPE LIST LIKE
      { name: "sparse", type: "bool", defaultValue: false },
      { name: "drop_first", type: "bool", defaultValue: false },
      { name: "dtype", type: "_empty", defaultValue: "np.uint8" }, //TYPE DTYPE
    ],
    code: "",
  },
  {
    name: "infer_freq",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.infer_freq",
    arguments: [
      { name: "index", type: "_empty", defaultValue: "_empty" }, //DatetimeIndex or TimedeltaIndex
      { name: "warn", type: "bool", defaultValue: true },
    ],
    code: "",
  },
  {
    name: "interval_range",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.interval_range",
    arguments: [
      { name: "start", type: "python.string", defaultValue: null }, //TYPE DATETIME
      { name: "end", type: "python.string", defaultValue: null },
      { name: "periods", type: "python.string", defaultValue: null },
      {
        name: "freq",
        type: ["python.string", "python.int"],
        defaultValue: null,
      },
      { name: "name", type: "python.string", defaultValue: null },
      {
        name: "closed",
        type: ["left", "right", "both", "neither"],
        defaultValue: "right",
      },
    ],
    code: "",
  },
  {
    name: "isna",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.isna",
    arguments: [{ name: "obj", type: "_empty", defaultValue: "_empty" }], //TYPE OBJ
    code: "",
  },
  {
    name: "isnull",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.isnull",
    arguments: [{ name: "obj", type: "_empty", defaultValue: "_empty" }], //TYPE OBJ
    code: "",
  },
  {
    name: "json_normalize",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.json_normalize",
    arguments: [
      {
        name: "data",
        type: ["pandas.dict", "pandas.dict_array"], //TYPE dict array-dict
        defaultValue: "_empty",
      },
      {
        name: "record_path",
        type: ["python.string", "python.string_list"], //TYPE string or list of strings
        defaultValue: null,
      },
      {
        name: "meta",
        type: ["python.string", "python.string_list"], //TYPE string or list of strings
        defaultValue: null,
      },
      { name: "meta_prefix", type: "python.string", defaultValue: null },
      {
        name: "record_prefix",
        type: "python.string",
        defaultValue: null,
      },
      { name: "errors", type: ["raise", "ignore"], defaultValue: "raise" },
      { name: "sep", type: "python.string", defaultValue: "." },
      { name: "max_level", type: "python.int", defaultValue: null },
    ],
    code: "",
  },
  {
    name: "lreshape",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.lreshape",
    arguments: [
      { name: "data", type: "pandas.dataframe", defaultValue: null }, //TYPE DataFrame
      { name: "groups", type: "pandas.dict", defaultValue: null }, //TYPE dict
      { name: "dropna", type: "bool", defaultValue: true },
    ],
    code: "",
  },
  {
    name: "melt",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.melt",
    arguments: [
      { name: "frame", type: "pandas.dataframe", defaultValue: null }, //TYPE DataFrame
      {
        name: "id_vars",
        type: ["python.string", "python.string_tuple", "python.string_list"], //TYPE tuple of strings or list of strings
        defaultValue: null,
      },
      {
        name: "value_vars",
        type: ["python.string", "python.string_tuple", "python.string_list"], //TYPE tuple of strings or list of strings
        defaultValue: null,
      },
      { name: "var_name", type: "python.string", defaultValue: null },
      { name: "value_name", type: "python.string", defaultValue: "value" },
      {
        name: "col_level",
        type: ["python.int", "python.string"],
        defaultValue: null,
      },
      { name: "ignore_index", type: "bool", defaultValue: true },
    ],
    code: "",
  },
  {
    name: "merge",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.merge",
    arguments: [
      { name: "left", type: "pandas.dataframe", defaultValue: null }, //TYPE DataFrame
      { name: "right", type: "pandas.dataframe", defaultValue: null }, //TYPE DataFrame
      {
        name: "how",
        type: ["left", "right", "outer", "inner", "cross"],
        defaultValue: "inner",
      },
      {
        name: "on",
        type: ["python.string", "pandas.string_list"], //TYPE  list of strings
        defaultValue: null,
      },
      {
        name: "left_on",
        type: ["python.string", "pandas.string_list"], //TYPE  list of strings | array-like
        defaultValue: null,
      },
      {
        name: "right_on",
        type: ["python.string", "pandas.string_list"], //TYPE  list of strings | array-like
        defaultValue: null,
      },
      { name: "left_index", type: "bool", defaultValue: false },
      { name: "right_index", type: "bool", defaultValue: false },
      { name: "sort", type: "bool", defaultValue: false },
      { name: "suffixes", type: "_empty", defaultValue: ["_x", "_y"] }, //TYPE list-like
      { name: "copy", type: "bool", defaultValue: true },
      {
        name: "indicator",
        type: ["bool", "python.string"],
        defaultValue: false,
      },
      { name: "validate", type: "python.string", defaultValue: null },
    ],
    code: "",
  },
  {
    name: "merge_asof",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.merge_asof",
    arguments: [
      { name: "left", type: "pandas.dataframe", defaultValue: null }, //TYPE DataFrame
      { name: "right", type: "pandas.dataframe", defaultValue: null }, //TYPE DataFrame
      { name: "on", type: "python.string", defaultValue: null },
      { name: "left_on", type: "python.string", defaultValue: null },
      { name: "right_on", type: "python.string", defaultValue: null },
      { name: "left_index", type: "bool", defaultValue: false },
      { name: "right_index", type: "bool", defaultValue: false },
      {
        name: "by",
        type: ["python.string", "python.string_array"],
        defaultValue: null,
      },
      { name: "left_by", type: "python.string", defaultValue: null },
      { name: "right_by", type: "python.string", defaultValue: null },
      { name: "suffixes", type: "_empty", defaultValue: ["_x", "_y"] }, //TYPE 2-length sequence (tuple, list, …)
      {
        name: "tolerance",
        type: ["python.int"], //TYPE Timedelta
        defaultValue: null,
      },
      { name: "allow_exact_matches", type: "bool", defaultValue: true },
      {
        name: "direction",
        type: ["backward", "forward", "nearest"],
        defaultValue: "backward",
      },
    ],
    code: "",
  },
  {
    name: "merge_ordered",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.merge_ordered",
    arguments: [
      { name: "left", type: "pandas.dataframe", defaultValue: "_empty" }, //TYPE DataFrame
      { name: "right", type: "pandas.dataframe", defaultValue: "_empty" }, //TYPE DataFrame
      {
        name: "on",
        type: ["python.string", "python.string_array"],
        defaultValue: null,
      },
      {
        name: "left_on",
        type: ["python.string", "python.string_array"], //Type array-like
        defaultValue: null,
      },
      {
        name: "right_on",
        type: ["python.string", "python.string_array"], //Type array-like
        defaultValue: null,
      },
      {
        name: "left_by",
        type: ["python.string", "python.string_array"],
        defaultValue: null,
      },
      {
        name: "right_by",
        type: ["python.string", "python.string_array"],
        defaultValue: null,
      },
      { name: "fill_method", type: "python.string", defaultValue: null },
      { name: "suffixes", type: "_empty", defaultValue: ["_x", "_y"] }, //type list-like
      {
        name: "how",
        type: ["left", "right", "outer", "inner"],
        defaultValue: "outer",
      },
    ],
    code: "",
  },
  {
    name: "notna",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.notna",
    arguments: [{ name: "obj", type: "any", defaultValue: null }],
    code: "",
  },
  {
    name: "notnull",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.notnull",
    arguments: [{ name: "obj", type: "any", defaultValue: null }],
    code: "",
  },
  {
    name: "period_range",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.period_range",
    arguments: [
      { name: "start", type: "python.string", defaultValue: null },
      { name: "end", type: "python.string", defaultValue: null },
      { name: "periods", type: "python.int", defaultValue: null },
      { name: "freq", type: ["python.string"], defaultValue: null }, //TYPE DATE OFFSET
      { name: "name", type: "python.", defaultValue: null },
    ],
    code: "",
  },
  {
    name: "pivot",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.pivot",
    arguments: [
      { name: "data", type: "pandas.dataframe", defaultValue: null }, //TYPE DataFrame
      {
        name: "index",
        type: ["python.string", "python.string_array", "obj"], //TYPE OBJ
        defaultValue: null,
      },
      {
        name: "columns",
        type: ["python.string", "python.string_array", "obj"], //TYPE OBJ
        defaultValue: null,
      },
      {
        name: "values",
        type: ["python.string", "python.string_array", "obj"], //TYPE OBJ
        defaultValue: null,
      },
    ],
    code: "",
  },
  {
    name: "pivot_table",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.pivot_table",
    arguments: [
      { name: "data", type: "pandas.dataframe", defaultValue: null },
      { name: "values", type: "python.string", defaultValue: null },
      {
        name: "index",
        type: ["python.string", "python.string_array", "pandas.list"], //TYPE LIST, GROUPER
        defaultValue: null,
      },
      {
        name: "columns",
        type: ["python.string", "python.string_array", "pandas.list"], //TYPE LIST, GROUPER
        defaultValue: null,
      },
      { name: "aggfunc", type: "_empty", defaultValue: "mean" }, //TYPE FUNCTION
      { name: "fill_value", type: "_empty", defaultValue: null }, //Type SCALAR
      { name: "margins", type: "bool", defaultValue: false },
      { name: "dropna", type: "bool", defaultValue: true },
      { name: "margins_name", type: "python.string", defaultValue: "All" },
      { name: "observed", type: "bool", defaultValue: false },
    ],
    code: "",
  },
  {
    name: "qcut",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.qcut",
    arguments: [
      { name: "x", type: ["pandas.series"], defaultValue: null }, //TYPE Series, 1nd array
      {
        name: "q",
        type: [
          "python.int",
          "python.int_array",
          "python.float",
          "python.float_array", //TYPE FLOAT, FLOAT ARRAY, INT ARRAY
        ],
        defaultValue: null,
      },
      { name: "labels", type: "python.string_array", defaultValue: null },
      { name: "retbins", type: "bool", defaultValue: false },
      { name: "precision", type: "python.int", defaultValue: 3 },
      { name: "duplicates", type: ["raise", "drop"], defaultValue: "raise" },
    ],
    code: "",
  },
  {
    name: "read_clipboard",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_clipboard",
    arguments: [
      { name: "sep", type: "python.string", defaultValue: "\\s+" },
      { name: "kwargs", type: "_empty", defaultValue: "_empty" }, //TYPE KWARGS
    ],
    code: "",
  },
  {
    name: "read_csv",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_csv",
    arguments: [
      {
        name: "filepath_or_buffer",
        type: ["python.string"], //TYPE PATH
        defaultValue: "_empty",
      },
      { name: "sep", type: "python.string", defaultValue: null },
      { name: "delimiter", type: "python.string", defaultValue: null },
      {
        name: "header",
        type: ["python.int", "python.int_array"],
        defaultValue: null,
      },
      { name: "names", type: "_empty", defaultValue: null }, //TYPE ARRAY-LIKE
      {
        name: "index_col",
        type: [
          "python.string",
          "python.string_array", //TYPE STRING ARRAY
          "python.int",
          "python.int_array", //TYPE INT ARRAY
        ],
        defaultValue: null,
      },
      { name: "usecols", type: "_empty", defaultValue: null }, //TYPE ARRAY-LIKE
      { name: "squeeze", type: "bool", defaultValue: false },
      { name: "prefix", type: "python.string", defaultValue: null },
      { name: "mangle_dupe_cols", type: "bool", defaultValue: true },
      { name: "dtype", type: "_empty", defaultValue: null }, //TYPE DTYPE
      { name: "engine", type: ["c", "python", "pyarrow"], defaultValue: null },
      { name: "converters", type: "_empty", defaultValue: null }, //TYPE DICT
      { name: "true_values", type: "_empty", defaultValue: null }, //TYPE LIST
      { name: "false_values", type: "_empty", defaultValue: null }, //TYPE LIST
      { name: "skipinitialspace", type: "bool", defaultValue: false },
      { name: "skiprows", type: ["python.int"], defaultValue: null },
      { name: "skipfooter", type: "python.int", defaultValue: 0 },
      { name: "nrows", type: "python.int", defaultValue: null },
      { name: "na_values", type: ["python.string"], defaultValue: null }, //TYPE SCALAR, LIST-LIKE, DICT
      { name: "keep_defaultValue_na", type: "bool", defaultValue: true },
      { name: "na_filter", type: "bool", defaultValue: true },
      { name: "verbose", type: "bool", defaultValue: false },
      { name: "skip_blank_lines", type: "bool", defaultValue: true },
      {
        name: "parse_dates",
        type: ["bool", "python.int_array", "python.string_array"], //TYPE LIST OF DICT
        defaultValue: false,
      },
      { name: "infer_datetime_format", type: "bool", defaultValue: false },
      { name: "keep_date_col", type: "bool", defaultValue: false },
      { name: "date_parser", type: "_empty", defaultValue: null }, //TYPE FUNCTION
      { name: "dayfirst", type: "bool", defaultValue: false },
      { name: "cache_dates", type: "bool", defaultValue: true },
      { name: "iterator", type: "bool", defaultValue: false },
      { name: "chunksize", type: "python.int", defaultValue: null },
      { name: "compression", type: ["python.string"], defaultValue: "infer" }, //TYPE DICT
      { name: "thousands", type: "python.string", defaultValue: null },
      { name: "decimal", type: "python.string", defaultValue: "." },
      { name: "lineterminator", type: "python.string", defaultValue: null },
      { name: "quotechar", type: "python.string", defaultValue: '"' },
      { name: "quoting", type: "python.int", defaultValue: 0 },
      { name: "doublequote", type: "bool", defaultValue: true },
      { name: "escapechar", type: "python.string", defaultValue: null },
      { name: "comment", type: "python.string", defaultValue: null },
      { name: "encoding", type: "python.string", defaultValue: null },
      { name: "encoding_errors", type: "python.string", defaultValue: null },
      { name: "dialect", type: "python.string", defaultValue: null },
      { name: "error_bad_lines", type: "bool", defaultValue: null },
      { name: "warn_bad_lines", type: "bool", defaultValue: null },
      {
        name: "on_bad_lines",
        type: ["error", "warn", "skip"],
        defaultValue: "error",
      },
      {
        name: "delim_whitespace",
        type: "bool",
        defaultValue: false,
      },
      { name: "low_memory", type: "bool", defaultValue: true },
      { name: "memory_map", type: "bool", defaultValue: false },
      { name: "float_precision", type: "python.string", defaultValue: null },
      {
        name: "storage_options",
        type: "typing.Optional[typing.Dict[str, typing.Any]]", //TYPE DICT
        defaultValue: null,
      },
    ],
    code: "",
  },
  {
    name: "read_excel",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_excel",
    arguments: [
      { name: "io", type: "_empty", defaultValue: "_empty" },
      { name: "sheet_name", type: "_empty", defaultValue: 0 },
      { name: "header", type: "_empty", defaultValue: 0 },
      { name: "names", type: "_empty", defaultValue: null },
      { name: "index_col", type: "_empty", defaultValue: null },
      { name: "usecols", type: "_empty", defaultValue: null },
      { name: "squeeze", type: "_empty", defaultValue: false },
      { name: "dtype", type: "_empty", defaultValue: null },
      { name: "engine", type: "_empty", defaultValue: null },
      { name: "converters", type: "_empty", defaultValue: null },
      { name: "true_values", type: "_empty", defaultValue: null },
      { name: "false_values", type: "_empty", defaultValue: null },
      { name: "skiprows", type: "_empty", defaultValue: null },
      { name: "nrows", type: "_empty", defaultValue: null },
      { name: "na_values", type: "_empty", defaultValue: null },
      { name: "keep_default_na", type: "_empty", defaultValue: true },
      { name: "na_filter", type: "_empty", defaultValue: true },
      { name: "verbose", type: "_empty", defaultValue: false },
      { name: "parse_dates", type: "_empty", defaultValue: false },
      { name: "date_parser", type: "_empty", defaultValue: null },
      { name: "thousands", type: "_empty", defaultValue: null },
      { name: "comment", type: "_empty", defaultValue: null },
      { name: "skipfooter", type: "_empty", defaultValue: 0 },
      { name: "convert_float", type: "_empty", defaultValue: true },
      { name: "mangle_dupe_cols", type: "_empty", defaultValue: true },
      {
        name: "storage_options",
        type: "typing.Optional[typing.Dict[str, typing.Any]]",
        defaultValue: null,
      },
    ],
    code: "",
  },
  {
    name: "read_feather",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_feather",
    arguments: [
      { name: "path", type: "_empty", defaultValue: "_empty" },
      { name: "columns", type: "_empty", defaultValue: null },
      { name: "use_threads", type: "bool", defaultValue: true },
      {
        name: "storage_options",
        type: "typing.Optional[typing.Dict[str, typing.Any]]",
        defaultValue: null,
      },
    ],
    code: "",
  },
  {
    name: "read_fwf",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_fwf",
    arguments: [
      {
        name: "filepath_or_buffer",
        type: "typing.Union[ForwardRef('PathLike[str]'), str, typing.IO[~T], io.RawIOBase, io.BufferedIOBase, io.TextIOBase, _io.TextIOWrapper, mmap.mmap]",
        defaultValue: "_empty",
      },
      { name: "colspecs", type: "_empty", defaultValue: "infer" },
      { name: "widths", type: "_empty", defaultValue: null },
      { name: "infer_nrows", type: "_empty", defaultValue: 100 },
      { name: "kwds", type: "_empty", defaultValue: "_empty" },
    ],
    code: "",
  },
  {
    name: "read_gbq",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_gbq",
    arguments: [
      { name: "query", type: "str", defaultValue: "_empty" },
      { name: "project_id", type: "typing.Optional[str]", defaultValue: null },
      { name: "index_col", type: "typing.Optional[str]", defaultValue: null },
      {
        name: "col_order",
        type: "typing.Optional[typing.List[str]]",
        defaultValue: null,
      },
      { name: "reauth", type: "bool", defaultValue: false },
      { name: "auth_local_webserver", type: "bool", defaultValue: false },
      { name: "dialect", type: "typing.Optional[str]", defaultValue: null },
      { name: "location", type: "typing.Optional[str]", defaultValue: null },
      {
        name: "configuration",
        type: "typing.Optional[typing.Dict[str, typing.Any]]",
        defaultValue: null,
      },
      { name: "credentials", type: "_empty", defaultValue: null },
      {
        name: "use_bqstorage_api",
        type: "typing.Optional[bool]",
        defaultValue: null,
      },
      { name: "max_results", type: "typing.Optional[int]", defaultValue: null },
      {
        name: "progress_bar_type",
        type: "typing.Optional[str]",
        defaultValue: null,
      },
    ],
    code: "",
  },
  {
    name: "read_hdf",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_hdf",
    arguments: [
      { name: "path_or_buf", type: "_empty", defaultValue: "_empty" },
      { name: "key", type: "_empty", defaultValue: null },
      { name: "mode", type: "str", defaultValue: "r" },
      { name: "errors", type: "str", defaultValue: "strict" },
      { name: "where", type: "_empty", defaultValue: null },
      { name: "start", type: "typing.Optional[int]", defaultValue: null },
      { name: "stop", type: "typing.Optional[int]", defaultValue: null },
      { name: "columns", type: "_empty", defaultValue: null },
      { name: "iterator", type: "_empty", defaultValue: false },
      { name: "chunksize", type: "typing.Optional[int]", defaultValue: null },
      { name: "kwargs", type: "_empty", defaultValue: "_empty" },
    ],
    code: "",
  },
  {
    name: "read_html",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_html",
    arguments: [
      {
        name: "io",
        type: "typing.Union[ForwardRef('PathLike[str]'), str, typing.IO[~T], io.RawIOBase, io.BufferedIOBase, io.TextIOBase, _io.TextIOWrapper, mmap.mmap]",
        defaultValue: "_empty",
      },
      {
        name: "match",
        type: "typing.Union[str, typing.Pattern]",
        defaultValue: ".+",
      },
      { name: "flavor", type: "typing.Optional[str]", defaultValue: null },
      {
        name: "header",
        type: "typing.Union[int, typing.Sequence[int], NoneType]",
        defaultValue: null,
      },
      {
        name: "index_col",
        type: "typing.Union[int, typing.Sequence[int], NoneType]",
        defaultValue: null,
      },
      {
        name: "skiprows",
        type: "typing.Union[int, typing.Sequence[int], slice, NoneType]",
        defaultValue: null,
      },
      {
        name: "attrs",
        type: "typing.Optional[typing.Dict[str, str]]",
        defaultValue: null,
      },
      { name: "parse_dates", type: "bool", defaultValue: false },
      { name: "thousands", type: "typing.Optional[str]", defaultValue: "," },
      { name: "encoding", type: "typing.Optional[str]", defaultValue: null },
      { name: "decimal", type: "str", defaultValue: "." },
      {
        name: "converters",
        type: "typing.Optional[typing.Dict]",
        defaultValue: null,
      },
      { name: "na_values", type: "_empty", defaultValue: null },
      { name: "keep_default_na", type: "bool", defaultValue: true },
      { name: "displayed_only", type: "bool", defaultValue: true },
    ],
    code: "",
  },
  {
    name: "read_json",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_json",
    arguments: [
      { name: "path_or_buf", type: "_empty", defaultValue: null },
      { name: "orient", type: "_empty", defaultValue: null },
      { name: "typ", type: "_empty", defaultValue: "frame" },
      { name: "dtype", type: "_empty", defaultValue: null },
      { name: "convert_axes", type: "_empty", defaultValue: null },
      { name: "convert_dates", type: "_empty", defaultValue: true },
      { name: "keep_default_dates", type: "bool", defaultValue: true },
      { name: "numpy", type: "bool", defaultValue: false },
      { name: "precise_float", type: "bool", defaultValue: false },
      { name: "date_unit", type: "_empty", defaultValue: null },
      { name: "encoding", type: "_empty", defaultValue: null },
      { name: "lines", type: "bool", defaultValue: false },
      { name: "chunksize", type: "typing.Optional[int]", defaultValue: null },
      {
        name: "compression",
        type: "typing.Union[str, typing.Dict[str, typing.Any], NoneType]",
        defaultValue: "infer",
      },
      { name: "nrows", type: "typing.Optional[int]", defaultValue: null },
      {
        name: "storage_options",
        type: "typing.Optional[typing.Dict[str, typing.Any]]",
        defaultValue: null,
      },
    ],
    code: "",
  },
  {
    name: "read_orc",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_orc",
    arguments: [
      {
        name: "path",
        type: "typing.Union[ForwardRef('PathLike[str]'), str, typing.IO[~T], io.RawIOBase, io.BufferedIOBase, io.TextIOBase, _io.TextIOWrapper, mmap.mmap]",
        defaultValue: "_empty",
      },
      {
        name: "columns",
        type: "typing.Optional[typing.List[str]]",
        defaultValue: null,
      },
      { name: "kwargs", type: "_empty", defaultValue: "_empty" },
    ],
    code: "",
  },
  {
    name: "read_parquet",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_parquet",
    arguments: [
      { name: "path", type: "_empty", defaultValue: "_empty" },
      { name: "engine", type: "str", defaultValue: "auto" },
      { name: "columns", type: "_empty", defaultValue: null },
      { name: "use_nullable_dtypes", type: "bool", defaultValue: false },
      { name: "kwargs", type: "_empty", defaultValue: "_empty" },
    ],
    code: "",
  },
  {
    name: "read_pickle",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_pickle",
    arguments: [
      {
        name: "filepath_or_buffer",
        type: "str, path object, file-like object",
        defaultValue: "_empty",
      },
      {
        name: "compression",
        type: "typing.Union[str, typing.Dict[str, typing.Any], NoneType]",
        defaultValue: "infer",
      },
      {
        name: "storage_options",
        type: "typing.Optional[typing.Dict[str, typing.Any]]",
        defaultValue: null,
      },
    ],
    code: "",
  },
  {
    name: "read_sas",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_sas",
    arguments: [
      {
        name: "filepath_or_buffer",
        type: "typing.Union[ForwardRef('PathLike[str]'), str, typing.IO[~T], io.RawIOBase, io.BufferedIOBase, io.TextIOBase, _io.TextIOWrapper, mmap.mmap]",
        defaultValue: "_empty",
      },
      { name: "format", type: "typing.Optional[str]", defaultValue: null },
      {
        name: "index",
        type: "typing.Optional[typing.Hashable]",
        defaultValue: null,
      },
      { name: "encoding", type: "typing.Optional[str]", defaultValue: null },
      { name: "chunksize", type: "typing.Optional[int]", defaultValue: null },
      { name: "iterator", type: "bool", defaultValue: false },
    ],
    code: "",
  },
  {
    name: "read_spss",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_spss",
    arguments: [
      {
        name: "path",
        type: "typing.Union[str, pathlib.Path]",
        defaultValue: "_empty",
      },
      {
        name: "usecols",
        type: "typing.Optional[typing.Sequence[str]]",
        defaultValue: null,
      },
      { name: "convert_categoricals", type: "bool", defaultValue: true },
    ],
    code: "",
  },
  {
    name: "read_sql",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_sql",
    arguments: [
      { name: "sql", type: "_empty", defaultValue: "_empty" },
      { name: "con", type: "_empty", defaultValue: "_empty" },
      { name: "index_col", type: "_empty", defaultValue: null },
      { name: "coerce_float", type: "_empty", defaultValue: true },
      { name: "params", type: "_empty", defaultValue: null },
      { name: "parse_dates", type: "_empty", defaultValue: null },
      { name: "columns", type: "_empty", defaultValue: null },
      { name: "chunksize", type: "typing.Optional[int]", defaultValue: null },
    ],
    code: "",
  },
  {
    name: "read_sql_query",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_sql_query",
    arguments: [
      { name: "sql", type: "_empty", defaultValue: "_empty" },
      { name: "con", type: "_empty", defaultValue: "_empty" },
      { name: "index_col", type: "_empty", defaultValue: null },
      { name: "coerce_float", type: "_empty", defaultValue: true },
      { name: "params", type: "_empty", defaultValue: null },
      { name: "parse_dates", type: "_empty", defaultValue: null },
      { name: "chunksize", type: "typing.Optional[int]", defaultValue: null },
    ],
    code: "",
  },
  {
    name: "read_sql_table",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_sql_table",
    arguments: [
      { name: "table_name", type: "_empty", defaultValue: "_empty" },
      { name: "con", type: "_empty", defaultValue: "_empty" },
      { name: "schema", type: "_empty", defaultValue: null },
      { name: "index_col", type: "_empty", defaultValue: null },
      { name: "coerce_float", type: "_empty", defaultValue: true },
      { name: "parse_dates", type: "_empty", defaultValue: null },
      { name: "columns", type: "_empty", defaultValue: null },
      { name: "chunksize", type: "typing.Optional[int]", defaultValue: null },
    ],
    code: "",
  },
  {
    name: "read_stata",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_stata",
    arguments: [
      {
        name: "filepath_or_buffer",
        type: "typing.Union[ForwardRef('PathLike[str]'), str, typing.IO[~T], io.RawIOBase, io.BufferedIOBase, io.TextIOBase, _io.TextIOWrapper, mmap.mmap]",
        defaultValue: "_empty",
      },
      { name: "convert_dates", type: "bool", defaultValue: true },
      { name: "convert_categoricals", type: "bool", defaultValue: true },
      { name: "index_col", type: "typing.Optional[str]", defaultValue: null },
      { name: "convert_missing", type: "bool", defaultValue: false },
      { name: "preserve_dtypes", type: "bool", defaultValue: true },
      {
        name: "columns",
        type: "typing.Optional[typing.Sequence[str]]",
        defaultValue: null,
      },
      { name: "order_categoricals", type: "bool", defaultValue: true },
      { name: "chunksize", type: "typing.Optional[int]", defaultValue: null },
      { name: "iterator", type: "bool", defaultValue: false },
      {
        name: "storage_options",
        type: "typing.Optional[typing.Dict[str, typing.Any]]",
        defaultValue: null,
      },
    ],
    code: "",
  },
  {
    name: "read_table",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_table",
    arguments: [
      {
        name: "filepath_or_buffer",
        type: "typing.Union[ForwardRef('PathLike[str]'), str, typing.IO[~T], io.RawIOBase, io.BufferedIOBase, io.TextIOBase, _io.TextIOWrapper, mmap.mmap]",
        defaultValue: "_empty",
      },
      { name: "sep", type: "_empty", defaultValue: null },
      { name: "delimiter", type: "_empty", defaultValue: null },
      { name: "header", type: "_empty", defaultValue: "infer" },
      { name: "names", type: "_empty", defaultValue: null },
      { name: "index_col", type: "_empty", defaultValue: null },
      { name: "usecols", type: "_empty", defaultValue: null },
      { name: "squeeze", type: "_empty", defaultValue: false },
      { name: "prefix", type: "_empty", defaultValue: null },
      { name: "mangle_dupe_cols", type: "_empty", defaultValue: true },
      { name: "dtype", type: "_empty", defaultValue: null },
      { name: "engine", type: "_empty", defaultValue: null },
      { name: "converters", type: "_empty", defaultValue: null },
      { name: "true_values", type: "_empty", defaultValue: null },
      { name: "false_values", type: "_empty", defaultValue: null },
      { name: "skipinitialspace", type: "_empty", defaultValue: false },
      { name: "skiprows", type: "_empty", defaultValue: null },
      { name: "skipfooter", type: "_empty", defaultValue: 0 },
      { name: "nrows", type: "_empty", defaultValue: null },
      { name: "na_values", type: "_empty", defaultValue: null },
      { name: "keep_default_na", type: "_empty", defaultValue: true },
      { name: "na_filter", type: "_empty", defaultValue: true },
      { name: "verbose", type: "_empty", defaultValue: false },
      { name: "skip_blank_lines", type: "_empty", defaultValue: true },
      { name: "parse_dates", type: "_empty", defaultValue: false },
      { name: "infer_datetime_format", type: "_empty", defaultValue: false },
      { name: "keep_date_col", type: "_empty", defaultValue: false },
      { name: "date_parser", type: "_empty", defaultValue: null },
      { name: "dayfirst", type: "_empty", defaultValue: false },
      { name: "cache_dates", type: "_empty", defaultValue: true },
      { name: "iterator", type: "_empty", defaultValue: false },
      { name: "chunksize", type: "_empty", defaultValue: null },
      { name: "compression", type: "_empty", defaultValue: "infer" },
      { name: "thousands", type: "_empty", defaultValue: null },
      { name: "decimal", type: "str", defaultValue: "." },
      { name: "lineterminator", type: "_empty", defaultValue: null },
      { name: "quotechar", type: "_empty", defaultValue: '"' },
      { name: "quoting", type: "_empty", defaultValue: 0 },
      { name: "doublequote", type: "_empty", defaultValue: true },
      { name: "escapechar", type: "_empty", defaultValue: null },
      { name: "comment", type: "_empty", defaultValue: null },
      { name: "encoding", type: "_empty", defaultValue: null },
      { name: "dialect", type: "_empty", defaultValue: null },
      { name: "error_bad_lines", type: "_empty", defaultValue: true },
      { name: "warn_bad_lines", type: "_empty", defaultValue: true },
      { name: "delim_whitespace", type: "_empty", defaultValue: false },
      { name: "low_memory", type: "_empty", defaultValue: true },
      { name: "memory_map", type: "_empty", defaultValue: false },
      { name: "float_precision", type: "_empty", defaultValue: null },
    ],
    code: "",
  },
  {
    name: "set_eng_float_format",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.set_eng_float_format",
    arguments: [
      { name: "accuracy", type: "python.int", defaultValue: 3 },
      { name: "use_eng_prefix", type: "bool", defaultValue: false },
    ],
    code: "",
  },
  {
    name: "show_versions",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.show_versions",
    arguments: [
      { name: "as_json", type: "typing.Union[str, bool]", defaultValue: false },
    ],
    code: "",
  },
  {
    name: "test",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.test",
    arguments: [{ name: "extra_args", type: "_empty", defaultValue: null }],
    code: "",
  },
  {
    name: "timedelta_range",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.timedelta_range",
    arguments: [
      { name: "start", type: "_empty", defaultValue: null },
      { name: "end", type: "_empty", defaultValue: null },
      { name: "periods", type: "_empty", defaultValue: null },
      { name: "freq", type: "_empty", defaultValue: null },
      { name: "name", type: "_empty", defaultValue: null },
      { name: "closed", type: "_empty", defaultValue: null },
    ],
    code: "",
  },
  {
    name: "to_datetime",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.to_datetime",
    arguments: [
      {
        name: "arg",
        type: "typing.Union[~DatetimeScalar, typing.List, typing.Tuple, ~ArrayLike, ForwardRef('Series')]",
        defaultValue: "_empty",
      },
      { name: "errors", type: "str", defaultValue: "raise" },
      { name: "dayfirst", type: "bool", defaultValue: false },
      { name: "yearfirst", type: "bool", defaultValue: false },
      { name: "utc", type: "typing.Optional[bool]", defaultValue: null },
      { name: "format", type: "typing.Optional[str]", defaultValue: null },
      { name: "exact", type: "bool", defaultValue: true },
      { name: "unit", type: "typing.Optional[str]", defaultValue: null },
      { name: "infer_datetime_format", type: "bool", defaultValue: false },
      { name: "origin", type: "_empty", defaultValue: "unix" },
      { name: "cache", type: "bool", defaultValue: true },
    ],
    code: "",
  },
  {
    name: "to_numeric",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.to_numeric",
    arguments: [
      { name: "arg", type: "_empty", defaultValue: "_empty" },
      { name: "errors", type: "_empty", defaultValue: "raise" },
      { name: "downcast", type: "_empty", defaultValue: null },
    ],
    code: "",
  },
  {
    name: "to_pickle",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.to_pickle",
    arguments: [
      { name: "obj", type: "typing.Any", defaultValue: "_empty" },
      {
        name: "filepath_or_buffer",
        type: "typing.Union[ForwardRef('PathLike[str]'), str, typing.IO[~T], io.RawIOBase, io.BufferedIOBase, io.TextIOBase, _io.TextIOWrapper, mmap.mmap]",
        defaultValue: "_empty",
      },
      {
        name: "compression",
        type: "typing.Union[str, typing.Dict[str, typing.Any], NoneType]",
        defaultValue: "infer",
      },
      { name: "protocol", type: "python.int", defaultValue: 5 },
      {
        name: "storage_options",
        type: "typing.Optional[typing.Dict[str, typing.Any]]",
        defaultValue: null,
      },
    ],
    code: "",
  },
  {
    name: "to_timedelta",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.to_timedelta",
    arguments: [
      { name: "arg", type: "_empty", defaultValue: "_empty" },
      { name: "unit", type: "_empty", defaultValue: null },
      { name: "errors", type: "_empty", defaultValue: "raise" },
    ],
    code: "",
  },
  {
    name: "unique",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.unique",
    arguments: [{ name: "values", type: "_empty", defaultValue: "_empty" }],
    code: "",
  },
  {
    name: "value_counts",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.value_counts",
    arguments: [
      { name: "values", type: "_empty", defaultValue: "_empty" },
      { name: "sort", type: "bool", defaultValue: true },
      { name: "ascending", type: "bool", defaultValue: false },
      { name: "normalize", type: "bool", defaultValue: false },
      { name: "bins", type: "_empty", defaultValue: null },
      { name: "dropna", type: "bool", defaultValue: true },
    ],
    code: "",
  },
  {
    name: "wide_to_long",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.wide_to_long",
    arguments: [
      { name: "df", type: "DataFrame", defaultValue: "_empty" },
      { name: "stubnames", type: "_empty", defaultValue: "_empty" },
      { name: "i", type: "_empty", defaultValue: "_empty" },
      { name: "j", type: "_empty", defaultValue: "_empty" },
      { name: "sep", type: "str", defaultValue: "" },
      { name: "suffix", type: "str", defaultValue: "\\d+" },
    ],
    code: "",
  },
  {
    name: "query",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "moon",
    },
    uri: "pandas.query",
    returnType: "pandas.dataframe",
    functionType: "method",
    arguments: [
      {
        name: "self",
        type: "pandas.dataframe",
        isPort: true,
      },
      { name: "expr", type: "python.string" },
      { name: "inplace", type: "python.bool", defaultValue: false },
    ],
    code: ``,
  },
  {
    name: "value_counts",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "percentage",
    },
    functionType: "method",
    uri: "pandas.value_counts",
    docsUrl:
      "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.value_counts.html",
    returnType: "pandas.series",
    arguments: [
      {
        name: "self",
        type: "pandas.dataframe",
        isPort: true,
      },
      {
        name: "subset",
        type: "python.string",
        description: "Columns to use when counting unique combinations.",
      },
      {
        name: "sort",
        type: "python.bool",
        defaultValue: true,
        description: "Sort by frequencies.",
      },
      {
        name: "ascending",
        type: "python.bool",
        defaultValue: false,
        description: "Sort in ascending order.",
      },
      {
        name: "normalize",
        type: "python.bool",
        defaultValue: true,
        description: "Return proportions rather than frequencies.",
      },
      {
        name: "dropna",
        type: "python.bool",
        defaultValue: true,
        description: "Don’t include counts of rows that contain NA values.",
      },
    ],
    code: "",
  },

  {
    name: "get_columns",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "column-layout",
    },
    uri: "pandas.get_columns",
    returnType: "pandas.dataframe",
    arguments: [
      {
        name: "in",
        type: "pandas.dataframe",
        isPort: true,
      },
      { name: "columns", type: ["python.string", "python.string_array"] },
    ],
    code: `
def get_columns(_in, columns):
  return _in[columns]    
    `,
  },
  {
    name: "reset_index",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "remove-column-left",
    },
    uri: "pandas.reset_index",
    functionType: "method",
    returnType: "pandas.dataframe",
    arguments: [
      {
        name: "self",
        type: "pandas.dataframe",
        isPort: true,
      },
    ],
    code: "",
  },
  {
    name: "cumsum",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "small-plus",
    },
    uri: "pandas.cumsum",
    functionType: "method",
    returnType: "pandas.dataframe",
    arguments: [
      {
        name: "self",
        type: "pandas.dataframe",
        isPort: true,
      },
    ],
    code: "",
  },
  {
    name: "sort_values",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "sort",
    },
    uri: "pandas.sort_values",
    functionType: "method",
    returnType: "pandas.dataframe",
    arguments: [
      {
        name: "self",
        type: "pandas.dataframe",
        isPort: true,
      },
      {
        name: "by",
        type: ["python.string", "python.string_array"],
        isPort: false,
      },
      {
        name: "ascending",
        type: "python.bool",
        isPort: false,
      },
      {
        name: "ignore_index",
        type: "python.bool",
        isPort: false,
      },
    ],
    code: "",
  },
];

export default library;
