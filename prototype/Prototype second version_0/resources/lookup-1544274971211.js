(function(window, undefined) {
  var dictionary = {
    "4504737a-6c18-4cad-a80e-09b3bc3ee603": "company page",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "5efaa79a-cf60-4586-b825-3f5042bab117": "about us",
    "752e7899-846b-4d9e-be3b-145d0cdea8d4": "offers",
    "c7028ed6-9829-4728-a08e-2f8f76d492c9": "user page",
    "27a93963-6176-423d-8602-5ea0fc559450": "test",
    "60b4d7b4-97c3-4e78-8811-8d4ef7e74cfd": "960 grid - 16 columns imported",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "a99943ce-e958-45e3-b245-cb25387a5541": "Template 1 imported",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "01e09dfc-a948-449e-9232-96d94a0085af": "960 grid - 12 columns imported",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default",
    "2b04488d-cb79-436d-a0ef-f1c822a77c95": "default imported"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);