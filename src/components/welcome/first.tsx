import { defineComponent, ref } from "vue";
import style1 from './WelcomeLayout.module.scss';
import { RouterLink } from "vue-router";
import { WelcomeLayout } from './WelcomeLayout';
import logo from '../../assets/icons/存钱罐.svg'
export const First = () => (
    <WelcomeLayout>{{
        icon: () => <img src={logo} />,
        title: () => <h2>精打细算<br />加根鸡腿吧</h2>,
        buttons: () => <>
            <RouterLink class={style1.fake} to="/welcome/start">跳过</RouterLink>
            <RouterLink to="/welcome/2">下一页</RouterLink>
            <RouterLink to="/welcome/start">跳过</RouterLink>
        </>
    }}
    </WelcomeLayout>
)
First.displayName = 'First'