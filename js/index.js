// console.log('成功注入脚本！');

var link_forward_x,
    link_forward_y,
    link_forward_offset, // y
    link_forward_threshold = -40,
    link_forward_href;

$(document).on("dragstart", function(event) {
    // console.log("start")
    link_forward_href = event.target.href
    link_forward_x = event.clientX
    link_forward_y = event.clientY
});

$(document).on("dragover", function(event) {
    // console.log("dragging")
    link_forward_offset = event.clientY - link_forward_y
});

$(document).on("dragend", function(event) {
    // console.log("end")
    if (link_forward_offset < link_forward_threshold) {
        // console.log("go")
        chrome.runtime.sendMessage({url: link_forward_href}, function(response) {
            console.log(response.message);
        });
    }
});sendMessage