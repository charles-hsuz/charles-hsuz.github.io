var turndownService=new TurndownService;function markdown(){console.log(turndownService.turndown(document.querySelector("#article-container")))}console.log(markdown),rule_tab={filter:function(e,n){return"code"===e.id},replacement:function(e,n){return console.log(n),""}},turndownService.addRule("strikethrough",rule_tab);