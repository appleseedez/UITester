/*����KISSY 1.2*/

var S = KISSY;
    $ = S.all;
function checkVersion (){
    if(S.version !== '1.20'){
        new Error("������kissy 1.2");
        return false;
    }else{
        return true;
    }
}


beforeEach(function(){
    if(!checkVersion()){
        return ;
    }

    this.addMatchers({
        // this.actual {htmlNode}

        hasClass:function(targetSelector,expectClassName){

            /*var host = this;
            var matcherArgs = jasmine.util.argsToArray(arguments);
            if(host.actual == 'iexpectTarget'){
                host.actual = $(targetSelector);
              // ���� �ǵ��õ�iexpect
              this.spec.runs(function(){
                  var expectResult = new jasmine.ExpectationResult({
                      matcherName: "",
                      passed: host.actual.hasClass(expectClassName),
                      expected: matcherArgs.length > 1 ? matcherArgs : matcherArgs[0],
                      actual: host.actual,
                      message: ""
                  });

                  host.spec.addMatcherResult(expectResult);
                  return host;
              });
            }else{
              // ���õ���expect
                if($(host.actual)){
                    return $(host.actual).hasClass(arguments[arguments.length-1]);
                }else {
                    return false;
                }

            }*/
            console.log($(targetSelector));
           console.log($(targetSelector).hasClass(expectClassName));
            return $(targetSelector).hasClass(expectClassName);


        },
        // ������һ���ڵ�
        // spec �����һ��record����
        toHaveAppendChild:function(selector,expectNum){
           if(!this.record){
               jasmine.record(this.actual);
               this.spec.matcherArr = [];
               this.spec.matcherArr.pus(arguments.callee)
           }
           if(arguments[1]&&typeof arguments[1] == 'number'){
               var expectNum = expectNum;
           }else{
               var expectNum = 1;
           }

            var recordNode = $(this.record);
            var actualNode = $(this.actual);
            if(!recordNode || !actualNode) {
                return false;
            }
            var actualChildren = $(selector,actualNode);
            var recordChildren = $(selector,recordNode);

           if(recordChildren.length + expectNum == actualChildren.length ){

               return true;
           }
           return false;
        }
    })
}) ;
