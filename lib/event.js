/*
*  1. createEvent��eventType��
������eventType ��5�����ͣ�

Events ���������е��¼�.
HTMLEvents������ 'abort', 'blur', 'change', 'error', 'focus', 'load', 'reset', 'resize', 'scroll', 'select',
'submit', 'unload'. �¼�


UIEevents ������ 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'keydown', 'keypress', 'keyup'.
��Ӱ��� MouseEvents.

MouseEvents������ 'click', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup'.

MutationEvents:���� 'DOMAttrModified', 'DOMNodeInserted', 'DOMNodeRemoved',
'DOMCharacterDataModified', 'DOMNodeInsertedIntoDocument',
'DOMNodeRemovedFromDocument', 'DOMSubtreeModified'.

2. ��createEvent������ʼ����Ϊ��ҽ���5�ֶ�Ӧ�ĳ�ʼ������
HTMLEvents �� ͨ�� Events��
initEvent( 'type', bubbles, cancelable )

UIEvents ��
initUIEvent( 'type', bubbles, cancelable, windowObject, detail )

MouseEvents��
initMouseEvent( 'type', bubbles, cancelable, windowObject, detail, screenX, screenY,
clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget )

MutationEvents ��
initMutationEvent( 'type', bubbles, cancelable, relatedNode, prevValue, newValue,
attrName, attrChange )

* */


!function(WIN){
    WIN.Servent  = {
        fire:function(type,el){
            var host = this;
            switch(type){
               case 'click' : host._click(el);
                break;
               case 'mouseover':host._mouseover(el);
                break;
               case 'mouseout':host._mouseout(el);
                break;
                case 'scroll':host._scroll();
                break;
                case 'focus':host._focus(el);
                break;
                case 'submit':host._sumbit(el);
            }
        },
        _click:function(el){
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent('click',true,true);
            el.dispatchEvent(evt);
        },
        _mouseover:function(el){
            var parent = el.parentNode;
            //var archer = mini('.btn')[0]; // ����event.relatedTarget
            var evt = document.createEvent("MouseEvents");
            // �����ʼ��ʱָ����relatedTarget��ʲô. ͬһ�ڵ��mouseout�¼�����ʱ, relatedTarget����ʲô
            evt.initMouseEvent("mouseover",true,true,window,1,0,0,0,0,false,false,false,false,0,parent);
            el.dispatchEvent(evt);
        },
        _mouseout:function(el){
            var parent = el.parentNode;
            //var archer = mini('.btn')[0]; // ����event.relatedTarget
            var evt = document.createEvent("MouseEvents");
            evt.initMouseEvent("mouseout",true,true,window,1,0,0,0,0,false,false,false,false,0,parent);
            el.dispatchEvent(evt);
        },
        // ͨ���ظ�������ģ�������Ϊ
        // ����body֧��  ������
        _scroll:function(){
            var el = document.body;
            var evt = document.createEvent('HTMLEvents');
            evt.initEvent('scroll',false,true);
            el.dispatchEvent(evt);
        },
        _focus:function(el){
            var evt = document.createEvent('HTMLEvents');
            evt.initEvent('focus',false,true);
            el.dispatchEvent(evt);
        },
        _sumbit:function(formEl){
            //var evt = document.createEvent('HTMLEvents');
            //evt.initEvent('submit',true,true);
            //formEl.dispatchEvent(evt);

            // dispatchEvent()��submit��Ч ֱ����submit����
           formEl.submit();
        }

    };


}(window);

