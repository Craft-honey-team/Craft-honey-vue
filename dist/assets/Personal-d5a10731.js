import{_ as g,g as d,h,u as _,s as m,r as f,o as i,e as b,w as v,b as e,t as s,c,f as y,F as P}from"./index-0ba25b6d.js";const A={beforeRouteEnter(n,o,a){const p=d();h(p,t=>{if(t){const l=t.uid;console.log(l),console.log(o),l!=n.params.id&&a("/"),a()}})},data(){return{store:_()}},methods:{exitPersonalArea(){const n=d();m(n).then(()=>{this.store.uid="",this.store.loggedIn=!1,this.store.getCart(),this.$router.push(`/${this.store.lang}/Home`)}).catch(o=>{})}}},w={class:"my-[40px]"},k={class:"text-[50px]"},C={class:"grid grid-flow-col auto-cols-max mb-[20px] text-[20px]"},B=e("span",{class:"justify-self-center mx-2 max-[700px]:hidden"},"|",-1),E={class:"bg-gray-200 h-[30px] flex items-center font-bold font-roboto rounded-[10px] px-2 text-black text-center"},D={class:"grid grid-flow-row gap-5"},L={class:"bg-[#ecd38e] rounded-lg text-[25px] flex items-center p-4"},S={class:"bg-[#beedb5] p-4"},j={class:"text-[20px]"},F={class:"flex justify-around mt-4"},H={class:""},I={class:"text-slate-700"},M={class:"text-slate-700"},N={class:"text-slate-700"},O={class:"text-slate-700"};function R(n,o,a,p,t,l){const u=f("Layout");return i(),b(u,null,{default:v(()=>[e("div",null,[e("div",w,[e("p",k,s(t.store.langProp.personalarea),1)]),e("div",C,[e("button",{onClick:o[0]||(o[0]=r=>n.$router.push(`../PersonalArea/${n.$route.params.id}`)),class:"bg-[#EAAD02] h-[30px] rounded-[10px] px-2 text-white hover:bg-amber-400"},s(t.store.langProp.settings),1),B,e("span",E,s(t.store.langProp.myorders),1)]),e("div",D,[e("div",L,[e("p",null,s(t.store.langProp.myorders),1)]),(i(!0),c(P,null,y(t.store.orders,(r,x)=>(i(),c("div",S,[e("p",j,s(t.store.langProp.orders)+" №"+s(x+1),1),e("div",F,[e("div",H,[e("p",I,s(t.store.langProp.delivery),1),e("p",null,s(r.address),1)]),e("div",null,[e("p",M,s(t.store.langProp.paymentMethod),1),e("p",null,s(r.payment),1)]),e("div",null,[e("p",N,s(t.store.langProp.deliveryType),1),e("p",null,s(r.delivery),1)]),e("div",null,[e("p",O,s(t.store.langProp.total),1),e("p",null,s(r.sum)+" kgs",1)])])]))),256))]),e("button",{onClick:o[1]||(o[1]=(...r)=>l.exitPersonalArea&&l.exitPersonalArea(...r)),class:"bg-[#EAAD02] h-[30px] w-[200px] rounded-[10px] my-4 px-2 text-center text-white hover:bg-amber-400"},s(t.store.langProp.leave),1)])]),_:1})}const V=g(A,[["render",R]]);export{V as default};