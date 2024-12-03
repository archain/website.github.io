noticeDict = {
    //联调时只能用"py_level3_2_1_v2"这个cid。正式配课需要换成正式的
    /* 正则基本原则
        1. 能写notice里就尽量不写rule里，让学生看到错误效果后再提示；
        2. 能写RegN里就尽量不写RegY里，尽可能预判学生会出现的错误，而不是规定必须要写xxx代码。
    */
    "c-L1-1-v3":{
        //预设代码
        "frontCode":`#include <iostream>//▼\n#include <cstring>\n#include <hetao.h>\nusing namespace std;\nint main(){//▲`,
        "rearCode": `return 0;//▼\n}//▲`,
        "answer": [],
        //代码执行前判定，学生代码不许出现xxx
        "ruleRegN": {
            "\n创建变量的 int 前面不要有其他内容哦。":/\s*\S+\s*int\b.*/s,
            "\n等号只需要一个，删除多余的等号吧\n示例：\nint life = 7;":/((=\s*){2,})|((=\.+){2,})/s,

            "\ncout 这一行前面不要有其他内容哦。":/;\s*\S+\s*cout\b.*/s,
            "\n你的cout两个运算符中间还没有输出内容哦！快加上 life 吧！\n示例:\ncout << life << endl; ":/\s*\bcout\s*<<\s*<</s,

            "\n本关的任务是创建变量，记录生命值并输出，不需要再写其他代码哦！":/([^\S]*\s*int\s+life\s*=\s*7\b\s*;\s*\s*cout\s*<<\s*life\s*<<\s*endl\s*;\s*)\S+/s,
            //"\n本关的任务是创建变量，记录生命值并输出，不需要再写其他代码哦！":/(\S+\s*int.*\b7\b\s*\;\s*)/s,
            
            //"\n等号前边有多余的内容\n示例：\nint life = 7;":/(life\s\S+\s*\=\s*\b7\b)/s,
            //"\n等号后边有多余内容, 等号后面要直接写整数 7\n示例：\nint life = 7;":/\=\s*\S+\s*\b7\b\s*;/s,

            //"\n输出符是 << 哦，中间不要加空格！":/\<\s+\<.*/,
            //"\n输出符是 << 哦，你写错啦！":/cout\b.*(\<\>|\>\<|\>|\《|\》)/s,
            //"\n输出符是 << 哦，你写少啦！":/(cout\b\s*\<[^\<])|(cout\b\s*\<\<[^\<]*\<[^\<])/s,
            //"\n输出符是 << 哦，你写多啦！":/\<\<\<+/s,
            //"\n输出符是 << 哦，你写反啦！":/(cout\b\s*\>\>)|(\s*\bcout\b\s*\<\<.*\>\>)/s,

            //"\nendl前面记得也要写输出符<<哦！":/[^\<][^\<]\s*\bendl\b/s,
            //"\nendl和前面输出符<<之间不要再写其他内容了哦！":/\<\<\s*\S+\s*\bendl\b/s,
            
            
            //"\n创建life变量记录声明值结束时要用英文分号结尾哦！":/\s*\bint\s+\blife\b\s*\=\s*7\b\s*[^\;]/s,
            //"\n输出结束时要用英文分号结尾哦！":/\s*\bcout\s*\<\<.*\<\<\s*endl\s*[^\;]/s,
        },
        //代码执行前判定，学生代码必须出现xxx
        "ruleRegY": {
            //2024.8.2更新 将int main(){ 移出预设代码，使用正则进行检测
            //"\nint main( ){ 属于C++代码框架\n不要进行改动\n请复原或点击重做按钮\n":/^\s*\bint\s+main\s*\(\s*\)\s*\{/s,

            "\n你还没有编写代码哦！就从创建变量开始吧！\n快捷输入点击 int 开始创建一个整数变量.\n示例：\nint life = 7;":/\s*\S+/s,

            "\n创建整数类型变量要正确使用 int ，检查一下！可以试试快捷输入哦。\n示例：\nint life = 7;":/\s*int\s*/s,
            "\n int 后面要跟变量名 life ，并且用空格隔开，仔细检查一下哦。\n示例：\nint life = 7;":/\s*\bint\s+\blife\b\s*/s,
            "\n检查一下 = 有没有错误，全靠它把数据存储到变量里面。\n你可以试试用快捷输入。\n示例：\nint life = 7;":/\s*\bint\s+\blife\b\s*\=/s,
            "\n等号 = 后面是要存进去的整数 7 ，检查一下吧~\n示例：\nint life = 7;":/\s*\bint\s+life\s*\=\s*\b7\b\s*/s,
            "\n检查一下，第一句代码结尾要跟英文分号哦！不是其他内容哦！\n示例：\nint life = 7;":/7\s*;\s*/s,
            //"完整代码：":/[^\S]*\s*int\s+life\s*=\s*\b7\b\s*;\s*/s,

            "\n第二句代码似乎还没写，可以试试快捷输入，点击 cout 继续吧！\n示例：\ncout << life << endl;":/\s*\bint\s+life\s*\=\s*\b7\b\s*;\s*cout/s,
            "\n输出语句要正确使用功 cout，不然看不到任何内容。\n示例：\ncout << life << endl;":/\s*\bcout\b\s*/s,
            "\n输出语句的 cout 后面要跟输出符 <<，你可以使用快捷输入。\n示例：\ncout << life << endl;":/\s*\bcout\s*\<\<\s*/s,
            "\n检查一下， cout << 后面应该是 life  \n示例：\ncout << life << endl;":/\s*\bcout\s*\<\<\s*\blife\b\s*/s,
            "\ncout语句的 life 的后面要跟输出符 << 哦~,检查一下吧~\n示例：\ncout << life << endl;":/\bcout\s*<<\s*\blife\b\s*<</s,
            "\ncout语句后面的 << 跟的是 endl，可以试试快捷输入。\n示例：\ncout << life << endl;":/\s*\b\bcout\s*\<\<\s*\blife\b\s*\<\<\s*endl/s,
            //"\n注意结束的 endl ，注意字母“l”和数字“1”的区别。可以试试快捷输入\n示例：\ncout << life << endl;":/[^\S]*\s*cout\s*<<\s*life\s*<<\s*endl\s*/s, 
            //"完整代码：":/\s*cout\s*<<\s*life\s*<<\s*endl\s*;\s*/s,
            "\ncout输出语句代码结尾要跟英文分号，不是其他内容哦~可以试试快捷输入\n示例：\ncout << life << endl;":/\<\<\s*endl\s*;\s*/s,
        },
        //语法错误
        "errReg": {},
        //代码执行后判定，学生代码不该出现xxx
        "noticeRegN": {
            
        },
        //代码执行后判定，学生代码需要出现xxx
        "noticeRegY": {
            "\n仔细检查代码拼写和标点符号,正确完成任务目标哦！\n示例：\nint life = 7;\ncout << life << endl;": /[^\S]*\s*int\s+life\s*=\s*7\b\s*;\s*\s*cout\s*<<\s*life\s*<<\s*endl\s*;\s*[^\S*]/s,
        }
    }
}
front_end_code = {
    //联调时只能用"py_level3_2_1_v2"这个cid。正式配课需要换成正式的
    "c-L1-1-v3":[
        `
        #include <iostream>
        #include <cctype>
        #include <thread>
        #include <cstring>
        #include "walnut_edu.h"
		#include "pangu.h"

        using namespace std;

        void runScratchAndWait() {
            hetao.setVariable("Start", "1");
            hetao.runScratch();
			
			PanguSprite sprite = pangu.getSprite("小核桃");
			int counter = 10;
			while (counter > 0) {
				sprite.move(60);
				time.sleep(200);
				counter--;
			}
			sprite.move(60);
			
            while (true) {
                wchar_t Start[] = hetao.getVariable("Start");
                if (_isEqual(Start, "0")) {
                    break;
                }
                time.sleep(200);
            }
        }

        int _cout(const wchar_t* str) {
                
            _print(str);
            if(_isEqual(str,"\\n")){
                
            }else{
                hetao.setVariable("life", str);
                runScratchAndWait();
            }
            
            return 0;
        }
        `,
        `
        int _main_() {
            main();
            return 0;
        }
        `    
    ]
}

