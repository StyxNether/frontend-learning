// 新增数据函数
function addrow() {
    // 获取表格节点
    var table = document.getElementById("table");
    // console.log(table);

    // 获取插入位置
    var length = table.rows.length;
    // console.log(length);

    // 插入行节点
    var newrow = table.insertRow(length);
    //console.log(newrow);

    // 插入列节点(单元格)
    var namecol = newrow.insertCell(0);
    var phonecol = newrow.insertCell(1);
    var actioncol = newrow.insertCell(2);
    // console.log(namecol, phonecol, actioncol);

    // 设置单元格内容
    namecol.innerHTML = '未命名';
    phonecol.innerHTML = '无联系方式';
    actioncol.innerHTML = '<button onclick="editrow(this)">编辑</button><button onclick="deleterow(this)">删除</button>';
}

function deleterow(button) {
    // 获取当前按钮所在的行
    var row = button.parentNode.parentNode;
    // 删除该行
    row.parentNode.removeChild(row);
}

function editrow(button) {
    // 获取当前按钮所在的行
    var row = button.parentNode.parentNode;

    // 获取姓名和联系方式单元格
    var name = row.cells[0];
    var phone = row.cells[1];

    // 弹出输入框，获取用户输入的新值
    var inputName = prompt("请输入姓名：", name.innerHTML);
    var inputPhone = prompt("请输入联系方式：", phone.innerHTML);

    // 更新单元格内容
    if (inputName !== null) {
        name.innerHTML = inputName;
    }
    if (inputPhone !== null) {
        phone.innerHTML = inputPhone;
    }
}