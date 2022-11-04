import { defineComponent, ref } from "vue";
import style1 from './First.module.scss';
import cloud from '../../assets/icons/cloud.svg'
import { RouterLink } from "vue-router";
import {WelcomeLayout} from './WelcomeLayout';
export const Forth = defineComponent({
    setup(props, context) {
        const slots = {
            icon:()=> <img src={cloud}/>,
            title:()=><h2>云备份<br/>再也不怕数据丢失</h2>,
            buttons:()=> <>
                <RouterLink class={style1.fake} to="/welcome/start">跳过</RouterLink>
                <RouterLink to="/welcome/start">完成</RouterLink>
                <RouterLink to="/welcome/start">跳过</RouterLink>
              </>
        }
        return () => (
           <WelcomeLayout v-slots={slots}></WelcomeLayout>
        )
    }
})