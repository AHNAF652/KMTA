﻿window.globalProvideData('slide', '{"title":"Apa yang harus dilakukan umat Islam setelah mendapatkan pertolongan dan kemenangan menurut surat An-Nasr?","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":17,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide17","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6613ztt5KYv","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"6aCxo92mkUA.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6p1kJttgHAt"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6gvhFrzm6D3.InvalidPromptSlide"}}]}]},"ReviewInt_6lp62PSxP1V":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6aCxo92mkUA"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6p1kJttgHAt.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6lp62PSxP1V_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6lp62PSxP1V_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6lp62PSxP1V","typea":"var","valueb":"6GMKgMzEGra","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6GMKgMzEGra.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6lp62PSxP1V"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6GMKgMzEGra.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6lp62PSxP1V"}]}]}]},"ReviewIntCorrectIncorrect_6lp62PSxP1V":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6lp62PSxP1V_ReviewShape"}}]},"AnsweredInt_6lp62PSxP1V":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6lp62PSxP1V"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_6lp62PSxP1V":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6aCxo92mkUA"},"enabled":{"type":"boolean","value":false}}]},"6lp62PSxP1V_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6p1kJttgHAt.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6GMKgMzEGra.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6lp62PSxP1V"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6p1kJttgHAt.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6p1kJttgHAt.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6lp62PSxP1V"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_6613ztt5KYv":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5Ws2ditLvxm"}}]},"NavigationRestrictionPreviousSlide_6613ztt5KYv":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6gvhFrzm6D3","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6gvhFrzm6D3","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6lp62PSxP1V","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6lp62PSxP1V"}],"elseActions":[{"kind":"exe_actiongroup","id":"6lp62PSxP1V_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6lp62PSxP1V","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6lp62PSxP1V","typea":"var","valueb":"6GMKgMzEGra","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6GMKgMzEGra"},"completed_slide_ref":{"type":"string","value":"_player.5aaiaoFyFjn.5Ws2ditLvxm"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6lp62PSxP1V","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6lp62PSxP1V","typea":"var","valueb":"6GMKgMzEGra","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6GMKgMzEGra"},"completed_slide_ref":{"type":"string","value":"_player.5aaiaoFyFjn.5Ws2ditLvxm"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6613ztt5KYv"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6613ztt5KYv"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5kCC10W25eS"}},{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6lp62PSxP1V_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6aCxo92mkUA"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6g4PmhQgWHU"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5W5UYYDo7YY"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6i9cj2bDFnU"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5nHqhiHx3Ea"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":15,"id":"01","url":"story_content/6qxFcxYSSHh.png","type":"normal","altText":"Colourful Cartoon Elementary Classroom Rules Educational Presentation (6).png","width":1440,"height":810,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":-2,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":272,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":544,"altText":"Colourful Cartoon Elementary Classroom Rules Educational Presentation (6).png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":544,"strokewidth":0}},"width":720,"height":544,"resume":true,"useHandCursor":true,"id":"5kCC10W25eS"},{"kind":"textinput","bindto":"_player.TextEntry9","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":0,"placeholder":"type your text here","fontsize":16,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":80,"yPos":174,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":163.5,"rotateYPos":31.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6aCxo92mkUA","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":308,"height":64,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":142,"bottom":22,"pngfb":false,"pr":{"l":"Lib","i":8}}},"html5data":{"xPos":0,"yPos":0,"width":328,"height":64,"strokewidth":1}},"width":328,"height":64,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":329,"bottom":65,"altText":"type your text here","pngfb":false,"pr":{"l":"Lib","i":107}}},"id":"6aCxo92mkUA","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry9","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6g4PmhQgWHU_-1794128668","id":"01","linkId":"txt__default_6g4PmhQgWHU","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":316,"height":56,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Apa yang harus dilakukan umat Islam setelah mendapatkan pertolongan dan kemenangan menurut surat An-Nasr?","style":{"fontFamily":"\\"Arial Rounded MT BoBoldAD39CAD8\\",\\"Arial Rounded MT Bold\\",\\"Arial Rounded MT\\"","fontSize":12,"ascent":15.141,"descent":3.375,"leading":0,"underlinePosition":-1.602,"underlineThickness":0.797,"xHeight":8.477}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":105,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":314,"bottom":61,"pngfb":false,"pr":{"l":"Lib","i":122}}}],"shapemaskId":"","xPos":72,"yPos":86,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":168,"rotateYPos":33,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":336,"bottom":66,"altText":"Apa yang harus dilakukan umat Islam setelah mendapatkan pertolongan dan kemenangan menurut surat An-Nasr?","pngfb":false,"pr":{"l":"Lib","i":112}},"html5data":{"xPos":0,"yPos":0,"width":336,"height":66,"strokewidth":0}},"width":336,"height":66,"resume":true,"useHandCursor":true,"id":"6g4PmhQgWHU"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":18,"id":"01","url":"story_content/6BrY4OD8PVt_XY_9E0B0E.png","type":"normal","altText":"Cuplikan layar 2024-12-25 233922.png","width":141,"height":131,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":75,"yPos":446,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":38.5,"rotateYPos":36,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":78,"bottom":72,"altText":"Cuplikan layar 2024-12-25 233922.png","pngfb":false,"pr":{"l":"Lib","i":56}},"html5data":{"xPos":-1,"yPos":-1,"width":79,"height":73,"strokewidth":0}},"width":77,"height":72,"resume":true,"useHandCursor":true,"id":"5W5UYYDo7YY","events":[{"kind":"onrelease","actions":[{"kind":"history_prev"},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5aaiaoFyFjn.6lTTKxme6KF"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5aaiaoFyFjn.6gzqdCA41xH"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":16,"id":"01","url":"story_content/6OBULnOw0ch_9E0B0E.png","type":"normal","altText":"Cuplikan layar 2024-12-25 234158.png","width":142,"height":137,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":616,"yPos":14,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":41.5,"rotateYPos":40,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":84,"bottom":80,"altText":"Cuplikan layar 2024-12-25 234158.png","pngfb":false,"pr":{"l":"Lib","i":55}},"html5data":{"xPos":-1,"yPos":-1,"width":85,"height":81,"strokewidth":0}},"width":83,"height":80,"resume":true,"useHandCursor":true,"id":"6i9cj2bDFnU","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5aaiaoFyFjn.6QfeAATiLmJ"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5aaiaoFyFjn.6QfeAATiLmJ"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5aaiaoFyFjn.6QfeAATiLmJ"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"60hpFvKiq16_-2089372875","id":"01","linkId":"txt__default_5nHqhiHx3Ea","type":"acctext","xPos":4,"yPos":2,"xAccOffset":33,"yAccOffset":2,"width":139,"height":36,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Kumpulkan","style":{"fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","ascent":19.952,"descent":5.469,"leading":0,"underlinePosition":-1.404,"underlineThickness":0.93,"xHeight":10.19,"fontIsBold":false}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":9,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":14,"fontIsBold":true,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":157,"bottom":33,"pngfb":false,"pr":{"l":"Lib","i":127}}}],"shapemaskId":"","xPos":472,"yPos":454,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":88,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":177,"bottom":41,"altText":"Kumpulkan","pngfb":false,"pr":{"l":"Lib","i":123}},"html5data":{"xPos":-2,"yPos":-2,"width":179,"height":43,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":177,"bottom":41,"altText":"Kumpulkan","pngfb":false,"pr":{"l":"Lib","i":123}},"html5data":{"xPos":-2,"yPos":-2,"width":179,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":177,"bottom":41,"altText":"Kumpulkan","pngfb":false,"pr":{"l":"Lib","i":124}},"html5data":{"xPos":-2,"yPos":-2,"width":179,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":177,"bottom":41,"altText":"Kumpulkan","pngfb":false,"pr":{"l":"Lib","i":123}},"html5data":{"xPos":-2,"yPos":-2,"width":179,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":177,"bottom":41,"altText":"Kumpulkan","pngfb":false,"pr":{"l":"Lib","i":123}},"html5data":{"xPos":-2,"yPos":-2,"width":179,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":177,"bottom":41,"altText":"Kumpulkan","pngfb":false,"pr":{"l":"Lib","i":124}},"html5data":{"xPos":-2,"yPos":-2,"width":179,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":177,"bottom":41,"altText":"Kumpulkan","pngfb":false,"pr":{"l":"Lib","i":125}},"html5data":{"xPos":-2,"yPos":-2,"width":179,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":177,"bottom":41,"altText":"Kumpulkan","pngfb":false,"pr":{"l":"Lib","i":125}},"html5data":{"xPos":-2,"yPos":-2,"width":179,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":177,"bottom":41,"altText":"Kumpulkan","pngfb":false,"pr":{"l":"Lib","i":126}},"html5data":{"xPos":-2,"yPos":-2,"width":179,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":177,"bottom":41,"altText":"Kumpulkan","pngfb":false,"pr":{"l":"Lib","i":125}},"html5data":{"xPos":-2,"yPos":-2,"width":179,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":177,"bottom":41,"altText":"Kumpulkan","pngfb":false,"pr":{"l":"Lib","i":125}},"html5data":{"xPos":-2,"yPos":-2,"width":179,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":177,"bottom":41,"altText":"Kumpulkan","pngfb":false,"pr":{"l":"Lib","i":126}},"html5data":{"xPos":-2,"yPos":-2,"width":179,"height":43,"strokewidth":1}}}],"width":176,"height":40,"resume":true,"useHandCursor":true,"id":"5nHqhiHx3Ea","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"_parent.6aCxo92mkUA.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_parent.6p1kJttgHAt"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6gvhFrzm6D3.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6lp62PSxP1V_CorrectReview","id":"01","linkId":"6lp62PSxP1V_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":58}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":57}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6lp62PSxP1V_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6lp62PSxP1V_IncorrectReview","id":"01","linkId":"6lp62PSxP1V_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":60}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":59}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6lp62PSxP1V_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_6lp62PSxP1V_ReviewShape","id":"01","linkId":"txt_6lp62PSxP1V_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":212,"bottom":280,"pngfb":false,"pr":{"l":"Lib","i":115}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":6,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":212,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":655,"bottom":285,"altText":"","pngfb":false,"pr":{"l":"Lib","i":114}},"html5data":{"xPos":0,"yPos":0,"width":655,"height":285,"strokewidth":0}},"width":648,"height":424,"resume":false,"useHandCursor":true,"id":"6lp62PSxP1V_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');