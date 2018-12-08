jQuery("#simulation")
  .on("click", ".s-752e7899-846b-4d9e-be3b-145d0cdea8d4 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_8")) {
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
    } else if(jFirer.is("#s-Paragraph_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-offer_click" ]
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
    } else if(jFirer.is("#s-Image_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-offer_click" ]
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
    } else if(jFirer.is("#s-Rectangle_27")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "logedin"
                },"com" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "logedin"
                },"user" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c7028ed6-9829-4728-a08e-2f8f76d492c9"
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
    } else if(jFirer.is("#s-Rectangle_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "logedin" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
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
    } else if(jFirer.is("#s-Rectangle_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-comoruser","#s-usersignin_1","#s-comsignin_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-signup_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-wrong_1" ]
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
    } else if(jFirer.is("#s-Rectangle_17")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_10",
                    "property": "jimGetValue"
                  },"group8" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_11",
                    "property": "jimGetValue"
                  },"g8user" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-sign","#s-wrong_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "logedin" ],
                    "value": "user"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-wrong_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_10",
                    "property": "jimGetValue"
                  },"group8" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_11",
                    "property": "jimGetValue"
                  },"g8user" ]
                } ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-usersignin_1" ]
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
    } else if(jFirer.is("#s-Rectangle_20")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_15",
                    "property": "jimGetValue"
                  },"g8company" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_14",
                    "property": "jimGetValue"
                  },"group8" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-sign" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "logedin" ],
                    "value": "com"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-wrong_2" ]
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
    } else if(jFirer.is("#s-Image_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-comsignin_1" ]
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
    } else if(jFirer.is("#s-Image_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-signup_1" ]
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-usersignin_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-signup_1","#s-comoruser","#s-comsignin_1" ]
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-comsignin_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-signup_1","#s-comoruser","#s-usersignin_1" ]
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
    } else if(jFirer.is("#s-Image_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-comoruser" ]
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
    } else if(jFirer.is("#s-Text_1")) {
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
    } else if(jFirer.is("#s-Text_9")) {
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
    } else if(jFirer.is("#s-Text_8")) {
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
    } else if(jFirer.is("#s-signed")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "logedin"
                  },"0" ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-comoruser",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-comoruser" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-signup_1","#s-wrong_2","#s-wrong_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "logedin"
                  },"0" ]
                },{
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimOr",
                    "parameter": [ {
                      "action": "jimOr",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-comoruser",
                        "property": "jimIsVisible"
                      },{
                        "datatype": "property",
                        "target": "#s-comsignin_1",
                        "property": "jimIsVisible"
                      } ]
                    },{
                      "datatype": "property",
                      "target": "#s-usersignin_1",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-signup_1",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-sign" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Panel_9",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_7" ]
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
    } else if(jFirer.is("#s-Image_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-offer_click" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_5" ]
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
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "logedin"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "logedin"
                },"user" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "checkin" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c7028ed6-9829-4728-a08e-2f8f76d492c9"
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
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "logedin"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "logedin"
                },"user" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_17" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "wish" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c7028ed6-9829-4728-a08e-2f8f76d492c9"
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
  .on("mouseup", ".s-752e7899-846b-4d9e-be3b-145d0cdea8d4 .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#282828"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_18": {
                      "attributes-ie": {
                        "-pie-background": "#282828",
                        "-pie-poll": "false"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#282828"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_17": {
                      "attributes-ie": {
                        "-pie-background": "#282828",
                        "-pie-poll": "false"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#282828"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_20": {
                      "attributes-ie": {
                        "-pie-background": "#282828",
                        "-pie-poll": "false"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#282828"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_22": {
                      "attributes-ie": {
                        "-pie-background": "#282828",
                        "-pie-poll": "false"
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-752e7899-846b-4d9e-be3b-145d0cdea8d4 .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#999999"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_18": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
                        "-pie-poll": "false"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#999999"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_17": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
                        "-pie-poll": "false"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#999999"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_20": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
                        "-pie-poll": "false"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#999999"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_22": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
                        "-pie-poll": "false"
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-752e7899-846b-4d9e-be3b-145d0cdea8d4 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_23")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-Image_16" ]
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
        jEvent.launchCases(cases);
      }
    }
  })
  .on("focusin", ".s-752e7899-846b-4d9e-be3b-145d0cdea8d4 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Paragraph_6 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#74B9EF",
                        "border-right-color": "#74B9EF",
                        "border-bottom-color": "#74B9EF",
                        "border-left-color": "#74B9EF"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Paragraph_6": {
                      "attributes-ie": {
                        "border-top-color": "#74B9EF",
                        "border-right-color": "#74B9EF",
                        "border-bottom-color": "#74B9EF",
                        "border-left-color": "#74B9EF"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Paragraph_7 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#74B9EF",
                        "border-right-color": "#74B9EF",
                        "border-bottom-color": "#74B9EF",
                        "border-left-color": "#74B9EF"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Paragraph_7": {
                      "attributes-ie": {
                        "border-top-color": "#74B9EF",
                        "border-right-color": "#74B9EF",
                        "border-bottom-color": "#74B9EF",
                        "border-left-color": "#74B9EF"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Input_4 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#0088CC",
                        "border-right-color": "#0088CC",
                        "border-bottom-color": "#0088CC",
                        "border-left-color": "#0088CC"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Input_3 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#0088CC",
                        "border-right-color": "#0088CC",
                        "border-bottom-color": "#0088CC",
                        "border-left-color": "#0088CC"
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-752e7899-846b-4d9e-be3b-145d0cdea8d4 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Paragraph_6 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#CCCCCC",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-color": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Paragraph_6": {
                      "attributes-ie": {
                        "border-top-color": "#CCCCCC",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-color": "#CCCCCC"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Paragraph_7 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#CCCCCC",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-color": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Paragraph_7": {
                      "attributes-ie": {
                        "border-top-color": "#CCCCCC",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-color": "#CCCCCC"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Input_4 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#CCCCCC",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-color": "#CCCCCC"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Input_3 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#CCCCCC",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-color": "#CCCCCC"
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-752e7899-846b-4d9e-be3b-145d0cdea8d4 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#286090",
                        "border-top-color": "#204D74",
                        "border-right-color": "#204D74",
                        "border-bottom-color": "#204D74",
                        "border-left-color": "#204D74"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Button_1": {
                      "attributes-ie": {
                        "border-top-color": "#204D74",
                        "border-right-color": "#204D74",
                        "border-bottom-color": "#204D74",
                        "border-left-color": "#204D74",
                        "-pie-background": "#286090",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Rectangle_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#5E5E5E"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_18": {
                      "attributes-ie": {
                        "-pie-background": "#5E5E5E",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Rectangle_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#5E5E5E"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_17": {
                      "attributes-ie": {
                        "-pie-background": "#5E5E5E",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Rectangle_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#5E5E5E"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_20": {
                      "attributes-ie": {
                        "-pie-background": "#5E5E5E",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Rectangle_22") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#5E5E5E"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Rectangle_22": {
                      "attributes-ie": {
                        "-pie-background": "#5E5E5E",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Text_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Text_9 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#EEEEEE",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-color": "#EEEEEE"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Text_9": {
                      "attributes": {
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Text_9 span": {
                      "attributes": {
                        "font-family": "'Arial',Arial",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Text_9": {
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
    } else if(jFirer.is("#s-Text_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Text_8 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#EEEEEE",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-color": "#EEEEEE"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Text_8": {
                      "attributes": {
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Text_8 span": {
                      "attributes": {
                        "font-family": "'Arial',Arial",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Text_8": {
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
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Text_4 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#EEEEEE",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-color": "#EEEEEE"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Text_4": {
                      "attributes": {
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Text_4 span": {
                      "attributes": {
                        "font-family": "'Arial',Arial",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-752e7899-846b-4d9e-be3b-145d0cdea8d4 #s-Text_4": {
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
  .on("mouseleave dragleave", ".s-752e7899-846b-4d9e-be3b-145d0cdea8d4 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_4")) {
      jEvent.undoCases(jFirer);
    }
  });