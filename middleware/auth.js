export default function ({store, route, redirect}){
  // if (route.path !== '/login') {
  //   //we are on a protected route
  //   // if(!app.$fire.auth.currentUser) {
  //   //   //take them to sign in page
  //   //   return redirect('/login')
  //   // }
  //   // if(app.$fire.auth.currentUser) {
  //   //   //take them to sign in page
  //   //   return redirect('/')
  //   // }

  // } else if (route.path === '/login') {
  //   if(!app.$fire.auth.currentUser) {
  //     //leave them on the sign in page
  //     console.log("not logged in")
  //   } else {
  //     console.log("hi")
  //     return redirect('/')
  //   }
  // }
  //console.log(route.path);
  if(route.path == "/login" || route.path == "/SignUp"){
    console.log(store.state.Auth.user)
    if(store.state.Auth.user){
      return redirect('/')
    }
  }
}