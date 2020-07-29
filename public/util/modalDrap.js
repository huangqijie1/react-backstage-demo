$(function () {
  // 弹窗拖拽功能
  $(document).on('mousedown', '.ant-modal-header', function (e) {
    // var max_x = $(window).width() - $(this).width()// 获取浏览页面的宽度
    // var max_y = $(window).height() - $(this).height()
    var ev = window.event || e
    var old_mouse_x = ev.clientX // 获取鼠标开始的横轴位置
    var old_mouse_y = ev.clientY // 获取鼠标开始的纵轴位置
    var wrap = $(this).parents('.ant-modal') // $('.wrap')
    var position_l = wrap.offset().left // 弹出框距离的横轴位置
    var position_t = wrap.offset().top // 弹出框距离的纵轴位置
    $(document).on('mousemove', '.ant-modal-header', function (n) {
      var nv = window.event || n
      var new_mouse_x = nv.clientX // 获取鼠标现在的横轴位置
      var new_mouse_y = nv.clientY // 获取鼠标现在的纵轴位置
      var new_x = new_mouse_x - old_mouse_x + position_l // 弹出框现在的横轴位置
      var new_y = new_mouse_y - old_mouse_y + position_t // 弹出框现在的纵轴位置
      // 三元表达式 判断有没有超出边界，有的话置于相应的值
      // new_x = (new_x < 0) ? 0 : new_x
      new_y = (new_y < 0) ? 0 : new_y
      // new_x = (new_x > max_x) ? max_x : new_x
      // new_y = (new_y > max_y) ? max_y : new_y
      var wrap = $(this).parents('.ant-modal') // $('.wrap')
      wrap.css({ position: 'absolute', 'left': new_x, 'top': new_y })
    })
    $(document).on('mouseup', '.ant-modal-header', function (e) {
      $(document).off('mousemove', '.ant-modal-header')
      $(document).off('mouseup', '.ant-modal-header')
    })
  })
  // 弹窗全屏放大
  $(document).on('click', '.ant-modal-fullscreen', function (e) {
    var wrap = $(this).parents('.ant-modal')
    wrap.css({ position: 'relative', 'left': 0, 'top': 0 })
    if (wrap.hasClass('fullscreen')) {
      // 缩小
      wrap.removeClass('fullscreen')
      $(this).find('.anticon').addClass('anticon-fullscreen').removeClass('anticon-fullscreen-exit')
    } else {
      // 放大
      wrap.addClass('fullscreen')
      $(this).find('.anticon').removeClass('anticon-fullscreen').addClass('anticon-fullscreen-exit')
    }
  })
  // 为Excel预览表格每一项注册点击事件
  $(document).on('click', 'td[t]', function (e) {
    // $('#tooltip').remove()
    const myTitle = e.toElement.id.slice(4,)
    // var tooltip = "<div id='tooltip' style='background:lightblue; z-index: 9999'>" + myTitle + '</div>'
    var tooltip = "<div id='tooltip' class='ant-message'><span><div class='ant-message-notice'><div class='ant-message-notice-content'><div class='ant-message-custom-content ant-message-info'><i aria-label='icon: info-circle' class='anticon anticon-info-circle'><svg viewBox='64 64 896 896' data-icon='info-circle' width='1em' height='1em' fill='currentColor' aria-hidden='true' focusable='false' class=''><path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z'></path></svg></i><span>" + myTitle + ':  ' + $(e.toElement).html() + '</span></div></div></div></span></div>'
    $('body').append(tooltip)
    setTimeout(() => {
      $('#tooltip').remove()
    }, 2000)
  })
})
