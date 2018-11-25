jQuery("#simulation")
  .on("click", ".s-5efaa79a-cf60-4586-b825-3f5042bab117 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/752e7899-846b-4d9e-be3b-145d0cdea8d4"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5efaa79a-cf60-4586-b825-3f5042bab117"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-5efaa79a-cf60-4586-b825-3f5042bab117 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5efaa79a-cf60-4586-b825-3f5042bab117 #s-Text_2 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#EEEEEE",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-color": "#EEEEEE"
                      }
                    }
                  },{
                    "#s-5efaa79a-cf60-4586-b825-3f5042bab117 #s-Text_2": {
                      "attributes": {
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-5efaa79a-cf60-4586-b825-3f5042bab117 #s-Text_2 span": {
                      "attributes": {
                        "font-family": "'Arial',Arial",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-5efaa79a-cf60-4586-b825-3f5042bab117 #s-Text_2": {
                      "attributes-ie": {
                        "border-top-color": "#EEEEEE",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-color": "#EEEEEE"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5efaa79a-cf60-4586-b825-3f5042bab117 #s-Text_3 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#EEEEEE",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-color": "#EEEEEE"
                      }
                    }
                  },{
                    "#s-5efaa79a-cf60-4586-b825-3f5042bab117 #s-Text_3": {
                      "attributes": {
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-5efaa79a-cf60-4586-b825-3f5042bab117 #s-Text_3 span": {
                      "attributes": {
                        "font-family": "'Arial',Arial",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-5efaa79a-cf60-4586-b825-3f5042bab117 #s-Text_3": {
                      "attributes-ie": {
                        "border-top-color": "#EEEEEE",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-color": "#EEEEEE"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5efaa79a-cf60-4586-b825-3f5042bab117 #s-Text_4 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#EEEEEE",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-color": "#EEEEEE"
                      }
                    }
                  },{
                    "#s-5efaa79a-cf60-4586-b825-3f5042bab117 #s-Text_4": {
                      "attributes": {
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-5efaa79a-cf60-4586-b825-3f5042bab117 #s-Text_4 span": {
                      "attributes": {
                        "font-family": "'Arial',Arial",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-5efaa79a-cf60-4586-b825-3f5042bab117 #s-Text_4": {
                      "attributes-ie": {
                        "border-top-color": "#EEEEEE",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-color": "#EEEEEE"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-5efaa79a-cf60-4586-b825-3f5042bab117 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_4")) {
      jEvent.undoCases(jFirer);
    }
  });