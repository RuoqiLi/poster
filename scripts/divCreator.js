window.onload= function initial(){
    sMatrix = [
        [1,2,1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,1,2,1],
        [3,2,3,2,3,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,2,3,2,3,2,3],
        [3,2,3,2,3,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,2,3,2,3,2,3],
        [1,3,3,3,3,3,3,2,3,2,3,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1],
        [1,3,1,3,1,3,1,3,3,2,3,3,3,2,3,2,3,2,3,2,1,3,1,3,1,3,1],
        [1,3,1,3,1,3,1,3,1,3,1,3,1,2,3,2,3,2,3,2,3,2,3,2,3,3,1],
        [3,2,3,2,3,3,1,3,1,3,1,3,1,2,1,3,1,3,1,3,1,3,3,2,3,2,3],
        [3,2,3,2,3,3,1,3,1,3,1,3,1,2,1,3,1,3,1,3,1,3,3,2,3,2,3],
        [1,2,1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,1,2,1]
    ]//将整个结构分成9行27列的矩阵，以便于生成行divs和单元divs
    creatRows(9);
    creatCells();//窗口加载完成后初始化，生成行divs（rows）和单元divs（cells）
}

function creatRows(rows){//这个函数生成行divs
    for (var i=1;i<=rows;i++){//遍历行
        var cDiv = document.createElement("div");//生成新div
        cDiv.className="rCon";//给新div添加样式
        document.getElementById('wCon').appendChild(cDiv);//插入新div
    }
}

function creatCells(){//这个函数生成cell
    var rDivs = document.getElementsByClassName("rCon");//将所有的行div  get到数组rDivs中
    for(var i =0;i < rDivs.length;i++){//对 行div进行 遍历
        var red = true;//通过red变量的布尔值实现黑红色单元格相间
        for(var j=0;j<27;j++){//遍历生成某一行中的27个cells
            var pt = sMatrix[i][j];//获取矩阵中的对应数字
            var cellClassName = "div_width_" + pt.toString();//将矩阵数字转变为css中不同的宽度样式【style.css  32-41】
            var cell = document.createElement('div');//生成单个cell
            cell.className = cellClassName + " cell";//设定cell统一样式【style.css 16-24】
            if(j==0){
                cell.className += " gap"; //每行第一个cell设置左边距，以解决变形后图形超过父div的问题
            }
            if(red){
                cell.className += " redBack";//设置cell颜色为红
            }
            red = !red;//转变布尔值red
            rDivs[i].appendChild(cell);//将生成的cell插入到行div中
        }
    }
}