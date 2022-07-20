export const library = [
    {
        name: "load_survey",
        uri: "keix.load_survey",
        arguments: [
            {
                name: "in",
                type: "python.string",
                isPort: false,
            },
        ],
        code: `
import json
import js
import pandas as pd
from io import StringIO
from pyodide import to_js
from js import Object

async def load_survey(_in):
    print("Sending req...")
    idToken = js.window.idToken
    if idToken is None:
      raise Exception("Not Authorized")
    resp = await js.fetch('https://dev.graphql.keix.com/graphql',
      method="POST",
      body=json.dumps({ "query" : "query DumpSurvey($id: String!) { dumpSurveyData(id: $id) }", "variables": { "id": _in }}),
      credentials="same-origin",
      headers=Object.fromEntries(to_js({ "Content-Type": "application/json", "Authorization": "Bearer " + idToken })),
    )
    response_data = await resp.json()
    print(response_data)
    text = StringIO(response_data.data.dumpSurveyData)
    return pd.read_csv(text)
    `,
        returnType: "pandas.dataframe",
        async: true,
        style: {
            icon: "form",
            bg: {
                color: "blue",
                opacity: 500,
            },
        },
    },
];
export default library;
