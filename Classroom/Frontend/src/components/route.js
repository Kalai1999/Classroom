import Login from './Login';
import Signup from './Signup';
import Home from './home'
import Test from './tests'
import Assignment from './assignments';
import Calendar from './calendar'
const Routes = [
 {
     name:'login',
     path:'/',
     component:Login
 },
 {
     name:'signup',
     path:'/signup',
     component:Signup
 },
 {
    name:'home',
    path:'/home',
    component:Home
},
{
    name:'tests',
    path:'/tests',
    component:Test
},
{
    name:'assignments',
    path:'/assignments',
    component:Assignment
},
{
   name:'calendar',
   path:'/calendar',
   component:Calendar
}
];

export default Routes;