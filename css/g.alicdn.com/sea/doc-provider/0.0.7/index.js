/**
 * Created by shipeng on 5/14/2017.
 */
KISSY.add('sea/dos-provider/0.0.7/index',["node","base","io","json"],function(S ,require, exports, module) {
    var $ = require('node').all;
    var Base = require('base');
    var IO = require('io');
    var JSON = require('json');
    var st,et;
    var DosProvider = Base.extend({
        initializer:function(conf){

            var self=this;
            self.set('config',S.merge(self.get('config'),self.userConfig));
            self.cacheDosData=window.g_config&&window.g_config.cacheDosData || false;
            st = new Date().getTime();
            new IO({
                url: self.get('config').url,
                dataType: 'jsonp',
                data: self.get('config').data,
                success: function(data){
                    if(data&&data.content.statusCode=='200'){
                        self.cacheData(data);

                        self.get('config').success&&self.get('config').success.call(self,data);
                        self.sendReport('normal');

                    }else{
                        self.backUp();

                    }
                },
                error: function(e){
                    self.backUp();
                }
            });
        },
        backUp:function(e){
            var self=this;
            var backupData=self.getCacheData();
            if(!S.isEmptyObject(backupData)){
                //上报，请求失败，采用cache数据
                self.get('config').success&&self.get('config').success.call(self,backupData);
                self.sendReport('cache');
            }else{
                //上报，请求失败，无备份，采用打底数据
                self.getTMSData(function(data){
                    self.get('config').success&&self.get('config').success.call(self,data);
                    self.sendReport('static');
                },function(data){
                    //上报，静态打底数据缺失
                    self.get('config').error&&self.get('config').error.call(self);
                    self.sendReport('error');
                });
            }
        },
        clearData:function(){
            var self=this;
            if(typeof window.localStorage != 'undefined'){
                var storage = window.localStorage;
                var i=0;
                while(i<storage.length){

                    var key = storage.key(i);
                    if(key.indexOf(self.get('config').data.widgetId)>=0){
                        storage.removeItem(key);
                    }
                    i++;

                }
            }
        },
        cacheData:function(data){
            var today = new Date();
            var self=this;
            if(!self.cacheDosData){
                self.clearData();
            }
            var key='DOS_'+self.get('config').data.widgetId;
            if(typeof window.localStorage != 'undefined'){
                var storage = window.localStorage;
                if(self.cacheDosData){
                    if(storage.getItem(key)){
                        var olddata=JSON.parse(storage.getItem(key));
                        if(olddata.time-new Date().getTime()>60*1000*60*24){
                            storage.removeItem(key);
                            var temp={data:data,time:new Date().getTime()};
                            storage.setItem(key,JSON.stringify(time));
                        }
                    }else{

                        var temp={data:data,time:new Date().getTime()};
                        storage.setItem(key,JSON.stringify(temp));
                    }
                }
            }

        },
        getCacheData:function(){
            var self=this;
            var data={};
            var today = new Date();
            var temp={};
            var key='DOS_'+self.get('config').data.widgetId;
            if(typeof window.localStorage != 'undefined'){
                if(localStorage.getItem(key)!=null){
                    temp=JSON.parse(localStorage.getItem(key));
                }
            }
            return temp.data || '';
        },
        sendReport:function(type){
            var self=this;
            et = new Date().getTime();
            if(!window.JSTracker2) return;
            var url='?widgetId='+self.get('config').data.widgetId;
            switch (type){
                case 'normal':
                    JSTracker2.push({
                        msg: url + (et-st) + '接口返回正常'
                    });
                    break;
                case 'cache':
                    JSTracker2.push({
                        msg: url + (et-st) + '接口错误，采用缓存数据'
                    });
                    break;
                case 'static':
                    JSTracker2.push({
                        msg: url + (et-st) + '接口错误，采用容灾数据'
                    });
                    break;
                default :
                    JSTracker2.push({
                        msg: url + (et-st) + '接口错误'
                    });
                    break;
            }

        },
        getTMSData:function(success,error){
            var self=this;
            new IO({
                url: '//www.taobao.com/go/rgn/all/dos-back.php',
                dataType: 'jsonp',
                data: {
                    widgetId:self.get('config').data.widgetId
                },
                success: function(data){
                    if(data&&data.content.statusCode=='200'){
                        self.cacheData(data);
                        success&&success.call(self,data);
                    }else{
                        error&&error.call(self);

                    }
                },
                error: function(e){
                    error&&error.call(self);
                }
            });

        }
    },{
        ATTRS:{
            config:{
                value:{
                    url: '//dosapi.taobao.com/tao/data/doQuery.jsonp',
                    dataType: 'jsonp',
                    data: {
                        limit:'6',
                        widgetId:'1288',
                        displayType:'STRUCTURE_DATA',

                    },
                    scriptCharset:'gbk',
                    success:{},
                    error:{}

                }
            }

        }
    });
    module.exports = DosProvider;




});