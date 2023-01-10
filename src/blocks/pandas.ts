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
      { name: "copy", type: "python.bool", defaultValue: true },
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
      { name: "normalize", type: "python.bool", defaultValue: false },
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
      { name: "ignore_index", type: "python.bool", defaultValue: false },
      { name: "keys", type: "_empty", defaultValue: null }, //TYPE SEQUENCE
      { name: "levels", type: "_empty", defaultValue: null }, // TYPE LIST OF SEQUENCE
      { name: "names", type: "python.string_array", defaultValue: null },
      { name: "verify_integrity", type: "python.bool", defaultValue: false },
      { name: "sort", type: "python.bool", defaultValue: false },
      { name: "copy", type: "python.bool", defaultValue: true },
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
      { name: "margins", type: "python.bool", defaultValue: false },
      { name: "margins_name", type: "python.string", defaultValue: "All" },
      { name: "dropna", type: "python.bool", defaultValue: true },
      { name: "normalize", type: "python.bool", defaultValue: false },
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
      { name: "right", type: "python.bool", defaultValue: true },
      {
        name: "labels",
        type: ["pandas.array", "python.bool"],
        defaultValue: null,
      }, //TYPE ARRAY | FALSE
      { name: "retbins", type: "python.bool", defaultValue: false },
      { name: "precision", type: "python.int", defaultValue: 3 },
      { name: "include_lowest", type: "python.bool", defaultValue: false },
      {
        name: "duplicates",
        type: ["default", "raise", "drop"],
        defaultValue: null,
      },
      { name: "ordered", type: "python.bool", defaultValue: true },
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
      { name: "normalize", type: "python.bool", defaultValue: false },
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
      { name: "truediv", type: "python.bool", defaultValue: null },
      { name: "local_dict", type: "_empty", defaultValue: null }, //TYPE DICT
      { name: "global_dict", type: "_empty", defaultValue: null }, //TYPE DICT
      { name: "resolvers", type: "_empty", defaultValue: [] }, //TYPE LIST OF FUNCTION A list of objects implementing the __getitem__ special method that you can use to inject an additional collection of namespaces to use for variable lookup.
      { name: "level", type: "python.int", defaultValue: null },
      { name: "target", type: "_empty", defaultValue: null }, //TYPE OBJECT
      { name: "inplace", type: "python.bool", defaultValue: false },
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
      { name: "sort", type: "python.bool", defaultValue: false },
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
      { name: "dummy_na", type: "python.bool", defaultValue: false },
      { name: "columns", type: "_empty", defaultValue: null }, //TYPE LIST LIKE
      { name: "sparse", type: "python.bool", defaultValue: false },
      { name: "drop_first", type: "python.bool", defaultValue: false },
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
      { name: "warn", type: "python.bool", defaultValue: true },
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
      { name: "dropna", type: "python.bool", defaultValue: true },
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
      { name: "ignore_index", type: "python.bool", defaultValue: true },
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
      { name: "left_index", type: "python.bool", defaultValue: false },
      { name: "right_index", type: "python.bool", defaultValue: false },
      { name: "sort", type: "python.bool", defaultValue: false },
      { name: "suffixes", type: "_empty", defaultValue: ["_x", "_y"] }, //TYPE list-like
      { name: "copy", type: "python.bool", defaultValue: true },
      {
        name: "indicator",
        type: ["python.bool", "python.string"],
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
      { name: "left_index", type: "python.bool", defaultValue: false },
      { name: "right_index", type: "python.bool", defaultValue: false },
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
      { name: "allow_exact_matches", type: "python.bool", defaultValue: true },
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
      { name: "name", type: "python.string", defaultValue: null },
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
      { name: "margins", type: "python.bool", defaultValue: false },
      { name: "dropna", type: "python.bool", defaultValue: true },
      { name: "margins_name", type: "python.string", defaultValue: "All" },
      { name: "observed", type: "python.bool", defaultValue: false },
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
      { name: "retbins", type: "python.bool", defaultValue: false },
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
    returnType: "pandas.dataframe",
    code: "from pandas import read_clipboard",
  },
  {
    name: "read_xml",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_xml",
    returnType: "pandas.dataframe",
    code: "from pandas import read_xml",
    arguments: [
      {
        name: "path_or_buffer",
        label: "in",
        type: "python.string_io",
        isPort: true,
        defaultValue: null,
      },
      {
        name: "xpath",
        type: "python.string",
        defaultValue: null,
      },
    ],
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
        label: "in",
        type: "python.string_io",
        isPort: true,
        defaultValue: null,
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
      { name: "squeeze", type: "python.bool", defaultValue: false },
      { name: "prefix", type: "python.string", defaultValue: null },
      { name: "mangle_dupe_cols", type: "python.bool", defaultValue: true },
      { name: "dtype", type: "_empty", defaultValue: null }, //TYPE DTYPE
      { name: "engine", type: ["c", "python", "pyarrow"], defaultValue: null },
      { name: "converters", type: "_empty", defaultValue: null }, //TYPE DICT
      { name: "true_values", type: "_empty", defaultValue: null }, //TYPE LIST
      { name: "false_values", type: "_empty", defaultValue: null }, //TYPE LIST
      { name: "skipinitialspace", type: "python.bool", defaultValue: false },
      { name: "skiprows", type: ["python.int"], defaultValue: null },
      { name: "skipfooter", type: "python.int", defaultValue: 0 },
      { name: "nrows", type: "python.int", defaultValue: null },
      { name: "na_values", type: ["python.string"], defaultValue: null }, //TYPE SCALAR, LIST-LIKE, DICT
      { name: "keep_default_na", type: "python.bool", defaultValue: true },
      { name: "na_filter", type: "python.bool", defaultValue: true },
      { name: "verbose", type: "python.bool", defaultValue: false },
      { name: "skip_blank_lines", type: "python.bool", defaultValue: true },
      {
        name: "parse_dates",
        type: ["python.bool", "python.int_array", "python.string_array"], //TYPE LIST OF DICT
        defaultValue: false,
      },
      {
        name: "infer_datetime_format",
        type: "python.bool",
        defaultValue: false,
      },
      { name: "keep_date_col", type: "python.bool", defaultValue: false },
      { name: "date_parser", type: "_empty", defaultValue: null }, //TYPE FUNCTION
      { name: "dayfirst", type: "python.bool", defaultValue: false },
      { name: "cache_dates", type: "python.bool", defaultValue: true },
      { name: "iterator", type: "python.bool", defaultValue: false },
      { name: "chunksize", type: "python.int", defaultValue: null },
      { name: "compression", type: ["python.string"], defaultValue: "infer" }, //TYPE DICT
      { name: "thousands", type: "python.string", defaultValue: null },
      { name: "decimal", type: "python.string", defaultValue: "." },
      { name: "lineterminator", type: "python.string", defaultValue: null },
      { name: "quotechar", type: "python.string", defaultValue: '"' },
      { name: "quoting", type: "python.int", defaultValue: 0 },
      { name: "doublequote", type: "python.bool", defaultValue: true },
      { name: "escapechar", type: "python.string", defaultValue: null },
      { name: "comment", type: "python.string", defaultValue: null },
      { name: "encoding", type: "python.string", defaultValue: null },
      { name: "encoding_errors", type: "python.string", defaultValue: null },
      { name: "dialect", type: "python.string", defaultValue: null },
      { name: "error_bad_lines", type: "python.bool", defaultValue: null },
      { name: "warn_bad_lines", type: "python.bool", defaultValue: null },
      {
        name: "on_bad_lines",
        type: "python.string",
        //  ["error", "warn", "skip"],
        defaultValue: "error",
      },
      {
        name: "delim_whitespace",
        type: "python.bool",
        defaultValue: false,
      },
      { name: "low_memory", type: "python.bool", defaultValue: true },
      { name: "memory_map", type: "python.bool", defaultValue: false },
      { name: "float_precision", type: "python.string", defaultValue: null },
      {
        name: "storage_options",
        type: "typing.Optional[typing.Dict[str, typing.Any]]", //TYPE DICT
        defaultValue: null,
      },
    ],
    returnType: "pandas.dataframe",
    code: "from pandas import read_csv",
  },
  {
    name: "read_excel",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_excel",
    arguments: [
      { name: "io", type: ["python.string"], defaultValue: null }, //TYPE BYTES
      {
        name: "sheet_name",
        type: ["python.string", "python.int", "python.string_array"],
        defaultValue: 0,
      },
      {
        name: "header",
        type: ["python.int", "python.int_array"],
        defaultValue: 0,
      },
      { name: "names", type: ["python.string_array"], defaultValue: null }, //TYPE ARRAY-LIKE
      {
        name: "index_col",
        type: ["python.int", "python.int_array"],
        defaultValue: null,
      },
      {
        name: "usecols",
        type: ["python.string", "python.int", "python.string_array"], //TYPE LIST-LIKE, CALLABLE
        defaultValue: null,
      },
      { name: "squeeze", type: "python.bool", defaultValue: false },
      { name: "dtype", type: "_empty", defaultValue: null }, //TYPE DTYPE
      { name: "engine", type: "python.string", defaultValue: null },
      { name: "converters", type: "_empty", defaultValue: null }, //TYPE DICT
      { name: "true_values", type: "_empty", defaultValue: null }, //TYPE LIST
      { name: "false_values", type: "_empty", defaultValue: null }, //TYPE LIST
      { name: "skiprows", type: ["python.int"], defaultValue: null }, //TYPE LIST-LIKE, CALLABLE
      { name: "nrows", type: "python.int", defaultValue: null },
      { name: "na_values", type: ["python.string"], defaultValue: null }, //TYPE SCALAR, LIST-LIKE, DICT
      { name: "keep_default_na", type: "python.bool", defaultValue: true },
      { name: "na_filter", type: "python.bool", defaultValue: true },
      { name: "verbose", type: "python.bool", defaultValue: false },
      { name: "parse_dates", type: ["python.bool"], defaultValue: false }, //TYPE LIST-LIKE, DICT
      { name: "date_parser", type: "_empty", defaultValue: null }, //TYPE FUNCTION
      { name: "thousands", type: "python.string", defaultValue: null },
      { name: "decimal", type: "python.string", defaultValue: "." },
      { name: "comment", type: "_empty", defaultValue: null },
      { name: "skipfooter", type: "python.int", defaultValue: 0 },
      { name: "convert_float", type: "python.bool", defaultValue: true },
      { name: "mangle_dupe_cols", type: "python.bool", defaultValue: true },
      {
        name: "storage_options",
        type: "_empty", //TYPE DICT
        defaultValue: null,
      },
    ],
    returnType: "pandas.dataframe", //TYPE DICT OF DATAFRAME
    code: "from pandas import read_excel",
  },
  {
    name: "read_feather",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_feather",
    arguments: [
      { name: "path", type: "python.string", defaultValue: null },
      { name: "columns", type: "_empty", defaultValue: null }, //TYPE SEQUENCE
      { name: "use_threads", type: "python.bool", defaultValue: true },
      {
        name: "storage_options",
        type: "_empty", //TYPE DICT
        defaultValue: null,
      },
    ],
    returnType: "pandas.dataframe",
    code: "from pandas import read_feather",
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
        type: "python.string",
        defaultValue: null,
      },
      { name: "colspecs", type: "_empty", defaultValue: "infer" }, //TYPE list of tuple (int, int)
      { name: "widths", type: "python.int_array", defaultValue: null }, //TYPE list of int
      { name: "infer_nrows", type: "python.int", defaultValue: 100 },
      { name: "kwds", type: "_empty", defaultValue: "_empty" }, //TYPE Optional keyword argumentss
    ],
    returnType: "pandas.dataframe",
    code: "from pandas import read_fwf",
  },
  {
    name: "read_gbq",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_gbq",
    arguments: [
      { name: "query", type: "python.string", defaultValue: "_empty" },
      { name: "project_id", type: "python.string", defaultValue: null },
      { name: "index_col", type: "python.string", defaultValue: null },
      {
        name: "col_order",
        type: "python.string_array",
        defaultValue: null,
      },
      { name: "reauth", type: "python.bool", defaultValue: false },
      {
        name: "auth_local_webserver",
        type: "python.bool",
        defaultValue: false,
      },
      {
        name: "dialect",
        type: "python.string",
        defaultValue: "dialect",
      },
      { name: "location", type: "python.string", defaultValue: null },
      {
        name: "configuration",
        type: "_empty", //TYPE DICT
        defaultValue: null,
      },
      { name: "credentials", type: "_empty", defaultValue: null }, //google.auth.credentials.Credentials
      {
        name: "use_bqstorage_api",
        type: "python.bool",
        defaultValue: false,
      },
      { name: "max_results", type: "python.int", defaultValue: null },
      {
        name: "progress_bar_type",
        type: "python.string",
        defaultValue: null,
      },
    ],
    returnType: "pandas.dataframe",
    code: "from pandas import read_gbq",
  },
  {
    name: "read_hdf",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_hdf",
    arguments: [
      { name: "path_or_buf", type: "python.string", defaultValue: null },
      { name: "key", type: "_empty", defaultValue: null }, //TYPE OBJECT
      { name: "mode", type: ["r", "r+", "a"], defaultValue: "r" },
      { name: "errors", type: "python.string", defaultValue: "strict" },
      { name: "where", type: "_empty", defaultValue: null }, //TYPE A list of Term (or convertible) objects.
      { name: "start", type: "python.int", defaultValue: null },
      { name: "stop", type: "python.int", defaultValue: null },
      { name: "columns", type: "python.string", defaultValue: null }, //TYPE LIST
      { name: "iterator", type: "python.bool", defaultValue: false },
      { name: "chunksize", type: "python.int", defaultValue: null },
      { name: "kwargs", type: "_empty", defaultValue: "_empty" }, //TYPE KWARGS
    ],
    returnType: "_empty", //TYPE OBJ
    code: "from pandas import read_hdf",
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
        type: "python.string",
        defaultValue: null,
      },
      {
        name: "match",
        type: "python.string",
        defaultValue: ".+",
      },
      { name: "flavor", type: "python.string", defaultValue: null },
      {
        name: "header",
        type: ["python.int", "python.int_array"],
        defaultValue: null,
      },
      {
        name: "index_col",
        type: ["python.int", "python.int_array"],
        defaultValue: null,
      },
      {
        name: "skiprows",
        type: ["python.int", "python.int_array"],
        defaultValue: null,
      },
      {
        name: "attrs",
        type: "_empty", //TYPE DICT
        defaultValue: null,
      },
      { name: "parse_dates", type: "python.bool", defaultValue: false },
      { name: "thousands", type: "python.string", defaultValue: "," },
      { name: "encoding", type: "python.string", defaultValue: null },
      { name: "decimal", type: "python.string", defaultValue: "." },
      {
        name: "converters",
        type: "_empty", //TYPE DICT
        defaultValue: null,
      },
      { name: "na_values", type: "_empty", defaultValue: null }, //TYPE ITERABLE
      { name: "keep_default_na", type: "python.bool", defaultValue: true },
      { name: "displayed_only", type: "python.bool", defaultValue: true },
    ],
    returnType: "pandas.dataframe_array", //TYPE DATAFRAME_ARRAY
    code: "from pandas import read_html",
  },
  {
    name: "read_json",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_json",
    arguments: [
      {
        name: "path_or_buf",
        label: "in",
        isPort: true,
        type: "python.string_io",
        defaultValue: null,
      },
      { name: "orient", type: "python.string", defaultValue: null },
      { name: "typ", type: ["frame", "series"], defaultValue: "frame" },
      { name: "dtype", type: "_empty", defaultValue: null }, //TYPE DTYPE
      { name: "convert_axes", type: "python.bool", defaultValue: null },
      {
        name: "convert_dates",
        type: ["python.bool", "python.string_array"],
        defaultValue: true,
      },
      { name: "keep_default_dates", type: "python.bool", defaultValue: true },
      { name: "numpy", type: "python.bool", defaultValue: false },
      { name: "precise_float", type: "python.bool", defaultValue: false },
      { name: "date_unit", type: "python.string", defaultValue: null },
      { name: "encoding", type: "python.string", defaultValue: "utf-8" },
      {
        name: "encoding_errors",
        type: "python.string",
        defaultValue: "strict",
      },
      { name: "lines", type: "python.bool", defaultValue: false },
      { name: "chunksize", type: "python.int", defaultValue: null },
      {
        name: "compression",
        type: ["python.string"], //TYPE DICT
        defaultValue: "infer",
      },
      { name: "nrows", type: "python.int", defaultValue: null },
      {
        name: "storage_options",
        type: "_empty", //TYPE DICT
        defaultValue: null,
      },
    ],
    returnType: "pandas.dataframe", //TYPE SERIES
    code: "from pandas import read_json",
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
        type: "python.string",
        defaultValue: null,
      },
      {
        name: "columns",
        type: "python.string_array",
        defaultValue: null,
      },
      { name: "kwargs", type: "_empty", defaultValue: "_empty" }, //TYPE KWARGS
    ],
    returnType: "pandas.dataframe",
    code: "from pandas import read_orc",
  },
  {
    name: "read_parquet",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_parquet",
    arguments: [
      {
        name: "path",
        type: "python.string",
        defaultValue: null,
      },
      {
        name: "engine",
        type: ["auto", "pyarrow", "fastparquet"],
        defaultValue: "auto",
      },
      { name: "columns", type: "python.string", defaultValue: null },
      { name: "storage_options", type: "_empty", defaultValue: null }, //TYPE DICT
      { name: "use_nullable_dtypes", type: "python.bool", defaultValue: false },
      { name: "kwargs", type: "_empty", defaultValue: "_empty" }, //TYPE KWARGS
    ],
    returnType: "pandas.dataframe",
    code: "from pandas import read_parquet",
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
        type: "python.string",
        defaultValue: null,
      },
      {
        name: "compression",
        type: ["python.string"], //TYPE DICT
        defaultValue: "infer",
      },
      {
        name: "storage_options",
        type: "_empty", //TYPE DICT
        defaultValue: null,
      },
    ],
    returnType: "_empty", //TYPE OBJECT OF THE SAME TYPE OF THE INPUT
    code: "from pandas import read_pickle",
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
        type: "python.string",
        defaultValue: null,
      },
      { name: "format", type: ["xport", "sas7bdat"], defaultValue: null },
      {
        name: "index",
        type: "python.int",
        defaultValue: null,
      },
      { name: "encoding", type: "python.string", defaultValue: null },
      { name: "chunksize", type: "python.int", defaultValue: null },
      { name: "iterator", type: "python.bool", defaultValue: false },
    ],
    returnType: "pandas.dataframe",
    code: "from pandas import read_sas",
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
        type: "python.string",
        defaultValue: null,
      },
      {
        name: "usecols",
        type: "_empty", //TYPE LIST-LIKE
        defaultValue: null,
      },
      { name: "convert_categoricals", type: "python.bool", defaultValue: true },
    ],
    returnType: "pandas.dataframe",
    code: "from pandas import read_spss",
  },
  {
    name: "read_sql",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_sql",
    arguments: [
      { name: "sql", type: "python.string", defaultValue: null },
      { name: "con", type: ["python.string"], defaultValue: null }, //TYPE SQLAlchemy connectable, or sqlite3 connection
      {
        name: "index_col",
        type: ["python.string", "python.string_array"],
        defaultValue: null,
      },
      { name: "coerce_float", type: "python.bool", defaultValue: true },
      { name: "params", type: "_empty", defaultValue: null }, //TYPE DICT,LIST, TUPLE
      { name: "parse_dates", type: ["python.string"], defaultValue: null }, //TYPE LIST-LIKE, DICT
      { name: "columns", type: "python.string_array", defaultValue: null },
      { name: "chunksize", type: "python.int", defaultValue: null },
    ],
    returnType: "pandas.dataframe",
    code: "from pandas import read_sql",
  },
  {
    name: "read_sql_query",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_sql_query",
    arguments: [
      { name: "sql", type: "python.string", defaultValue: null },
      { name: "con", type: ["python.string"], defaultValue: null }, //TYPE SQLAlchemy connectable, or sqlite3 connection
      {
        name: "index_col",
        type: ["python.string", "python.string_array"],
        defaultValue: null,
      },
      { name: "coerce_float", type: "python.bool", defaultValue: true },
      { name: "params", type: "_empty", defaultValue: null }, //TYPE DICT,LIST, TUPLE
      { name: "parse_dates", type: ["python.string"], defaultValue: null }, //TYPE LIST-LIKE, DICT
      { name: "columns", type: "python.string_array", defaultValue: null },
      { name: "chunksize", type: "python.int", defaultValue: null },
    ],
    returnType: "pandas.dataframe",
    code: "from pandas import read_sql_query",
  },
  {
    name: "read_sql_table",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.read_sql_table",
    arguments: [
      { name: "sql", type: "python.string", defaultValue: null },
      { name: "con", type: ["python.string"], defaultValue: null }, //TYPE SQLAlchemy connectable
      { name: "schema", type: "python.string", defaultValue: null },
      {
        name: "index_col",
        type: ["python.string", "python.string_array"],
        defaultValue: null,
      },
      { name: "coerce_float", type: "python.bool", defaultValue: true },
      { name: "params", type: "_empty", defaultValue: null }, //TYPE DICT,LIST, TUPLE
      { name: "parse_dates", type: ["python.string"], defaultValue: null }, //TYPE LIST-LIKE, DICT
      { name: "columns", type: "python.string_array", defaultValue: null },
      { name: "chunksize", type: "python.int", defaultValue: null },
    ],
    returnType: "pandas.dataframe",
    code: "from pandas import read_sql_table",
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
        type: "python.string",
        defaultValue: null,
      },
      { name: "convert_dates", type: "python.bool", defaultValue: true },
      { name: "convert_categoricals", type: "python.bool", defaultValue: true },
      { name: "index_col", type: "python.string", defaultValue: null },
      { name: "convert_missing", type: "python.bool", defaultValue: false },
      { name: "preserve_dtypes", type: "python.bool", defaultValue: true },
      {
        name: "columns",
        type: "python.string_array", //TYPE LIST-LIKE
        defaultValue: null,
      },
      { name: "order_categoricals", type: "python.bool", defaultValue: true },
      { name: "chunksize", type: "python.int", defaultValue: null },
      { name: "iterator", type: "python.bool", defaultValue: false },
      {
        name: "compression",
        type: ["python.string"], //TYPE DICT
        defaultValue: null,
      },
      {
        name: "storage_options",
        type: "_empty", //TYPE DICT
        defaultValue: null,
      },
    ],
    returnType: "pandas.dataframe",
    code: "from pandas import read_stata",
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
        type: "python.string",
        defaultValue: null,
      },
      { name: "sep", type: "python.string", defaultValue: "\t" },
      { name: "delimiter", type: "python.string", defaultValue: null },
      {
        name: "header",
        type: ["python.int", "python.int_array"],
        defaultValue: "infer",
      },
      { name: "names", type: ["python.string_array"], defaultValue: null }, //TYPE ARRAY-LIKE
      {
        name: "index_col",
        type: [
          "python.string",
          "python.string_array",
          "python.int",
          "python.int_array",
        ],
        defaultValue: null,
      },
      { name: "usecols", type: ["python.string_array"], defaultValue: null }, //TYPE LIST-LIKE, CALLABLE
      { name: "squeeze", type: "python.bool", defaultValue: false },
      { name: "prefix", type: "python.string", defaultValue: null },
      { name: "mangle_dupe_cols", type: "python.bool", defaultValue: true },
      { name: "dtype", type: "_empty", defaultValue: null }, //TYPE DTYPE
      {
        name: "engine",
        type: ["auto", "pyarrow", "fastparquet"],
        defaultValue: "auto",
      },
      { name: "converters", type: "_empty", defaultValue: null }, //TYPE DICT
      {
        name: "true_values",
        type: ["python.string_array"], //TYPE LIST-LIKE
        defaultValue: null,
      },
      {
        name: "false_values",
        type: ["python.string_array"], //TYPE LIST-LIKE
        defaultValue: null,
      },
      { name: "skipinitialspace", type: "python.bool", defaultValue: false },
      {
        name: "skiprows",
        type: ["python.string_array", "python.int_array"], //TYPE LIST-LIKE, CALLABLE
        defaultValue: null,
      },
      { name: "skipfooter", type: "python.int", defaultValue: 0 },
      { name: "nrows", type: "python.int", defaultValue: null },
      { name: "na_values", type: ["python.string"], defaultValue: null }, //TYPE LIST-LIKE, SCALAR, DICT
      { name: "keep_default_na", type: "python.bool", defaultValue: true },
      { name: "na_filter", type: "python.bool", defaultValue: true },
      { name: "verbose", type: "python.bool", defaultValue: false },
      { name: "skip_blank_lines", type: "python.bool", defaultValue: true },
      {
        name: "parse_dates",
        type: ["python.bool", "python.int_array", "python.string_array"], //TYPE list of lists or dict
        defaultValue: false,
      },
      {
        name: "infer_datetime_format",
        type: "python.bool",
        defaultValue: false,
      },
      { name: "keep_date_col", type: "python.bool", defaultValue: false },
      { name: "date_parser", type: "_empty", defaultValue: null }, //TYPE FUNCTION
      { name: "dayfirst", type: "python.bool", defaultValue: false },
      { name: "cache_dates", type: "python.bool", defaultValue: true },
      { name: "iterator", type: "python.bool", defaultValue: false },
      { name: "chunksize", type: "python.int", defaultValue: null },
      { name: "compression", type: ["python.string"], defaultValue: "infer" }, //TYPE DICT
      { name: "thousands", type: "python.string", defaultValue: null },
      { name: "decimal", type: "python.string", defaultValue: "." },
      { name: "lineterminator", type: "python.string", defaultValue: null },
      { name: "quotechar", type: "python.string", defaultValue: '"' },
      { name: "quoting", type: "python.string", defaultValue: 0 },
      { name: "doublequote", type: "python.bool", defaultValue: true },
      { name: "escapechar", type: "python.string", defaultValue: null },
      { name: "comment", type: "python.string", defaultValue: null },
      { name: "encoding", type: "python.string", defaultValue: null },
      {
        name: "encoding_errors",
        type: "python.string",
        defaultValue: "strict",
      },
      { name: "dialect", type: "python.string", defaultValue: null },
      { name: "error_bad_lines", type: "python.bool", defaultValue: true },
      { name: "warn_bad_lines", type: "python.bool", defaultValue: true },
      {
        name: "on_bad_lines",

        type: "python.string",
        // type: ["error", "warn", "skip"],
        defaultValue: true,
      },
      { name: "delim_whitespace", type: "python.bool", defaultValue: false },
      { name: "low_memory", type: "python.bool", defaultValue: true },
      { name: "memory_map", type: "python.bool", defaultValue: false },
      { name: "float_precision", type: "python.string", defaultValue: null },
      {
        name: "storage_options",
        type: "_empty", //TYPE DICT
        defaultValue: null,
      },
    ],
    returnType: "pandas.dataframe",
    code: "from pandas import read_table",
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
      { name: "use_eng_prefix", type: "python.bool", defaultValue: false },
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
      {
        name: "as_json",
        type: ["python.string", "python.bool"],
        defaultValue: false,
      },
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
    arguments: [{ name: "extra_args", type: "any", defaultValue: null }],
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
      { name: "start", type: ["python.string"], defaultValue: null }, //TYPE TIMEDELTA LIKE
      { name: "end", type: ["python.string"], defaultValue: null }, //TYPE TIMEDELTA LIKE
      { name: "periods", type: "python.int", defaultValue: null },
      { name: "freq", type: ["python.string"], defaultValue: "D" }, //TYPE DATEOFFSET
      { name: "name", type: "python.string", defaultValue: null },
      { name: "closed", type: "python.string", defaultValue: null },
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
        type: [
          "python.int",
          "python.float",
          "python.string",
          "pandas.dataframe",
        ], // datetime, list, tuple, 1-d array, Series, DataFrame, dict-like
        defaultValue: null,
      },
      {
        name: "errors",
        type: ["ignore", "raise", "coerce"],
        defaultValue: "raise",
      },
      { name: "dayfirst", type: "python.bool", defaultValue: false },
      { name: "yearfirst", type: "python.bool", defaultValue: false },
      { name: "utc", type: "python.bool", defaultValue: null },
      { name: "format", type: "python.string", defaultValue: null },
      { name: "exact", type: "python.bool", defaultValue: true },
      { name: "unit", type: "python.string", defaultValue: "ns" },
      {
        name: "infer_datetime_format",
        type: "python.bool",
        defaultValue: false,
      },
      { name: "origin", type: "_empty", defaultValue: "unix" }, //TYPE SCALAR
      { name: "cache", type: "python.bool", defaultValue: true },
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
      { name: "arg", type: "_empty", defaultValue: "_empty" }, //TYPE SCALAR, list, tuple, 1-d array, or Series
      {
        name: "errors",
        type: ["ignore", "raise", "coerce"],
        defaultValue: "raise",
      },
      { name: "downcast", type: "python.string", defaultValue: null },
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
      {
        name: "path",
        type: "python.string",
        defaultValue: null,
      },
      {
        name: "compression",
        type: ["python.string"], //TYPE DICT
        defaultValue: "infer",
      },
      { name: "protocol", type: "python.int", defaultValue: 5 },
      {
        name: "storage_options",
        type: "_empty", //TYPE DICT
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
      { name: "arg", type: ["python.string"], defaultValue: "_empty" }, //TYPE TIMEDELTA, LIST-LIKE, SERIES
      { name: "unit", type: "python.string", defaultValue: null },
      {
        name: "errors",
        type: ["ignore", "raise", "coerce"],
        defaultValue: "raise",
      },
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
    arguments: [{ name: "values", type: "any", defaultValue: "_empty" }], //TYPE 1d array-like
    code: "",
  },
  {
    name: "value_counts", //NON TROVO IL CORRISPONDENTE IN DOCS
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "maximize",
    },
    uri: "pandas.value_counts",
    arguments: [
      { name: "values", type: "_empty", defaultValue: "_empty" },
      { name: "sort", type: "python.bool", defaultValue: true },
      { name: "ascending", type: "python.bool", defaultValue: false },
      { name: "normalize", type: "python.bool", defaultValue: false },
      { name: "dropna", type: "python.bool", defaultValue: true },
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
      { name: "df", type: "pandas.dataframe", defaultValue: null }, //TYPE DataFrame
      { name: "stubnames", type: ["python.string"], defaultValue: null }, //TYPE LIST-LIKE
      { name: "i", type: ["python.string"], defaultValue: null }, //TYPE LIST-LIKE
      { name: "j", type: "python.string", defaultValue: null },
      { name: "sep", type: "python.string", defaultValue: "" },
      { name: "suffix", type: "python.string", defaultValue: "\\d+" },
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
