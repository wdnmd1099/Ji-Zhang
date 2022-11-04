import { defineComponent, ref } from "vue";
import style1 from './WelcomeLayout.module.scss';
import clock from '../../assets/icons/clock.svg';
import { RouterLink } from "vue-router";
import { WelcomeLayout } from './WelcomeLayout';
export const Second = defineComponent({
    setup(props, context) {
            return ()=>(
            <WelcomeLayout>{{
                icon: () => <img src={clock} />,
                title: () => <h2>每日提醒<br />再也不怕数据丢失</h2>,
                buttons: () => <>
                    <RouterLink class={style1.fake} to="/welcome/start">跳过</RouterLink>
                    <RouterLink to="/welcome/3">下一页</RouterLink>
                    <RouterLink to="/welcome/start">跳过</RouterLink>
                </>
            }}
            </WelcomeLayout>)
    }
})