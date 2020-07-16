/**
 * @file viscroll directive unit test
 * @author MarxJiao
 */

import Vue from 'vue';

import vcallapp from '../../src/index.js';


describe('vcallapp directive test', () => {
    it('vcallapp shoud work fun', () => {
        let com = {
            template: `<button ref='callappRef' v-callapp="callappInfo">v-callApp点击</button>`,
            data() {
                return {
                    callappInfo: {
                        trackUrl:'baidu1.com',
                        deeplinkurl:'baidu2.com',
                        staturl:'baidu3.com',
                        landurl:'baidu4.com',
                    }
                }
            }
        }

        Vue.use(vcallapp)
        let a = new Vue(com).$mount();
        this.$refs.callappRef.click()
        console.log(a);
        // expect(true).toEqual(true);
    })
});