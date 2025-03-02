import { createRouter ,createWebHashHistory } from "vue-router"
import Home from '../components/Home.vue'
import NoteList from '../components/NoteList.vue'
import ShowNote from "../components/ShowNote.vue"

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home",
            component:Home
        },
        {
            path:"/noteList",
            component:NoteList
        },
        {
            path:"/showNote",
            component:ShowNote
        }
    ]
})

// //路由前置守卫
// router.beforeEach(
//     (to,from,next)=>{
//         //登录,注册放行
//         if(to.path=="/login"||to.path=="/register"){
//             next();
//         }
//         let token=localStorage.getItem("token");
//         //如果未登录则跳转到登录界面
//         if(token==null){
//             next("/")
//         }
//         //已登录直接放行
//         next();
//     }
// )

export default router;