KISSY.add('UITester', function (S){

    var DOM = S.DOM, Event = S.Event, IO = S.IO,
        win = window, doc = document,
        uiTester;

    uiTester = {
        configs: {
            defaultInjectScripts: {
                jasmine: '../lib/jasmine.js',
                jasmineHtml: '../lib/jasmine-html.js',
                eventSimulate: '../lib/event-simulate.js'
            },

            taskQueues: [

                /**
                 * ����˵��:
                 *
                 * {
                 *   testURI: 'http://www.taobao.com/',
                 *   caseURIs: [
                 *      'http://xxx/test1.js',
                 *      'http://xxx/test2.js',
                 *      'http://xxx/test3.js'
                 *      ],
                 *   status: 'wait' // ��ȡ��ֵ��: waiting, testing, successed, failed
                 * }, {
                 *   testURI: 'http://www.taobao.com/',
                 *   caseURI: ['http://xxx/test4.js'],
                 *   status: 'finished'
                 * }, {
                 *   testURI: 'http://www.taobao.com/',
                 *   caseURI: ['http://xxx/test3.js'],
                 *   status: 'finished'
                 * }
                 *
                 */

            ]
        },

        // ��ʼ������ģ��
        init: function (){
            var host = this;

            // ���¼�
            host.bindEvent();
            
        },

        // ��ʼ�� postMessage ����
        _initPostMessage: function (){
        },

        // ����������������
        _addToTaskQueue: function (){
        },

         // ������������Ƴ�����
        _removeFromTaskQueue: function (){
        },

        // Ϊ�������Կ�ܰ��¼�
        bindEvent: function (){
            var host = this;

            host._bindTaskConfigEvent();
        },

        _bindTaskConfigEvent: function (){
            var host = this;

            Event.on(document, 'click', function (ev){
                var target = ev.target;

                if (DOM.hasClass(target, 'J_AddTask')){
                    host._addTask(ev, target);
                }

                if (DOM.hasClass(target, 'J_StartTest')){
                    host._startTask(ev, target);
                }

            });
        },

        // ���������е�����
        _startTask: function (ev, target){
            ev.preventDefault();
        },

        _addTask: function (ev, target){
            ev.preventDefault();

            var parentNode = DOM.parent(target, '.J_TaskConfig'),
                targetToBeCloned = DOM.get('.J_CaseURI', parentNode),
                neoNode = DOM.clone(targetToBeCloned);

            neoNode.value = '';

            DOM.insertBefore(neoNode, targetToBeCloned);
        },
        
        // ע����Խű�
        injectResource: function (){
        }

    };


    S.ready(function (){
        uiTester.init();
    });
});
